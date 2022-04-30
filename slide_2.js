alert("Willcome, to El-Fayoum website");
function nightmode(){
    // document.getElementById('mode').style.color='white';
    document.getElementById('mode').style.background='black';
    document.getElementById('btns1').style.background='black';
    document.getElementById('box1').style.background='white';
    document.getElementById('box2').style.background='white';
    document.getElementById('box3').style.background='white';
    document.getElementById('box4').style.background='white';
    document.getElementById('box5').style.background='white';
    document.getElementById('box6').style.background='white';
    // document.getElementById('tableid').style.color='white';
}
function daymode(){
    document.getElementById('mode').style.color='black';
    document.getElementById('mode').style.background='#f0f0f0';
    document.getElementById('btns1').style.background='#f0f0f0'
    // document.getElementById('tableid').style.color='black';
}
function showmap(){
    document.getElementById("imagesss").style.display = "block";
}
function hiddenmap(){
    document.getElementById("imagesss").style.display = "none";
}
function showtable(){
    document.getElementById("plan").style.display = "block";
}
function hidtable(){
    document.getElementById("plan").style.display = "none";
}

// box-shadow: 0 5px 25px rgba(1 1 1 /100%);