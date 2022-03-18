---
sidebar_position: 2
id: filter
title: Array.filter()
tags:
  - Polyfill
---

# Polyfill for Array.filter()

## What is Array.prototype.filter() ?

According to MDN Documentation,

> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Lets understand it using an example 👇

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

## Getting started with the Array.filter() polyfill

:::tip Requirements for filter()

- A **callback function** which accepts a function as the argument.
- The **current element** must be passed as an argument to the **callback function.**
- **OPTIONAL** The **index of the current element** being processed in the array, and the **array on which the filter was called** can be passed as an argument to the **callback function.**.

:::

---

**Requirement 1 : A callback function which accepts a function as the argument**

First we create a function which accepts a callback function. Since its a polyfill, we will call it **Array.prototype.myFilter**

```js
Array.prototype.myFilter = function(callback){}
```

Next, we need an array to store the filtered values.

```js
Array.prototype.myFilter = function(callback){
    const result = []
}
```

Now, we start to iterate through the elements of the array. The array will be accessible using the **this** keyword inside our polyfill.
For each element, we check whether it satisfies the filter condition or not. If it does, we add it to our new *results* array by passing it to our callback function. Finally, we return our new array.

```js
Array.prototype.myFilter = function(callback){ //Requirement 1 fulfilled
    const result = []

    //Iterating through the array
    for(let index = 0; index< this.length; index++){
        if(callback(this[index], index, this)) {        //passing the current element, index and context to the callback function
            result.push(this[index])        //if it satisfies the filter, we push it
        }
    }

    return result //Returning the final array
}
```

## Final Array.filter() polyfill

```js
Array.prototype.myFilter = function(callback){ 
    const result = []

    
    for(let index = 0; index< this.length; index++){
        if(callback(this[index], index, this)) {
            result.push(this[index])
        }
    }

    return result 
}
```