import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import App from '../App';

const Pain = () => {
    return (
        <div>
            <Route exact path='/' component={App}/>
        </div>
    )
}

export default Pain
