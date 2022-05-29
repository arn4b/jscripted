---
sidebar_position: 2
id: usedebounce
title: useDebounce()
---

```ts
import React, {useState, useEffect, useCallback, useRef} from 'react'

export function useDebounce<T>(value: T, delay: number): T {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounced
}
```

```js
import React, {useState, useEffect, useCallback, useRef} from 'react'

export default function useDebaounce(callback, delay, dependencies) {
    const { reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}
```