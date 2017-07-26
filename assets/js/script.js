function toggleMenu() {
    var x = document.getElementById("collapsable");
    if (x.className.indexOf("show") == -1) {
        x.className += "show";
    } else {
        x.className = x.className.replace("show", "");
    }
}
