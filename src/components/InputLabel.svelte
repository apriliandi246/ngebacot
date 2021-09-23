<script>
	export let labelFor;
	export let labelContent;
	export let labelDisabled;
</script>

<label for={labelFor} class:disabled={labelDisabled}>{labelContent}</label>

<style>
	label {
		color: var(--grey-900);
		margin-bottom: var(--space-4x);
	}

	.disabled {
		color: var(--grey-400);
	}
</style>
