window.onscroll = function () {
    if (window.scrollY > 300) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
};
document.getElementById("btn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};