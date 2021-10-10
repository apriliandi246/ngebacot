<script>
	import HeadPost from "./HeadPost.svelte";
	import WordsPost from "./WordsPost.svelte";
	import FooterPost from "./FooterPost.svelte";

	export let postStatus;

	$: imageSource =
		postStatus === "anonym"
			? "/anonym.png"
			: "https://avatars.dicebear.com/api/croodles-neutral/apriliandi.svg?size=46";
</script>

<div class="post">
	<HeadPost {postStatus} {imageSource} />
	<WordsPost {postStatus} />
	<FooterPost {postStatus} />
</div>

<style>
	.post {
		width: 100%;
		border-radius: 3px;
		padding: 20px 22px;
		margin-bottom: 44px;
		background-color: var(--grey-50);
		border: 1px solid var(--primary-900);
	}

	@media screen and (min-width: 483px) and (max-width: 550px) {
		.post {
			padding: var(--space-16x);
		}
	}
</style>
