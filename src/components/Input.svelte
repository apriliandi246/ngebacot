<script>
	export let inputId;
	export let inputType;
	export let inputValue;
	export let inputDisabled;
	export let inputPlaceholder;

	function getInputValue(event) {
		inputValue = event.target.value;
	}
</script>

<input
	id={inputId}
	type={inputType}
	autocomplete="off"
	disabled={inputDisabled}
	on:input={getInputValue}
	placeholder={inputPlaceholder}
/>

<style>
	input {
		width: 100%;
		padding: 8px 12px;
		font-size: var(--text-16);
		transition: box-shadow 0.2s;
		border: 1px solid var(--primary-900);
	}

	input:disabled {
		background-color: var(--grey-100);
		border: 1px solid var(--primary-300);
	}

	input:focus {
		box-shadow: 0 0 0 3px var(--primary-500);
	}

	input::placeholder {
		color: var(--grey-400);
		font-size: var(--text-14x);
	}
</style>
