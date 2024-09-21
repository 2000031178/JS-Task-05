
console.log("enter EC for No of extracurricular activities");
console.log("enter CS for hours spend on community Service");

var GPA = prompt("Enter your GPA: ");
var EC = prompt("Enter no of extracurricular activities: ");
var CS = prompt("Enter hours of community service: ")

if(GPA>=3.5 && EC >= 2 && CS>= 100 && GPA<=4){
    console.log("Eligible for all three Scholarships (Merit-Based, Leadership and Community Service Scholarship)")

} 
else if(GPA>=3.5 && GPA<=4 && EC == 0 && CS == 0){
    console.log("Eligible for Merit Scholarship");
}
else if(GPA>=3 && EC >= 2 && GPA <= 3.4){
    console.log("Eligible for Leadership Scholarship");
}
else if(GPA>=2.5 && CS >= 100  && GPA<=2.9){
    console.log("Eligible for Community Service Scholarship");
}

else if(GPA>=3.5 && EC >= 2 && GPA<=4){
    console.log("Eligible for both merit and Leadership scholarship")
}
else if(GPA>=3.5 && CS>=100 && GPA<=4){
    console.log("Eligible for both merit and Community Service scholarship")
}
else if(GPA>=3 && CS>=100 && GPA<=4){
    console.log("Eligible for both Leadership and Community Service scholarship")
}
else{
    console.log("Not Eligible For any scholarship")
}