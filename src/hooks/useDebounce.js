import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const headler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(headler);
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
