// functions native to Scheme

function car(arr){
	if(arr.constructor === Array && arr.length){
		return arr[0];
	}
	return null;
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