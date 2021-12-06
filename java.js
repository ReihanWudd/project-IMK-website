function fungsinya(){
    document.getElementById("cobadom").innerHTML = "nope"
}

function test(){
    document.getElementById("judul").className = "partext"
}

var fullimagebox = document.getElementById("fullimagebox")
var fullimage = document.getElementById("fullimage")

function openfullimage(pic){
    fullimagebox.style.display = "flex"
    fullimage.src= pic;
}

function closefullimage(){
    fullimagebox.style.display = "none";
}



var loginbar = document.getElementById("loginbar")
var fullwes = document.getElementById("fullwes")

function openfulllogin(){
    loginbar.style.display = "flex"
}

function closefulllogin(){
    loginbar.style.display = "none";
}

function addtext(){
    var garis = document.createElement("hr")

    var tag1 = document.createElement("h2")
    var get1 = document.getElementById("namanya").value;
    var tulis1 = document.createTextNode(get1)
    tag1.appendChild(tulis1)

    var tag = document.createElement("h5")
    var get = document.getElementById("textnya").value;
    var tulis = document.createTextNode("reply @"+get)
    tag.appendChild(tulis)

    var tag3 = document.createElement("p")
    var get3 = document.getElementById("opinion").value;
    var tulis3 = document.createTextNode(get3)
    tag3.appendChild(tulis3)

    var tempat = document.getElementById("question_content");
    tempat.appendChild(garis)
    tempat.appendChild(tag1)
    tempat.appendChild(tag)
    tempat.appendChild(tag3)

}