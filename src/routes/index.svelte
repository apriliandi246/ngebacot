<script>
	import Navbar from "@components/Navbar.svelte";
	import FormPost from "@components/FormPost.svelte";
	import Post from "@components/CardPost/index.svelte";

	import {
		scrollbarStatus,
		signoutModalStatus,
		welcomeModalStatus,
		languageModalStatus,
		focusFormInputStatus,
	} from "@store";

	let WelcomeModal;
	import("../components/Modal/WelcomeModal.svelte").then(
		(component) => (WelcomeModal = component.default),
	);

	let LanguageModal;
	import("../components/Modal/LanguageModal.svelte").then(
		(component) => (LanguageModal = component.default),
	);

	let SignOutModal;
	import("../components/Modal/SignOutModal.svelte").then(
		(component) => (SignOutModal = component.default),
	);

	function focusOut() {
		$scrollbarStatus = "show";
		$focusFormInputStatus = "focusOut";
	}
</script>

<svelte:head>
	<title>Ngebacot · Home</title>
</svelte:head>

{#if $welcomeModalStatus === "_b72n6o"}
	<svelte:component this={WelcomeModal} />
{/if}

{#if $languageModalStatus === "show"}
	<svelte:component this={LanguageModal} />
{/if}

{#if $signoutModalStatus === "show"}
	<svelte:component this={SignOutModal} />
{/if}

{#if $focusFormInputStatus === "focusIn"}
	<div class="bg-dark" on:click={focusOut} />
{/if}

<main class="container">
	<header class="header">
		<Navbar />
		<FormPost />
	</header>

	<div class="posts">
		<Post postStatus="public" />
		<Post postStatus="anonym" />
		<Post postStatus="private" />
	</div>
</main>

<style>
	.container {
		display: flex;
		position: relative;
		align-items: center;
		padding-bottom: 40px;
		flex-direction: column;
		justify-content: center;
		margin: var(--space-32x) auto 0 auto;
	}

	.header {
		top: 0;
		z-index: 2;
		width: inherit;
		position: fixed;
	}

	.posts {
		margin-top: 150px;
	}

	.bg-dark {
		inset: 0;
		z-index: 1;
		position: fixed;
		background-color: rgba(54, 58, 68, 0.6);
	}

	@media screen and (max-width: 1019px) {
		.container {
			width: 700px;
		}
	}

	@media screen and (max-width: 800px) {
		.container {
			width: 100%;
			padding: 0 80px;
		}
	}

	@media screen and (max-width: 700px) {
		.container {
			padding: 0 40px;
		}
	}

	@media screen and (max-width: 550px) {
		.container {
			padding: 0 20px;
		}
	}

	@media screen and (max-width: 480px) {
		.container {
			padding: 0 11px;
			margin-top: var(--space-128x);
		}
	}

	@media screen and (min-width: 1020px) {
		.container {
			width: 740px;
		}
	}
</style>
