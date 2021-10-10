<script>
	export let postStatus;
</script>

{#if postStatus === "private"}
	<div class="post__private">
		<div class="large-block" />
		<div class="large-block" />
		<div class="large-block" />
		<div class="large-block" />
		<div class="large-block" />
	</div>
{/if}

{#if postStatus === "public" || postStatus === "anonym"}
	<div class="post__words">
		Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks
		like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a
		compile step that happens when you build your app.. Instead of using techniques like virtual DOM
		diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
	</div>
{/if}

<style>
	.post__words {
		line-height: 27px;
		padding: 10px 13px;
		border-radius: 3px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		border: 1px solid var(--primary-900);
	}

	.post__private {
		padding: 16px;
		border-radius: 3px;
		border: 1px solid var(--primary-900);
	}

	.post__words,
	.post__private {
		margin-top: 14px;
		margin-bottom: 21px;
	}

	.large-block {
		width: 100%;
		height: 32px;
		border-radius: 3px;
		margin-bottom: 17px;
		background-color: var(--primary-800);
	}

	.large-block:last-child {
		margin-bottom: 0;
	}

	@media screen and (min-width: 483px) and (max-width: 550px) {
		.large-block {
			height: 26px;
		}
	}
</style>
