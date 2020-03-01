import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCollab = payload => api.post(`/collab`, payload)
export const getAllCollabs = () => api.get(`/collab`)
export const updateCollabById = (id, payload) => api.put(`/collab/${id}`, payload)
export const deleteCollabById = id => api.delete(`/collab/${id}`)
export const getCollabById = id => api.get(`/collab/${id}`)

const apis = {
    insertCollab,
    getAllCollabs,
    updateCollabById,
    deleteCollabById,
    getCollabById,
}

export default apis
