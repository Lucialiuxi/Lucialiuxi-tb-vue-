// 用户
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

type User = {
    username: string,
    password: String,
};

//注册
export const register = (param: User) => {
    return axios.post('/user/usersRegister',param)
}

//登录
export const login = (param: User) => {
    return axios.post('/user/userLogin',param)
}