function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")

    if(el == title) {
        console.log("title")
    } else if (el == subtitle) {
        console.log("subtitle clicked")
    }
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});
