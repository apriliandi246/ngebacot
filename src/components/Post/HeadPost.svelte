<script>
	export let postStatus;
	export let imageSource;
</script>

<div class="post__head">
	<img
		width="47"
		height="47"
		loading="lazy"
		src={imageSource}
		alt="Username of the user"
		class="post__image-profile"
	/>

	<div class="post__head-data">
		{#if postStatus === "anonym"}
			<span class="post__anonym-user">Anonym</span>
		{:else}
			<a href="/#" class="post__username">username</a>
		{/if}

		<span class="post__dot">·</span>
		<span class="post__date">6 Apr</span>
	</div>
</div>

<style>
	.post__image-profile {
		border-radius: 100%;
		margin-right: var(--space-24x);
		background-color: var(--grey-200);
		border: 2px solid var(--primary-900);
	}

	.post__head {
		display: flex;
		align-items: center;
		margin-bottom: var(--space-32x);
	}

	.post__head-data {
		display: flex;
		align-items: center;
		gap: var(--space-12x);
	}

	.post__username,
	.post__anonym-user {
		padding: 4px 12px;
		border-radius: 5px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		font-size: var(--text-16x);
		font-weight: var(--semi-bold);
		border: 2px solid var(--primary-900);
	}

	.post__username:hover {
		background-color: var(--primary-50);
	}

	.post__dot {
		font-weight: var(--bold);
		font-size: var(--text-36x);
	}

	.post__date {
		padding: 2px 10px;
		border-radius: 4px;
		color: var(--grey-600);
		font-size: var(--text-14x);
		border: 2px solid var(--primary-900);
	}

	@media screen and (max-width: 550px) {
		.post__username,
		.post__anonym-user {
			font-size: 14px;
		}

		.post__date {
			font-size: 12px;
		}
	}

	@media screen and (max-width: 340px) {
		.post__image-profile {
			margin-right: var(--space-16x);
		}
	}
</style>
