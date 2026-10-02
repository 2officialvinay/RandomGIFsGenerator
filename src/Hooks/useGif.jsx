import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {

    const [gif, setGif] = useState(null);
    const [loader, setLoader] = useState(false);

    async function fetchData(tag) {
        setLoader(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoader(false);
    }

    useEffect( () => {
        fetchData('car');
    },[])

    return {gif, loader, fetchData}

}

export default useGif
