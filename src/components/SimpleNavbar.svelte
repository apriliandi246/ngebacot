<script>
	import Logo from "@components/Logo.svelte";
</script>

<nav>
	<Logo />
</nav>

<style>
	nav {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 65px;
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: space-around;
		background-color: var(--primary-900);
	}
</style>
