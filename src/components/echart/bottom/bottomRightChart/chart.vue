<template>
	<div>
		<Echart
			:options="options"
			id="centreLeft1Chart"
			height="440px"
			width="100%"
		></Echart>
	</div>
</template>

<script>
import Echart from '@/common/echart'

const options = {
	tooltip: {
		trigger: 'axis',
		backgroundColor: "rgba(255,255,255,0.1)",
		// axisPointer: {
		// 	type: 'cross',
		// 	label: {
		// 		backgroundColor: '#6a7985'
		// 	}
		// }
	},
	legend: {
		data: []
	},
	grid: {
		x: "8%",
		width: "88%",
		y: "4%"
	},
	xAxis: [
		{
			type: 'category',
			boundaryGap: false,
			data: [],
		}
	],
	yAxis: [
		{
			type: 'value'
		}
	],
	series: [

	]
};

const getSeriesObj = function ({ name, data }) {
	return {
		name: name,
		type: 'line',
		smooth: true,
		emphasis: {
			focus: 'series'
		},
		data: data
	}
};

export default {
	data () {
		return {
			options: options,
		};
	},
	components: {
		Echart,
	},
	props: {
		cdata: {
			type: Object,
			default: () => ({})
		},
	},
	watch: {
		cdata: {
			deep: true,
			handler (newData) {
				// console.log(newData)
				// if (options.legend.data.length === 0) {
				options.legend.data = newData.legendData
				// }
				options.xAxis[0].data = newData.xAxisData
				options.series = []
				for (let key in newData.getSeriesObjMap) {
					options.series.push(getSeriesObj({ name: key, data: newData.getSeriesObjMap[key] }))
				}

				this.options = options

			},
		}
	}
};
</script>