import axios from "./http";
import qs from "qs";
import baseUrl from "./config";

// 获取店铺列表
export const getShopOptions = () => {
  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getShopOptions"), {});
};

// 获取店铺财务详情
export const getShopFinanceDetail = ({ shopId, timeFrame }) => {
  const params = {
    shopId,
    timeFrame,
  };
  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getShopFinanceDetail"), {
    params,
  });
};

// 全服公告轮播
export const getNoticeList = () => {
  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getPaperWorkList"));
};

// 获取店铺财务
export const getShopFinanceList = ({ shopId, timeFrame, sort }) => {
  const params = {
    shopId,
    timeFrame,
    sort,
  };
  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getShopFinanceList"), {
    params,
  });
};

// 获取利润列表 chart data
export const getShopProfitList = ({ shopId, limit, timeFrame }) => {
  const params = {
    shopId,
    limit,
    timeFrame,
  };
  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getShopProfitList"), {
    params,
  });
};

/* 获取店铺利润列表 */
export const getShopFinanceReportList = ({
  shopId,
  timeFrame,
  sort,
  startDate,
  endDate,
  isSplit,
}) => {
  const params = {
    shopId,
    timeFrame,
    sort,
    startDate,
    endDate,
    isSplit,
  };
  return axios.get(
    baseUrl.pl("Dashboard/ShopFinance/getShopFinanceReportList"),
    { params }
  );
};

/* 查询详情 */
export const getShopFinanceDetailByid = ({ id, timeFrame }) => {
  const params = {
    id,
    timeFrame,
  };
  return axios.get(
    baseUrl.pl("Dashboard/ShopFinance/getShopFinanceDetailByid"),
    { params }
  );
};

/* 导出 */
export const exportShopFinanceList = (paramObj) => {
  let _exportDataUrl =
    baseUrl.pl("Dashboard/ShopFinance/exportShopFinance") + "?";
  for (var key in paramObj) {
    _exportDataUrl += `${key}=${paramObj[key]}&`;
  }
  window.open(_exportDataUrl);
};

/* 导出详情 */
export const exportShopFinanceDetail = (paramObj) => {
  let _exportDataUrl =
    baseUrl.pl("Dashboard/ShopFinance/exportShopFinanceDetail") + "?";
  for (var key in paramObj) {
    _exportDataUrl += `${key}=${paramObj[key]}&`;
  }
  window.open(_exportDataUrl);
};

/* 获取事业群列表 */
export const getBusGroupList = () => {
  const params = {};

  return axios.get(baseUrl.pl("Dashboard/ShopFinance/getDivisionData"), {
    params,
  });
};

/* 获取事业部数据明细 */
export const getBusGroupFinanceList = ({
  type,
  id,
  timeFrame,
  startDate,
  endDate,
  sort,
}) => {
  const params = {
    type,
    id,
    timeFrame,
    startDate,
    endDate,
    sort,
  };
  return axios.get(
    baseUrl.pl("Dashboard/ShopFinance/getDivFinanceReportList"),
    { params }
  );
};

/* 导出事业群合计 */
export const exportBusGroupFinanceList = (paramObj) => {
  let _exportDataUrl =
    baseUrl.pl("Dashboard/ShopFinance/exportDivFinance") + "?";
  for (var key in paramObj) {
    _exportDataUrl += `${key}=${paramObj[key]}&`;
  }
  window.open(_exportDataUrl);
};
