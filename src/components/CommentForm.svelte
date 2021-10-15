<script>
	import relativeTextareaHeight from "@actions/relativeTextareaHeight";

	let comment = "";

	function cancelComment() {
		comment = "";
	}
</script>

<form class="form" spellcheck="false" autocomplete="off">
	<img
		width="50"
		height="50"
		alt="Username"
		loading="lazy"
		class="user-img-profile"
		src="https://avatars.dicebear.com/api/croodles-neutral/apriliandi.svg?size=50"
	/>

	<div class="form-menus">
		<textarea
			rows="1"
			class="form__input"
			bind:value={comment}
			placeholder="Write a comment...."
			use:relativeTextareaHeight={comment}
		/>

		{#if comment.trim() !== ""}
			<div class="form-buttons">
				<button type="button" class="btn-cancel form-btn" on:click={cancelComment}> Cancel </button>

				<button type="submit" class="btn-sumbit form-btn">Comment</button>
			</div>
		{/if}
	</div>
</form>

<style>
	.form {
		display: flex;
		margin-bottom: 30px;
		align-items: center;
	}

	.user-img-profile {
		font-size: 13px;
		overflow: hidden;
		border-radius: 100%;
		align-self: flex-start;
		color: var(--primary-900);
		margin-right: var(--space-16x);
		background-color: var(--grey-200);
		border: 1px solid var(--primary-900);
	}

	.form-menus {
		width: 100%;
	}

	.form__input {
		width: 100%;
		resize: none;
		height: 52px;
		font-size: 15px;
		overflow: hidden;
		padding: 8px 12px;
		line-height: 28px;
		border-radius: 3px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		transition: box-shadow 100ms;
		border: 1px solid var(--primary-900);
	}

	.form__input:focus {
		box-shadow: 0 0 0 1px var(--primary-900);
	}

	.form__input::placeholder {
		font-size: 15px;
	}

	.form-buttons {
		display: flex;
		align-self: center;
		justify-content: flex-end;
		margin-top: var(--space-8x);
	}

	.btn-sumbit {
		color: var(--grey-50);
		background-color: var(--primary-800);
	}

	.btn-sumbit:hover {
		background-color: var(--primary-900);
	}

	.btn-cancel {
		color: #000;
		background-color: transparent;
		margin-right: var(--space-16x);
	}

	.btn-cancel:hover {
		background-color: var(--grey-100);
	}

	.form-btn {
		border: none;
		padding: 8px 18px;
		font-size: var(--text-14x);
		transition: background-color 100ms;
	}
</style>
