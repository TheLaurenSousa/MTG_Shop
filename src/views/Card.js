import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default () => {
    const id = useParams().id;
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const getCardInfo = async () => {
            try {
                const res = await axios.get(`https://api.magicthegathering.io/v1/cards?id=${id}`);
                setData(res.data.cards[0]);
            } catch (e) {
                console.log(e);
            }
        }
        getCardInfo();
    }, [id]);

    return (
        <div>
            {data ? 
                <div>
                    <div>
                        <img src={data.imageUrl} alt={data.name}/>
                    </div>
                    <div>
                        <p>{data.name}</p>
                        <p>Mana Cost: {data.manaCost}</p>
                        <p>Colors: {data.colors}</p>
                        <p>Type: {data.type}</p>
                        {data.subtype? 
                            <div>
                                Subtypes: 
                                {data.subtypes.map((subtype, index) => {
                                    return (<p key={index}>{subtype}</p>)
                                })}
                            </div>
                            : null
                        }
                        <p>Rarity: {data.rarity}</p>
                        <p>Text: {data.text}</p>
                        <p>Power: {data.power}</p>
                        <p>Toughness: {data.toughness}</p>
                        <p>Artist: {data.artist}</p>
                    </div>
                </div>
            :null}
        </div>
    )
}