<script>
	import "@style/global.css";
	import { navigating } from "$app/stores";
	import PreloadingIndicator from "@components/PreloadingIndicator.svelte";
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<slot />
