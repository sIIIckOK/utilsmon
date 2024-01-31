import { binary_to_decimal, binary_to_octal, decimal_to_binary, decimal_to_hexa } from "./funcs.js";

function hexa_unwrapper(hex_element){
    let temp_element = hex_element.toLowerCase();
    if(hex_element!=hex_element.toUpperCase()){
        return (temp_element.charCodeAt(0)-87);
    }
    return temp_element;
}

function hexa_to_binary(hex){
    let str = String(hex);
    let temp_str = '';
    let return_str = '';
    let prep_str = '';
    for (let i = 0; i < str.length; i++){
        temp_str = hexa_unwrapper(str[i]);
        prep_str=String(decimal_to_binary(Number(temp_str)));
        if (Number(temp_str) < 2){
            let i = Number(temp_str);
            prep_str = "000"+prep_str;
        }
        else if(Number(temp_str) < 4){
            prep_str = "00"+prep_str;
        }
        else if(Number(temp_str) < 8){
            prep_str = "0"+prep_str;
        }
        return_str+=prep_str;
    }
    return_str = return_str;
    return (Number(return_str));
}

function hexa_to_decimal(hex){
    let temp_num = hexa_to_binary(hex);
    temp_num = binary_to_decimal(temp_num);
    return temp_num;
}

function hexa_to_octal(hex){
    let temp_num = hexa_to_binary(hex);
    temp_num = binary_to_octal(temp_num);
    return temp_num;
}

console.log(decimal_to_hexa(14));