<script>
	import { modalPostStatus } from "@store";

	let statusPost;

	function hideModalPost() {
		$modalPostStatus = "hide";
	}

	function chooseStatusPost(event) {
		statusPost = event.target.value;
	}
</script>

<div class="modal-area" on:click|self={hideModalPost}>
	<div class="modal">
		<svg
			width="28"
			height="28"
			fill="none"
			stroke="#f9fafb"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			on:click={hideModalPost}
			class="modal__close-icon"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>

		<form class="modal__form">
			<textarea
				rows="14"
				spellcheck="false"
				class="modal__input"
				placeholder="What do you think ????"
			/>

			<div class="modal__post-status">
				<div class="modal__status-input">
					<input
						type="radio"
						id="public"
						name="status"
						value="public"
						on:change={chooseStatusPost}
					/>

					<label class:emphasize-color={statusPost === "public"} for="public">Public Post</label>
				</div>

				<div class="modal__status-input">
					<input
						type="radio"
						id="anonym"
						name="status"
						value="anonym"
						on:change={chooseStatusPost}
					/>

					<label class:emphasize-color={statusPost === "anonym"} for="anonym">Anonym Post</label>
				</div>

				<div class="modal__status-input">
					<input
						type="radio"
						id="private"
						name="status"
						value="private"
						on:change={chooseStatusPost}
					/>

					<label class:emphasize-color={statusPost === "private"} for="private">
						Private Post
					</label>
				</div>
			</div>

			<div class="modal__buttons">
				<button on:click={hideModalPost} type="button" class="modal__cancel-btn">Cancel</button>
				<button type="submit" class="modal__submit-btn">Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	label {
		cursor: pointer;
		color: var(--grey-400);
		font-size: var(--text-14x);
	}

	input[type="radio"] {
		width: 18px;
		height: 18px;
		cursor: pointer;
	}

	.modal-area {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal {
		width: 760px;
		border-radius: 5px;
		background-color: var(--primary-900);
		padding: var(--space-24x) var(--space-24x);
	}

	.modal__close-icon {
		cursor: pointer;
		transition: stroke 0.1s;
		margin-top: var(--space-4x);
	}

	.modal__close-icon:hover {
		stroke: var(--grey-400);
	}

	.modal__form {
		width: 100%;
		margin-top: var(--space-24x);
	}

	.modal__post-status {
		display: flex;
		justify-content: space-evenly;
		margin-top: var(--space-24x);
	}

	.modal__status-input {
		display: flex;
		gap: var(--space-8x);
		align-items: center;
	}

	.modal__input {
		width: 100%;
		border: none;
		resize: none;
		border-radius: 0;
		color: var(--grey-50);
		padding: var(--space-16x);
		font-size: var(--text-16x);
		background-color: transparent;
		border-bottom: 2px solid var(--grey-400);
	}

	.modal__input::-webkit-scrollbar {
		width: 12px;
	}

	.modal__input::-webkit-scrollbar-track {
		background-color: var(--grey-100);
	}

	.modal__input::-webkit-scrollbar-thumb {
		cursor: default;
		background-color: var(--primary-600);
	}

	.modal__input::-webkit-scrollbar-thumb:hover {
		cursor: default;
		background-color: var(--primary-500);
	}

	.modal__input::placeholder {
		color: var(--grey-400);
		font-size: var(--text-16x);
	}

	.modal__buttons {
		display: flex;
		align-items: center;
		gap: var(--space-24x);
		justify-content: flex-end;
		margin-top: var(--space-48x);
		margin-right: var(--space-16x);
	}

	.modal__cancel-btn,
	.modal__submit-btn {
		border: none;
		font-size: var(--text-16x);
		padding: 6px var(--space-32x);
		transition: background-color 0.1s;
	}

	.modal__submit-btn {
		color: var(--grey-50);
		background-color: var(--primary-700);
	}

	.modal__submit-btn:hover {
		background-color: var(--primary-600);
	}

	.modal__cancel-btn {
		color: var(--grey-900);
		background-color: var(--grey-200);
	}

	.modal__cancel-btn:hover {
		background-color: var(--grey-100);
	}

	.emphasize-color {
		font-size: 15px;
		color: var(--grey-50);
	}
</style>
