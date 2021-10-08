<script>
	import { fade } from "svelte/transition";

	export let hideModal;
</script>

<div
	class="modal-area"
	on:click|self={hideModal}
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 100 }}
>
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
		display: flex;
		z-index: 99999;
		position: fixed;
		align-items: center;
		justify-content: center;
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
		margin-top: 0 auto 0 auto;
		border: 6px solid var(--primary-900);
	}

	@media screen and (max-width: 1035px) {
		.modal {
			width: 86%;
		}
	}
</style>
