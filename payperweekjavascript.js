"use strict";
		var hours;
		var wage;
		var pay;
		var overtimehours;
		var overtimepay;
		var totalpay;
		
		hours=40;
		wage=23.43;
		overtimehours=7;
		pay=hours * wage;
		overtimepay= (hours+overtimehours* wage)*1.5;
		totalpay=overtimepay+pay;
		
		console.log(pay);
		console.log(overtimepay);
		console.log(totalpay);