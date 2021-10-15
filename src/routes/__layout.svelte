<script>
	import "@style/global.css";
	import { onMount } from "svelte";
	import { navigating } from "$app/stores";
	import { scrollbarStatus, welcomeModalStatus } from "@store";

	let PreloadingIndicator;
	import("../components/PreloadingIndicator.svelte").then(
		(component) => (PreloadingIndicator = component.default),
	);

	onMount(() => {
		if (localStorage.getItem("_1re6awj") === null) {
			$scrollbarStatus = "hide";
			$welcomeModalStatus = "_b72n6o";
			localStorage.setItem("_1re6awj", "_b72n6o");
		}
	});
</script>

<svelte:head>
	{#if $scrollbarStatus === "hide"}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if $navigating}
	<svelte:component this={PreloadingIndicator} />
{/if}

<slot />
