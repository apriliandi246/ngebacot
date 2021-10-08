<script>
	export let hideModal;
</script>

<div on:click|self={hideModal} class="modal-area">
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.modal-area {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99999;
		position: fixed;
		background-color: rgba(54, 58, 68, 0.4);
	}

	.modal {
		width: 650px;
		display: flex;
		position: relative;
		border-radius: 14px;
		align-items: center;
		flex-direction: column;
		background-color: #fff;
		justify-content: center;
		border: 6px solid var(--primary-900);
	}

	@media screen and (max-width: 1035px) {
		.modal {
			width: 86%;
		}
	}
</style>
