---
sidebar_position: 8
id: usecachedsearch
title: useCachedSearch()
---


```javascript
import {
    useState,
    useEffect,
    useRef
} from 'react'

export function useCachedSearch(url, param) {
    const cache = useRef({}); // creating cache using useRef
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!param) {
            setLoading(true)
            setData([]) //empty param clears the data to be returned
        }
        const fetchData = async () => {
            if (cache.current[param]) {
                const data = cache.current[param]; // if search term already exists in the cache, we dont call the API
                setData(data);
                setLoading(false);
            } else {
                const response = await fetch(url); // else call the API
                const data = await response.json();

                const newFilter = data.filter((value) => {
                    return value.stock_name.toLowerCase().includes(param.toLowerCase()); // search for the search term if it exists in the API response or not.
                });

                cache.current[param] = newFilter; // set response in cache;
                setData(newFilter);
                setLoading(false);
            }
        };

        if (param.length > 3)
            fetchData(); //function is called only when search_term.length is more than 3
    }, [param]);

    return {
        data,
        loading
    }; // return the data filtered from the API
};
```