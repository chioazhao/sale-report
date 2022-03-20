export const initShopFinanceDetail = {
    shop_name: '无',
    profit: 0,
    rebate_amount: 0,
    sale_amount: 0,
    cost_amount: 0,
    gross_profit: 0,
    all_expenses: 0,
    plat_commissions: 0,
    plat_marketing_expenses: 0,
    other_expenses: 0,
    marketing_expenses: 0,
    post_expenses: 0,
    return_expenses: 0,
    other_expenses: 0,
    labor_cost_expenses: 0,
    manage_expenses: 0,
    interest_expenses: 0,
    shop_people_nums: 0,
    customer_unit_price: 0,
    customer_order: 0,
    price_order: 0,
    average_discount: 0,

    sales_task: 0,
    sales_complete_rate: 0,
};


export const financeFieldTitle = {
    profit: {
        mainTitle: '利润', subTitle: '利润率', mainUnit: '元', mainTooltip: '毛利额 - 费用总计', subTooltip: '利润 / 销售额'
    },
    sale_amount: {
        mainTitle: '销售额', mainUnit: '元', mainTooltip: '以配货时间为统计口径,数据每三分钟更新一次', subTitle: '返利', subTooltip: '返利',
    },
    gross_profit: {
        mainTitle: '毛利额', mainUnit: '元', subTitle: '毛利率', mainTooltip: '销售额 - 货品成本', subTooltip: '毛利额 / 销售额'
    },
    all_expenses: {
        mainTitle: '费用总计', mainUnit: '元', subTitle: '费用率', mainTooltip: '平台扣费-佣金 + 平台扣费-营销费用 + 平台费用-其他 + 线下打款-营销费用 +} 配发费 + 退货费用 + 其他费用 + 人员成本 + 管理费用 + 资金成本', subTooltip: '费用总计 / 销售额'
    },
    cost_amount: {
        mainTitle: '货品成本', mainUnit: '元', mainTooltip: '平台成本'
    },
    customer_unit_price: {
        mainTitle: '客单价', mainUnit: '元', mainTooltip: '顾客平均消费金额,净付款金额 / 交易次数'
    },
    customer_order: {
        mainTitle: '客单量', mainUnit: '件/次', mainTooltip: '顾客平均交易数量,净交易件数 / 交易次数'
    },
    price_order: {
        mainTitle: '件单价', mainUnit: '元', mainTooltip: '平均每件商品单价,净付款金额 / 净交易件数'
    },
    average_discount: {
        mainTitle: '销售折扣', mainUnit: '', mainTooltip: '销售额 / 市场价'
    },
    shop_funds: {
        mainTitle: '初始资金', mainUnit: '元', mainTooltip: '充值到平台账号的信贷金额,财务根据借款金额录入'
    },
    plat_commissions: {
        mainTitle: '佣金', mainUnit: '元', mainTooltip: '平台扣点佣金', subTitle: '费用率', subTooltip: '平台扣费-佣金 / 销售额'
    },
    plat_marketing_expenses: {
        mainTitle: '营销费用', mainUnit: '元', mainTooltip: '如首单拉新、淘宝客佣金、聚划算参团费、达人佣金、京豆等通过账单扣费的营销费用', subTitle: '费用率', subTooltip: '平台扣费-营销费用 / 销售额'
    },
    plat_other_expenses: {
        mainTitle: '其他费用', mainUnit: '元', mainTooltip: '运费险、返点积分、花呗信用卡手续费', subTitle: '费用率', subTooltip: '平台扣费-其他费用 / 销售额'
    },
    marketing_expenses: {
        mainTitle: '线下打款——营销费用', mainUnit: '元', mainTooltip: '线下打款的快车、直通车等用于引流的流量购买', subTitle: '费用率', subTooltip: '线下打款-营销费用 / 销售额'
    },
    post_expenses: {
        mainTitle: '配发费', mainUnit: '元', mainTooltip: '天马运动平台资费标准', subTitle: '费用率', subTooltip: '配发费 / 销售额'
    },
    other_expenses: {
        mainTitle: '其他费用', mainUnit: '元', mainTooltip: '售后补偿、设计费、办公费等支出', subTitle: '费用率', subTooltip: '其他费用 / 销售额'
    },
    return_expenses: {
        mainTitle: '退货费用', mainUnit: '元', mainTooltip: '超过退货标准的，16元/件，不含配', subTitle: '费用率', subTooltip: '退货费用 / 销售额'
    },
    manage_expenses: {
        mainTitle: '管理费用', mainUnit: '元', mainTooltip: '现货仓4个点，外仓6个点', subTitle: '费用率', subTooltip: '管理费用 / 销售额'
    },
    interest_expenses: {
        mainTitle: '资金成本', mainUnit: '元', mainTooltip: '月利1%，计费依据是充值到平台账号的信贷金额', subTitle: '费用率', subTooltip: '资金成本 / 销售额'
    },
    labor_cost_expenses: {
        mainTitle: '人员成本', mainUnit: '元', mainTooltip: '人工成本+福利费', subTitle: '费用率', subTooltip: '人工成本 / 销售额'
    },
}