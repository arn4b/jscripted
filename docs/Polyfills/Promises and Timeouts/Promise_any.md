---
sidebar_position: 3
id: promise_any
title: Promise.any()
---

# Implement Promise.any()

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