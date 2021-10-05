<script>
	import { fly } from "svelte/transition";
	import FormPost from "./FormPost.svelte";

	export let toggleFormStatus;
</script>

<div in:fly={{ y: 140, duration: 180 }} out:fly={{ y: 140, duration: 120 }}>
	<svg
		width="30"
		height="30"
		fill="none"
		stroke-width="2"
		stroke="#363a44"
		viewBox="0 0 24 24"
		stroke-linecap="round"
		stroke-linejoin="round"
		on:click={toggleFormStatus}
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="12" cy="12" r="10" />
		<line x1="15" y1="9" x2="9" y2="15" />
		<line x1="9" y1="9" x2="15" y2="15" />
	</svg>

	<FormPost />
</div>

<style>
	div {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 14px;
		z-index: 999999;
		position: fixed;
		background-color: var(--grey-50);
	}

	svg {
		cursor: pointer;
		margin-top: 12px;
		margin-bottom: 30px;
	}
</style>
