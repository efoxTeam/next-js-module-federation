/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'demo2/*' {
  export default any
}

declare namespace global {
  export default NodeJS.Global & typeof globalThis || any
}

declare let window: Window
