import axios from './../axios'

export const handleLoginservice = (email, password) => {
    return axios.post('/api/login', { email, password })
}

