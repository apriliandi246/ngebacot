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
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet. Hic provident dolore
		eveniet sint commodi error eius perspiciatis, tempora eos mollitia voluptatibus aperiam
		molestias quas sequi, consequatur alias nemo necessitatibus quo ratione id exercitationem sit?
		Aspernatur tenetur iure labore iusto, iste quo distinctio suscipit reiciendis temporibus facere
		laboriosam voluptas aliquid magni id debitis dignissimos nisi mollitia fugit nostrum consectetur
		doloremque dolorum hic! Omnis eum praesentium dolor illo obcaecati cumque.
	</div>
{/if}

<style>
	.post__words {
		padding: 10px 13px;
		line-height: 28px;
		border-radius: 5px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		border: 2px solid var(--primary-900);
	}

	.post__private {
		padding: 16px;
		border-radius: 5px;
		margin-bottom: var(--space-24x);
		border: 2px solid var(--primary-900);
	}

	.large-block {
		width: 100%;
		height: 32px;
		border-radius: 5px;
		margin-bottom: 17px;
		background-color: var(--primary-200);
	}

	.large-block:last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 550px) {
		.post__words {
			line-height: 24px;
		}
	}

	@media screen and (max-width: 493px) {
		.large-block {
			height: 26px;
		}
	}
</style>
