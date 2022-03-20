import { initShopFinanceDetail, financeFieldTitle } from '@/utils/initData.js'

const state = {
    // 用户信息
    shopId: 0,
    timeFrame: 'today',
    shopFinanceDetail: Object.assign({}, initShopFinanceDetail),
    shopProfitList: [],
    shopOptions: [],
    financeFieldTitle: financeFieldTitle,
    token: '',
    // 公告轮播列表
    noticeList: [],

}
export default state