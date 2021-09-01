import request from './https'

const api = {
    Login: {
        userLogin(data) {
            return request.post('/api/login', data)
        },
        userRegister(data) {
            return request.post('/api/register', data)
        },
        loginIdentify() {
            return request.get('session/isAuthenticated')
        },
        logOut() {
            return request.post('/logout')
        }
    },
}

export default api