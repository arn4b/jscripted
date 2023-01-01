---
sidebar_position: 4
id: promise_all
title: Promise.all()
---

# Implement Promise.all()

The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error. 

```js
function all(promises) {
    let results = []

    return new Promise((resolve, reject) => {
        if(promises.length === 0)
            resolve([])

        else{
            promises.forEach((promise, index) => {
                Promise.resolve(promise).then((value) => {
                    results[index] = value
                    if(results.length === promises.length)
                        resolve(results)
                }, reject)
            })
        }
    })
}

```