"use strict";

		function multiplytwoNumbers(hours,wage){
			var result;
			result= hours * wage;
			return result;
		}
		var numhours;
		var numwage;
		var pay;
		numhours= 40;
		numwage= 23.43;
		pay=multiplytwoNumbers(numhours,numwage);
		console.log(pay);
		
		function multiplytwoNumbers(overtimehours,overtimewage){
			var result;
			result= overtimehours * overtimewage;
			return result;
		}
		var numoth;
		var numotw;
		var overtimepay;
		numoth= 7;
		numotw= 23.43 * 1.5;
		overtimepay=multiplytwoNumbers(numoth,numotw);
		console.log(overtimepay);
		