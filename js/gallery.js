var ob1 = document.getElementById('ob1');
ob1.addEventListener('click', function(){displayIm(ob1)}, false); 

var ob2 = document.getElementById('ob2');
ob2.addEventListener('click', function(){displayIm(ob2)}, false); 

var ob3 = document.getElementById('ob3');
ob3.addEventListener('click', function(){displayIm(ob3)}, false); 

var ob4 = document.getElementById('ob4');
ob4.addEventListener('click', function(){displayIm(ob4)}, false); 

var ob5 = document.getElementById('ob5');
ob5.addEventListener('click', function(){displayIm(ob5)}, false); 

var current = null;


function displayIm(im){

	var el = document.getElementById(im.id+'b');

	if(current != null){
		current.style['opacity'] = '0';
		current.style['visibility'] = 'hidden';
	}

	el.style['visibility'] = 'visible';
	el.style['z-index'] = '1';
	el.style['opacity'] = '1';

	current = el;
}