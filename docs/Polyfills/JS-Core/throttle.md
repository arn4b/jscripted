---
sidebar_position: 2
id: throttle
title: Throttle
tags:
  - Polyfill
---

## What does throttle do?

It throttles the function 😀👍

``` typescript
/**
 * Throttle in TypeScript
 * @param func Function to be throttled
 * @param delay Number of milliseconds to delay
 * @returns A new function that wraps the given function
 */

const throttle: (func: Function, delay: number) => Function = (func, delay) => {
    let isThrottled: boolean;

    return function() {
        const context = this;
        const args = arguments;

        if (!isThrottled) {
            func.apply(context, args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false
            }, delay);
        }
    }
}
```