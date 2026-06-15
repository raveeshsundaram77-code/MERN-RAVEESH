// for loop 
console.log("for loop");

for (let i=1;i<=10;i++){
    console.log(i + " x 2 =" + i*2);
    
} 

// while loop

console.log("while loop ")
a=0
while (a<=10){
    console.log(a)
    a++
}
//do while loop

console.log("do while loop");

let count=1;
do{
    console.log(count);
    count++;
}
while(count<=10)
    console.log("end of program");

//switch case 
console.log("switch case");

var light= "white";
switch(light){
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "red":
        console.log("stop");
        break;
    default:
        console.log("invalid light");
}