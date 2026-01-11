let display = document.getElementById("numBox");
function append(value) {
    if(display.innerHTML === "0" || display.innerHTML === "00" || display.innerHTML === "ERROR") {
        display.innerHTML = value;
    }
    else{
        display.innerHTML += value;
    }
}

function allClear() {
    display.innerHTML = "0";
}

function calculate() {
    try{
        display.innerHTML = eval(display.innerHTML);
    }
    catch{
        display.innerHTML = "ERROR";
    }
}

function del() {
    if(display.innerHTML.length > 1 && display.innerHTML !== "ERROR") {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
        display.innerhtml = display.innerHTML;
    }

    else{
        display.innerHTML = "0";
    }
}

console.log("Calculator script loaded.");