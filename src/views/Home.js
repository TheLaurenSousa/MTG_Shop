import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default () => {
    const [ responseData, setResponseData ] = useState(null);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ search, setSearch ] = useState('');

    useEffect( () => {
        if(isSubmitted){
            axios.get(`https://api.magicthegathering.io/v1/cards?name=${search}`)
                .then(response => { setResponseData(response.data.cards)})
        }
    }, [isSubmitted]);

    const Search = () => {
        setIsSubmitted(isSubmitted => !isSubmitted);
    }

    return (
        <div>
            <h1>MTG Shop</h1>
            <input type='text' placeholder='Enter a Card Name' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={Search}>Search</button>
            <ul id='cardGallery'>
                {responseData ? responseData.map((card, index) => {
                    if(card.imageUrl){
                        const url = `/card/${card.id}`;
                        return(<Link to={url} key={index}><li><img src={card.imageUrl} alt={card.name}/></li></Link>)
                    }
                }):null}
            </ul>
        </div>
    )
}