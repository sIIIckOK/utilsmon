<script>
import Navbar from "$lib/Navbar.svelte";
import {number_checker, 
        pounds_to_kilos, 
        kilos_to_pounds
       } from "./weight_funcs";

//input declaration
$: input_pounds = undefined;
$: input_kilos = undefined;


//webloop declaration
$: weight_web_loop = (e) => {
    let local_target_id = e.target.id;
    if (local_target_id == "pounds"){
    input_pounds = number_checker(input_pounds);
    input_kilos = pounds_to_kilos(input_pounds);

    }
    if (local_target_id == "kilos"){
    input_kilos = number_checker(input_kilos);
    input_pounds = kilos_to_pounds(input_kilos);
    }
}


$: target_id = "weight";
$: option_picker = (e) => {
    target_id = e.target.value;
    console.log(e);
}

$: main_web_loop = (e) => {
    if (target_id == "weight"){
        weight_web_loop(e);
    }

}




</script>

<Navbar />
<select name="select" id="units" on:change={option_picker}>
    <option >Select</option>
    <option disabled>----------</option>
    <option value="weight">Weight</option>
    <option value="length">Length</option>
    <option value="area">Area</option>
</select>
<main>
<div class="hero">

{#if target_id == "weight"}
<span>Pounds</span>
<input type="text" bind:value={input_pounds} on:input={main_web_loop} id="pounds" placeholder="0"/>
<span>Kilograms</span>
<input type="text" id="kilos" placeholder="0" bind:value={input_kilos} on:input={main_web_loop}/>
{/if}

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