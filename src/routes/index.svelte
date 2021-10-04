<script>
	import { fly } from "svelte/transition";
	import Post from "@components/Post/index.svelte";
	import FormPost from "@components/FormPost.svelte";
	import { welcomeBannerStatus, deviceSize } from "@store";
	import WelcomeBanner from "@components/WelcomeBanner.svelte";
	import FloatingButton from "@components/FloatingButton.svelte";

	let mobileFormStatus = false;

	function toogleFormStatus() {
		if (mobileFormStatus) {
			mobileFormStatus = false;
		} else {
			mobileFormStatus = true;
		}
	}
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
		<div class="form-post">
			<FormPost />
		</div>
	{/if}

	{#if $deviceSize <= 480}
		<FloatingButton {toogleFormStatus} />

		{#if mobileFormStatus}
			<div
				class="mobile-form"
				in:fly={{ y: 140, duration: 200 }}
				out:fly={{ y: 140, duration: 100 }}
			>
				<svg
					width="30"
					height="30"
					fill="none"
					stroke-width="2"
					stroke="#363a44"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mobile-for__close"
					on:click={toogleFormStatus}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="12" cy="12" r="10" />
					<line x1="15" y1="9" x2="9" y2="15" />
					<line x1="9" y1="9" x2="15" y2="15" />
				</svg>

				<FormPost />
			</div>
		{/if}
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
		margin: 140px auto 0 auto;
	}

	.mobile-form {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999999;
		position: fixed;
		padding: var(--space-16x);
		background-color: var(--grey-50);
	}

	.mobile-for__close {
		cursor: pointer;
		margin-top: 12px;
		margin-bottom: var(--space-32x);
	}

	.form-post {
		width: 100%;
		padding: 20px;
		border-radius: 3px;
		margin-bottom: var(--space-32x);
		background-color: var(--grey-50);
		border: 1px solid var(--primary-900);
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
