declare module 'consola' {
  export function start(...arguments: string[]): void;
  export function success(...arguments: string[]): void;
  export function info(...arguments: string[]): void;
  export function error(...arguments: (string | Error)[]): void;
}
