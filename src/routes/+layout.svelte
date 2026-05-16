<script>

	let { children } = $props();   // ✅ THIS LINE

</script>

<main>
	{@render children()}
</main>

<style>
	main {
		width: 100%;
	}
</style>