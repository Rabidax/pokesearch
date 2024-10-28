<script>
	import search from "$lib";
	import { onMount } from "svelte";
	import PokemonDetails from "$lib/PokemonDetails.svelte";

	const limit = 5;
	const url = "https://pokeapi.co/api/v2/pokemon?limit=";

	let pick = $state({});
	let useSearch = $state(true);
	let pattern = $state("");
	let list = { results: [] };
	onMount(async () => {
		const response = await fetch(url + 100000);
		list = await response.json();
	});
	let searchResults = $derived(search(pattern, list.results));
	const handleSearch = async () => {
		if (searchResults.length >= 1) {
			pick = searchResults[0].item;
		}
	};
</script>

<p>
	<input
		type="search"
		id="search"
		oninput={handleSearch}
		bind:value={pattern}
		placeholder="Look for a pokemon"
	/>
</p>
<PokemonDetails pokemon={pick} />
<p>Suggestions</p>
{#each searchResults as res}
	<p style="tiny">{res.item.name}</p>
{/each}
