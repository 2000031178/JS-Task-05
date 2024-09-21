console.log("welcome to our tea stall !!");
console.log("Here's our menu")
console.log("(a)Regular Tea: Costs ₹15 per cup");
console.log("(b)Masala Tea: Costs ₹20 per cup.");
console.log("(c)Ginger Tea: Costs ₹25 per cup.");
var a=15;
var b=20;
var c=25;
var tea=prompt("enter tea flavour: ");
if(tea=='a'){
    console.log("amount: 15/-");
}
else if(tea=='b'){
    console.log("amount: 20/-");
}
else if(tea=='c'){
    console.log("amount: 25/-");
}
else{
    console.log("invalid tea style")
}
console.log("here's the list for add-on's");
console.log("(x)Extra Sugar, add ₹2.50 to the base price.")
console.log("(y)Extra Milk, add ₹5 to the base price.")
console.log("(z)No Add-ons, no additional cost is added.")
var x=2.50;
var y=5;
var z=0;
var addon=prompt("enter addon code: ");
var total =  tea +  addon;
console.log(total);
