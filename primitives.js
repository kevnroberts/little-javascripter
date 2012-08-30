// functions native to Scheme

function car(arr){
	if(arr instanceof Array && arr.length){
		return arr[0];
	}
	return null;
}

function cdr(arr){
	if(arr instanceof Array && arr.length){
		arr.shift();
		return arr;
	}
	return null;
}

function cons(obj, arr){
	arr.unshift(obj);
	return arr;
}