var time = promp("Enter Time: ");
var greeting = (time>=5&&time<12)? "Good Morning": (time>=12 && time<18)? "Good Afternoon": (time>=18 && time<22)? "Good Evening": (time>=22 && time<5 && time<=24 && time>=1)? "Good Night": "number should be between 1 and 24";
console.log(greeting);
