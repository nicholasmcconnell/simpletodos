import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';

export default function CreateTodos() {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });
    // form - 1. title, 2. description, 3. youtube link,
    // 

    return (
        <div className='page'>
            <div className='container'>
                <h2>CreateTodos</h2>
            </div>
        </div>
    )
}
