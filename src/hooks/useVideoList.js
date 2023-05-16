import React, { useState } from "react";
import { useEffect } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';

export default function useVideoList(page) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ videos, setVideos ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ hasMore, setHasMore ] = useState(true);

    useEffect(() => {
        // Database related works
        async function fetchVideos() {
            const db = getDatabase()
            const videosRef = ref(db, 'videos');
            const videoQuery = query(
                videosRef,
                orderByKey(),
                // startAt('' + page),
                // limitToFirst(8)
            );
            try {
                setError(false);
                // setLoading(true);
                // Request firebase database
                const snapshot = await get(videoQuery);
                setLoading(false);
                snapshot.exists() ? (
                    setVideos((prevVideos) => {
                        return [ ...prevVideos, ...Object.values(snapshot.val())]
                    })
                ) : setHasMore(false);
            } catch(err) {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
                setLoading(false);
            }
        }

        fetchVideos();

    }, [page]);
    return { loading, error, errorMessage, videos, hasMore };
}
