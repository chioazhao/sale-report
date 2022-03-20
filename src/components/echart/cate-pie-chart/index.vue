<template>
	<div>
		<Chart :cdata="cdata" />
	</div>
</template>

<script>
import Chart from './chart.vue';
import { isEmpty } from '@/utils/utils.js'
export default {
	props: {
		chartData: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	data () {
		return {
			cdata: {
				xData: [],
				seriesData: []
			}
		}
	},
	components: {
		Chart,
	},
	watch: {
		chartData: {
			deep: true,
			immediate: true,
			handler: function (newValue) {
				if (isEmpty(newValue)) {
					return false;
				}

				let _xData = []
				let _seriesData = []
				for (
					let i = 0, len = newValue.length >= 4 ? 4 : newValue.length;
					i < len;
					i++
				) {
					_xData.push(newValue[i].cate_name)
					_seriesData.push({
						value: newValue[i].number,
						name: newValue[i].cate_name,
					})
				}

				this.cdata = {
					xData: _xData,
					seriesData: _seriesData
				}
			}
		}
	},
}
</script>

<style lang="scss" scoped>
</style>