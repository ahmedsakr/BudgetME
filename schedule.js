//get your standard amount for a day
function amountPerDay(var value, var config){
  var daily = value / 7;
  if(config == 0){ //weekly
    return value / 7;
  }else{ //monthly
    return value / 30;
  }
}

function minimumPerDay(var dailyValue){ //minimum to be spent per day
  return dailyValue - (dailyValue*0.20);
}

function maximumPerDay(var dailyValue){ //max to be spent per day
  return dailyValue + (dailyValue * 0.2);
}

function getAmount(var amountPerDay, var minAmount){ //get a random amount based on the minimum value allowed
  return (Math.random() * (maximumPerDay(amountPerDay) - minAmount + 1) + minAmount).toFixed(2);
}

//get the amount left to be spent for the day
function getMinAmount(var maximumPerDay, var amountSpent){
  return maximumPerDay - amountSpent;
}
