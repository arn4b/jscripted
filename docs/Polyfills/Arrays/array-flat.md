---
sidebar_position: 2
id: flat
title: Array.flat()
---

# Polyfill for Array.flat()

## What is Array.prototype.flat() ?

According to MDN Documentation,

> The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Lets understand it using an example 👇

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

Now that we have understood what flat() does and how it works, lets jump into the polyfill implementation.

## Getting started with the Array.flat() polyfill

:::tip Requirements for flat()

- *( Optional )* Array.flat() can accept a **depth** variable which depicts the number of nested arrays that Array.flat() can flatten.

:::

---

**Requirement 1 : Accept a depth variable which depicts the number of nested arrays that Array.flat() can flatten.**

Lets start by passing the depth first to our polyfill. In case a depth is not passed, we initialise depth = 1 to flatten the array just once.

```js
Array.prototype.myFlatten = function(depth = 1){}
```
Since Array.flat() creates a new array after flattening the received array, we initialise a new array to store the final result as well.

```js
Array.prototype.myFlatten = function(depth = 1){
    const flattenedArray = []
}

```

Now, we start to iterate through the elements of the array. The array will be accessible using the **this** keyword inside our polyfill.
For each element, we check **whether the element is an array or not**. This is done using the `Array.isArray()` method. If it is, we recursively call our polyfill function **depth times** so that the required flattening is achieved. If it isn't an array, we simply push it to out final array.



```js
Array.prototype.myFlatten = function(depth = 1){ 
    const flattenedArray = []

    //Iterating through the array
    for(let i = 0; i< this.length; i++){  
        const element = this[i]     //assigning the element at current index to a variable for ease
        if(Array.isArray(element) && depth > 0){        //checking whether it is an array and at the same time whether we have to still further flatten the array or not if depth more than 0
            flattenedArray = flattenedArray.concat(this.myFlatten.call(element, depth - 1))
        } else {
            flattenedArray.push(element)
        }
    }

    return flattenedArray //Returning the final array
}
```

## Final Array.flat() polyfill

```js
Array.prototype.myFlatten = function(depth = 1){ 
    const flattenedArray = []

    
    for(let i = 0; i< this.length; i++){  
        const element = this[i]     
        if(Array.isArray(element) && depth > 0){
            flattenedArray = flattenedArray.concat(this.myFlatten.call(element, depth - 1))
        } else {
            flattenedArray.push(element)
        }
    }

    return flattenedArray 
}
```

## Array.flat() as a recursive function

The polyfill for Array.flat() can also be written as a function. The logic for it will be same as above, instead we will pass the array to be flattened as an argument.

```js
function flatten(arr, flattenedArray = [], depth = 1) {     //passing the array as an argument since recursive calls can lead to creation of new arrays at every call 

    arr.forEach(item => {       //iterating using forEach
        if(Array.isArray(item) && depth > 0) {      //if element is an array
            flatten(item, flattenedArray, depth - 1)        //recursively calling the flatten function for the array
        } else {
            flattenedArray.push(item)       //else pushing it to the result array
        }
    })

    return flattenedArray       //returning the new array
}
```

## Final Array.flat() polyfill (recursive function)


```js
function flatten(arr, flattenedArray = [], depth = 1) {

    arr.forEach(item => {
        if(Array.isArray(item) && depth > 0) {
            flatten(item, flattenedArray, depth - 1)
        } else {
            flattenedArray.push(item)
        }
    })

    return flattenedArray
}
```