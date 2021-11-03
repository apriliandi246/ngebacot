<script>
	export let postStatus;
</script>

<footer class="post-footer">
	<!-- Comment -->
	<div class="post-footer__data no-event">
		<svg
			width="24"
			height="24"
			fill="none"
			stroke="#4b5563"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
			/>
		</svg>

		<span class="post-footer__detail-data">14</span>
	</div>
	<!-- Comment -->

	<!-- Like -->
	<button class="post-footer__data post-footer-btn">
		<svg
			width="24"
			height="24"
			fill="none"
			stroke="#4b5563"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m20.84 4.61a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
			/>
		</svg>

		<span class="post-footer__detail-data">16</span>
	</button>
	<!-- Like -->

	<!-- Post Status -->
	<div class="post-footer__data no-event">
		{#if postStatus === "anonym"}
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="8.5" cy="7" r="4" />
				<line x1="18" x2="23" y1="8" y2="13" />
				<line x1="23" x2="18" y1="8" y2="13" />
				<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			</svg>
		{/if}

		{#if postStatus === "public"}
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="#4b5563"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
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

	<!-- Date -->
	<div class="post-footer__data post-footer__data--last-child no-event">
		<svg
			width="24"
			height="24"
			fill="none"
			stroke="#4b5563"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
			<line x1="16" x2="16" y1="2" y2="6" />
			<line x1="8" x2="8" y1="2" y2="6" />
			<line x1="3" x2="21" y1="10" y2="10" />
		</svg>

		<span class="post-footer__detail-data">Jun 3, 2021</span>
	</div>
	<!-- Date -->
</footer>

<style>
	.post-footer {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
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

	.post-footer__data--last-child {
		margin-right: 0;
	}

	.post-footer__data:hover {
		background-color: var(--primary-50);
	}

	.post-footer__detail-data {
		color: var(--grey-600);
		text-transform: capitalize;
		font-size: var(--text-14x);
		margin-left: var(--space-12x);
	}

	.post-footer-btn {
		border: none;
		outline: none;
		background-color: inherit;
		border: 1px solid var(--primary-900);
	}

	.post-footer-btn:focus {
		outline-offset: 0px;
		outline: 2px solid var(--primary-900);
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
