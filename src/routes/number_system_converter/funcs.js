//binary
export function binary_to_decimal(bin) {
    let str = String(bin);
    let return_value = 0;
    for (let i = 0; i < str.length; i++){
        let psudo_index = str.length - i - 1;
        if (str[i]=="1"){
            return_value+=(2**psudo_index);
        }
    }
    return return_value;
}

export function binary_to_octal(bin){
    let reversed_str = reverse_string(String(bin));
    let temp_str = '';
    let return_str = '';
    for (let i = 0; i < reversed_str.length; i+=3){
        temp_str = reverse_string(reversed_str.slice(i, i+3));
        return_str+=binary_to_decimal(temp_str);
    }
    return_str = reverse_string(return_str);
    let temp_num = Number(return_str);
    return temp_num 
}

export function binary_to_hexa(bin){
    let reversed_str = reverse_string(String(bin));
    let temp_str = '';
    let return_str = '';
    let prep_str = '';
    for (let i = 0; i < reversed_str.length; i+=4){
        temp_str = String(binary_to_decimal(reverse_string(reversed_str.slice(i, i+4))));
        if (Number(temp_str) > 9){
            prep_str = String.fromCharCode(Number(temp_str)+87);
        }
        else {
            prep_str = temp_str;
        }
        return_str+=prep_str;
    }
    return_str = reverse_string(return_str);
    return return_str;
}


//decimal
export function decimal_to_octal(dec){
    let temp_num = decimal_to_binary(dec);
    temp_num = binary_to_octal(temp_num);
    return(temp_num);
}


export function decimal_to_binary(dec) {
    let return_str = "";
    let temp_var = dec;
    let remainder = 0;
    while(true){
        remainder = temp_var%2
        temp_var = Math.floor(temp_var/2);
        if (remainder==1){
            return_str+="1";
        }
        else if (remainder==0){
            return_str+="0";
        }
        if (temp_var == 0){
            break;
        }
    }
    let return_value = return_str.split("").reverse().join("");
    return Number(return_value);
}

export function decimal_to_hexa(dec){
    let temp_num = decimal_to_binary(dec);
    let return_str = binary_to_hexa(temp_num);
    return return_str;
}

function reverse_string(str){
    return (str.split("").reverse().join(""));
}

//octal
export function octal_to_binary(oct){
    let str = String(oct);
    let temp_str = '';
    let return_str = '';
    let prep_str = '';
    for (let i = 0; i < str.length; i++){
        temp_str = str[i];
        prep_str=String(decimal_to_binary(Number(temp_str)));
        if (Number(temp_str) < 2){
            let i = Number(temp_str);
            prep_str = "00"+prep_str;
        }
        else if(Number(temp_str) < 4){
            prep_str = "0"+prep_str;
        }
        return_str+=prep_str;
    }
    return_str = return_str;
    return Number(return_str);
}

export function octal_to_decimal(oct){
    let temp_num = octal_to_binary(oct);
    temp_num = binary_to_decimal(temp_num);
    return temp_num;
}
export function octal_to_hexa(oct){
    let temp_num = octal_to_binary(oct);
    temp_num = Number(binary_to_hexa(temp_num));
    return temp_num;
}

//hexa
function hexa_unwrapper(hex_element){
    let temp_element = hex_element.toLowerCase();
    if(hex_element!=hex_element.toUpperCase()){
        return (temp_element.charCodeAt(0)-87);
    }
    return temp_element;
}


export function hexa_to_binary(hex){
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

export function hexa_to_decimal(hex){
    let temp_num = hexa_to_binary(hex);
    temp_num = binary_to_decimal(temp_num);
    return temp_num;
}

export function hexa_to_octal(hex){
    let temp_num = hexa_to_binary(hex);
    temp_num = binary_to_octal(temp_num);
    return temp_num;
}


//checkers
export function binary_checker(bin){
    let str = String(bin);
    let len = str.length;
    if (Number.isNaN(Number(str.charAt(len-1)))){
       return 0;
    }
    if (Number(str.charAt(len-1)) > 1){
        str = str.slice(0, -1);
        return (Number(str)); 
    }
    return bin
}

export function decimal_checker(dec){
    let num = Number(dec);
    if (Number.isNaN(num)){
       return 0;
    }
    return dec;
}

export function octal_checker(oct){
    let str = String(oct);
    let len = str.length;
    if (Number.isNaN(Number(str.charAt(len-1)))){
       return 0;
    }
    if (Number(str.charAt(len-1)) > 7){
        str = str.slice(0, -1);
        return (Number(str)); 
    }
    return oct;
}

export function hexa_checker(hex){
    let str = hex;  
    let len = str.length;
    if (hex === Number(hex)){
        str = String(hex);
    }
    let counter = 0;
    if (hexa_unwrapper(str.charAt(len-1))>15){
        counter++
    }
    if (counter>0){
        str = str.slice(0, -1);
    }
    return str;
}
