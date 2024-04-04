var shinaiImg = document.getElementById("shinai");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
shinaiImg.addEventListener("click", function() {
    modal.style.display = "block";
})
close.addEventListener("click", function() {
    modal.style.display = "none";
})
window.addEventListener("click", function() {
    if (this.event.target == modal) {
        modal.style.display = "none";
    }
})