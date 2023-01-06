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

## How does it work?

1. **const throttle: (func: Function, delay: number) => Function = (func, delay):** This line declares a constant named `throttle` that is assigned an anonymous function that takes in two parameters `func` and `delay` and returns a `Function`.

2. **let isThrottled: boolean:** This line declares a variable named `isThrottled` that is assigned a value of type `boolean`.

3. **return function():** This line returns an anonymous function.

4. **const context = this:** This line declares a constant named `context` that is assigned the value of `this`.

5. **const args = arguments:** This line declares a constant named `args` that is assigned the value of `arguments`.

6. **if (!isThrottled):** This line checks if `isThrottled` is `false`.

7. **func.apply(context, args):** This line calls the `func` function and passes in the `context` and `args` as parameters.

8. **isThrottled = true:** This line assigns the value `true` to `isThrottled`.

9. **setTimeout(() => { isThrottled = false }, delay):** This line calls the `setTimeout()` function and passes in an anonymous function that assigns the value `false` to `isThrottled` and the `delay` as parameters.

**Overall, the throttle function takes in a function and a delay as arguments and returns a throttled version of that function. A throttled function is a function that can only be called once every `delay` milliseconds.**