import storage from 'good-storage'

/* session */
//token持久化
const TOKEN_KEY = '__TOKEN__'
export function getToken () {
    return storage.session.get(TOKEN_KEY, '')
}
export function storageToken (token) {
    storage.session.set(TOKEN_KEY, token)
    return storage.session.get(TOKEN_KEY, '')
}

/* local */
const CUSTOM_COL_KEY = "__COL__"
export function getCustomCol () {
    let _arr = storage.get(CUSTOM_COL_KEY).split(',')
    return _arr
}
export function storageCustomCol (colList) {
    storage.set(CUSTOM_COL_KEY, colList.join(','))
    let _arr = storage.get(CUSTOM_COL_KEY).split(',')
    return _arr
}


