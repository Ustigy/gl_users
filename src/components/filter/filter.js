import React from 'react';
import { useState, useEffect } from 'react';
import './filter.css';

export default function Filter({ onTermChanged }) {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setInput(event.target.value);
    }

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setInput(input);
            onTermChanged(input);
        }, 500);
        return () => {
            clearTimeout(delayInputTimeoutId);
        };
    }, [input]);

    return (
        <div className='filter'>
            <div className='filter_icon filter_icon_search'>
                <input
                    type='text'
                    value={input}
                    onChange={handleChange}
                    placeholder=''
                    className='filter_search'
                />
            </div>
        </div>
    )

}

