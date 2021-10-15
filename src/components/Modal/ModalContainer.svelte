<script>
	import { fade } from "svelte/transition";

	export let hideModal;
</script>

<div
	class="modal-area"
	on:click|self={hideModal}
	in:fade={{ duration: 120 }}
	out:fade={{ duration: 100 }}
>
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.modal-area {
		inset: 0;
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
		border-radius: 6px;
		align-items: center;
		flex-direction: column;
		background-color: #fff;
		justify-content: center;
		border: 5px solid var(--primary-900);
	}

	@media screen and (max-width: 1035px) {
		.modal {
			width: 86%;
		}
	}
</style>
