import axios from 'axios';
// const base_url = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/auth/`
const base_url = `${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/auth/`
const loginUser = async (login)=> {
    return axios.post(`${base_url}login`, login)
        .then((result) => result.data)
        .catch((error) =>{throw error;});
}

export {loginUser};