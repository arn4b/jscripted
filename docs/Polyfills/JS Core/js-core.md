---
sidebar_position: 1
id: js-core
title: JavaScript Core Concepts
tags:
  - Polyfill
---

``` typescript
/**
 * Debounce in TypeScript
 * @param func Function to be debounced
 * @param wait Number of milliseconds to delay
 * @param immediate Whether to execute the function immediately
 * @returns A new function that wraps the given function
 */

const debounce: 
    (func: Function, wait: number, immediate?: boolean) => 
        Function = (func, wait, immediate) => {
            let timeout: any;
            return function executedFunction(...args: any[]) {
                const later = () => {
                timeout = null;
                if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
};


/**
 * Throttle in TypeScript
 * @param func Function to be throttled
 * @param limit Number of milliseconds to delay
 * @return A new function that wraps the given function
 * @see https://stackoverflow.com/a/27078401/112731
 * @see https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
 */

const throttle: (func: Function, limit: number) => Function = (func, limit) => {
    let inThrottle: boolean;
    return function(...args: any[]) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
```