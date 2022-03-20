<template>
	<div class="toolbar"></div>
</template>
<script>
export default {
	name: 'Toolbar',
}
</script>
<style lang="scss" scoped>
.toolbar {
	width: 100%;
	height: 40px;
	float: right;
	::v-deep .el-button--primary {
		color: #fff;
		background-color: #177ddc;
		border-color: #177ddc;
	}
}
</style>