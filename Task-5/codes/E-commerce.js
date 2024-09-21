console.log("enter R for regular customer")
console.log("enter V for VIP customer")
var customer = prompt("enter Customer Type : ")

if(customer == 'R'){
    console.log("regular customer")
    var R = prompt("Enter Amount : ")
    if(R>0 && R<=100){
        console.log("No discount for purchases under $100")
    }
    else if(R>100 && R<=500){
        console.log("A 5% discount for purchases between $100 and $500.")
    }
    else if(R>500){
        console.log("A 10% discount for purchases over $500.")
    }
}

else if(customer == 'V'){
    console.log("VIP Customer")
    var V = prompt("Enter Amount : ")
    if(V>0 && V<=100){
        console.log("A 10% discount for purchases under $100")
    }
    else if(V>100 && V<=500){
        console.log("A 15% discount for purchases between $100 and $500.")
    }
    else if(V>500){
        console.log("A 20% discount for purchases over $500.")
    }
}

else{
    console.log("NEW CUSTOMER")
}