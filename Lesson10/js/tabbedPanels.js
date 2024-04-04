var buttons = document.getElementsByClassName("accordion");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
                panel.style.display = "none";
        } else {
                panel.style.display = "block";
        }
    })
}