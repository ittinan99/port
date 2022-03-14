var postText
var topicText
var comment1Text
var comment2Text

window.onload = setElement;

function setElement(){
    topicText = document.getElementById("topic1");
    comment1Text = document.getElementById("comment1");
    comment2Text = document.getElementById("comment2");
}

function postFunction(){
    postText = document.getElementById("text1").value;
    
    if(topicText.innerText == ""){
        topicText.innerText = postText;
    }
    else if(comment1Text.innerText == ""){
        comment1Text.innerText = postText;
    }
    else if(comment2Text.innerText == ""){
        comment2Text.innerText = postText;
    }

    document.getElementById("text1").value = "";
}
function clearFunction(){
    topicText.innerText = "";
    comment1Text.innerText = "";
    comment2Text.innerText = "";
}
