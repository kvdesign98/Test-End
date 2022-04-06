let buttonChangerColor = document.getElementById("buttonChangerColor")
let body = document.querySelector("body")
let nameColor = document.getElementById("nameColor")
let copy = document.getElementById("copy")
buttonChangerColor.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
    nameColor.innerText = `màu này là # ${randomColor} `;
    
    copy.addEventListener("click", () => {       
        randomColor.select();
        randomColor.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(randomColor.value);
    })
})
