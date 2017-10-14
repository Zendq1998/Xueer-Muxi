var outer = document.getElementById('outer');
var inner = document.getElementById('inner');
inner.innerHTML += inner.innerHTML;

var pre = document.getElementById('pre');
var next = document.getElementById('next');

var right = function(){
	var i=0;
	var scroll = setInterval(function(){
	outer.scrollLeft+=4;
	i++;
	if(i==250){
		clearInterval(scroll);
		console.log(outer.scrollLeft);
	}
},1)
}

var left = function(){
	var i=0;
	var scroll = setInterval(function(){
	outer.scrollLeft-=4;
	i++;
	if(i==250){
		clearInterval(scroll);
		console.log(outer.scrollLeft);
	}
},1)
}

setInterval(function(){
	right();
	if(outer.scrollLeft==inner.offsetWidth/2)
		outer.scrollLeft=0;
},5000)

pre.addEventListener("click",function(){
	if(outer.scrollLeft==inner.offsetWidth/4||outer.scrollLeft==inner.offsetWidth*3/4)
		left();
});

next.addEventListener("click",function(){
	if(outer.scrollLeft==0||outer.scrollLeft==inner.offsetWidth/2)
		right();
});




