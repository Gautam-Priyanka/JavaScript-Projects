let color = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
let index = 0;

document.querySelector("#submit").addEventListener("click", () => {
    document.body.style.backgroundColor = color[index];
    index++;
    if (index >= color.length) {
        index = 0;
    }
});