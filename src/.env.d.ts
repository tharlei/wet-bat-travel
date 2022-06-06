/// <reference types="vite/client" />

interface ImportMetaEnv {
  [key: string]: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
