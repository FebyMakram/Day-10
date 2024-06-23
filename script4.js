///////////   string  search ///////////////

let sites = " amazon , Jumia ,noon ,shein "
document.getElementById("exam").innerHTML=sites ;


let exam =sites.indexOf("n")
document.getElementById("example1").innerHTML= "searching for letter 'n' is in position :  "  + exam ;

let exam1 =sites.indexOf("J")
document.getElementById("example2").innerHTML="searching for letter 'J' is in position :  "  + exam1 ;


let exam2 =sites.lastIndexOf("n")
document.getElementById("example3").innerHTML="searching for letter 'n'  from the end of sentence is in position:  "  + exam2  ;

let exam3 =sites.indexOf("g")
document.getElementById("example4").innerHTML="searching for letter 'n' is in position :  "  + exam3 ;