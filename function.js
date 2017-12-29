






// var title = document.querySelector("#jumboTitle").innerHTML;
// titleScroller();

// function titleScroller(){
// 	var i;
// 	var title = document.querySelector("#jumboTitle").innerHTML;
	
// 	for(i = 0; i < title.length; i++)
// 	{
// 		setTimeout(titleBuilder, 2000);
// 	}

// }



// function titleBuilder(index, title, titleBuilder)
// {
// 	console.log("2");
// }



//==========================THIS GROUP CREATES THE TYPING ACROSS THE JUMBOTRON
var titleIndex = -1;
// var title = "DOES ANYOs ";
var title = "DOES ANYONE KNOW YOU WENT THIS WAY? ";
var max = 300; 
var min = 200;

titleBuilder();


function titleBuilder(){


	//Generates a random whole number
	var typeDelay = Math.random() * ((max-min) + min);
	typeDelay = Math.floor(typeDelay); 
	// console.log(typeDelay); FOR TESTING TIMING



	//Builds the title string
	titleIndex++;

	document.querySelector("#jumboTitle").innerHTML += title[titleIndex];
	// document.querySelector("#jumboTitle").innerHTML.textDecoration = "underline"; 

	if(titleIndex < title.length-1){
		setTimeout(titleBuilder, typeDelay);
	}
}
//===================================================END OF JUMBOTRON TYPING