function countDown(mills){
	var int = setInterval(function(){
		if(mills === 0){
			console.log("Done!");
			clearInterval(int);
		} else {
			console.log(mills--);
		}
	}, 1000);
}

countDown(4);

randomGame();

function randomGame(){
	var tries = 0;

	var int = setInterval(function(){
		var num = Math.random();
		console.log(num);
		++tries;
		
		if(num > 0.75){ 
		  clearInterval(int);
		  console.log(tries);
		} 
	  
	}, 1000);
}

randomGame();

function isEven(num){
	return num % 2 === 0;
}

function isOdd(num){
	return num % 2 === 1;
}

function isPrime(num) {
	
	for(let i = 2; i < num/2; i++){
		if( num % i === 0) return false;
		if( i >=  3) i++;
	}

	return true;

}

isPrime(8);

function numberFact(num, fun){
  return(fun(num));
}

numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

function find(arr, fun){
  
  for(let i = 0; i < arr.length; i++){
    if(fun(arr[i])) return arr[i];
  }
  
  return undefined;
}

find([8,11,4,27], function(val){return val >= 10}); // 11

find([8,11,4,27], function(val){return val === 5}); // undefined

function findIndex(arr, fun){
  
  for(let i = 0; i < arr.length; i++){
    if(fun(arr[i])) return i;
  }
  
  return undefined;
}

findIndex([8,11,4,27], function(val){return val >= 10}); // 11

findIndex([8,11,4,27], function(val){return val === 5}); // undefined

