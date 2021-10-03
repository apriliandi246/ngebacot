<script>
	export let postStatus;
	export let imageSource;

	$: imgAlt = postStatus === "anonym" ? "Anonym user" : "Username of the user";
</script>

<div class="post__head">
	<img
		width="47"
		height="47"
		alt={imgAlt}
		loading="lazy"
		src={imageSource}
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
	.post__head {
		display: flex;
		align-items: center;
	}

	.post__image-profile {
		font-size: 13px;
		overflow: hidden;
		border-radius: 100%;
		color: var(--primary-900);
		margin-right: var(--space-24x);
		background-color: var(--grey-200);
		border: 1px solid var(--primary-900);
	}

	.post__head-data {
		display: flex;
		align-items: center;
	}

	.post__username,
	.post__anonym-user {
		padding: 4px 12px;
		border-radius: 3px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		font-size: var(--text-16x);
		font-weight: var(--semi-bold);
		border: 1px solid var(--primary-900);
	}

	.post__username:hover {
		background-color: var(--primary-50);
	}

	.post__dot {
		margin-left: 12px;
		margin-right: 12px;
		font-weight: var(--bold);
		font-size: var(--text-36x);
	}

	.post__date {
		padding: 2px 10px;
		border-radius: 3px;
		color: var(--grey-600);
		font-size: var(--text-14x);
		border: 1px solid var(--primary-900);
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
