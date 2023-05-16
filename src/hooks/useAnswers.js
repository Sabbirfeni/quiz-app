import React, { useState } from "react";
import { useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';

export default function useAnswers(videoID) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ answers, setAnswers ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    useEffect(() => {
        // Database related works
        async function fetchAnswers() {
            const db = getDatabase()
            const answerRef = ref(db, `answers/${videoID}/questions`);
            const answerQuery = query(
                answerRef,
                orderByKey()
            );
            try {
                setError(false);
                // setLoading(true);
                // Request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);
                snapshot.exists() ? (
                    setAnswers((prevAnswers) => {
                        return [ ...Object.values(snapshot.val()) ]
                    })
                ) : setErrorMessage('No data');
            } catch(err) {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
                setLoading(false);
            }
        }
        fetchAnswers()
    }, [videoID]);


    return { loading, error, errorMessage, answers };
}
