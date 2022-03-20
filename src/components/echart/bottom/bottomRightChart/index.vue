<template>
	<div>
		<Chart :cdata="cdata" />
	</div>
</template>

<script>
import Chart from './chart.vue'

const random = function (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default {
	data () {
		return {
			drawTiming: null,
			cdata: {
				legendData: ['盈利', '收入', '支出'],
				xAxisData: [],
				getSeriesObjMap: {
					'盈利': [],
					'收入': [],
					'支出': [],
				},
			},
			count: 0,
		}
	},
	components: {
		Chart,
	},
	mounted () {
		this.drawTimingFn();
	},
	beforeDestroy () {
		clearInterval(this.drawTiming);
	},
	methods: {
		// 轮询器
		drawTimingFn () {
			this.setData();
			this.drawTiming = setInterval(() => {
				this.setData();
			}, 10000);
		},
		setData () {
			this.count++;

			this.cdata.xAxisData.push(this.count)
			if (this.cdata.xAxisData.length > 50) {
				this.cdata.xAxisData.shift()
			}

			for (let key in this.cdata.getSeriesObjMap) {
				this.cdata.getSeriesObjMap[key].push(random(20, 80))
				if (this.cdata.getSeriesObjMap[key].length > 50) {
					this.cdata.getSeriesObjMap[key].shift()
				}
			}

			console.log(this.cdata)
		}
	}
};
</script>

<style lang="scss" scoped>
</style>