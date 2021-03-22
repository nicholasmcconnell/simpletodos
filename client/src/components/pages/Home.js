import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import TodoOptions from '../todo/TodoOptions';
import hereAPI from '../../utils/hereAPI';

function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    // const getSearch = async () => {
    //     let hereSearch = await hereAPI.hereSearch()
    //     console.log(hereSearch)
    // }

    // useEffect(() => {
    //     getSearch();
    // })

    useEffect(() => {

        localStorage.setItem('lastVisited', '');

        if (!userData.user) {
            history.push('/login')
        }
    });

    return (
        <>
            <TodoOptions />
        </>
    )
}

export default Home

