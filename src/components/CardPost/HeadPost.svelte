<script>
	export let postStatus;
	export let imageSource;

	$: imgAlt = postStatus === "anonym" ? "Anonym user" : "Username of the user";
</script>

<div class="post-head">
	<img
		width="46"
		height="46"
		alt={imgAlt}
		loading="lazy"
		src={imageSource}
		class="post-head__img-profile"
	/>

	{#if postStatus === "anonym"}
		<span class="post-user">Anonym</span>
	{/if}

	{#if postStatus === "public" || postStatus === "private"}
		<a href="/user/_apriliandi_" class="post__username post-user">_apriliandi_</a>
	{/if}

	<span class="middle-dot">·</span>
	<span class="post-head__date">6 Apr</span>
</div>

<style>
	.post-head {
		display: flex;
		align-items: center;
	}

	.post-head__img-profile {
		font-size: 13px;
		overflow: hidden;
		margin-right: 18px;
		border-radius: 100%;
		color: var(--primary-900);
		background-color: var(--grey-200);
		border: 1px solid var(--primary-900);
	}

	.post__username:hover {
		background-color: var(--primary-50);
	}

	.post-head__date {
		padding: 2px 10px;
		border-radius: 3px;
		color: var(--grey-600);
		font-size: var(--text-14x);
		border: 1px solid var(--primary-900);
	}

	.middle-dot {
		margin: 0 12px;
		font-weight: 500;
		font-size: var(--text-36x);
	}

	.post-user {
		font-weight: 600;
		padding: 4px 12px;
		border-radius: 3px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		font-size: var(--text-16x);
		border: 1px solid var(--primary-900);
	}
</style>
