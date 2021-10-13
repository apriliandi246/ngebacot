<script context="module">
	export async function load({ page }) {
		const postId = page.params.id;

		return {
			props: {
				postId,
			},
		};
	}
</script>

<script>
	import Logo from "@components/Logo.svelte";
	import CommentPost from "@components/CommentPost.svelte";
	import CommentForm from "@components/CommentForm.svelte";
	import Post from "@components/DetailCardPost/index.svelte";

	export let postId;
</script>

<svelte:head>
	<title>Username · {postId}</title>
</svelte:head>

<main class="container">
	<nav class="navbar">
		<Logo />
	</nav>

	<div class="post-detail">
		<Post postStatus="public" />

		<hr class="dive-line" />

		<CommentForm />
		<CommentPost />
		<CommentPost />
		<CommentPost />
		<CommentPost />
		<CommentPost />
		<CommentPost />
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

	.navbar {
		top: 0;
		z-index: 999;
		height: 65px;
		display: flex;
		width: inherit;
		position: fixed;
		align-items: center;
		justify-content: center;
		background-color: var(--primary-900);
	}

	.post-detail {
		margin-top: 31px;
	}

	.dive-line {
		margin: 60px 0;
		border: 1px solid var(--primary-400);
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
