---
sidebar_position: 2
id: clearallintrvals
title: clearAllIntervals
---

# Implement clearAllIntervals()

```js
let intervalIds = []

const customIntervalFn = window.setInterval()

window.setInterval = (fn, delay) => {
    const id = customIntervalFn(fn, delay)

    intervalIds.push(id)

    return id
}

window.clearAllInterval() {
    while(intervalIds.length)
        clearInterval(intervalIds.pop())
}
```