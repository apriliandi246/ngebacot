<script>
	import Logo from "@components/Logo.svelte";
</script>

<nav class="navbar">
	<Logo />
</nav>

<style>
	.navbar {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 65px;
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: center;
		background-color: var(--primary-900);
	}
</style>
