let iterable = [10, 20, 30];
for (let value of iterable) {
	console.log(value);
}
iterable.forEach(function (item, index, array) {
	console.log(item, index);
});
var hunters = ["Boba Fett", "Jango Fett"];
var newLength = hunters.push("Bossk");
var last = hunters.pop();
var first = hunters.shift();
var newLength = hunters.unshift("Cad Bane");
var pos = hunters.indexOf("Cad Bane");
var removedHunter = hunters.splice(pos, 1);
var shallowCopy = hunters.slice();

function compara(comparador) {
	var c = 4,
	d = 5;
	console.log(comparador(c, d));
}
//função anônima
compara(function (a, b) {
	return a < b
});
compara((a, b) => a < b);

function fun1(...args){
    console.log(args.length);
}
function fun2(a,b,...args){
    console.log(args.length);
}
fun1(1,2,3);
fun2(1,2,3);

function funDefault(a=1,b=2){
    console.log(a+b);
}
funDefault(2,3);

var deathStar={
    energy: 100,
	model: 'DS-1 Orbital Battle Station',
	shoot(){
		console.log("       ,_~\"\"\"~-,\n*---====*)------`,\n     |===========|\n     `,---------,'\n       ~-.___.-~  ");
		this.energy=0;
	},
	recharge: function(){this.energy=100}
}

deathStar.shoot();
console.log(deathStar.energy);
deathStar.recharge();
console.log(deathStar);
