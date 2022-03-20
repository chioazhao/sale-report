import axios from "./http";
import baseUrl from "./config";

/* 获取销售看板列表 */
export const getSaleReportList = ({
    shopId,
    timeFrame,
    startDate,
    endDate,
    sort,
}) => {
    const data = {
        shopId: shopId,
        timeFrame: timeFrame,
        startDate: startDate,
        endDate: endDate,
        sort: sort,
    };
    return axios.post(
        baseUrl.pl("Dashboard/ShopFinanceTest/getSaleReportList"),
        data
    )
};

/* 导出 */
export const exportSaleReportList = (paramObj) => {
    let _exportDataUrl =
        baseUrl.pl("Dashboard/ShopFinance/exportShopFinance") + "?";
    for (var key in paramObj) {
        _exportDataUrl += `${key}=${paramObj[key]}&`;
    }
    window.open(_exportDataUrl);
};