// Convert Feet to Mile

function feetToMile(feet){
    if(feet<=0){
        return 'Feet Value can not be negative';
    }
    var mile = feet / 5280;
    return mile;
}
const mileResult = feetToMile(100000);
console.log(mileResult);

// Measurement of Total Wood by using a Wood Calculator

function woodCalculator(numOfChair, numOfTable, numOfBed){
    var forChair = numOfChair * 1;
    var forTable = numOfTable * 3;
    var forBed = numOfBed * 5;
    var totalWood = forChair + forTable + forBed;
    return totalWood;
}
const needTotalWood = woodCalculator(1,5,1);
console.log(needTotalWood);

// Measurement of Total Eat by using a brick Calculator

function brickCalculator(heightOfBuilding){
        if(heightOfBuilding<=0){
            totalBricks = 'Bricks can not contain negative value';
        } else if(heightOfBuilding>=1 && heightOfBuilding<=10){
            var heightOfFloor = heightOfBuilding * 15;
            var totalBricks = heightOfFloor * 1000;
        } else if(heightOfBuilding>=11 && heightOfBuilding<=20){
            var leftFloor10 = heightOfBuilding - 10;
            var heightOfFloor = (10*15) + (leftFloor10*12);
            var totalBricks = heightOfFloor * 1000;
        } else{
            var leftFloor20 = heightOfBuilding - 20;
            var heightOfFloor = (10*15)+(10*12)+(leftFloor20*10); 
            var totalBricks = heightOfFloor * 1000;
        }
        return totalBricks;
}
var result = brickCalculator(1);
console.log(result);


// Find Smallest Name from my Friend List

function tinyFriend(friendList){
    var smallestName = friendList[0];
    for(var i=0; i<friendList.length; i++){
        var currentName = friendList[i];
        if(currentName=='' || currentName==' '){
            return 'Distance can not be negative';
        } else if(currentName.length < smallestName.length){
            smallestName = currentName;
        }
    }
    return smallestName;
}
var tinyFriendName = tinyFriend(['Tanvir','Fahim','Himel','Mahbub','BayzedTanvir']);
console.log(tinyFriendName);