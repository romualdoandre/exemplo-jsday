/**
* Imprime uma mensagem no console.
* @param {String} name Nome da pessoa
* @return {String} name Nome da pessoa modificado
**/
function hello(name){
	console.log("hello, "+name+"!");
	return name+" disse hello";
}

function helloAgain(){
	var name=document.getElementById("nome");
	if(name.value!=""){
		alert("Hello, "+name.value+"!");
		name.value="";
	}
	else
		alert("Digite um nome");
}

function changeInnerHtml(id,arg){
	document.getElementById(id).innerHTML="Hello, "+arg+"!";
}
