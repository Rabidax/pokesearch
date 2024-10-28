<script>
	let { pokemon } = $props();
</script>

{#if pokemon.url}
	{#await fetch(pokemon.url).then((r) => r.json()) then details}
		<p>{details.name} <a href={pokemon.url}>details</a></p>
		<img
			src={details.sprites.front_default}
			alt="default front sprite of {details.name}"
		/>
	{/await}
{/if}
