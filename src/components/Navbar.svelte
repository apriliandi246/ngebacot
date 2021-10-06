<script>
	import Logo from "@components/Logo.svelte";

	import {
		scrollBarStatus,
		sideNavbarStatus,
		signoutModalStatus,
		languageModalStatus,
	} from "@store";

	function toggleNavbarMenus() {
		if ($sideNavbarStatus === "hide") {
			$scrollBarStatus = "hide";
			$sideNavbarStatus = "show";
		} else {
			$scrollBarStatus = "show";
			$sideNavbarStatus = "hide";
		}
	}

	function showModal(modalName) {
		if (modalName === "signOut") $signoutModalStatus = "show";
		if (modalName === "language") $languageModalStatus = "show";

		$scrollBarStatus = "hide";
		$sideNavbarStatus = "hide";
	}
</script>

<div on:click|self={toggleNavbarMenus} class:navbar-area={$sideNavbarStatus === "show"}>
	<nav class="navbar">
		<a href="/" class="home-link">
			<Logo />
		</a>

		<div class="navbar__menus" class:show-menus-mobile={$sideNavbarStatus === "show"}>
			<a href="/#" class="navbar__profile-link">
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
					<circle cx="12" cy="7" r="4" />
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				</svg>

				<span class="menu-name">Profile</span>
			</a>

			<button on:click={() => showModal("language")} class="navbar__profile-link nav-btn">
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

				<span class="menu-name">Language</span>
			</button>

			<button on:click={() => showModal("signOut")} class="navbar__profile-link nav-btn">
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
					<polyline points="16 17 21 12 16 7" />
					<line x1="21" y1="12" x2="9" y2="12" />
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
				</svg>

				<span class="menu-name">Sign Out</span>
			</button>
		</div>

		{#if $sideNavbarStatus === "hide"}
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
				<line x1="3" y1="6" x2="21" y2="6" />
				<line x1="3" y1="12" x2="21" y2="12" />
				<line x1="3" y1="18" x2="21" y2="18" />
			</svg>
		{/if}

		{#if $sideNavbarStatus === "show"}
			<svg
				width="30"
				height="30"
				fill="none"
				stroke-width="2"
				stroke="#f9fafb"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="margin-top: 8px;"
				class="navbar__close-menus"
				on:click={toggleNavbarMenus}
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="12" r="10" />
				<line x1="15" y1="9" x2="9" y2="15" />
				<line x1="9" y1="9" x2="15" y2="15" />
			</svg>
		{/if}
	</nav>
</div>

<style>
	.navbar {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 60px;
		z-index: 999;
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: space-evenly;
		background-color: var(--primary-900);
	}

	.navbar__menus {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar__profile-link {
		cursor: pointer;
		display: inline;
		padding: 8px 12px;
		border-radius: 4px;
		text-decoration: none;
		margin-right: var(--space-32x);
		transition: background-color 0.1s;
	}

	.navbar__profile-link:last-child {
		margin-right: 0;
	}

	.navbar__profile-link:hover {
		background-color: var(--primary-800);
	}

	.navbar__menu {
		cursor: pointer;
		transition: stroke 0.1s;
	}

	.navbar__show-menus,
	.navbar__close-menus {
		display: none;
		cursor: pointer;
		transition: stroke 0.1s;
	}

	.navbar__show-menus:hover,
	.navbar__close-menus:hover {
		stroke: var(--grey-400);
	}

	.menu-name {
		display: none;
	}

	.home-link {
		text-decoration: none;
		transition: transform 0.1s ease-in;
	}

	.home-link:active {
		transform: scale(0.9);
	}

	.nav-btn {
		border: none;
		outline: none;
		background-color: transparent;
	}

	@media screen and (max-width: 1190px) {
		.navbar {
			justify-content: space-between;
			padding-left: var(--space-96x);
			padding-right: var(--space-96x);
		}
	}

	@media screen and (max-width: 800px) {
		.navbar {
			padding-left: var(--space-48x);
			padding-right: var(--space-48x);
		}
	}

	@media screen and (max-width: 480px) {
		.navbar__show-menus {
			display: inline;
		}

		.navbar__menus {
			top: 0;
			right: 0;
			bottom: 0;
			width: 68%;
			z-index: 9999;
			display: none;
			position: fixed;
			align-items: center;
			flex-direction: column;
			justify-content: flex-start;
			background-color: var(--primary-900);
		}

		.navbar__menu {
			width: 28px;
			height: 28px;
		}

		.navbar__show-menus,
		.navbar__close-menus {
			z-index: 9999;
			display: inline;
		}

		.navbar__profile-link {
			display: flex;
			padding: 10px;
			margin-right: 0;
			margin-top: 105px;
			border-radius: 5px;
			align-items: center;
			color: var(--grey-50);
			font-size: var(--text-16x);
		}

		.navbar__profile-link:hover {
			background-color: var(--primary-800);
		}

		.show-menus-mobile {
			display: flex;
		}

		.menu-name {
			display: inline;
			margin-left: 14px;
		}

		.navbar-area {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 9999;
			position: fixed;
			background-color: rgba(54, 58, 68, 0.4);
		}
	}

	@media screen and (max-width: 550px) {
		.navbar {
			padding-left: var(--space-16x);
			padding-right: var(--space-16x);
		}
	}
</style>
