<script>
import Navbar from "$lib/Navbar.svelte";
import { number_checker, 
    cel_to_fah, 
    cel_to_kel, 
    fah_to_cel, 
    fah_to_kel, 
    kel_to_cel, 
    kel_to_fah } from "./funcs.js";

$: input_celsius = 0;
$: input_fahrenheit = 89.6;
$: input_kelvin = 273.15;

$: web_loop = (event) =>{
    let target_id = event.target.id;

    if (target_id == "celsius"){
        input_celsius = number_checker(input_celsius);
        input_fahrenheit = cel_to_fah(input_celsius);
        input_kelvin = cel_to_kel(input_celsius);
    }

    if (target_id == "fahrenheit"){
        input_fahrenheit = number_checker(input_fahrenheit);
        input_celsius = fah_to_cel(input_fahrenheit);
        input_kelvin = fah_to_kel(input_fahrenheit);
    }

    if (target_id == "kelvin"){
        input_celsius = number_checker(input_kelvin);
        input_celsius= kel_to_cel(input_kelvin);
        input_fahrenheit = kel_to_fah(input_kelvin);
    }
}

</script>

<Navbar/>
<main>

<div class="hero">
    <span>Celsius</span>
    <input bind:value={input_celsius} on:input={web_loop} placeholder="0" id="celsius" />

    <span>Fahrenheit</span>
    <input bind:value={input_fahrenheit} on:input={web_loop} placeholder="0" id="fahrenheit" />

    <span>Kelvin</span>
    <input bind:value={input_kelvin} on:input={web_loop} placeholder="0" id="kelvin" />


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

</style>