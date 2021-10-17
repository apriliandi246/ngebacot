<script>
	import HeadPost from "./Head.svelte";
	import WordsPost from "./Words.svelte";
	import FooterPost from "./Footer.svelte";

	let postStatus = "public";

	$: imageSource =
		postStatus === "anonym"
			? "https://iili.io/5BkbSe.png"
			: "https://avatars.dicebear.com/api/croodles-neutral/apriliandi.svg?size=46";
</script>

<div class="post">
	<HeadPost {postStatus} {imageSource} />
	<WordsPost />
	<FooterPost {postStatus} />
</div>

<style>
	.post {
		width: 100%;
		border-radius: 3px;
		padding: 20px 22px;
		background-color: var(--grey-50);
		border: 1px solid var(--primary-900);
	}

	@media screen and (min-width: 483px) and (max-width: 550px) {
		.post {
			padding: var(--space-16x);
		}
	}
</style>
