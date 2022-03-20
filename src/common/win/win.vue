<template>
	<el-dialog
		:title="title"
		:visible.sync="visible"
		:top="top"
		:width="width"
		:modal="true"
		:close-on-click-modal="false"
		:modal-append-to-body="true"
		:close-on-press-escape="true"
		:append-to-body="true"
		class="win"
	>
		<slot name="content"></slot>
	</el-dialog>
</template>
<script>
export default {
	name: 'Win',
	props: {
		// visible: {
		// 	type: Boolean,
		// 	default: false,
		// },
		title: {
			type: String,
			default: '窗口',
		},
		top: {
			type: String,
			default: '25vh'
		},
		width: {
			type: String,
			default: '800px',
		},
		modal: {
			type: Boolean,
			default: true,
		}

	},
	data () {
		return {
			// 窗口可见状态: false | true
			visible: false,
		}
	},
	methods: {
		open () {
			this.visible = true;
		},
		close () {
			this.visible = false;
		}
	}
}
</script>
<style lang="scss" scoped>
.win {
	::v-deep .el-dialog {
		background-color: rgba(39, 40, 34, 1);
	}

	::v-deep .el-dialog__header {
		.el-dialog__title {
			color: #fff;
		}
		.el-icon {
			font-size: 20px;
			color: #fff;
		}
	}
}
</style>