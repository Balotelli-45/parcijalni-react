import { useState } from "react";

import './Form.css'

const Form = ({setUser}) => {

    const fetchData = async(username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
    }

    const submitUser = (event) => {
        event.preventDefault(); 
        const inputForme = event.target.elements.username.value;
        if(inputForme) {
            fetchData(inputForme);
        } else {
            console.log("Input je prazan, unesite usera!")
        }
    }

    return (
        <div class="form-container">
            <form className="form" onSubmit={submitUser}>
                <input type="text" name="username" placeholder="Unesi ime" />
                <button type="submit">Potvrdi</button>
            </form>
        </div>
    );
}

export default Form;