<script>
	import Logo from "@components/Logo.svelte";
	import { scrollbarStatus, signoutModalStatus, languageModalStatus } from "@store";

	function showModal(modalName) {
		if (modalName === "signOut") $signoutModalStatus = "show";
		if (modalName === "language") $languageModalStatus = "show";

		$scrollbarStatus = "hide";
	}
</script>

<nav class="navbar">
	<a href="/" class="home-link">
		<Logo />
	</a>

	<div class="navbar__menus">
		<a href="/mine" class="navbar__profile-link">
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
		</button>
	</div>
</nav>

<style>
	.navbar {
		width: 100%;
		height: 60px;
		z-index: 999;
		display: flex;
		padding: 0 20px;
		align-items: center;
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
		transition: background-color 0.1s;
	}

	.navbar__menu {
		cursor: pointer;
		transition: stroke 0.1s;
	}

	.navbar__profile-link:hover {
		background-color: var(--primary-800);
	}

	.navbar__profile-link:last-child {
		margin-right: 0;
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
</style>
