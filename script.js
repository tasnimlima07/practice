const letters = [];
console.log("letters = ", letters);


const display = () => {
    const selectedBox = document.getElementById("selectedBox");
    while (selectedBox.firstChild) {
        selectedBox.removeChild(selectedBox.firstChild);
    }

    letters.length = 0;
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value;

    Array(inputValue.length).fill().map((_, index) => {
        letters.push(inputValue[index]);
    });


    const displayBox = document.getElementById("displayBox");
    while (displayBox.firstChild) {
        displayBox.removeChild(displayBox.firstChild);
    }

    letters.forEach((word, index) => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = word;

        box.addEventListener("click", function () {
            if (box.parentNode === displayBox) {
                displayBox.removeChild(box);
                selectedBox.appendChild(box);
            } else if (box.parentNode === selectedBox) {
                selectedBox.removeChild(box);
                displayBox.appendChild(box);
            }

            console.log("Box clicked and moved:", word);
        });

        displayBox.appendChild(box);
    });

    inputField.value = "";
};

window.addEventListener('load', display);

