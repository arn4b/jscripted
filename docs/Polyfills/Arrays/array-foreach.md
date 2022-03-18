---
sidebar_position: 1
id: foreach
title: Array.forEach()
tags:
  - Polyfill
---

# Polyfill for Array.forEach()

## What is Array.prototype.forEach() ?

According to MDN Documentation,

> The forEach() method executes a provided function once for each array element. 

Lets understand it using an example 👇

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

forEach() method simply iterates over a given array by going over each and every element of that array and accepts a function to execute on each element.

## Getting started with the Array.forEach() polyfill

:::tip Requirements for forEach()

- A **callback function** which is executed on each element one by one.
- An **element** passed to the callback function for it to be processed.
- **Optional** **index of element** in the array, **array forEach() was called upon** is passed to the callback function.

:::

---

**Requirement 1 : A callback function which is executed on each element one by one.**

First we create a function which accepts a callback function. Since its a polyfill, we will call it **Array.prototype.myForEach**

```js
Array.prototype.myForEach = function(callback){}
```

Now, we simply check whether the element exists in the array or not, if it does, then we have the callback function execute on it.


```js
Array.prototype.myForEach = function(callback){ //Requirement 1 fulfilled
    //Iterating through the array
    for(let index = 0; index< this.length; index++){
        if(this.indexOf(this[index]) > -1) {
            callback.call(this[index], index, this)     //this[index] => the current element, index => index of the current element, this => the array itself
        }
    }
}
```

## Final Array.forEach() polyfill

```js
Array.prototype.myForEach = function(callback){ 
    
    for(let index = 0; index< this.length; index++){
        if(this.indexOf(this[index]) > -1) {
            callback.call(this[index], index, this)     
        }
    }
}
```