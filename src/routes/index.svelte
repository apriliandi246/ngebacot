<script>
	import { modalPostStatus } from "@store";
	import Post from "@components/Post.svelte";
	import ModalPost from "@components/ModalPost.svelte";
</script>

<svelte:head>
	{#if $modalPostStatus === "show"}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}

	<title>Ngebacot</title>
</svelte:head>

{#if $modalPostStatus === "show"}
	<ModalPost />
{/if}

<div class="container">
	<Post statusPost="public" />
	<Post statusPost="anonym" />
	<Post statusPost="private" />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		padding-bottom: 40px;
		flex-direction: column;
		justify-content: center;
		margin: 160px auto 0 auto;
	}

	@media screen and (max-width: 620px) {
		.container {
			margin-top: 134px;
		}
	}

	@media screen and (min-width: 320px) {
		.container {
			padding-left: 0;
			padding-right: 0;
		}
	}

	@media screen and (min-width: 480px) {
		.container {
			padding-left: var(--space-18x);
			padding-right: var(--space-18x);
		}
	}

	@media screen and (min-width: 768px) {
		.container {
			padding-left: var(--space-24x);
			padding-right: var(--space-24x);
		}
	}

	@media screen and (min-width: 1020px) {
		.container {
			width: 640px;
		}
	}

	@media screen and (min-width: 1200px) {
		.container {
			width: 740px;
		}
	}
</style>
