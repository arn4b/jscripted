---
sidebar_position: 1
id: clearalltimeouts
title: clearAllTimeout
---

# Implement clearAllTimeout()

```js
let timeoutArray = []

let customTimeout = window.setTimeout()

window.setTimeout = (fn, delay) => {
    const id = customTimeout(fn, delay)

    timeoutArray.push(id)

    return id
}

function clearAllTimeout() {
    while(timeoutArray.length)
        clearTimeout(timeoutArray.pop())
}

```
<!-- clearAllTimeout
    promise.all
    promise.any
    promise.race
    promise.finally
 -->