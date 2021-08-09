// imrse
import React, { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config';

// rafce
const useStorage = (file) => {
    // usf
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // uef
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        // snap = snapshot
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage
