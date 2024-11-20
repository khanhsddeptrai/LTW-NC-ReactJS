import axios from '../setUp/axios';

// const loginUser = (email, password) => {
//     return axios.post("/api/login", {
//         email, password
//     })
// }

const fetchAllUser = () => {
    return axios.get(`/api/user/read`);
}

const updateCurrentUser = (dataUser) => {
    return axios.put(`/api/user/update`, { ...dataUser });
}

// const deleteUser = (user) => {
//     return axios.delete(`/api/user/delete`, { data: { id: user.id } });
// }


// const createNewUser = (dataUser) => {
//     return axios.post(`/api/user/create`, { ...dataUser });
// }

// const updateCurrentUser = (dataUser) => {
//     return axios.put(`/api/user/update`, { ...dataUser });
// }

export { fetchAllUser, updateCurrentUser }