import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import TodoOptions from '../todo/TodoOptions';
// import '../../App.css';

function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        //****ATTEMPT TO NOT BE THROWN TO LOGIN PAGE ON REFRESH */
        // async function userDataAwait() {
        //     let userDataPromise = new Promise ((res, rej) => {
        //         setTimeout(() => res(userData), 5000)
        //         console.log('in promise', userData)
        //   }).then
        //   return userDataPromise;
        // }

        // // let dataPromise = userDataAwait()
        // userDataAwait();
        // console.log('before if', userData)


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

