/////////// arthemitic logic //////////

function calc(){
    let weight =document.getElementById("wt").value ;
    let height =document.getElementById("ht").value ;
    let result =(weight /(height*height)*703)

    document.getElementById("input1").innerHTML="Your weight is : " + weight +"kg" ;
    document.getElementById("input2").innerHTML="Your height is : " + height +"m";
    document.getElementById("input3").innerHTML="Your BMI is : " + result ;

    if(result< 25){
        document.getElementById("output").innerHTML=" you are underweight"
    }
    else if (result=25 && result<=30)
        {
        document.getElementById("output").innerHTML=" you are ideal"
        }
    else{
        document.getElementById("output").innerHTML=" you are overweight"
    }   
}
   

