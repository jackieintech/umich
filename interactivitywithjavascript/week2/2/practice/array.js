favoriteTvShows = ["Buffy", "Angel", "Game of Thrones", "Roswell", 
"Breaking Bad", "Skam", "The Vampire Diaries"];

function loadShows(){
	document.getElementById("favoriteTvShows").innerHTML = favoriteTvShows;
}

function myFunction(){
	var favoriteShow = prompt("What is your favorite TV show?");
	favoriteTvShows[favoriteTvShows.length] = favoriteShow;
	document.getElementById("favoriteTvShows").innerHTML = favoriteTvShows;
}


function selectFirst(){
	document.getElementById("first").innerHTML = favoriteTvShows[0];
}

function selectFifth(){
	document.getElementById("fifth").innerHTML = favoriteTvShows[4];
}

function selectEleventh(){
	document.getElementById("eleventh").innerHTML = favoriteTvShows[10];
}