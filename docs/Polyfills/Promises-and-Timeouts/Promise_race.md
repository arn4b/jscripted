---
sidebar_position: 5
id: promise_race
title: Promise.race()
---

# Implement Promise.race()

The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```js
function race(promises) {
  return !promises.length
    ? Promise.resolve([])
    : new Promise((resolve, reject) => {
        for (let promise of promises) {
          Promise.resolve(promise).then(resolve, reject);
        }
      });
}
```
