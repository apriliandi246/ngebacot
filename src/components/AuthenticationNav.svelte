<script>
	import Logo from "@components/Logo.svelte";
</script>

<nav>
	<Logo />
</nav>

<style>
	nav {
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		gap: var(--space-48x);
		justify-content: space-around;
		background-color: var(--primary-900);
	}
</style>
