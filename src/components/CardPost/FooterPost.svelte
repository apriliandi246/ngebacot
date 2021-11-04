<script>
	export let postStatus;
</script>

<div class="post-footer">
	<!-- Comment -->
	{#if postStatus === "private"}
		<div class="post-footer__data no-event">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
				/>
			</svg>

			<svg
				width="16"
				height="16"
				fill="none"
				stroke="#363a44"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="private-data-icon"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
				<path d="M7 11V7a5 5 0 0 1 10 0v4" />
			</svg>
		</div>
	{/if}

	{#if postStatus === "public" || postStatus === "anonym"}
		<a href="/post/2468" target="_blank" class="post-footer__data">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
				/>
			</svg>

			<span class="post-footer__detail-data">14</span>
		</a>
	{/if}
	<!-- Comment -->

	<!-- Like -->
	{#if postStatus === "private"}
		<div class="post-footer__data no-event">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m20.84 4.61a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
				/>
			</svg>

			{#if postStatus === "private"}
				<svg
					class="private-data-icon"
					width="16"
					height="16"
					fill="none"
					stroke="#363a44"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 10 0v4" />
				</svg>
			{/if}
		</div>
	{/if}

	{#if postStatus === "public" || postStatus === "anonym"}
		<button class="post-footer__data post-footer-btn">
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m20.84 4.61a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
				/>
			</svg>

			<span class="post-footer__detail-data">16</span>
		</button>
	{/if}
	<!-- Like -->

	<!-- Post Status -->
	<div class="post-footer__data no-event">
		{#if postStatus === "private"}
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
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
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="7" r="4" />
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		{#if postStatus === "public"}
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="9" cy="7" r="4" />
				<path d="m16 3.13a4 4 0 0 1 0 7.75" />
				<path d="m23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		<span class="post-footer__detail-data">{postStatus} Post</span>
	</div>
	<!-- Post Status -->
</div>

<style>
	.post-footer {
		display: flex;
		align-items: center;
	}

	.post-footer__data {
		display: flex;
		padding: 7px 11px;
		border-radius: 3px;
		align-items: center;
		margin-right: var(--space-48x);
		transition: background-color 100ms;
		border: 1px solid var(--primary-900);
	}

	.post-footer__data:hover {
		background-color: var(--primary-50);
	}

	.post-footer__data:focus {
		outline-offset: 0px;
		outline: 2px solid var(--primary-900);
	}

	.post-footer__detail-data {
		color: var(--grey-600);
		text-transform: capitalize;
		font-size: var(--text-14x);
		margin-left: var(--space-12x);
	}

	.post-footer-btn {
		border: none;
		background-color: inherit;
		border: 1px solid var(--primary-900);
	}

	.private-data-icon {
		margin-left: 10px;
	}

	.no-event {
		pointer-events: none;
	}

	@media screen and (min-width: 483px) and (max-width: 570px) {
		.post-footer {
			justify-content: space-between;
		}
	}
</style>
