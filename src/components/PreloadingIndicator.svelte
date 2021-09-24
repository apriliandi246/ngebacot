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
		height: 6px;
		z-index: 999;
		position: fixed;
	}

	.progress {
		top: 0;
		left: 0;
		height: 100%;
		position: absolute;
		transition: width 0.4s;
		background-color: var(--primary-400);
	}

	.fade {
		width: 100%;
		height: 100%;
		z-index: 998;
		position: fixed;
		pointer-events: none;
		animation: fade 0.4s;
		background-color: rgba(211, 181, 181, 0.3);
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
