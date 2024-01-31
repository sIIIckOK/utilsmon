//celsius
export function celsius_to_fahrenheit(cel){
    let temp_var = Number(cel);
    temp_var = Number((temp_var*(9/5)+32).toFixed(2))
    if (Number.isNaN(temp_var)){
        return 0
    }
    return (temp_var*(9/5)+32);
}

export function celsius_to_kelvin(cel){
    let temp_var = Number(cel);
    temp_var = Number((temp_var+273.).toFixed(2));
    if (Number.isNaN(temp_var)){
        return 0
    }
    return(temp_var);
}

//fahrenheit
export function fahrenheit_to_kelvin(fah){
    let temp_var = fahrenheit_to_celsius(fah);
    temp_var = Number(celsius_to_kelvin(temp_var).toFixed(2));
    if (Number.isNaN(temp_var)){
        return 0
    }
    return temp_var;
}

export function fahrenheit_to_celsius(fah){
    let temp_var = Number(fah);
    temp_var = Number(((temp_var-32)*(5/9)).toFixed(2));
    if (Number.isNaN(temp_var)){
        return 0
    }
    return temp_var;
}

//kelvin
export function kelvin_to_celsius(kel = 0){
    let temp_var = Number(kel);
    temp_var = Number((temp_var-273).toFixed(2));
    if (Number.isNaN(temp_var)){
        return 0
    }
    return temp_var;
}

export function kelvin_to_fahrenheit(kel){
    let temp_var = kelvin_to_celsius(kel);
    temp_var = Number(celsius_to_fahrenheit(temp_var).toFixed(2));
    if (Number.isNaN(temp_var)){
        return 0
    }
    return temp_var;
}