// 用户
import { requestMethod } from '@/utils/requestMethod';

type User = {
    username: string,
    password: string,
};

//注册
export const register = (param: User) => {
    return requestMethod('/user/usersRegister',param)
}

//登录
export const login = (param: User) => {
    return requestMethod('/user/userLogin',param)
}