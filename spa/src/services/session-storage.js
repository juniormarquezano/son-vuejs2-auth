export default {
    // atribuir um valor, string, etc...
    set(key, value) {
        window.sessionStorage[key] = value;
        return window.sessionStorage[key];
    },
    // recuperar um valor
    get(key, defaultValue) {
        return window.sessionStorage[key] || defaultValue;
    },
    remove(key) {
        window.sessionStorage.removeItem(key);
    },
    setObject(key, value) {
        window.sessionStorage[key] = JSON.stringify(value);
        return this.getObject(key);
    },
    getObject(key) {
        return JSON.parse(window.sessionStorage[key] || null);
    }
}