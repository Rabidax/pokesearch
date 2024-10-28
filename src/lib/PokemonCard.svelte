<script>

let {pokemon, displayDetails}=$props();

</script>

	<div class="pokemon-card" onclick={displayDetails}>
		<p>
			{pokemon.name}
		</p>
	</div>

<style>
.pokemon-card {
    background-color: #f2f8ff; /* Light blue background */
    border: 2px solid #0088cc; /* Border color */
    border-radius: 10px; /* Rounded corners */
    padding: 5px; /* Inner spacing */
    width: 150px; /* Card width */
    text-align: center; /* Center align text */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow effect */
    transition: transform 0.2s; /* Smooth hover effect */
	margin: 2em;
}

.pokemon-card:hover {
    color: #0077cc; /* Optional: Change color on hover */
}
</style>
