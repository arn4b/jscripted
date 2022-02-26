---
sidebar_position: 5
id: reduce
title: Array.reduce()
---

# Polyfill for Array.reduce()

## What is Array.prototype.reduce() ?

According to MDN Documentation,

> The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 

> The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). 

Lets understand it using an example to find the sum of the elements of an array👇

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

## Getting started with the Array.reduce() polyfill

:::tip Requirements for reduce()

- A **callback function** which accepts 4 four arguments.
    - **previousValue** : the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

    - **currentValue** : the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
    - **currentIndex** : the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
    - **array** : the array to traverse.
- **Optional** initialValue 

    A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.


:::

---

**Requirement 1 : A callback function**

First we create a function which accepts a callback function and an initial value. Since its a polyfill, we will call it **Array.prototype.myReduce**

```js
Array.prototype.myReduce = function(callback, initialValue){}
```



**Requirement 2 : The previousValue, currentValue, currentIndex and the array is passed to the callback function.**


But first, we declare an accumulator, which is going to store the value every time the previous value is added.

```js
Array.prototype.myReduce = function(callback, initialValue){ //Requirement 1 fulfilled
    let accumulator = initialValue || undefined;        //initialising the accumulator

    //undefined is used in case an initialValue is not passed, as it is an optional value

    //Iterating through the array
    for(let index = 0; index< this.length; index++){
        if(accumulator) {
            accumulator = callback.call(accumulator, this[index], index, this)      //accumulator => for storing the previous values ,this[index] => the current element, index => index of the current element, this => the array itself
        } else {
            accumulator = this[index]
        }
    }

    return accumulator //Returning the final result which is a single value
}
```

## Final Array.reduce() polyfill

```js
Array.prototype.myReduce = function(callback, initialValue){ 
    let accumulator = initialValue || undefined;
    
    for(let index = 0; index< this.length; index++){
        if(accumulator) {
            accumulator = callback.call(accumulator, this[index], index, this)      
        } else {
            accumulator = this[index]
        }
    }

    return accumulator 
}
```