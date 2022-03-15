import React, { useEffect, useState } from 'react';
import axios from "axios";

const Actualités = () => {
    const [data, setData] = useState([]);
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("localhost:3000/api/posts")
        .then((res) => console.log(res));
    },[])

    return (
        <div className='actulites'>
            <h1>Fil d'actualité</h1>
            <ul>
                {
                    // data.map(())
                }
            </ul>
        </div>
    );
};

export default Actualités; 