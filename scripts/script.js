console.log("hello world");

function showPoint1(){
    var x = document.getElementById("pt1");
    var y = document.getElementsByClassName("show");
    var z = document.getElementById("p1");
    var a = document.getElementsByClassName("tit");
    arrowFlipperReset();
    for( var i = 0; i < y.length; i++){
        y[i].style.display="none";
    }

    for(var i = 0; i < a.length; i++){
        a[i].style.fontWeight="400";
    }

    if(x.style.display == "none"){
        x.style.display="block";
        z.style.fontWeight="700";
        arrowFlipper(0);
    }
    else{
        x.style.display="none";        
    }
}

function showPoint2(){
    var x = document.getElementById("pt2");
    var y = document.getElementsByClassName("show");
    var z = document.getElementById("p2");
    var a = document.getElementsByClassName("tit");
    arrowFlipperReset();
    for( var i = 0; i < y.length; i++){
        y[i].style.display="none";
    }
    for(var i = 0; i < a.length; i++){
        a[i].style.fontWeight="400";
    }
    if(x.style.display == "none"){
        x.style.display="block";
        z.style.fontWeight="700";
        arrowFlipper(1);
    }
    else{
        x.style.display="none";
    }
}

function showPoint3(){
    var x = document.getElementById("pt3");
    var y = document.getElementsByClassName("show");
    var z = document.getElementById("p3");
    var a = document.getElementsByClassName("tit");
    arrowFlipperReset();
    for( var i = 0; i < y.length; i++){
        y[i].style.display="none";
    }
    for(var i = 0; i < a.length; i++){
        a[i].style.fontWeight="400";
    }

    if(x.style.display == "none"){
        x.style.display="block";
        z.style.fontWeight="700";
        arrowFlipper(2);
    }
    else{
        x.style.display="none";
    }
}

function showPoint4(){
    var x = document.getElementById("pt4");
    var y = document.getElementsByClassName("show");
    var z = document.getElementById("p4");
    var a = document.getElementsByClassName("tit");
    arrowFlipperReset();
    for( var i = 0; i < y.length; i++){
        y[i].style.display="none";
    }
    for(var i = 0; i < a.length; i++){
        a[i].style.fontWeight="400";
    }

    if(x.style.display == "none"){
        x.style.display="block";
        z.style.fontWeight="700";
        arrowFlipper(3);
    }
    else{
        x.style.display="none";
    }
}

function showPoint5(){
    var x = document.getElementById("pt5");
    var y = document.getElementsByClassName("show");
    var z = document.getElementById("p5");
    var a = document.getElementsByClassName("tit");
    arrowFlipperReset();
    for( var i = 0; i < y.length; i++){
        y[i].style.display="none";
    }
    for(var i = 0; i < a.length; i++){
        a[i].style.fontWeight="400";
    }

    if(x.style.display == "none"){
        x.style.display="block";
        z.style.fontWeight="700";
        arrowFlipper(4);
    }
    else{
        x.style.display="none";
    }
}


function arrowFlipper(arrowIndex){
    var x = document.getElementsByClassName("arrow");
    x[arrowIndex].style.transform = "rotate(180deg)";
}

function arrowFlipperReset(arrowIndex){
    var x = document.getElementsByClassName("arrow");
    for(var i = 0; i < x.length; i++){
        x[i].style.transform = "rotate(0deg)"
    }
}