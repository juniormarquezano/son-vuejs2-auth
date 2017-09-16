import SessionStorage from './session-storage';
import { Jwt } from './resources';

export default  {
    get token() {
        return SessionStorage.get('token')
    },
    set token(value) {
        SessionStorage.set('token', value)
    },
    accessToken(email, password) {
        return Jwt.accessToken(email, password).then((response) => {
            this.token = response.data.token;
        })
    },
    getAuthorizationHeader() {
        return `Bearer ${this.token}`;
    }
}