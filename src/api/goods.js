import axios from "./http";
import baseUrl from "./config";

export const getRecommendGoodsList = ({ goodsNo, page, pageSize, sort }) => {
    const params = {
        goods_no: goodsNo,
        page: page,
        page_size: pageSize,
        sort: sort
    }
    return axios.get(baseUrl.self("DgTaskRuntime/getData"), { params });
}

export const getRecommendGoodsDetail = ({ goodsNo, planID }) => {
    const params = {
        goods_no: goodsNo,
        plan_id: planID,
    }
    return axios.get(baseUrl.self("DgTaskRuntime/getGoodsData"), { params })
}

export const exportBusGroupFinanceList = (paramObj) => {
    let _exportDataUrl = baseUrl.self('DgTaskRuntime/export') +
        '?';
    for (var key in paramObj) {
        _exportDataUrl += `${key}=${paramObj[key]}&`;
    }
    window.open(_exportDataUrl);
}