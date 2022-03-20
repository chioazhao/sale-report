import * as types from './mutation-types.js'

const mutations = {
    [types.SET_SHOP_FINANCE_DETAILS] (state, shopFinanceDetail) {
        state.shopFinanceDetail = shopFinanceDetail
    },
    [types.SET_SHOP_PROFIT_LIST] (state, shopProfitList) {
        state.shopProfitList = shopProfitList
    },
    [types.SET_TIME_FRAME] (state, timeFrame) {
        state.timeFrame = timeFrame
    },
    [types.SET_SHOP_ID] (state, shopId) {
        state.shopId = shopId
    },
    [types.SET_SHOP_OPTIONS] (state, shopOptions) {
        state.shopOptions = shopOptions
    },
    [types.SET_TOKEN] (state, token) {
        state.token = token
    },
    [types.SET_NOTICE_LIST] (state, noticeList) {
        state.noticeList = noticeList
    }
}

export default mutations