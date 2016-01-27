declare module 'slorber/ajax-interceptor' {
    export function addRequestCallback(callback: (xhr: XMLHttpRequest) => void): void;
    export function removeRequestCallback(callback: (xhr: XMLHttpRequest) => void): void;
    export function addResponseCallback(callback: (xhr: XMLHttpRequest) => void): void;
    export function removeResponseCallback(callback: (xhr: XMLHttpRequest) => void): void;
    export function wire(): void;
    export function unwire(): void;
}