<script>
import Navbar from "$lib/Navbar.svelte";

$: target_id = "length";
function option_picker(e){
    target_id = e.target.value;
}

</script>

<Navbar />
<select name="select" id="units" on:change={option_picker}>
    <option >Select</option>
    <option disabled>----------</option>
    <option value="length">Length</option>
    <option value="area">Area</option>
    <option value="volume">Volume</option>
</select>
<main>
<div class="hero">
{#if target_id == "length"}
<span>Meter</span>
<input type="text"/>
<span>Feet</span>
<input type="text"/>
<span>Inches</span>
<input type="text"/>
<span>Feet And Inches</span>
<input type="text"/>
{/if}
</div>
</main>

<style>
main {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
span  {
    padding: 6px 0px;
}

.hero {
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

input {
    font-family: Roboto;
}
select {
    position: relative;
    margin-top: 50px;
    left: 40%;
}

</style>