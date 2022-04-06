let myArr = [60, 40, 55, 75, 64]
let team1 = [];
let team2 = [];

function  alternatingSums(n){
    let flag = 1;
    if( n % 2 == 0 ) flag= 0;
    return flag;  
}

for (let i = 0; i < myArr.length; i++){
    if (alternatingSums(i % 2 == 0))  team2.push(myArr[i]);
    else  team1.push(myArr[i])
}

console.log(team1);
console.log(team2);