---
sidebar_position: 1
id: debounce
title: Debounce
tags:
  - Polyfill
---

## What does debounce do?

It debounces the function 😀👍

``` typescript
/**
 * Debounce in TypeScript
 * @param func {Function} Function to be debounced
 * @param delay {number} Number of milliseconds to delay
 * @returns A new function that wraps the given function
 */

function debounce(func: Function, delay: number) {
    let timer = null;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
};
```