<script>
	import Post from "@components/Post/index.svelte";
	import FormPost from "@components/FormPost.svelte";
	import { welcomeBannerStatus, deviceSize } from "@store";
	import WelcomeBanner from "@components/WelcomeBanner.svelte";
	import FloatingButton from "@components/FloatingButton.svelte";
</script>

<svelte:head>
	{#if $welcomeBannerStatus === "_b72n6o"}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}

	<title>Ngebacot · Home</title>
</svelte:head>

{#if $welcomeBannerStatus === "_b72n6o"}
	<WelcomeBanner />
{/if}

<div class="container">
	{#if $deviceSize > 480}
		<FormPost />
	{/if}

	{#if $deviceSize <= 480}
		<FloatingButton />
	{/if}

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
		margin: 120px auto 0 auto;
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
		}
	}

	@media screen and (min-width: 1020px) {
		.container {
			width: 740px;
		}
	}
</style>
