<template>
  <div class="store-export">
    <div class="banner-container">
      <Banner />
    </div>
    <div class="search-container">
      <SearchForm
        ref="searchForm"
        @on-search="handleSearch"
        @on-export="handleExport"
        @on-single-shop-search="handleSearchSingleShop"
      />
    </div>
    <!-- :summary-method="getSummaries" -->
    <div class="table-container">
      <el-table
        v-loading="loading"
        element-loading-text="数据加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.5)"
        :data="tableData"
        ref="dataTable"
        tooltip-effect="dark"
        border
        :show-summary="true"
        size="mini"
        :height="tableHeight"
        style="width: 100%"
        :summary-method="getSummaries"
        :cell-style="getColumnCellStyle2"
        :header-cell-style="getHeaderCellStyle2"
        @sort-change="handleSortChange"
      >
        <el-table-column
          min-width="110px"
          prop="syq_title"
          align="left"
          header-align="center"
          :show-overflow-tooltip="true"
          label="事业群"
        />
        <el-table-column
          min-width="110px"
          prop="shop_type_name"
          align="left"
          header-align="center"
          :show-overflow-tooltip="true"
          label="平台"
        />
        <el-table-column
          min-width="160px"
          prop="shop_name"
          align="left"
          header-align="center"
          :show-overflow-tooltip="true"
          label="事业部"
        />
        <el-table-column
          min-width="100px"
          prop="month_targets"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月任务(万)"
        >
          <template slot-scope="scope">
            <span>
              {{ parseColumn(scope.row.month_targets, 10000, 1) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="month"
          align="center"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月份"
        />
        <el-table-column
          min-width="120px"
          prop="month_sale_amount"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月销售(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ parseColumn(scope.row.month_sale_amount, 1, 0) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="month_profit"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月利润(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.month_profit)" class="red">
              {{ parseColumn(scope.row.month_profit, 1, 0) }}
            </span>
            <span v-else class="green">{{
              parseColumn(scope.row.month_profit, 1, 0)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="month_pro"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月销售进度(%)"
        >
          <template slot-scope="scope">
            <span class="orange">{{
              parseColumn(scope.row.month_pro, 1, 2)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="month_compare"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="月销售同比(%)"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.month_compare)" class="red">
              {{ scope.row.month_compare }}
            </span>
            <span v-else class="green">{{ scope.row.month_compare }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="100px"
          v-if="timeFrame === 'day' || timeFrame == 'today'"
          prop="date"
          align="center"
          header-align="center"
          :show-overflow-tooltip="true"
          label="日期"
        />
        <el-table-column
          min-width="120px"
          v-if="timeFrame === 'day' || timeFrame == 'today'"
          prop="day_sale_amount"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="日销售(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ parseColumn(scope.row.day_sale_amount, 1, 0) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          v-if="timeFrame === 'day' || timeFrame == 'today'"
          prop="day_profit"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="日利润(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.day_profit)" class="red">
              {{ parseColumn(scope.row.day_profit, 1, 0) }}
            </span>
            <span v-else class="green">{{
              parseColumn(scope.row.day_profit, 1, 0)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="100px"
          v-if="timeFrame === 'day' || timeFrame == 'today'"
          prop="day_compare"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="日同比(%)"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.day_compare)" class="red">
              {{ scope.row.day_compare }}
            </span>
            <span v-else class="green">{{ scope.row.day_compare }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="year_targets"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="年销售任务(万)"
        >
          <template slot-scope="scope">
            <span>
              {{ parseColumn(scope.row.year_targets, 10000, 1) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="year_sale_amount"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="年销售(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ parseColumn(scope.row.month_sale_amount, 1, 0) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="year_profit"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="年利润(元)"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.year_profit)" class="red">
              {{ parseColumn(scope.row.year_profit, 1, 0) }}
            </span>
            <span v-else class="green">{{
              parseColumn(scope.row.year_profit, 1, 0)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="120px"
          prop="year_pro"
          align="right"
          header-align="center"
          :show-overflow-tooltip="true"
          label="年销售进度(%)"
        >
          <template slot-scope="scope">
            <span class="orange">{{
              parseColumn(scope.row.year_pro, 1, 2)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          min-width="150px"
          prop="year_compare"
          header-align="center"
          align="right"
          :show-overflow-tooltip="true"
          label="年销售进度同比(%)"
        >
          <template slot-scope="scope">
            <span v-if="isNegative(scope.row.year_compare)" class="red">
              {{ scope.row.year_compare }}
            </span>
            <span v-else class="green">{{ scope.row.year_compare }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Banner from "@/common/banner/banner.vue";
import SearchForm from "./components/search-form.vue";
import Toolbar from "./components/toolbar.vue";

import {
  tableStyleConfig,
  loadingConfig,
  digitalConfig,
} from "@/utils/mixin.js";
import { isEmpty } from "@/utils/utils.js";
import { getSaleReportList, exportSaleReportList } from "@/api/sale.js";
import { formatTime } from "@/utils/index.js";

export default {
  name: "StoreExport",
  mixins: [tableStyleConfig, loadingConfig],
  components: {
    SearchForm,
    Toolbar,
    Banner,
  },
  beforeMount() {
    // this.setShopData()
    this.tableHeight = window.innerHeight * 0.8;
  },
  mounted() {
    // this.getSaleReportList({});
  },
  updated() {
    // 表格重新布局
    this.$nextTick(() => {
      this.$refs.dataTable.doLayout();
    });
  },
  data() {
    return {
      loading: false,
      tableData: [],
      tableHeight: 500,
      timeFrame: "today",
      activeName: "second",
    };
  },
  computed: {
    // 是否为负值
    isNegative() {
      return function (value) {
        return parseInt(value) > 0 ? false : true;
      };
    },
    parseColumn() {
      return function (v, base = 10000, toFixed = 0) {
        return parseFloat((Number(v) / base).toFixed(toFixed));
      };
    },
  },
  methods: {
    /* 查询 */
    handleSearch({ shopIdArr, timeFrame, date }) {
      this.timeFrame = timeFrame;
      this.getSaleReportList({
        shopId: shopIdArr.join(","),
        timeFrame: timeFrame,
        sort: "",
        startDate: date[0] || "",
        endDate: date[1] || "",
      });
    },
    handleSearchSingleShop({ shopIdArr, timeFrame, date }) {
      this.timeFrame = timeFrame;
      this.getShopFinanceReportList(
        {
          shopId: shopIdArr.join(","),
          timeFrame: timeFrame,
          sort: "",
          startDate: date[0] || "",
          endDate: date[1] || "",
        },
        true
      );
    },
    /* 排序查询 */
    handleSortChange({ column, prop, order }) {
      let _form = this.$refs.searchForm.getFormData();
      let _param = {
        shopId: _form.shopIdArr.join(","),
        timeFrame: this.timeFrame,
        startDate: _form.date[0] || "",
        endDate: _form.date[1] || "",
      };

      if (!isEmpty(order)) {
        let _order = order === "descending" ? "desc" : "asc";
        _param["sort"] = prop + "|" + _order;
      } else {
        _param["sort"] = "";
      }

      this.getSaleReportList({ ..._param });
    },

    /* 获取看板数据列表 */
    getSaleReportList(
      { shopId, timeFrame, sort, startDate, endDate },
      isNeedOpenWin = false
    ) {
      this.openLoading();
      const frame = this.timeFrame.indexOf("day") > -1 ? "day" : "month";
      getSaleReportList({
        shopId: shopId,
        timeFrame: frame,
        startDate,
        endDate,
        sort,
      })
        .then((res) => {
          this.closeLoading();
          this.tableData = res.data;
          this.$notify({
            type: "success",
            title: "数据已更新" + formatTime(new Date(), "HH: mm: ss"),
            offset: 100,
          });
        })
        .catch((err) => {
          console.info(err);
          this.$message.error("获取数据失败!");
        });
    },

    /* 导出功能 */
    handleExport(formObj) {
      exportKanbanList({
        shopId: formObj.shopIdArr.join(","),
        timeFrame: formObj.timeFrame,
        sort: "",
        startDate: formObj.date[0] || "",
        endDate: formObj.date[1] || "",
      });
    },

    /* 底部合计 */
    getSummaries(param) {
      const { columns, data } = param;
      let _dataNum = data.length;

      const sums = [];
      let sale_amount = 0;

      let sort = {};

      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          sort["合计"] = 0;
          return;
        }
        sort[column.property] = index;

        const values = data.map((item) => Number(item[column.property]));

        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);

          if (column.property.indexOf("_profit") != -1) {
            // 百分比
            sums[index] = sums[index].toFixed(0);
          } else if (
            column.property.indexOf("_pro") > -1 ||
            column.property.indexOf("_compare") > -1 ||
            column.property.indexOf("targets") > -1 ||
            column.property.indexOf("shop_type_name") > -1
          ) {
            sums[index] = "/";
          } else {
            sums[index] = sums[index].toFixed(0);
          }
        } else {
          if (
            column.property == "shop_name" ||
            column.property == "shop_type_name"
          ) {
            sums[index] = _dataNum + "个";
          } else {
            sums[index] = "/";
          }
        }
      });

      return sums;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>