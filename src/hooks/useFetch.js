import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, method, headers) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ result, setResult ] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState(null);

    useEffect(() => {
        async function requestFetch() {
            try {
                const response = await fetch(url, {
                    method: method || 'GET',
                    headers: headers
                });
                const data = await response.json();
                setResult(data);
                setLoading(false);
            } catch(err) {
                console.log(err);
                setLoading(false);
                setError(true)
                setErrorMessage(err.message)
            }
        }
        requestFetch()
    },[])
    return {
        loading, error, errorMessage, result
    };
}
