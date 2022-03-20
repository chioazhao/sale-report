export const digitalConfig = {
    computed: {
        digitalConfig() {
            // 数字翻牌器配置
            return function({
                number,
                toFixed,
                textAlign,
                fontSize,
                isNeedFormat,
                isRed,
            }) {
                let _number = number || 0;
                if (_number > 9999 && isNeedFormat === true) {
                    _number = this.formatter(_number);
                }
                return {
                    number: [_number],
                    textAlign: textAlign || "left",
                    content: "{nt}",
                    toFixed: toFixed || 0,
                    style: {
                        fontSize: fontSize || 20,
                        fill: isRed ? "#ff4d4f" : "#3de7c9",
                        // fill: isRed ? '#ff4d4f' : '#47FCE3',
                    },
                };
            };
        },
        formatter() {
            // 千分位格式化
            return function(number) {
                const numbers = number.toString().split("").reverse();
                const segs = [];
                while (numbers.length) segs.push(numbers.splice(0, 3).join(""));
                return segs.join(",").split("").reverse().join("");
            };
        },
    },
};

/* 表格样式设置 */
export const tableStyleConfig = {
    methods: {
        /* 表格样式配置 */
        getColumnCellStyle2({ row, column, rowIndex, columnIndex }) {
            switch (columnIndex) {
                case 0:
                case 1:
                case 2:
                    return "background-color: rgba(39, 40, 34, 1); color: #ccc; font-size: 14px; border-color: #595959;";
                    break;
                default:
                    return "background-color: rgba(39, 40, 34, 1);color: #e6db74; border-color: #595959; font-size: 14px;";
            }
        },
        /* 表头样式 */
        getHeaderCellStyle2({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return "background-color: rgba(39, 40, 34, 1); font-size: 14px; color: #ccc; border-color: #595959;";
            }
        },
    },
};

export const financialFieldMapConfig = {
    data() {
        return {
            financialFieldMap: {
                plat_commissions: "佣金",
                plat_marketing_expenses: "营销费用",
                plat_other_expenses: "其他费用",

                marketing_expenses: "线下打款——营销费用",
                post_expenses: "配发费",
                other_expenses: "其他费用",
                return_expenses: "退货费用",
                manage_expenses: "管理费用",
                interest_expenses: "资金成本",
                labor_cost_expenses: "人员成本",
            },
        };
    },
};

export const loadingConfig = {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        openLoading() {
            this.loading = true;
        },
        closeLoading() {
            this.loading = false;
        },
    },
};