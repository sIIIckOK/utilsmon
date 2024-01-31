<script>
import Navbar from "$lib/Navbar.svelte";
import { fahrenheit_to_celsius, 
    fahrenheit_to_kelvin, 
    celsius_to_fahrenheit, 
    celsius_to_kelvin, 
    kelvin_to_celsius,
    kelvin_to_fahrenheit 
} from "./funcs.js";

$: input_celsius = 0;
$: input_fahrenheit = 89.6;
$: input_kelvin = 273;

$: web_loop = (event) =>{
    let target_id = event.target.id;

    if (target_id == "celsius"){
        input_fahrenheit = celsius_to_fahrenheit(input_celsius);
        input_kelvin = Number(celsius_to_kelvin(input_celsius));
    }

    if (target_id == "fahrenheit"){
        input_celsius = fahrenheit_to_celsius(input_fahrenheit);
        input_kelvin = fahrenheit_to_kelvin(input_fahrenheit);
    }

    if (target_id == "kelvin"){
        input_celsius= kelvin_to_celsius(input_kelvin);
        input_fahrenheit = kelvin_to_fahrenheit(input_kelvin);
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