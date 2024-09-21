console.log("BOOK YOU MOVIE")
console.log("weekdays - mon,tue,wed,thu,fri (1) and weekends -sat,sun (2)");
var day = prompt("enter day code: ");
var age = prompt("enter your age: ");
if(day==1 && (age<=12 || age>=65)){
    console.log(" price is 12$ but enjoy your 50% discount , final price is 6$")
}
else if(day ==1 && (age>12 || age<65)){
    console.log("please pay 12$")
}
else if(day==2 && (age<=12 || age>=65)){
    console.log("price is 15$ but enjoy your 30% discount , final price is 10.50$")
}
else if(day==2 && (age>12 || age<65)){
    console.log("please pay 15$");
}
else{
    console.log("invalid age or day !!");
}