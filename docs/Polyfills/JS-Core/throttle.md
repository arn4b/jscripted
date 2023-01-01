---
sidebar_position: 2
id: throttle
title: Throttle
tags:
  - Polyfill
---

``` typescript
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