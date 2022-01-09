bills = [504,345, ,467,224,664, , ,];

function loadBills(){
	document.getElementById("bills").innerHTML = bills;
}

function mostCommon(){
	var commonBill = prompt("What do you think is the most common bill price?");
	bills[bills.length] = commonBill;
	document.getElementById("bills").innerHTML = bills;
}

var sum = 0;
var count = 0;

if (bills.length > 0){
	for (bill = 0; bill < bills.length; bill++){
		if (bills[bill] != undefined) {
			sum += bills[bill];
			count = count +1;
		}
	}
	document.write(sum/count);

}
else 
	document.write("Empty Array!");
