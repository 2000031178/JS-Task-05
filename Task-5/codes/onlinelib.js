console.log("enter 1 is code for basic membership")
console.log("enter 2 is code for Standard membership")
console.log("enter 3 is code for Premium membership")
var membership = prompt("enter Membership code : ");
if(membership==1){
    console.log("Access to only free books.")
}
else if(membership==2){
    console.log("Access to free books and discounted paid books.")
}
else if(membership==3){
    console.log("Access to all books, including exclusive content.")
}
else{
    console.log("Invalid")
}
