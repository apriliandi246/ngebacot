<script>
	import focusEvents from "@actions/focusEvents";
	import { focusFormInputStatus, scrollbarStatus } from "@store";

	let textareaValue = "";
	let statusPost = "public";

	function selectStatusPost(status) {
		statusPost = status;
	}

	$: if ($focusFormInputStatus === "focusOut") textareaValue = "";

	function cancelPost() {
		textareaValue = "";
		window.scrollTo(0, 0);
		$scrollbarStatus = "show";
		$focusFormInputStatus = "focusOut";
	}
</script>

<div class="form-post">
	<form class="form">
		<textarea
			id="textarea"
			use:focusEvents
			spellcheck="false"
			autocomplete="off"
			class="form__input"
			bind:value={textareaValue}
			placeholder="Write what you think ????"
			rows={$focusFormInputStatus === "focusIn" ? "15" : "1"}
		/>

		{#if textareaValue.trim() !== ""}
			<div class="form__post-status">
				<div class="form__status-input" class:emphasize-border-color={statusPost === "public"}>
					<div class="radio-input">
						<input
							id="public"
							type="radio"
							name="status"
							value="public"
							class="input-radio"
							on:change={() => selectStatusPost("public")}
						/>

						<div class="radio-input-dot" class:radio-input-selected={statusPost === "public"} />
					</div>

					<svg
						class="form-icon"
						width="22"
						height="22"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "public" ? "#363a44" : "#86888e"}
					>
						<circle cx="9" cy="7" r="4" />
						<path d="m16 3.13a4 4 0 0 1 0 7.75" />
						<path d="m23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					</svg>

					<label for="public" class="status-name" class:emphasize-color={statusPost === "public"}>
						Public Post
					</label>
				</div>

				<div class="form__status-input" class:emphasize-border-color={statusPost === "anonym"}>
					<div class="radio-input">
						<input
							id="anonym"
							type="radio"
							name="status"
							value="anonym"
							class="input-radio"
							on:change={() => selectStatusPost("anonym")}
						/>

						<div class="radio-input-dot" class:radio-input-selected={statusPost === "anonym"} />
					</div>

					<svg
						class="form-icon"
						width="22"
						height="22"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "anonym" ? "#363a44" : "#86888e"}
					>
						<circle cx="8.5" cy="7" r="4" />
						<line x1="18" x2="23" y1="8" y2="13" />
						<line x1="23" x2="18" y1="8" y2="13" />
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					</svg>

					<label for="anonym" class="status-name" class:emphasize-color={statusPost === "anonym"}>
						Anonym Post
					</label>
				</div>

				<div class="form__status-input" class:emphasize-border-color={statusPost === "private"}>
					<div class="radio-input">
						<input
							id="private"
							type="radio"
							name="status"
							value="private"
							class="input-radio"
							on:change={() => selectStatusPost("private")}
						/>

						<div class="radio-input-dot" class:radio-input-selected={statusPost === "private"} />
					</div>

					<svg
						class="form-icon"
						width="22"
						height="22"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						stroke={statusPost === "private" ? "#363a44" : "#86888e"}
					>
						<circle cx="12" cy="7" r="4" />
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					</svg>

					<label for="private" class="status-name" class:emphasize-color={statusPost === "private"}>
						Private Post
					</label>
				</div>
			</div>

			<div class="form__buttons">
				<button type="button" on:click={cancelPost} class="form__cancel-btn form-btn">
					Cancel
				</button>

				<button type="submit" class="form__submit-btn form-btn">Add Post</button>
			</div>
		{/if}
	</form>
</div>

<style>
	.form-post {
		width: 100%;
		padding: 16px 16px 9px 16px;
		margin-bottom: var(--space-32x);
		background-color: var(--grey-50);
		border: 1px solid var(--primary-900);
	}

	.form__input {
		width: 100%;
		resize: none;
		overflow: auto;
		line-height: 28px;
		border-radius: 3px;
		padding: 12px 13px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		font-size: var(--text-16x);
		transition: box-shadow 100ms;
		border: 1px solid var(--primary-900);
	}

	.form__input:focus {
		box-shadow: 0 0 0 1px var(--primary-900);
	}

	.form__input::placeholder {
		font-size: 18px;
	}

	.form__post-status {
		display: flex;
		margin: 26px 0;
		justify-content: space-between;
	}

	.status-name {
		cursor: pointer;
		color: var(--grey-400);
		font-size: var(--text-14x);
	}

	.input-radio {
		width: 22px;
		height: 22px;
		cursor: pointer;
		appearance: none;
		margin-right: 6px;
		position: relative;
	}

	.input-radio::before {
		width: 100%;
		content: "";
		height: 100%;
		position: absolute;
		border-radius: 100%;
		background-color: #eaebec;
		border: 1px solid var(--primary-500);
	}

	.form-icon {
		margin-left: 7px;
		margin-right: 9px;
	}

	.form__status-input {
		display: flex;
		border-radius: 3px;
		padding: 10px 14px;
		align-items: center;
		border: 1px solid var(--primary-500);
	}

	.form__buttons {
		display: flex;
		margin-bottom: 7px;
		align-items: center;
		justify-content: flex-end;
	}

	.form-btn {
		font-size: var(--text-16x);
		padding: 8px var(--space-32x);
		transition: background-color 100ms;
	}

	.form__submit-btn {
		border: none;
		color: var(--grey-50);
		background-color: var(--primary-900);
	}

	.form__submit-btn:hover {
		background-color: var(--primary-800);
	}

	.form__cancel-btn {
		border: none;
		margin-right: 20px;
		color: var(--primary-900);
		background-color: transparent;
		transition: background-color 100ms;
	}

	.form__cancel-btn:hover {
		background-color: var(--grey-100);
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
		border-color: var(--primary-900);
	}

	@media screen and (max-width: 780px) {
		.form__post-status {
			flex-direction: column;
		}

		.form__status-input {
			margin-bottom: var(--space-24x);
		}

		.form__status-input:last-child {
			margin-bottom: 0;
		}
	}
</style>
