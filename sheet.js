
let x = "foo"; // String
let i = 5; // Number
let f = 5.2; // Number

let y = [1, 2, 3, "mitsos"];
console.log(y[2]);

let z = {
	'name': 'Rodgar',
	'age': 31
}; // Dictionary, HashMap, Object

console.log(z['name'])
console.log(z.name)


function add(x, y) {
	return x+y;
}

let w = 2;
w = add

w(1, 2);



/////////////


function foo(w) {
	return w(4, 5);
}


let ffff = foo(add);
console.log("ffff is " + ffff);

////////////


function make_adder (x) {
	return function (y) {
		return x+y;
	}
}

const adds_two = make_adder(2);
console.log(adds_two(4));


const wtf = make_adder(make_adder(5));
console.log(wtf(2));
