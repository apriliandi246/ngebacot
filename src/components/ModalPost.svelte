<script>
	import { wordsOfPost, modalPostStatus } from "@store";

	let statusPost;

	function hideModalPost() {
		$modalPostStatus = "hide";
	}

	function selectStatusPost(status) {
		statusPost = status;
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
				autocomplete="off"
				class="modal__input"
				bind:value={$wordsOfPost}
				placeholder="Write what you think ????"
			/>

			<div class="modal__post-status">
				<div class="modal__status-input" on:click={() => selectStatusPost("public")}>
					<input type="radio" id="public" name="status" value="public" />

					<svg
						width="22"
						height="22"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "public" ? "#f9fafb" : "#9ca3af"}
					>
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M16 3.13a4 4 0 0 1 0 7.75" />
					</svg>

					<label for="public" class:emphasize-color={statusPost === "public"}>Public Post</label>
				</div>

				<div class="modal__status-input" on:click={() => selectStatusPost("anonym")}>
					<input type="radio" id="anonym" name="status" value="anonym" />

					<svg
						width="22"
						height="22"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "anonym" ? "#f9fafb" : "#9ca3af"}
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="8.5" cy="7" r="4" />
						<line x1="18" y1="8" x2="23" y2="13" />
						<line x1="23" y1="8" x2="18" y2="13" />
					</svg>

					<label for="anonym" class:emphasize-color={statusPost === "anonym"}>Anonym Post</label>
				</div>

				<div class="modal__status-input" on:click={() => selectStatusPost("private")}>
					<input type="radio" id="private" name="status" value="private" />

					<svg
						width="22"
						height="22"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "private" ? "#f9fafb" : "#9ca3af"}
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>

					<label for="private" class:emphasize-color={statusPost === "private"}>
						Private Post
					</label>
				</div>
			</div>

			<div class="modal__buttons">
				<button type="button" class="modal__cancel-btn" on:click={hideModalPost}>Cancel</button>
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
		margin-right: 6px;
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
		background-color: rgba(0, 0, 0, 0.3);
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

	.modal__input {
		width: 100%;
		border: none;
		resize: none;
		border-radius: 0;
		line-height: 28px;
		letter-spacing: 0.5px;
		color: var(--grey-50);
		padding: var(--space-16x);
		font-size: var(--text-16x);
		background-color: transparent;
		border-bottom: 4px dashed var(--grey-400);
	}

	.modal__input::placeholder {
		color: var(--grey-400);
		font-size: var(--text-16x);
	}

	.modal__post-status {
		display: flex;
		margin-top: var(--space-32x);
		justify-content: space-around;
	}

	.modal__status-input {
		display: flex;
		cursor: pointer;
		align-items: center;
		gap: var(--space-8x);
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

	.modal__cancel-btn {
		color: var(--grey-900);
		background-color: var(--grey-200);
	}

	.modal__submit-btn:hover {
		background-color: var(--primary-600);
	}

	.modal__cancel-btn:hover {
		background-color: var(--grey-100);
	}

	.emphasize-color {
		color: var(--grey-50);
	}
</style>
