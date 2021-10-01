<script>
	import "@style/global.css";
	import { browser } from "$app/env";
	import { welcomeBannerStatus } from "@store";
	import { navigating, page } from "$app/stores";
	import Navbar from "@components/Navbar.svelte";
	import AuthenticationNav from "@components/AuthenticationNav.svelte";
	import PreloadingIndicator from "@components/PreloadingIndicator.svelte";

	$: pageRoute = $page.path.split("/")[1];

	if (browser) {
		if (localStorage.getItem("_welcome-banner") === null) {
			$welcomeBannerStatus = "show";
			localStorage.setItem("_welcome-banner", "show");
		}
	}
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

{#if pageRoute === "signup" || pageRoute === "signin"}
	<AuthenticationNav />
{:else if pageRoute === ""}
	<Navbar />
{:else}
	<AuthenticationNav />
{/if}

<slot />
