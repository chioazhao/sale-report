<template>
    <div class="search-form">
        <el-form ref="form" :model="form" size="small" inline>
            <el-form-item label="店铺：">
                <el-select v-model="form.shopIdArr" clearable multiple filterable collapse-tags style="width: 300px" placeholder="请选择店铺，可搜索，可多选">
                    <el-option v-for="item in shopOptions" :key="item.value" :label="item.label" :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">
                            <el-tag effect="plain" :type="item.type == 1 ? 'primary' : 'success'">{{ item.type == 1 ? "店铺" : "事业群" }}</el-tag>
                        </span>
                    </el-option>
                </el-select>
                <el-button-group>
                    <el-button type="warning" @click="onClearShopSelect">清空</el-button>
                    <el-button type="primary" @click="onSelectAllShop">全选</el-button>
                </el-button-group>
            </el-form-item>
            <el-form-item label="时间：">
                <el-radio-group v-model="form.timeFrame">
                    <el-radio-button label="day">日</el-radio-button>
                    <el-radio-button label="month">月</el-radio-button>
                </el-radio-group>
                <span class="monthSelect" v-show="form.timeFrame === 'month'">
                    <el-date-picker v-model="form.date" type="monthrange" range-separator="~" value-format="yyyy-MM-dd" format="yyyy年MM月" start-placeholder="开始月份" end-placeholder="结束月份" style="width: 300px"></el-date-picker>
                </span>
                <span class="daySelect" v-show="form.timeFrame === 'day'">
                    <el-date-picker v-model="form.date" type="daterange" range-separator="~" value-format="yyyy-MM-dd" format="yyyy年MM月dd日" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style="width: 300px"></el-date-picker>
                </span>
                <el-button type="warning" @click="onClearDateSelect">清空</el-button>
            </el-form-item>
            <!-- <el-form-item>
        <el-checkbox v-model="form.isSplit"
          >分{{ form.timeFrame === "day" ? "日" : "月" }}报告</el-checkbox
        >
      </el-form-item> -->
            <el-form-item>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
                    <el-button type="primary" icon="el-icon-download" @click="onExport">导出</el-button>
                </el-button-group>
            </el-form-item>
            <el-form-item label="快捷操作：">
                <el-button-group v-show="form.timeFrame === 'month'">
                    <el-button type="primary" icon="el-icon-search" @click="onSearchThisMonth">查询当月</el-button>
                    <el-button type="primary" icon="el-icon-download" @click="onExportThisMonth">导出当月</el-button>
                </el-button-group>
                <el-button-group v-show="form.timeFrame === 'day'">
                    <el-button type="primary" icon="el-icon-search" @click="onSearchToday">查询当日</el-button>
                    <el-button type="primary" icon="el-icon-download" @click="onExportToday">导出当日</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { getShopOptions, getNoticeList } from "@/api/finance.js";
import { isEmpty } from "@/utils/utils.js";
import { formatTime } from "@/utils/index.js";

/* 日选择器快捷键 */
const shortcuts = [{
        text: "当日",
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            picker.$emit("pick", [start, end]);
        },
    },
    {
        text: "最近一周",
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
        },
    },
    {
        text: "最近一个月",
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit("pick", [start, end]);
        },
    },
    {
        text: "最近三个月",
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit("pick", [start, end]);
        },
    },
];

export default {
    name: "SearchForm",
    mounted() {
        this.init();
    },
    data() {
        return {
            // timeFrame: 'day',
            form: {
                shopIdArr: [],
                timeFrame: "day",
                date: [],
                isSplit: true,
            },

            pickerOptions: {
                shortcuts: shortcuts,
            },
        };
    },
    computed: {
        ...mapGetters({
            shopOptions: "finance/shopOptions",
            noticeList: "finance/noticeList",
        }),
    },
    methods: {
        ...mapActions({
            setShopOptions: "finance/setShopOptions",
            setNoticeList: "finance/setNoticeList",
        }),
        init() {
            if (isEmpty(this.shopOptions)) {
                this.getShopOptions();
            } else {
                if (this.shopOptions.length == 1 && this.form.timeFrame === "day") {
                    this.searchSingleShopFinance(this.shopOptions[0]);
                } else if (
                    this.shopOptions.length > 1 &&
                    this.form.timeFrame === "day"
                ) {
                    // this.onSearch()
                    this.onSearchToday();
                }
            }

            if (isEmpty(this.noticeList)) {
                this.getNoticeList();
            }
        },

        getFormData() {
            return { ...this._getFormData() };
        },

        /* 表单方法 */
        onSelectAllShop() {
            let _shopIdArr = this.shopOptions.map((item) => {
                return item.value;
            });
            this.form.shopIdArr = _shopIdArr;
        },
        /* 清空选择 */
        onClearShopSelect() {
            this.form.shopIdArr = [];
        },
        onClearDateSelect() {
            this.form.date = [];
        },

        /* 查询 */
        onSearch() {
            this.$emit("on-search", this._getFormData());
        },
        onSearchToday() {
            this.form.timeFrame = "day";
            let _today = formatTime(new Date(), "yyyy-MM-dd");
            this.form.date = [_today, _today];
            this.onSearch();
        },
        onSearchThisMonth() {
            this.form.timeFrame = "month";
            let _thisMonth = formatTime(new Date(), "yyyy-MM-dd");
            this.form.date = [_thisMonth, _thisMonth];
            this.onSearch();
        },

        /* 导出 */
        onExport() {
            this.$emit("on-export", this._getFormData());
        },
        onExportToday() {
            let _today = formatTime(new Date(), "yyyy-MM-dd");
            this.$emit("on-export", {
                shopIdArr: this.form.shopIdArr,
                timeFrame: "day",
                date: [_today, _today],
            });
        },
        onExportThisMonth() {
            let _thisMonth = formatTime(new Date(), "yyyy-MM");
            this.$emit("on-export", {
                shopIdArr: this.form.shopIdArr,
                timeFrame: "month",
                date: [_thisMonth, _thisMonth],
            });
        },

        /* 获取表单数据对象 */
        _getFormData() {
            let _dataObj = Object.assign({}, { ...this.form });
            _dataObj["date"] = _dataObj["date"].slice(0);

            if (_dataObj.timeFrame === "month" && _dataObj.date.length > 0) {
                // 月 并且 有值
                _dataObj.date[0] = _dataObj.date[0].slice(0, 7);
                _dataObj.date[1] = _dataObj.date[1].slice(0, 7);
            }
            return _dataObj;
        },

        /* 获取店铺选项 */
        getShopOptions() {
            getShopOptions().then(res => {
                if (res.code === 200) {
                    let _shopOptions = res.data.map(item => {
                        return {
                            value: item.id,
                            label: item.name,
                            type: item.type,
                        }
                    })
                    this.setShopOptions(_shopOptions)
                    if (_shopOptions.length === 1 && this.timeFrame === 'day') {

                        this.searchSingleShopFinance(_shopOptions[0])
                    } else if (this.shopOptions.length > 1 && this.form.timeFrame === 'day') {
                        this.onSearchToday()
                    }
                } else {
                    this.$message.error(res.msg || '初始化店铺信息失败，请重试刷新页面');
                }
            })
        },
        /* 获取标语 */
        getNoticeList() {
            // 测试代码
            getNoticeList().then((res) => {
                if (res.code != 200) {
                    return;
                }
                if (isEmpty(res.data)) {
                    return;
                }
                this.setNoticeList(res.data);
            });
        },

        searchSingleShopFinance(dataObj) {
            let _today = formatTime(new Date(), "yyyy-MM-dd");
            this.$emit("on-single-shop-search", {
                shopIdArr: [dataObj.value],
                timeFrame: "day",
                date: [_today, _today],
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.search-form {

    // width: 100%;
    ::v-deep .el-form-item__label {
        color: #fff;
    }

    ::v-deep.el-tag.el-tag--info {
        background-color: #e6f5f5;
        border-color: #ceeaeb;
        color: #08979c;
    }

    ::v-deep.el-button--primary {
        color: #fff;
        background-color: #177ddc;
        border-color: #177ddc;
    }

    ::v-deep.el-radio-button__orig-radio:checked+.el-radio-button__inner {
        color: #fff;
        background-color: #177ddc;
        border-color: #177ddc;
    }

    ::v-deep.el-input__inner {
        background-color: transparent;
    }

    ::v-deep.el-range-input {
        background-color: transparent;
        color: #fff;
    }

    ::v-deep.el-date-editor .el-range-separator {
        color: #fff;
    }

    ::v-deep.el-button-group {
        .el-button--primary {
            &:last-child {
                background-color: transparent;
                border-color: #ccc;
            }
        }
    }

    ::v-deep.el-radio-button {
        &.is-active {
            .el-radio-button__inner {
                color: #fff;
                background-color: #177ddc;
                border-color: #177ddc;
            }
        }

        .el-radio-button__inner {
            color: #fff;
            border: 1px solid #fff;
            background-color: transparent;
        }
    }

    ::v-deep.el-checkbox {
        color: #fff;
    }
}
</style>