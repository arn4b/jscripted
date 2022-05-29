---
sidebar_position: 4
id: useupdateeffect
title: useUpdateEffect()
---

```ts
import React, {useState, useEffect, useCallback, useRef} from 'react'

export default function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies)
}

```