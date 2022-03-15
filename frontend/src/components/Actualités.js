import React, { useEffect } from 'react';
import axios from "axios";

const Actualités = () => {

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("localhost:3000/api/posts").then((res) => console.log(res));
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Actualités;