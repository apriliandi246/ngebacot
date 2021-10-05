<script>
	import "@style/global.css";
	import { browser } from "$app/env";
	import { navigating, page } from "$app/stores";
	import Navbar from "@components/Navbar.svelte";
	import SimpleNavbar from "@components/SimpleNavbar.svelte";
	import PreloadingIndicator from "@components/PreloadingIndicator.svelte";
	import { welcomeBannerStatus, sideNavbarStatus, scrollBarStatus, deviceSize } from "@store";

	$: pageRoute = $page.path.split("/")[1];

	if (browser) {
		$deviceSize = window.innerWidth;

		if (localStorage.getItem("_1re6awj") === null) {
			$scrollBarStatus = "hide";
			$welcomeBannerStatus = "_b72n6o";
			localStorage.setItem("_1re6awj", "_b72n6o");
		}
	}

	function getDeviceSize(event) {
		$deviceSize = event.target.innerWidth;

		if (event.target.innerWidth > 600) {
			$sideNavbarStatus = "hide";
		}
	}
</script>

<svelte:window on:resize={getDeviceSize} />

<svelte:head>
	{#if $scrollBarStatus === "hide"}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if $navigating}
	<PreloadingIndicator />
{/if}

{#if pageRoute === "signup" || pageRoute === "signin"}
	<SimpleNavbar />
{:else if pageRoute === ""}
	<Navbar />
{:else}
	<SimpleNavbar />
{/if}

<slot />
