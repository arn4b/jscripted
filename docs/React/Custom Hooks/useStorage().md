---
sidebar_position: 5
id: usestorage
title: useStorage()
---

```ts
import React, {useState, useEffect, useCallback, useRef} from 'react'

export default function useStorage(key, defaultValue, storageObject) {
    const [calue, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)

        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initialValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if(value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}

```