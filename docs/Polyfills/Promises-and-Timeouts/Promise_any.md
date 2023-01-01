---
sidebar_position: 3
id: promise_any
title: Promise.any()
---

# Implement Promise.any()

Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

```js
function any(promises) {
    if(!promises.length) 
        return 0

    return new Promise((resolve, reject) => {
        let settledCount = 0, errors = []
        promises.forEach((promise, index) => {
            promise.then(data => resolve(data))
            .catch(err => {
                errors[index] = err

            if(++settledCount === promises.length) 
                reject([])
            })
        })
    })
}
```