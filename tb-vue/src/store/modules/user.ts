type UserType = {
    username: String,
    password: Number
}
export const users = {
    namespaced: true,
    state: {
        username: '',
        password: undefined,
    },
    getters: {},
    mutations: {
        setUserInfo(state: UserType, payload: UserType) {
            state.username = payload.username;
            state.password = payload.password;
        }
    },
};