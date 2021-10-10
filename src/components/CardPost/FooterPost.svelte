<script>
	export let postStatus;
</script>

<footer class="post__footer">
	<!-- Comment -->
	{#if postStatus === "private"}
		<div class="post__footer-link no-event">
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

			<div class="small-block" />
		</div>
	{/if}

	{#if postStatus === "public" || postStatus === "anonym"}
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

			<span class="post__footer-data">14</span>
		</a>
	{/if}
	<!-- Comment -->

	<!-- Like -->
	{#if postStatus === "private"}
		<div class="post__footer-link no-event">
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

			{#if postStatus === "private"}
				<span class="small-block" />
			{/if}
		</div>
	{/if}

	{#if postStatus === "public" || postStatus === "anonym"}
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

			<span class="post__footer-data">16</span>
		</button>
	{/if}
	<!-- Like -->

	<!-- Post Status -->
	<div class="post__footer-link no-event">
		{#if postStatus === "private"}
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
				<circle cx="12" cy="7" r="4" />
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		{#if postStatus === "anonym"}
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
				<circle cx="8.5" cy="7" r="4" />
				<line x1="18" y1="8" x2="23" y2="13" />
				<line x1="23" y1="8" x2="18" y2="13" />
				<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		{#if postStatus === "public"}
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
				<circle cx="9" cy="7" r="4" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		<span class="post__footer-data">{postStatus} Post</span>
	</div>
	<!-- Post Status -->
</footer>

<style>
	.post__footer {
		display: flex;
		align-items: center;
	}

	.post__footer-link {
		display: flex;
		padding: 7px 11px;
		border-radius: 3px;
		align-items: center;
		transition: background-color 0.2s;
		border: 1px solid var(--primary-900);
	}

	.post__footer-link {
		margin-right: var(--space-48x);
	}

	.post__footer-link:last-child {
		margin-right: 0;
	}

	.post__footer-link:hover {
		background-color: var(--primary-50);
	}

	.post__footer-data {
		color: var(--grey-600);
		text-transform: capitalize;
		font-size: var(--text-14x);
		margin-left: var(--space-12x);
	}

	.post__btn-menu {
		border: none;
		outline: none;
		background-color: inherit;
		border: 1px solid var(--primary-900);
	}

	.no-event {
		pointer-events: none;
	}

	.small-block {
		width: 25px;
		height: 25px;
		border-radius: 5px;
		margin-left: var(--space-12x);
		background-color: var(--primary-800);
	}

	@media screen and (min-width: 483px) and (max-width: 570px) {
		.post__footer {
			justify-content: space-between;
		}
	}
</style>
