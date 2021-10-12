<script>
	export let postStatus;
</script>

{#if postStatus === "private"}
	<div class="post-private post-detail">
		<svg
			width="50"
			height="50"
			fill="none"
			stroke-width="2"
			stroke="#363a44"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	</div>
{/if}

{#if postStatus === "public" || postStatus === "anonym"}
	<div class="post-words post-detail">
		Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks
		like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a
		compile step that happens when you build your app.. Instead of using techniques like virtual DOM
		diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
	</div>
{/if}

<style>
	.post-words {
		line-height: 27px;
		padding: 10px 13px;
		border-radius: 3px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		border: 1px solid var(--primary-900);
	}

	.post-private {
		display: flex;
		border-radius: 3px;
		padding: 110px 16px;
		align-items: center;
		justify-content: center;
		background-color: var(--primary-50);
		border: 1px solid var(--primary-900);
	}

	.post-detail {
		margin-top: 14px;
		margin-bottom: 21px;
	}
</style>
