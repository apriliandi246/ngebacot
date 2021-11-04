<script>
	import { fade } from "svelte/transition";

	export let hideModal;

	function escapePress(event) {
		if (event.key === "Escape") {
			hideModal();
		}
	}
</script>

<svelte:window on:keydown={escapePress} />

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
		z-index: 4;
		display: flex;
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
