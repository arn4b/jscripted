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

## How does it work?

1. **function debounce(func: Function, delay: number):** This line declares a function named `debounce` that takes in two parameters `func` and `delay` and returns a `Function`.

2. **let timer = null:** This line declares a variable named `timer` that is assigned the value `null`.

3. **return function():** This line returns an anonymous function.

4. **const context = this:** This line declares a constant named `context` that is assigned the value of `this`.

5. **const args = arguments:** This line declares a constant named `args` that is assigned the value of `arguments`.

6. **clearTimeout(timer):** This line calls the `clearTimeout()` function and passes in the `timer` as a parameter.

7. **timer = setTimeout(() => { func.apply(context, args) }, delay):** This line assigns the value of the `setTimeout()` function to `timer` and passes in an anonymous function that calls the `func` function and passes in the `context` and `args` as parameters and the `delay` as a parameter.

**Overall, the debounce function takes in a function and a delay as arguments and returns a debounced version of that function. A debounced function is a function that can only be called once every `delay` milliseconds.**