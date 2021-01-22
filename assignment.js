// https://github.com/Nakibooo1/assignment-3 //

// Problem 1: Kilometer to Meter

function kilometerToMeter(meterInput){
    var kilometer;
    if(meterInput > 0){
        kilometer = meterInput * 1000;
        output = Math.round(kilometer);
    }
    else{
        console.log('Please enter a valid number');
    }
    return output;
 }

 var result = kilometerToMeter(10);
 console.log('Total meter is ' + ' ' + result +' ' + 'meter');


 //  Problem 2: budget Calculator

function budgetCalculator(watch, phone, laptop){
    var watchCounts = watch * 50;
    var phoneCounts = phone * 100;
    var laptopCounts = laptop * 500;
    
    if(watchCounts > 0 && phoneCounts > 0 && laptopCounts > 0){
        var sum = watchCounts + phoneCounts + laptopCounts;
    }
    else{
        console.log('Please enter a valid number');
    }
    return sum;
}

var totalCount = budgetCalculator(10, 10, 10);
console.log('Total bubget is'+ ' ' + totalCount + ' ' + 'dollors');


//Problem 3: hotel Cost //

function hotelCost(days){
    if(days <= 10){
        total = days * 100 ;
    }
    else if(days <= 20){
        var oneToTen = 10 * 100;
        var remaining = days - 10;
        var tenToTwenty = remaining * 80;
        total = oneToTen + tenToTwenty;
    }
    else{
        var oneToTen = 10 * 100;
        var tenToTwenty = 10 * 80;
        var remaining = days - 20;
        var twentyToInfinity = remaining  * 50;
        total = oneToTen + tenToTwenty + twentyToInfinity;
    }
    return total;
}
var count = hotelCost(30);
console.log('Total prize is' + ' ' + count + ' ' + 'taka');


// Problem 4: Mega Friend

function megaFriend(friendsName) {

    var longest = [0];
  
    if (friendsName.length > 0) {
      for (let i = 0; i < friendsName.length; i++) {
        if (typeof friendsName[i] === 'string' && (longest == 0 || friendsName[i].length > longest.length )) {
          longest = friendsName[i];
        }
      }
    }
  
    return longest;
  }
  
  
  var output = megaFriend(['Sagor', 10, 'Arafat', 2, 'Mahafuz', 'Santo', 'Suja', 'Nipu']);
  console.log('Your mega friend is' + ' ' + output);



