<!-- https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/lib/PreloadingIndicator.svelte -->
<script>
	import { onMount } from "svelte";

	let p = 0;
	let visible = false;

	onMount(() => {
		visible = true;

		function next() {
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}

		setTimeout(next, 250);
	});
</script>

{#if visible}
	<div class="progress-container">
		<div class="progress" style="width: {p * 100}%" />
	</div>
{/if}

{#if p >= 0.4}
	<div class="fade" />
{/if}

<style>
	.progress-container {
		top: 0;
		left: 0;
		width: 100%;
		height: 8px;
		position: fixed;
		z-index: 9999999;
	}

	.progress {
		top: 0;
		left: 0;
		height: 100%;
		position: absolute;
		transition: width 400ms;
		background-color: var(--primary-700);
	}

	.fade {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: fixed;
		z-index: 9999999;
		pointer-events: none;
		animation: fade 400ms;
		background-color: rgba(211, 181, 181, 0.2);
	}

	@keyframes fade {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
