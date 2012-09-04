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
	if(arr instanceof Array){
		arr.unshift(obj);
		return arr;
	}
	return null;
}

function isNull(arr){
	if(arr instanceof Array){
		return arr.length === 0;
	}
	return null;
}

function isAtom(s){
	return typeof s === 'string' || typeof s === 'number' || typeof s === 'boolean'; 
}

function isEq(a, b){
	if(isAtom(a) && isAtom(b) && typeof a !== 'number' && typeof b !== 'number'){
		return a === b;
	}
	return null;
}