function changeColor() {
    var colorValue = prompt("What color would you like?");
    document.body.style.backgroundColor = colorValue;
}
function changeTextColor() {
    var colorValue = prompt ("Change text color?");
    document.body.style.color = colorValue;
}
function changeTextSize() {
    var size = prompt("Change the size of the text?");
    document.body.style.fontSize = size;
}
function welcomeMessage() {
    var name = prompt ("What do I call you?");
    var message = "<h1>Henlo" + name + "&#x26#A</h1>";
    document.getElementById("line1").innerHTML = message;
}