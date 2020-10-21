<template>
	<div class="block" @tap="handlerClick">
		<div class="button" :class="[size, circle ? 'circle' : '']">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: String,
				default: 'middle'
			},
			block: {
				type: Boolean,
				default: true
			},
			circle: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		mounted() {
		},
		methods: {
			handlerClick() {
				this.$emit('trigger')
			}
		}
	}
</script>

<style lang="less">
	@import '../../theme/index.less';
	
	.block {
		display: block;
	}
	
	.button {
		display: flex;
		background-color: @color-primary;
		color: @text-color-inverse;
		font-size: @font-size-subtitle;
		align-items: center;
		justify-content: center;
		height: 50px;
		border-radius: @border-radius-base;
	}
	
	.circle {
		border-radius: 50px;
	}

	.large {}

	.middle {}

	.small {}
</style>
