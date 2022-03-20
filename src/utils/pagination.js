/* 分页 */
export const pageOption = {
    data () {
        return {
            tableLoading: false,
            dataTotal: 0,
            pageSize: 50,
            currentPage: 1,
            pageSizes: [20, 50, 100, 200, 400]
        };
    }
};