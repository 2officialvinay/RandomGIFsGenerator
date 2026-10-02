import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Tags() {

    const [tag, setTag] = useState('car');

    const {gif, loader, fetchData} = useGif(tag);

    return (
        <div className='w-[600px] bg-blue-500 rounded-lg  border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[30px]'>
            <h1 className='text-2xl underline uppercase font-bold mt-[16px]'>Random {tag} GIF</h1>

            {
                loader ? (<Spinner/>) : (<img src={gif} alt="RandomGif" width={450} />)
            }

            <input 
              className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-white'
              onChange={(event) => setTag(event.target.value)}
              value={tag}
            />
            
            <button onClick={() => fetchData()} 
            className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg cursor-pointer mb-[20px]'>
                Generate
            </button>
        </div>
    )
}

export default Tags