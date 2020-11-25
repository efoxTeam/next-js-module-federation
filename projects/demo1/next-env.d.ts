/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'demo2/*'
declare module '@d1/*'

declare namespace global {
  export default NodeJS.Global & typeof globalThis || any
}

declare let window: Window
