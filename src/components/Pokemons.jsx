import React, { useState, useEffect } from "react";
import style from "./style.module.css";

export default function Pokemons() {
    const [pokeList, setPokeList] = useState([]);
    const [number, setNumber] = useState(5);

    const handleNumber = (e) => {
        e.preventDefault();
        setNumber(5);
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
            .then((resp) => resp.json())
            .then((json) => {
                // console.log(json);
                setPokeList(json.results);
            })
            .catch((err) => console.log(err));
    }, [number]);

    return (
        <div className={style.container}>
            <form onSubmit={(e) => handleNumber(e)} className={style.topBar}>
                <label>Number of Pokemons in display : </label>
                <input
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    className={style.inputBox}
                />

                <p className={style.noteTest}> 5 is a default number</p>
            </form>

            {pokeList.map((pokeResult, index) => (
                <p key={index} className={style.pokeName}>{`Number ${
                    index + 1
                } - ${pokeResult.name}`}</p>
            ))}
        </div>
    );
}
