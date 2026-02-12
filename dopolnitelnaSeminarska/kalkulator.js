const display=document.getElementById("display");
function append(val){
    display.value+=val;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch{
        display.value="ERROR";
    }
}

function Sqrt(){
    try{
        let val=eval(display.value);
        if(val<=0){
            display.value="ERROR";
        } else{
        display.value=Math.sqrt(val);
        }
    }
    catch{
        display.value="ERROR";
    }
}

function Log(){
    try{
        let val=eval(display.value);
        if(val<=0){
            display.value="ERROR";
        } else{
        display.value=Math.log10(val);
        }
    } 
    catch{
        display.value="ERROR";
    }
}

function Sin() {
    let val = eval(display.value);

    if (isNaN(val)) {
        display.value = "ERROR";
        return;
    }

    display.value = Math.sin(val * Math.PI / 180);
}

function Cos() {
    let val = eval(display.value);

    if (isNaN(val)) {
        display.value = "ERROR";
        return;
    }

    display.value = Math.cos(val * Math.PI / 180);
}


