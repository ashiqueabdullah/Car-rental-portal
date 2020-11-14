$(document).ready(function () {

	var first=document.getElementById('first');
	var second=document.getElementById('second');
	var third=document.getElementById('third');
	var fourth=document.getElementById('fourth');
	var firstNumber=0;
	var secondNumber=0;
	var thirdNumber=0;
	var fourthNumber=0;

	function firstFunction(){
		if(firstNumber<=40){
			firstNumber++
			first.innerHTML=firstNumber;
			setTimeout(firstFunction,20);
		}
	}


	function secondFunction(){
		if(secondNumber<1200){
			secondNumber=secondNumber+2;
			second.innerHTML=secondNumber;
			setTimeout(secondFunction,1);
		}
	}


	function thirdFunction(){
		if(thirdNumber<700){
			thirdNumber=thirdNumber+2;
			third.innerHTML=thirdNumber;
			setTimeout(thirdFunction,1);
		}
	}


	function fourthFunction(){
		if(fourthNumber<1400){
			fourthNumber=fourthNumber+2;
			fourth.innerHTML=fourthNumber;
			setTimeout(fourthFunction,1);
		}
	}


	firstFunction();
	secondFunction();
	thirdFunction();
	fourthFunction();

});