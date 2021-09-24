<script>
	import Logo from "@components/Logo.svelte";

	let navbarMenusStatus = "hide";

	function toggleNavbarMenus() {
		if (navbarMenusStatus === "hide") {
			navbarMenusStatus = "show";
		} else {
			navbarMenusStatus = "hide";
		}
	}
</script>

<nav class="navbar">
	<a href="/" class="home-link">
		<Logo />
	</a>

	<div class="navbar__menus" class:show-menus-mobile={navbarMenusStatus === "show"}>
		<a href="/#" class="navbar__profile-link">
			<svg
				width="26"
				height="26"
				fill="none"
				stroke="#f9fafb"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</svg>
		</a>

		<svg
			width="26"
			height="26"
			fill="none"
			stroke-width="2"
			stroke="#f9fafb"
			viewBox="0 0 24 24"
			class="navbar__menu"
			stroke-linecap="round"
			stroke-linejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path
				d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
			/>
		</svg>

		<svg
			width="26"
			height="26"
			fill="none"
			stroke="#f9fafb"
			stroke-width="2"
			viewBox="0 0 24 24"
			class="navbar__menu"
			stroke-linecap="round"
			stroke-linejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" y1="12" x2="9" y2="12" />
		</svg>

		<button class="navbar__add-post">Add Post</button>
	</div>

	{#if navbarMenusStatus === "hide"}
		<svg
			width="30"
			height="30"
			fill="none"
			stroke="#f9fafb"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			on:click={toggleNavbarMenus}
			class="navbar__show-menus"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	{/if}

	{#if navbarMenusStatus === "show"}
		<svg
			width="30"
			height="30"
			fill="none"
			stroke-width="2"
			stroke="#f9fafb"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			on:click={toggleNavbarMenus}
			class="navbar__close-menus"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="15" y1="9" x2="9" y2="15" />
			<line x1="9" y1="9" x2="15" y2="15" />
		</svg>
	{/if}
</nav>

<style>
	.navbar {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 70px;
		display: flex;
		position: fixed;
		align-items: center;
		gap: var(--space-48x);
		justify-content: space-around;
		background-color: var(--primary-900);
	}

	.navbar__menus {
		gap: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar__profile-link {
		text-decoration: none;
	}

	.navbar__menu {
		cursor: pointer;
	}

	.navbar__add-post {
		border: none;
		border-radius: 24px;
		color: var(--grey-900);
		font-size: var(--text-16x);
		padding: 6px var(--space-32x);
		transition: background-color 0.2s;
		background-color: var(--light-blue-500);
	}

	.navbar__add-post:hover {
		background-color: var(--light-blue-300);
	}

	.navbar__show-menus,
	.navbar__close-menus {
		display: none;
		cursor: pointer;
	}

	.home-link {
		text-decoration: none;
		transition: transform 0.1s ease-in;
	}

	.home-link:active {
		transform: scale(0.9);
	}

	@media screen and (max-width: 1190px) {
		.navbar {
			justify-content: space-between;
			padding-left: var(--space-96x);
			padding-right: var(--space-96x);
		}
	}

	@media screen and (max-width: 880px) {
		.navbar {
			padding-left: var(--space-64x);
			padding-right: var(--space-64x);
		}

		.navbar__show-menus {
			display: inline;
		}

		.navbar__menus {
			top: 0;
			right: 0;
			bottom: 0;
			gap: 60px;
			width: 100%;
			z-index: 9999;
			height: 100vh;
			display: none;
			position: absolute;
			align-items: center;
			flex-direction: column;
			background-color: var(--primary-900);
		}

		.navbar__add-post {
			padding: var(--space-8x) var(--space-64x);
		}

		.navbar__show-menus,
		.navbar__close-menus {
			z-index: 9999;
			display: inline;
		}

		.show-menus-mobile {
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		.navbar {
			padding-left: var(--space-24x);
			padding-right: var(--space-24x);
		}
	}
</style>
