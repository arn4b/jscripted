---
sidebar_position: 1
id: debounce
title: Debounce
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
```