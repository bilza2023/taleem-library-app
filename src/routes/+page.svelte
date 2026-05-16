<script>

	import { onMount } from "svelte";

	let decks = $state([]);

	onMount(async () => {

		const res =
			await fetch("/index.json");

		decks =
			(await res.json()).reverse();
	});

	function pretty(slug) {

		return slug

			.replaceAll("-", " ")

			.replace(
				/\b\w/g,
				c => c.toUpperCase()
			);
	}

</script>

<svelte:head>

	<title>
		Taleem Library
	</title>

</svelte:head>

<div class="page">

	<div class="container">

		<h1>
			Taleem Library
		</h1>

		<ul>

			{#each decks as deck (deck.slug)}

				<li>

					<a
						href={`/player?deck=${deck.slug}`}
					>

						{pretty(deck.slug)}

					</a>

				</li>

			{/each}

		</ul>

	</div>

</div>


<style>

	:global(html),
	:global(body) {

		margin: 0;
		padding: 0;

		background: #05070c;
		color: white;

		font-family:
			system-ui,
			sans-serif;
	}

	.page {

		min-height: 100vh;
		padding: 48px 24px;

		background: #05070c;
	}

	.container {

		max-width: 900px;
		margin: 0 auto;
	}

	h1 {

		font-size: 34px;
		font-weight: 700;

		margin-bottom: 28px;
	}

	a,
	a:visited,
	a:hover,
	a:active {

		color: white;
		text-decoration: none;
	}

	ul {

		list-style: none;

		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	li {

		background: #111827;

		border:
			1px solid #1f2937;

		border-radius: 14px;

		transition: 0.15s;
	}

	li:hover {

		background: #172033;
		transform: translateY(-1px);
	}

	a {

		display: block;
		padding: 18px 22px;

		font-size: 18px;
		font-weight: 600;
	}

</style>
