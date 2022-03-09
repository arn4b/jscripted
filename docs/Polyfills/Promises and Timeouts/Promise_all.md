---
sidebar_position: 2
id: promise_all
title: Promise.all()
---

# Implement Promise.all()

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