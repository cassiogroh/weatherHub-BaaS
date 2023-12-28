/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_FIREBASE_API_KEY?: string;
  VITE_APP_FIREBASE_AUTH_DOMAIN?: string;
  VITE_APP_FIREBASE_PROJECT_ID?: string;
  VITE_APP_FIREBASE_STORAGE_BUCKET?: string;
  VITE_APP_FIREBASE_MESSAGING_SENDER_ID?: string;
  VITE_APP_FIREBASE_APP_ID?: string;
  VITE_APP_URL?: string;
  // add as many more as you like
}

interface ImportMeta {
  env: ImportMetaEnv;
}
