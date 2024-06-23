  //////    string methods    //////////////////

 let products =("    Iphone , Huawei ,Oppo ,Samsung     ")
document.getElementById("products").innerHTML = products
document.getElementById("example").innerHTML = products.length


let products1=products.slice(8,24)
document.getElementById("example1").innerHTML = products1

let products2 =products.trim()
document.getElementById("example2").innerHTML = products2 +"<br>" + products2.length

let products3 =products.replace(/huawei/gi ,"LG")
document.getElementById("example3").innerHTML = products3 

let products4 =products.toUpperCase()
document.getElementById("example4").innerHTML = products4

let products5 =products.toLowerCase()
document.getElementById("example5").innerHTML = products5


let newProduct =" xiami "
let newProduct1 =newProduct.concat( "  " , products) ;
document.getElementById("example6").innerHTML = newProduct1

let products6 = products.split(" , ")
document.getElementById("example6").innerHTML = products6 +"<br>" +products6.length ;

function convert (){
  let word =document.getElementById("exam").innerHTML ;
document.getElementById("exam").innerHTML = word.toUpperCase()

}

