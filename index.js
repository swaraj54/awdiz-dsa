Q 2- Check is user applicable for dl or not ?
learning lic - for 18 year candidate

var userAge = 78;
if (  userAge > 18 ){
    console.log("User is Applicable !");
} else if(userAge == 18){
    console.log("User is applicable for Leanrng lic...")
} else {
    console.log("User is NOT Applicable !");
}

Q 3 - Check given number is odd or even and diplay the result.
var userNumber = 0;
if((userNumber % 2) == 0 ){
    console.log("Provided number is Even !")
} else {
    console.log("Provided Number is ODD !")
}

Q 4. Print the numbers from 20 - 40, which are even.
for(var i = 20; i <= 40; i++){
    if(i%2===0){
        console.log(i)
    }
}
Q 5. Print the count from 20 - 40, which are even.
var count = 0;
for(var i = 20; i <= 40; i++){
    if(i%2===0){
        count++;
    }
}
console.log(count);

Q 6. Print count of numbers from 147-254, which are divisible by 3 and odd.

var count  = 0;
for(var i = 147; i <= 254; i++){
    if(i%3===0 && i%2!==0){
        count++;
    }
}
console.log(count)
//    __ 6 - Q
// 3 / 18
//     18
//      0 - R

Q 7. Find count of number 45 from given Array.

[12,13,45,67,43,45,76,89,54,23,7,8797,243,23234]

=>

var count = 0;
var rocky = [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234];
// var strings = ["a","abc","rocky","im student,my name is rocky","xyz"]
// var namee = "my name is rocky";
for(var i = 0; i < rocky.length ; i++){
    if( rocky[i] === 45){
        count++;
    }
}
console.log(count);
// console.log(array[2])
// console.log(array[15]);
// console.log(strings[1]);