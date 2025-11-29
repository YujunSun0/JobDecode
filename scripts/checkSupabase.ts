import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const envLocalPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config();
}

const requireEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`환경변수 ${key} 가 설정되지 않았습니다.`);
  }
  return value;
};

const supabaseUrl = requireEnv('NEXT_PUBLIC_SUPABASE_URL');
const supabaseAnonKey = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');

async function main() {
  const healthUrl = `${supabaseUrl.replace(/\/$/, '')}/auth/v1/health`;
  const response = await fetch(healthUrl, {
    headers: {
      apikey: supabaseAnonKey,
    },
  });

  if (!response.ok) {
    console.error(`Supabase 연결/인증 확인 실패: status ${response.status} ${response.statusText}`);
    process.exit(1);
  }

  console.log('Supabase 연결 및 인증 엔드포인트 응답 확인 완료');
}

main().catch((error) => {
  console.error('Supabase 확인 중 오류:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});
