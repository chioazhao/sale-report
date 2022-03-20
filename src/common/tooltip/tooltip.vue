<template>
	<el-tooltip :effect="effect" :content="content" :placement="placement">
		<i style="float: right" class="icon el-icon-question"></i>
	</el-tooltip>
</template>
<script>
export default {
	name: 'Tooltip',
	props: {
		content: {
			type: String,
			default: '',
		},
		effect: {
			type: String,
			default: 'dark',
		},
		placement: {
			type: String,
			default: 'right',
		},
	},
}
</script>
<style lang="scss" scoped>
.icon {
	margin-left: 4px;
	font-size: 16px;
	color: #868c97;
}
</style>
