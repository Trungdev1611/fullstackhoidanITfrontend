import axios from './../axios'

export const handleLoginservice = (email, password) => {
    return axios.post('/api/login', { email, password })
}

export const getAllUser = () => {
    return axios.get('/showuser')
}
export const deleteUserbyId = (id) => {
    return axios.delete(`/deleteuser/${id}`)
}