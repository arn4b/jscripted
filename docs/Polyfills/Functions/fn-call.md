---
sidebar_position: 1
id: call
title: Function.call()
---

# Polyfill for Function Methods

## Fuction.prototype.call

```js
Function.prototype.myCall = function(obj, ...args) {
    obj.fnRef = this
    obj.fnRef(...args)
}
```

## Fuction.prototype.apply

```js
Function.prototype.myApply = function(obj, args) {
    obj.fnRef = this
    obj.fnRef(...args)
}
```

## Fuction.prototype.bind

```js
Function.prototype.myBind = function(obj) {
    obj.fnRef = this
    return function(...args) {
        obj.fnRef(...args)
    }
}
```