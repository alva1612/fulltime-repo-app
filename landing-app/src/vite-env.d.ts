/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_REPO: string;

  readonly BUCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
