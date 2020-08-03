import { useContext } from 'react';
import axios from 'axios';
// import UserContext from '../../context/UserContext';

// const { userData } = 

export default {
    getTodos: function (token) {
        return axios.get('api/todos/all', {
            headers: {
                'x-auth-token': token
            }
        })
    },
    deleteTodos: function (token, id){
        console.log(id);
        return axios.delete('/api/todos/' + id, {
            headers: {
                'x-auth-token': token
            }
        })
    }
}

