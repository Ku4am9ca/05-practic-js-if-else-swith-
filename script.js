let a = 19;

//if (a < 9) {
//    console.log("yes");
//}
//else {
//   console.log("else");
//}


const button = document.querySelector("button");

const input = document.querySelector(".age");




//button.onclik= function(){

//}
// если функция без имени и используется один раз, можно использовать стрелочную функцию

button.onclick = () => {
	let num = +input.value;
	if (num > +16 && num < 60) {
		console.log("Welcome!!!");
	}
	else if (num > 60) {
		console.log("Are you sure you're here?")
	}
	else {
		console.log("You wont pass");
	}
}
//
