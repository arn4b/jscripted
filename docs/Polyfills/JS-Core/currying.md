---
sidebar_position: 3
id: currying
title: Currying
tags:
  - Polyfill
---

## What does currying do?

It curries the function 😀👍

``` typescript
/**
 * Currying in TypeScript
 * @param func {Function} Function to be curried
 * @returns A new function that wraps the given function
 */

function curry(func: Function) {
    return function curried(...args: any[]) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else { 
            return function(...args2: any[]) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
};
```

## How does it work?

1. **function curry(func: Function):** This line declares a function named `curry` that takes in a single parameter func which is a `Function`.

2. **return function curried(...args: any[]):** This line returns an anonymous function that is assigned the name `curried` and takes in a rest parameter `args` which is an array of elements of type `any`.

3. **if (args.length >= func.length):** This line checks if the length of the `args` array is greater than or equal to the length of the `func` function.

4. **return func.apply(this, args):** If the length of `args` is greater than or equal to the length of `func`, this line calls the `apply()` method on `func`, passing in `this` and `args` as arguments, and returns the `result`.

5. **return function(...args2: any[]):** This line returns an anonymous function that takes in a rest parameter `args2` which is an array of elements of type `any`.

6. **return curried.apply(this, args.concat(args2)):** This line calls the `apply()` method on the `curried` function, passing in this and the result of concatenating `args` and `args2` as arguments, and returns the `result`.

Overall, the curry function takes in a function as an argument and returns a curried version of that function. A curried function is a function that takes in one or more arguments and returns a new function until all of the arguments have been provided, at which point the original function is called with all of the arguments.