import state from "./state"

export const shopFinanceDetail = state => {
    return state.shopFinanceDetail
}
// 店铺利润
export const shopProfitList = state => {
    return state.shopProfitList
}
// 利润
export const profit = state => {
    return +state.shopFinanceDetail.profit
}
export const rebate_amount = state => {
    return +state.shopFinanceDetail.rebate_amount
}
// 利润率
export const profit_role = state => {
    if (state.shopFinanceDetail.sale_amount == 0) {
        return 0
    }
    return ((state.shopFinanceDetail.profit / state.shopFinanceDetail.sale_amount) * 100).toFixed(2)
}
// 销售额
export const sale_amount = state => {
    return +state.shopFinanceDetail.sale_amount
}

// 店铺人数
export const shop_people_nums = state => {
    return +state.shopFinanceDetail.shop_people_nums
}
// 店铺名称
export const shop_name = state => {
    return state.shopFinanceDetail.shop_name
}
export const timeFrameText = state => {
    return state.timeFrame == 'today' ? '今日' : '当月';
}
export const timeFrame = state => {
    return state.timeFrame
}

export const shopId = state => {
    return state.shopId
}
export const shopOptions = state => {
    return state.shopOptions
}
/* 用于shop-info-panel 页面渲染 */
export const shopInfo = state => {
    return {
        shopowner: state.shopFinanceDetail.shopowner || '未填',
        shop_name: state.shopFinanceDetail.shop_name,
        shop_people_nums: state.shopFinanceDetail.shop_people_nums || 0,
        sales_task: state.shopFinanceDetail.sales_task || 0,
        sales_complete_rate: state.shopFinanceDetail.sales_complete_rate || 0,
    }
}


/* 只用于sales-kan-ban 页面渲染 */
export const salesKanBanObj1 = state => {
    return {
        gross_profit: + state.shopFinanceDetail.gross_profit,
        all_expenses: + state.shopFinanceDetail.all_expenses,
        cost_amount: + state.shopFinanceDetail.cost_amount,
        customer_unit_price: + state.shopFinanceDetail.customer_unit_price,
        customer_order: + state.shopFinanceDetail.customer_order,
        price_order: + state.shopFinanceDetail.price_order,
        average_discount: + state.shopFinanceDetail.average_discount,
        shop_funds: + state.shopFinanceDetail.shop_funds,
    }
}

/* 只用于total-expenses 页面渲染 */
export const allExpensesObj1 = state => {
    return {
        plat_commissions: +state.shopFinanceDetail.plat_commissions,
        plat_marketing_expenses: +state.shopFinanceDetail.plat_marketing_expenses,
        plat_other_expenses: +state.shopFinanceDetail.plat_other_expenses,
    }
}
export const allExpensesObj2 = state => {
    return {
        marketing_expenses: +state.shopFinanceDetail.marketing_expenses,
        post_expenses: +state.shopFinanceDetail.post_expenses,
        other_expenses: +state.shopFinanceDetail.other_expenses,
        return_expenses: +state.shopFinanceDetail.return_expenses,
        manage_expenses: +state.shopFinanceDetail.manage_expenses,
        interest_expenses: +state.shopFinanceDetail.interest_expenses,
        labor_cost_expenses: +state.shopFinanceDetail.labor_cost_expenses,
    }
}

export const financeFieldTitle = state => {
    return state.financeFieldTitle
}

export const noticeList = state => {
    return state.noticeList
}

export const promptContent = state => {
    return state.shopFinanceDetail.paper_work
}