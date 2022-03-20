//线上地址
const productUrl = '/'

const baseUrl = {
    test: (url) => { return process.env.NODE_ENV == 'development' ? '/test/' + url : productUrl + url },
    pl: (url) => { return process.env.NODE_ENV == 'development' ? '/pl/' + url : productUrl + url },
    self: (url) => { return process.env.NODE_ENV == 'development' ? '/self/' + url : productUrl + url },
}

export default baseUrl;