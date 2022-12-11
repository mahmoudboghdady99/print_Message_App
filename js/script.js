var box = document.getElementById("box");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");

btn.onclick = function(){
    //الخطوة 1 نجيب محتوى الصندوق ونحطه فى متفير
    var boxValue =box.value;
    //نضع هذا المحتوى فى البرجراف 
    msg.innerHTML = boxValue;
    //الخطوة 3 الصندوق يمسح الداتا اللى جواه
    box.value="";
}