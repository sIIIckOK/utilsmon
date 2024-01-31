<script>
import Navbar from "$lib/Navbar.svelte";
import "$lib/page_format.css"
import { binary_checker, 
    binary_to_decimal, 
    binary_to_octal, 
    decimal_checker, 
    decimal_to_binary, 
    octal_checker, 
    octal_to_binary, 
    octal_to_decimal, 
    decimal_to_octal,
    hexa_checker,
    hexa_to_binary,
    hexa_to_decimal,
    hexa_to_octal,
    binary_to_hexa,
    decimal_to_hexa,
    octal_to_hexa
} from './funcs';

$: input_binary = 0;
$: input_decimal = 0;
$: input_octal = 0;
$: input_hexa = 0; 



$: web_loop = (event) =>{
    let target_id = event.target.id;

    if (target_id == "binary"){
        input_binary = binary_checker(input_binary);
        input_decimal = binary_to_decimal(input_binary);
        input_octal = binary_to_octal(input_binary);
        input_hexa = binary_to_hexa(input_binary);
    }

    if (target_id == "decimal"){
        input_decimal = decimal_checker(input_decimal);
        input_binary = decimal_to_binary(input_decimal);
        input_octal = decimal_to_octal(input_decimal);
        input_hexa = String(decimal_to_hexa(input_decimal));
    }

    if (target_id == "octal"){
        input_octal = octal_checker(input_octal);
        input_binary = octal_to_binary(input_octal);
        input_decimal = octal_to_decimal(input_octal);
        input_hexa = String(octal_to_hexa(input_octal));
    }
    if (target_id == "hexa"){
        input_hexa = hexa_checker(input_hexa);
        input_binary = hexa_to_binary(input_hexa);
        input_decimal = hexa_to_decimal(input_hexa);
        input_octal = hexa_to_octal(input_hexa);
    }
}

</script>

<Navbar />
<main>
    <div class="hero">
        <span>Binary</span>
        <textarea bind:value={input_binary} on:input={web_loop} placeholder="0" id="binary" cols="30" rows="4"></textarea>

        <span>Decimal</span>
        <textarea bind:value={input_decimal} on:input={web_loop} placeholder="0" id="decimal" cols="30" rows="4"></textarea>

        <span>Octal</span>
        <textarea bind:value={input_octal} on:input={web_loop} placeholder="0" id="octal" cols="30" rows="4"></textarea>

        <span>Hexa-Decimal</span>
        <textarea bind:value={input_hexa} on:input={web_loop} placeholder="0" id="hexa" cols="30" rows="4"></textarea>

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

textarea {
    font-family: Roboto;
    resize: none; 
}
</style>