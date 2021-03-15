// import { useContext } from 'react';
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
    deleteTodos: function (token, id) {
        return axios.delete('/api/todos/' + id, {
            headers: {
                'x-auth-token': token
            }
        })
    },
    createTodos: function (newTodo, token) {
        const { title, youTubeUrl, description, category } = newTodo;
        return axios.post('/api/todos/', { title, youTubeUrl, description, category }, {
            headers: {
                'x-auth-token': token
            }
        })
    },
    updateTodo: function (updateTodo, token, id) {

        // console.log('todo api', id)
        const { title, youTubeUrl, description } = updateTodo;

        return axios.put('/api/todos/' + id, { title, youTubeUrl, description }, {
            headers: {
                'x-auth-token': token
            }
        })
    },
    searchTodos: function (search, token) {
        return axios.post('/api/todos/search', { search }, {
            headers: {
                'x-auth-token': token
            }
        })
    },
    searchYoutube: function (search, token) {
        ('intodoapi search youtube')
        return axios.post('/api/todos/searchyoutube', { search }), {
            headers: {
                'x-auth-token': token
            }
        }
    }
}

