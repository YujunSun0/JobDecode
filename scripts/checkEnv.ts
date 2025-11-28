import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const requiredKeys = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'] as const;

const envLocalPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config();
}

const missing = requiredKeys.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`필수 환경변수가 없습니다: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('환경변수 로딩 확인 완료');
