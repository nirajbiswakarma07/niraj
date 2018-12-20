var image=document.getElementById('mainImg');
console.log(image);
function ChangeImage(img){
	image.src=img.src;
	console.log(img.src);
}
var allImages=document.querySelectorAll('img#mainImg');
console.log(allImages[2]);

var smallImages=document.getElementsByClassName('imgs');
console.log(smallImages);


function rec(num){
	console.log(num);
	num++;
	if(num==10){
		return;
	}
	rec(num);

}

rec(1)
//var i = 0
// function RecursiveTime(){
// 	console.log(i)
// 	i++
// 	setTimeout(RecursiveTime, 1000)
// }
// RecursiveTime()
var id=document.getElementById('headingid');
//id.innerHTML="Change from javascript";


var min = 0;
var sec = 0;
function time(){
	if(sec<=9){
		id.innerHTML=min+":"+"0"+sec;
		}
	else
		{
			id.innerHTML=min+":"+sec;
		}
		sec++;
		if(sec==60){
			min++;
			sec=0;
		}	



	setTimeout(time,1000);
}
time()


var currentIndex = 0;
var imgs=document.getElementsByClassName('imgs');
var imgSources = [];
for(var i =0; i < imgs.length; i++){
	imgSources.push(imgs[i].src)
}
console.log(imgSources)
function rotate(){

		
		var image=document.getElementById('mainImg');
		if(currentIndex == 0){
			imgs[0].src = image.src;
		} else {
			imgs[0].src = imgSources[0]
		}
		
		if(currentIndex == 1){
			imgs[1].src = image.src;
		} else {
			imgs[1].src = imgSources[1]
		}
		if(currentIndex == 2){
			imgs[2].src = image.src;
		} else {
			imgs[2].src = imgSources[2]
		}
		if(currentIndex == 3){
			imgs[3].src = image.src;
		} else {
			imgs[3].src = imgSources[3]
		}

		currentIndex++;

		setTimeout(rotate, 1000)				
		
		if(currentIndex==4){
		
			currentIndex=0;
		
		}
		return currentIndex;

// var imgs=document.getElementsByClassName('imgs');
// 		var image=document.getElementById('mainImg');
// 			console.log(currentIndex);
// 		image.src=imgs[currentIndex].src;
// 		currentIndex++;
// //This one works in reverse order.
// 		setTimeout(rotate, 1000)				
// 		if(currentIndex==4){
// 			currentIndex=0;
// 		}
// 		return currentIndex;

}

rotate()

var characters = ['a','b','c','d','e','f','!','@','#','$','%','^',
						'&','*','1','2','3','4','5','6','7','8','9']

function RandomPswdGenerator(){
	var pwd=""	
	for(var i=0;i<10;i++){

	var result =characters[Math.floor(Math.random()*characters.length)]
	// var x= Math.floor(Math.random(pwdArray)*10);
	var pwd=pwd+result;
	console.log(pwd)
	}
	 console.log("Random Password Generated is:"+pwd)
//		 setTimeout(RandomPswdGenerator,1000)
}

RandomPswdGenerator()

for (var i = 0; i <5; i++) {
	console.log("outer");
	for(var j=0;j<5;j++){
		console.log("Inner loop");
	}
}

console.log("GGGGGGGG")