---
sidebar_position: 1
id: usetimeout
title: useTimeout()
---

First we setup our hook, which will be a function. The callback function and delay are passed as the parameters. Since we are using TypeScript, we will specify the types of the arguments as a function and a number respectively.

```ts
import React, {useEffect, useRef} from 'react'

export function useTimeout(callback: () => void, delay: number) {

}
```



```ts
import React, {useEffect, useRef} from 'react'

export function useTimeout(callback: () => void, delay: number) {
    const reference = useRef(callback)
    reference.current = callback

    useEffect(() => {
        const timer = setTimeout(() => reference.current(), delay)
        return (() => clearTimeout(timer))
    }, [delay])
}

```
