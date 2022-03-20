<template>
	<div class="scroll-wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'Scroll',
	props: {
		data: {
			type: Array,
			default: null
		},
		probeType: {
			type: Number,
			default: 1
		},
		bounceTime: {
			type: Number,
			default: 800
		}
	},
	mounted () {
		setTimeout(() => {
			this.initScroll()
		}, 20)
	},
	activated () {
		this.refresh()
	},
	data () {
		return {
			timer: null,
			scroll: null,
		}
	},
	methods: {
		initScroll () {
			if (!this.$refs.wrapper) return
			this.scroll = new BScroll(this.$refs.wrapper, {
				probeType: this.probeType,
				bounceTime: this.bounceTime,
				mouseWheel: true,
				// preventDefault: true,
			})
		},
		refresh () {
			this.scroll && this.scroll.refresh()
		},
	},
	watch: {
		data () {
			setTimeout(() => {
				this.refresh()
			}, 20);
		}
	}
}
</script>

<style lang="scss" scoped>
.scroll-wrapper {
	width: 100%;
	height: 100%;
}
</style>