---
sidebar_position: 3
id: usetoggle
title: useToggle()
---

```ts
import React, {useState, useEffect, useCallback, useRef} from 'react'

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue => 
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}
```