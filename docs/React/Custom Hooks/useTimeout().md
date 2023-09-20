---
sidebar_position: 1
id: usetimeout
title: useTimeout()
---

# `useTimeout` Custom Hook Documentation

This documentation explains a custom React Hook called `useTimeout`. This Hook is designed to manage timeouts and provides functions to set, clear, and reset timeouts in a React component.

## Code Overview

```javascript
import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function useTimeout(callback, delay) {
    // Create a ref to store the provided callback function
    const callbackRef = useRef(callback);
    // Create a ref to store the timeout ID
    const timeoutRef = useRef();

    // Keep the callbackRef updated when the callback function changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Memoized function to set the timeout
    const set = useCallback(() => {
        // Use the stored callback to execute when the timeout expires
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    // Memoized function to clear the timeout
    const clear = useCallback(() => {
        // Check if a timeout exists and clear it
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    // Set the timeout when the component mounts and clear it when unmounting
    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    // Function to reset the timeout (clear existing and set a new one)
    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    // Return an object with reset and clear functions for managing timeouts
    return { reset, clear };
}
```

- The `useTimeout` custom Hook accepts two parameters: `callback` (the function to be executed when the timeout expires) and `delay` (the delay duration in milliseconds).

- Inside the Hook, it utilizes React's `useRef`, `useEffect`, and `useCallback` to manage the timeout.

- The `callbackRef` and `timeoutRef` useRef hooks are used to store references to the provided `callback` and the timeout ID, respectively.

- A `useEffect` is used to keep the `callbackRef` updated with the latest `callback` function whenever it changes.

- The `set` function is a memoized function created using `useCallback`, responsible for setting the timeout with the provided `delay`. It executes the stored `callback` when the timeout expires.

- The `clear` function is also memoized with `useCallback` and clears the timeout if it exists.

- Another `useEffect` is used to set the timeout when the component mounts and clear it when the component unmounts, effectively managing the timeout's lifecycle.

- The `reset` function clears the existing timeout and sets a new one, effectively resetting the timer.

- The Hook returns an object with `reset` and `clear` functions that can be used in a React component to manage timeouts.

## Usage

To use the `useTimeout` custom Hook in your React components:

1. Import the `useTimeout` Hook into your component.

2. Define a callback function that you want to execute after a certain delay.

3. Call `useTimeout` with your callback function and the desired delay to create a timeout management object.

4. Use the `reset` and `clear` functions provided by the returned object to manage the timeout as needed in your component.

5. The `reset` function clears the existing timeout and sets a new one, while the `clear` function cancels the timeout altogether.

```javascript
// Example usage in a React component:

import React, { useState } from 'react';
import useTimeout from './useTimeout'; // Import the custom Hook

function MyComponent() {
    const [message, setMessage] = useState('');
    
    // Create a timeout management object with a callback and delay
    const { reset, clear } = useTimeout(() => {
        setMessage('Timeout executed!'); // Callback function
    }, 3000); // 3-second delay

    // Function to manually trigger the timeout
    const handleButtonClick = () => {
        reset(); // Reset the timeout (clear and set a new one)
    };

    // Function to cancel the timeout
    const handleCancelClick = () => {
        clear(); // Clear the timeout
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={handleButtonClick}>Start Timeout</button>
            <button onClick={handleCancelClick}>Cancel Timeout</button>
        </div>
    );
}

export default MyComponent;
```

## Conclusion

The `useTimeout` custom Hook simplifies the management of timeouts in React components, making it easier to execute functions with delays and providing control to reset or clear the timers as required.
