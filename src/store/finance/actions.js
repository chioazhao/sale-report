import * as types from './mutation-types'
import * as storage from '@/utils/storage.js'
/* 设置时间范围 */
export const setTimeFrame = function ({ commit, state }, timeFrame) {
    commit(types.SET_TIME_FRAME, timeFrame)
}
/* 设置店铺财务详细信息 */
export const setShopFinanceDetails = function ({ commit, state }, shopFinanceDetail) {
    commit(types.SET_SHOP_FINANCE_DETAILS, shopFinanceDetail)
}
/* 设置利润列表 */
export const setShopProfitList = function ({ commit, state }, shopProfitList) {
    commit(types.SET_SHOP_PROFIT_LIST, shopProfitList)
}

/* 设置店铺id */
export const setShopId = function ({ commit, state }, shopId) {
    commit(types.SET_SHOP_ID, shopId)
}
/* 设置店铺下拉选项 */
export const setShopOptions = function ({ commit, state }, shopOptions) {
    commit(types.SET_SHOP_OPTIONS, shopOptions)
}
/* 设置token */
export const setToken = function ({ commit, state }, token) {
    commit(types.SET_TOKEN, token)
}

/* 设置公告轮播池 */
export const setNoticeList = function ({ commit, state }, noticeList) {
    commit(types.SET_NOTICE_LIST, noticeList)
}