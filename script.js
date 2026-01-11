const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let arr = Array.from(buttons);
let string = input.value;
arr.forEach(btn => {
    btn.addEventListener("click", e => {
        if (e.target.innerText == "=") {
            try {
                let result = eval(input.value);
                input.value = result;
            } catch (err) {
                input.value = "Invalid Express";
                console.log("Invalid Expression", err);
            }
        } else if (e.target.innerText == "AC") {
            input.value = "";
        } else if (e.target.innerText == "DEL") {
            let lastindx = input.value.length - 1;
            let del = input.value.slice(0, lastindx);
            console.log(del);
            input.value = del;
        } else {
            input.value += e.target.innerText;
        }
    });
});