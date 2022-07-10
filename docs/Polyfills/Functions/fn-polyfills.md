---
sidebar_position: 2
id: call
title: Function Polyfills
tags:
  - Polyfill
---

# Polyfills for Function Methods

There are three main Function.prototype methods that are widely used in JS - call, apply and bind.

:::tip DIFFERENCE BETWEEN CALL, APPLY AND BIND

|           |                           call()                           |                           apply()                          |                             bind()                             |
|:---------:|:----------------------------------------------------------:|:----------------------------------------------------------:|:--------------------------------------------------------------:|
| Execution |                   Function is binded and executed instantly                   |                   Function is binded and executed instantly                   | Function is only binded, can be explicitly executed later                           |
| Parameter |             Any number of arguments, one by one            |                           Array                         | Array and any number of arguments                              |
|  Returns  | Returns and calls the same function at the time of binding | Returns and calls the same function at the time of binding | Return a new.copied function, which can be used anytime later. |

:::
## Fuction.prototype.call()

 The call() allows for a function/method belonging to one object to be assigned and called for a different object.

call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object. 

:::caution
Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments. 
:::

Lets understand call() using an example 👇

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
```

For the polyfill, we will simply create a reference to the function, and pass the arguments to the function reference.

**Final polyfill for Function.prototype.call()**
<!-- 
```js
Function.prototype.myCall = function(obj, ...args) {
    obj.fnRef = this
    obj.fnRef(...args)
}
``` -->

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F325e957b-60ff-4c2c-b8a3-ffeb4f458a33%2FUntitled.png?table=block&id=65f5f51c-92e1-4208-adc5-4d2d3e9b3a24&spaceId=500e7174-d37e-49c9-9474-e9268c7f4694&width=2000&userId=b0f2de2f-3e35-45aa-86dd-7b3032f6d7cf&cache=v2)

## Fuction.prototype.apply()

apply is very similar to call(), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With apply, you can also use an array literal, for example, func.apply(this, ['eat', 'bananas']), or an Array object, for example, func.apply(this, new Array('eat', 'bananas')).

The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

:::caution
Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
:::

Lets understand apply() using an example 👇

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

```

Just like call(), we will simply create a reference to the function, and pass the arguments to the function reference. But in this case, we will not spread the arguments, as apply() accepts an array/array like object as the parameter.

**Final polyfill for Function.prototype.apply()**

<!-- ```js
Function.prototype.myApply = function(obj, args) {
    obj.fnRef = this
    obj.fnRef(...args)
}
``` -->

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96b86cdd-ef55-4324-b5ab-a8f8ea482446%2FUntitled.png?table=block&id=8af54f9d-406b-4973-bd84-fdd6baf46e6e&spaceId=500e7174-d37e-49c9-9474-e9268c7f4694&width=2000&userId=b0f2de2f-3e35-45aa-86dd-7b3032f6d7cf&cache=v2)

## Fuction.prototype.bind()

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

<!-- ```js
Function.prototype.myBind = function(obj) {
    obj.fnRef = this
    return function(...args) {
        obj.fnRef(...args)
    }
}
``` -->

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F424e2311-fc18-4248-8f83-ed0bb9fc52b1%2FUntitled.png?table=block&id=1edab994-c114-4f88-a0ab-323028c3194d&spaceId=500e7174-d37e-49c9-9474-e9268c7f4694&width=2000&userId=b0f2de2f-3e35-45aa-86dd-7b3032f6d7cf&cache=v2)