import axios from 'axios';

export default {
    getTodos: function(){
        return axios.get('api/todos/all')
    }
    
}