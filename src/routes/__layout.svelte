<script>
	import "@style/global.css";
	import { browser } from "$app/env";
	import { navigating, page } from "$app/stores";
	import SignOutModal from "@components/modal/SignOutModal.svelte";
	import LanguageModal from "@components/modal/LanguageModal.svelte";
	import PreloadingIndicator from "@components/PreloadingIndicator.svelte";

	import {
		scrollbarStatus,
		signoutModalStatus,
		welcomeModalStatus,
		languageModalStatus,
	} from "@store";

	if (browser) {
		if (localStorage.getItem("_1re6awj") === null) {
			$scrollbarStatus = "hide";
			$welcomeModalStatus = "_b72n6o";
			localStorage.setItem("_1re6awj", "_b72n6o");
		}
	}
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
	<PreloadingIndicator />
{/if}

{#if $signoutModalStatus === "show"}
	<SignOutModal />
{/if}

{#if $languageModalStatus === "show"}
	<LanguageModal />
{/if}

<slot />
