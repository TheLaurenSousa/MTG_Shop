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
                <div className='cardInfo'>
                    <div>
                        <img src={data.imageUrl} alt={data.name} className="card"/>
                        <p id='artist'>Artist: {data.artist}</p>
                    </div>
                    <div id="cardDescription">
                        <h1>{data.name}</h1>
                        <p><span className='feature'>Mana Cost: </span>{data.manaCost}</p>
                        <p><span className='feature'>Colors: </span>{data.colors}</p>
                        <p><span className='feature'>Type: </span>{data.type}</p>
                        {data.subtype? 
                            <div>
                                <span className='feature'>Subtypes: </span>
                                {data.subtypes.map((subtype, index) => {
                                    return (<p key={index}>{subtype}</p>)
                                })}
                            </div>
                            : null
                        }
                        <p><span className='feature'>Rarity: </span>{data.rarity}</p>
                        <p><span className='feature'>Text: </span>{data.text}</p>
                        <p><span className='feature'>Power: </span>{data.power}</p>
                        <p><span className='feature'>Toughness: </span>{data.toughness}</p>
                        {data.flavor?
                            <div>
                                <p><span className='feature'>Flavor Text: </span>{data.flavor}</p>
                            </div>
                            : null
                        }
                    </div>
                </div>
            :null}
        </div>
    )
}