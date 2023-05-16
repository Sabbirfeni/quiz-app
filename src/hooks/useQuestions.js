import React, { useState } from "react";
import { useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';

export default function useQuestions(videoID) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ questions, setQuestions ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    useEffect(() => {
        // Database related works
        async function fetchQuestions() {
            const db = getDatabase()
            const quizRef = ref(db, `quiz/${videoID}/questions`);
            const quizQuery = query(
                quizRef,
                orderByKey()
            );
            try {
                setError(false);
                // setLoading(true);
                // Request firebase database
                const snapshot = await get(quizQuery);
                setLoading(false);
                snapshot.exists() ? (
                    setQuestions((prevQuestions) => {
                        return [ ...Object.values(snapshot.val())]
                    })
                ) : setErrorMessage('No data');
            } catch(err) {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
                setLoading(false);
            }
        }
        fetchQuestions()
    }, [videoID]);


    return { loading, error, errorMessage, questions };
}
