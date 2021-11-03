<script>
	import Logo from "@components/Logo.svelte";
	import { scrollbarStatus, signoutModalStatus, languageModalStatus } from "@store";

	function showModal(modalName) {
		if (modalName === "signOut") $signoutModalStatus = "show";
		if (modalName === "language") $languageModalStatus = "show";

		$scrollbarStatus = "hide";
	}
</script>

<header class="navbar">
	<a href="/" aria-label="home page" class="home-link">
		<Logo />
	</a>

	<nav class="navbar__menus">
		<a href="/mine" aria-label="my profile" class="navbar__profile-link">
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
		</a>

		<button
			aria-label="choose language"
			class="navbar__profile-link nav-btn"
			on:click={() => showModal("language")}
		>
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
				<circle cx="12" cy="12" r="10" />
				<line x1="2" x2="22" y1="12" y2="12" />
				<path
					d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
				/>
			</svg>
		</button>

		<button
			aria-label="sign out"
			class="navbar__profile-link nav-btn"
			on:click={() => showModal("signOut")}
		>
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
				<line x1="21" x2="9" y1="12" y2="12" />
				<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			</svg>
		</button>
	</nav>
</header>

<style>
	.navbar {
		width: 100%;
		height: 60px;
		z-index: 999;
		display: flex;
		align-items: center;
		padding: 0 20px 0 16px;
		justify-content: space-between;
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
		transition: background-color 100ms;
	}

	.navbar__profile-link:hover {
		background-color: var(--primary-800);
	}

	.navbar__profile-link:focus {
		outline: 2px solid var(--primary-200);
	}

	.navbar__profile-link:last-child {
		margin-right: 0;
	}

	.navbar__menu {
		cursor: pointer;
		transition: stroke 100ms;
	}

	.home-link {
		padding: 0px 12px;
		border-radius: 10px;
		text-decoration: none;
		transition: transform 100ms ease-in;
	}

	.home-link:focus {
		outline-offset: -10px;
		outline: 2px solid var(--primary-200);
	}

	.home-link:active {
		transform: scale(0.9);
	}

	.nav-btn {
		border: none;
		background-color: transparent;
	}
</style>
