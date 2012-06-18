// functions native to Scheme

function car(arr){
	return arr[0];
}

function cdr(arr){
	if(!arr.length) return;
	arr.shift();
	return arr;
}

function cons(obj, arr){
	arr.unshift(obj);
	return arr;
}