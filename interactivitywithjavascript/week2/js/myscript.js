function setDate(){
	document.getElementById("date").innerHTML=Date();
}

function warning(){
	alert("Hello!")
}

function closeMe(){
	x=document.getElementById("demo");
	// x.style.display="none";
	x.className="closed";
}

function openMe(){
	x=document.getElementById("demo");
	// x.style.display="block";
	x.className="open";
}
