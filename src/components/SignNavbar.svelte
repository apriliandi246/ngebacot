<script>
	import Logo from "@components/Logo.svelte";
</script>

<div class="navbar">
	<Logo />

	<div class="navbar__links">
		<a href="/signup" rel="external" class="navbar__link">Sign Up</a>
		<a href="/signin" rel="external" class="navbar__link">Sign In</a>
	</div>
</div>

<style>
	.navbar {
		width: 100%;
		height: 74px;
		display: flex;
		align-items: center;
		gap: var(--space-48x);
		justify-content: space-around;
		background-color: var(--primary-900);
	}

	.navbar__links {
		display: flex;
		align-items: center;
		gap: var(--space-48x);
	}

	.navbar__link {
		color: var(--grey-50);
		text-decoration: none;
		font-size: var(--text-16x);
	}

	.navbar__link:hover {
		text-decoration: underline;
	}

	.navbar__link:hover {
		color: var(--grey-300);
	}

	@media screen and (max-width: 500px) {
		.navbar__links {
			display: none;
		}
	}
</style>
