<script>
	import HeadPost from "./HeadPost.svelte";
	import WordsPost from "./WordsPost.svelte";
	import FooterPost from "./FooterPost.svelte";

	export let postStatus;

	$: imageSource =
		postStatus === "anonym"
			? "/anonym.png"
			: "https://avatars.dicebear.com/api/croodles-neutral/apriliandi.svg?size=47";
</script>

<div class="post">
	<HeadPost {postStatus} {imageSource} />
	<WordsPost {postStatus} />
	<FooterPost {postStatus} />
</div>

<style>
	.post {
		width: 100%;
		border-radius: 5px;
		padding: 20px 22px;
		margin-bottom: 44px;
		background-color: var(--grey-50);
		border: 2px solid var(--primary-900);
	}

	@media screen and (max-width: 550px) {
		.post {
			padding: var(--space-16x);
		}
	}
</style>
