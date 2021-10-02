<script>
	import { wordsOfPost } from "@store";

	let statusPost;

	function selectStatusPost(status) {
		statusPost = status;
	}
</script>

<div class="container">
	<form class="form">
		<textarea
			rows="7"
			spellcheck="false"
			autocomplete="off"
			class="form__input"
			bind:value={$wordsOfPost}
			placeholder="Write what you think ????"
		/>

		<div class="modal__post-status">
			<div class="modal__status-input" class:emphasize-border-color={statusPost === "public"}>
				<div class="radio-input">
					<input
						id="public"
						type="radio"
						name="status"
						value="public"
						on:change={() => selectStatusPost("public")}
					/>

					<div class="radio-input-dot" class:radio-input-selected={statusPost === "public"} />
				</div>

				<svg
					width="22"
					height="22"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					stroke={statusPost === "public" ? "#363a44" : "#86888e"}
				>
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>

				<label for="public" class:emphasize-color={statusPost === "public"}>Public Post</label>
			</div>

			<div class="modal__status-input" class:emphasize-border-color={statusPost === "anonym"}>
				<div class="radio-input">
					<input
						id="anonym"
						type="radio"
						name="status"
						value="anonym"
						on:change={() => selectStatusPost("anonym")}
					/>

					<div class="radio-input-dot" class:radio-input-selected={statusPost === "anonym"} />
				</div>

				<svg
					width="22"
					height="22"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					stroke={statusPost === "anonym" ? "#363a44" : "#86888e"}
				>
					<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					<circle cx="8.5" cy="7" r="4" />
					<line x1="18" y1="8" x2="23" y2="13" />
					<line x1="23" y1="8" x2="18" y2="13" />
				</svg>

				<label for="anonym" class:emphasize-color={statusPost === "anonym"}>Anonym Post</label>
			</div>

			<div class="modal__status-input" class:emphasize-border-color={statusPost === "private"}>
				<div class="radio-input">
					<input
						id="private"
						type="radio"
						name="status"
						value="private"
						on:change={() => selectStatusPost("private")}
					/>

					<div class="radio-input-dot" class:radio-input-selected={statusPost === "private"} />
				</div>

				<svg
					width="22"
					height="22"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					stroke={statusPost === "private" ? "#363a44" : "#86888e"}
				>
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</svg>

				<label for="private" class:emphasize-color={statusPost === "private"}> Private Post </label>
			</div>
		</div>

		<button type="submit" class="modal__submit-btn">Add Post</button>
	</form>
</div>

<style>
	label {
		cursor: pointer;
		color: var(--grey-400);
		font-size: var(--text-14x);
	}

	input[type="radio"] {
		width: 22px;
		height: 22px;
		cursor: pointer;
		appearance: none;
		margin-right: 6px;
		position: relative;
		-ms-progress-appearance: none;
	}

	input[type="radio"]::before {
		width: 100%;
		content: "";
		height: 100%;
		position: absolute;
		border-radius: 100%;
		background-color: #eaebec;
		border: 1px solid var(--primary-500);
	}

	.container {
		width: 100%;
		border-radius: 5px;
		padding: var(--space-24x);
		margin-bottom: var(--space-48x);
		background-color: var(--grey-50);
		border: 2px solid var(--primary-900);
	}

	.form__input {
		width: 100%;
		line-height: 28px;
		border-radius: 5px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		padding: var(--space-16x);
		font-size: var(--text-16x);
		transition: box-shadow 0.2s;
		border: 2px solid var(--grey-900);
	}

	.form__input:focus {
		box-shadow: 0 0 0 1px var(--primary-900);
	}

	.form__input::placeholder {
		color: var(--grey-600);
		font-size: var(--text-16x);
	}

	.form__input::-webkit-scrollbar {
		width: 12px;
	}

	.form__input::-webkit-scrollbar-track {
		background-color: var(--grey-100);
	}

	.form__input::-webkit-scrollbar-thumb {
		background-color: var(--primary-900);
	}

	.form__input::-webkit-scrollbar-thumb:hover {
		background-color: var(--primary-800);
	}

	.modal__post-status {
		display: flex;
		margin-bottom: 30px;
		margin-top: var(--space-24x);
		justify-content: space-between;
	}

	.modal__status-input {
		display: flex;
		border-radius: 5px;
		padding: 10px 14px;
		align-items: center;
		gap: var(--space-8x);
		border: 2px solid var(--primary-500);
	}

	.modal__submit-btn {
		border: none;
		font-size: var(--text-16x);
		padding: 6px var(--space-32x);
		transition: background-color 0.1s;
	}

	.modal__submit-btn {
		float: right;
		color: var(--grey-50);
		background-color: var(--primary-900);
	}

	.modal__submit-btn:hover {
		background-color: var(--primary-800);
	}

	.radio-input {
		display: flex;
		position: relative;
	}

	.radio-input-dot {
		cursor: pointer;
	}

	.radio-input-selected {
		top: 0;
		width: 12px;
		height: 12px;
		margin-top: 5px;
		margin-left: 5.2px;
		position: absolute;
		border-radius: 100%;
		background-color: #363a44;
	}

	.emphasize-color {
		color: var(--grey-900);
	}

	.emphasize-border-color {
		border-color: var(--primary-000);
	}

	@media screen and (max-width: 780px) {
		.container {
			padding: 20px;
		}

		.modal__post-status {
			flex-direction: column;
		}

		.modal__status-input {
			margin-bottom: var(--space-24x);
		}

		.modal__status-input:last-child {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: 550px) {
		.form__input {
			font-size: 14px;
			line-height: 23px;
		}

		.form__input::placeholder {
			font-size: 14px;
		}

		.modal__submit-btn {
			font-size: 15px;
		}
	}

	@media screen and (max-width: 460px) {
		.container {
			padding: 16px;
		}
	}
</style>
