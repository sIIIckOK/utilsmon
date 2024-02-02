import { hasContext } from "svelte";

//////////
export function cel_to_fah(cel){
    let temp = Number(cel);
    let fah = (temp*(9/5)+32).toFixed(2); 
    if (Number(fah) == 0){
        return 0;
    }
    return fah;
}

export function fah_to_cel(fah){
    let temp = Number(fah);
    let cel = ((temp-32)*(5/9)).toFixed(2); 
    if (Number(cel) == 0){
        return 0;
    }
    return cel;
}

export function cel_to_kel(cel){
    let temp = Number(cel);
    let kel = (temp+273.15).toFixed(2); 
    if (Number(kel) == 0){
        return 0;
    }
    return kel;
}

export function fah_to_kel(fah){
    let cel = fah_to_cel(fah);
    let kel = cel_to_kel(cel); 
    let temp = Number(kel).toFixed(2);
    if (Number(kel) == 0){
        return 0;
    }
    return temp;
}

export function kel_to_cel(kel){
    let temp = Number(kel);
    let cel = (temp-273.15).toFixed(2); 
    if (Number(kel) == 0){
        return 0;
    }
    return cel;
}

export function kel_to_fah(kel){
    let temp = Number(kel);
    let cel = (temp-273.15).toFixed(2); 
    let fah = cel_to_fah(cel);
    if (Number(fah) == 0){
        return 0;
    }
    return fah;
}

//Checker
export function number_checker(num){
    let str = String(num);
    if (Number.isNaN(Number(num))){
        str = str.slice(0,str.length-1);
    }
    return str;
}




