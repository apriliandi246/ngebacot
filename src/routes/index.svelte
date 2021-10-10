<script>
	import { welcomeModalStatus } from "@store";
	import FormPost from "@components/FormPost.svelte";
	import Post from "@components/CardPost/index.svelte";
	import WelcomeModal from "@components/modal/WelcomeModal.svelte";
</script>

<svelte:head>
	<title>Ngebacot · Home</title>
</svelte:head>

{#if $welcomeModalStatus === "_b72n6o"}
	<WelcomeModal />
{/if}

<div class="container">
	<FormPost />

	<Post postStatus="public" />
	<Post postStatus="anonym" />
	<Post postStatus="private" />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		padding-bottom: 40px;
		flex-direction: column;
		justify-content: center;
		margin: 140px auto 0 auto;
	}

	@media screen and (max-width: 1019px) {
		.container {
			width: 700px;
		}
	}

	@media screen and (max-width: 800px) {
		.container {
			width: 100%;
			padding-left: 80px;
			padding-right: 80px;
		}
	}

	@media screen and (max-width: 700px) {
		.container {
			padding-left: 40px;
			padding-right: 40px;
		}
	}

	@media screen and (max-width: 550px) {
		.container {
			padding-left: 20px;
			padding-right: 20px;
		}
	}

	@media screen and (max-width: 480px) {
		.container {
			padding-left: 11px;
			padding-right: 11px;
			margin-top: var(--space-128x);
		}
	}

	@media screen and (min-width: 1020px) {
		.container {
			width: 740px;
		}
	}
</style>
