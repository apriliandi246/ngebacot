<script>
	export let statusPost;

	$: profileImgSrc =
		statusPost === "anonym"
			? "/anonym.png"
			: "https://avatars.dicebear.com/api/croodles-neutral/username.svg?size=47";
</script>

<div class="post">
	<div class="post__head">
		<img
			width="47"
			height="47"
			loading="lazy"
			src={profileImgSrc}
			alt="Username of the user"
			class="post__image-profile"
		/>

		<div class="post__head-data">
			{#if statusPost === "anonym"}
				<span class="post__anonym-user">Anonym</span>
			{:else}
				<a href="/#" class="post__username">username</a>
			{/if}

			<span class="post__dot">·</span>
			<span class="post__date">6 Apr</span>
		</div>
	</div>

	{#if statusPost === "public" || statusPost === "anonym"}
		<div class="post__words">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet. Hic provident dolore
			eveniet sint commodi error eius perspiciatis, tempora eos mollitia voluptatibus aperiam
			molestias quas sequi, consequatur alias nemo necessitatibus quo ratione id exercitationem sit?
			Aspernatur tenetur iure labore iusto, iste quo distinctio suscipit reiciendis temporibus
			facere laboriosam voluptas aliquid magni id debitis dignissimos nisi mollitia fugit nostrum
			consectetur doloremque dolorum hic! Omnis eum praesentium dolor illo obcaecati cumque.
		</div>
	{/if}

	{#if statusPost === "private"}
		<div class="post__private">
			<div class="large-block" />
			<div class="large-block" />
			<div class="large-block" />
			<div class="large-block" />
		</div>
	{/if}

	<div class="post__footer">
		<a href="/#" class="post__footer-link">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				class="post__icon"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
				/>
			</svg>

			{#if statusPost === "public" || statusPost === "anonym"}
				<span class="post__footer-data">14</span>
			{/if}

			{#if statusPost === "private"}
				<span class="small-block" />
			{/if}
		</a>

		<button class="post__footer-link post__btn-menu">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				class="post__icon"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
				/>
			</svg>

			{#if statusPost === "public" || statusPost === "anonym"}
				<span class="post__footer-data">14</span>
			{/if}

			{#if statusPost === "private"}
				<span class="small-block" />
			{/if}
		</button>

		{#if statusPost === "private"}
			<button class="post__footer-link post__btn-menu">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="#4b5563"
					stroke-width="2"
					class="post__icon"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</svg>

				<span class="post__footer-data">Private Post</span>
			</button>
		{/if}

		{#if statusPost === "public" || statusPost === "anonym"}
			<div class="post__footer-link no-event">
				{#if statusPost === "public"}
					<svg
						width="24"
						height="24"
						fill="none"
						stroke-width="2"
						stroke="#4b5563"
						class="post__icon"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M16 3.13a4 4 0 0 1 0 7.75" />
					</svg>
				{/if}

				{#if statusPost === "anonym"}
					<svg
						width="24"
						height="24"
						fill="none"
						stroke-width="2"
						stroke="#4b5563"
						class="post__icon"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="8.5" cy="7" r="4" />
						<line x1="18" y1="8" x2="23" y2="13" />
						<line x1="23" y1="8" x2="18" y2="13" />
					</svg>
				{/if}

				<span class="post__footer-data">{statusPost} Post</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.post {
		width: 100%;
		border-radius: 5px;
		margin-bottom: 42px;
		padding: var(--space-24x);
		background-color: var(--grey-50);
	}

	.post__image-profile {
		border-radius: 100%;
		margin-right: var(--space-16x);
		background-color: var(--grey-200);
	}

	.post__head {
		display: flex;
		align-items: center;
		margin-bottom: var(--space-32x);
	}

	.post__head-data {
		display: flex;
		align-items: center;
		gap: var(--space-8x);
	}

	.post__username,
	.post__anonym-user {
		color: var(--grey-900);
		font-weight: var(--medium);
		font-size: var(--text-16x);
	}

	.post__username:hover {
		text-decoration: underline;
	}

	.post__dot {
		font-weight: var(--bold);
		font-size: var(--text-24x);
	}

	.post__date {
		color: var(--grey-600);
		font-size: var(--text-14x);
	}

	.post__words {
		line-height: 28px;
		letter-spacing: 0.5px;
		color: var(--grey-900);
		margin-bottom: var(--space-24x);
	}

	.post__footer {
		display: flex;
		align-items: center;
		gap: var(--space-64x);
	}

	.post__footer-link {
		display: flex;
		border-radius: 5px;
		align-items: center;
		gap: var(--space-12x);
		padding: var(--space-8x);
		transition: background-color 0.2s;
	}

	.post__footer-link:hover {
		background-color: var(--grey-200);
	}

	.post__footer-data {
		color: var(--grey-600);
		text-transform: capitalize;
		font-size: var(--text-14x);
	}

	.post__private {
		margin-bottom: var(--space-24x);
	}

	.post__btn-menu {
		border: none;
		background-color: inherit;
	}

	.no-event {
		pointer-events: none;
	}

	.large-block {
		width: 100%;
		height: 30px;
		border-radius: 5px;
		margin-bottom: var(--space-16x);
		background-color: var(--grey-200);
	}

	.small-block {
		width: 30px;
		height: 30px;
		border-radius: 5px;
		background-color: var(--grey-200);
	}

	@media screen and (max-width: 474px) {
		.post__words,
		.post__username {
			font-size: 15px;
		}

		.post__words {
			line-height: 26px;
		}

		.post__footer {
			justify-content: center;
		}

		.post__footer-link {
			flex-direction: column;
		}

		.large-block {
			height: 26px;
		}

		.small-block {
			width: 28px;
			height: 28px;
		}
	}

	@media screen and (max-width: 360px) {
		.post__footer {
			gap: var(--space-24x);
			flex-direction: column;
		}
	}

	@media screen and (max-width: 320px) {
		.post {
			padding: var(--space-16x);
		}

		.post__username {
			font-size: var(--text-16x);
		}

		.post__words {
			font-size: var(--text-16x);
		}
	}
</style>
