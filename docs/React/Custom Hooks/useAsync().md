---
sidebar_position: 6
id: useasync
title: useAsync()
---

```ts
import React, {useState, useEffect, useCallback, useRef} from 'react'

export function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callBackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)

        callback()
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callBackMemoized()
    }, [callBackMemoized])

    return {loading, error, value}
}
```