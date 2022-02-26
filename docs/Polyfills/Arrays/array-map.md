---
sidebar_position: 3
id: map
title: Array.map()
---

# Polyfill for Array.map()

## What is Array.prototype.map() ?

According to MDN Documentation,

> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Lets understand it using an example 👇

```js
const arr = [1, 2, 3, 4, 5];
const multiplied = arr.map((e) => e ** 5);
console.log(multiplied);

//[5, 10, 15, 20, 25]
```

map() calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

It is not called for missing elements of the array; that is:

- indexes that have never been set;
- indexes which have been deleted.

## Getting started with the Array.map() polyfill

:::tip Requirements for map()

- A **callback function** which accepts a function as the argument.
- The **current element**, the **index of the current element** and the **context** must be passed as an argument to the **callback function.**

:::

---

**Requirement 1 : A callback function which accepts a function as the argument**

First we create a function which accepts a callback function. Since its a polyfill, we will call it **Array.prototype.myMap**

```js
Array.prototype.myMap = function(callback){}
```

Next, we need an array to store the modified values.

```js
Array.prototype.myMap = function(callback){
    const result = []
}
```

**Requirement 2 : The current element, the index of the current element and the context must be passed as an argument to the callback function.**


Now, we start to iterate through the elements of the array. The array will be accessible using the **this** keyword inside our polyfill.
For each element, we check whether it exists in the array or not. If it does, we add it to our new *results* array by passing it to our callback function. Finally, we return our new array.

```js
Array.prototype.myMap = function(callback){ //Requirement 1 fulfilled
    const result = []

    //Iterating through the array
    for(let index = 0; index< this.length; index++){
        if(this.indexOf(this[index]) > -1){ //Checking whether the element exists or not
            result[index] = callback(this[index], index, this) //this[index] => the current element, index => index of the current element, this => the array itself
        }
    }

    return result //Returning the final array
}
```

## Final Array.map() polyfill

```js
Array.prototype.myMap = function(callback){
    const result = []

    for(let index = 0; index< this.length; index++){
        if(this.indexOf(this[index]) > -1){
            result[index] = callback(this[index], index, this)
        }
    }

    return result
}
```