function Click_event(){
    console.log("Click");
}
function Focus_event(){
    console.log("Focus")
}
function blur_event(){
    console.log("blur")
}


document.addEventListener('DOMContentLoaded', function() {
    var button_element = document.getElementsByClassName('bu')[0];
    if (button_element) {
        button_element.onclick = function() {
            alert("bu类点击框被点击");
        };
    }
});
