/*
	a = ai
	e = enter
	i = imes
	o = ober
	u = ufat

	aceitar somente letras minúsculas
	impedir caracteres especiais e letras com acentos
	criptografar e decriptografar textos


	Extras:
	- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

	Temos um período de tempo de quatro semanas para desenvolver o projeto e vamos trabalhar com o sistema ágil de desenvolvimento, utilizando o Trello da seguinte forma:

	A coluna Pronto pra iniciar apresenta os cartões com os elementos ainda não desenvolvidos.
	Já na coluna Desenvolvendo ficarão os elementos que você estiver desenvolvendo no momento. Ao iniciar uma tarefa, você poderá mover o cartão que contém a tarefa para esta coluna.
	No Pausado estarão os elementos que você começou a desenvolver, mas precisou parar por algum motivo.
	Por fim, a coluna Concluído terá os elementos já concluídos.

	*/

function Encriptografia(){

	var textValue = document.getElementById("textAreaEncripto").value
	var textValueEncripted = document.getElementById("textAreaDecripto")
	var encriptedWord = ""

	for(let x = 0; x < textValue.length ; x++) {

		console.log(textValue[x])

		if (textValue[x] === "a") {encriptedWord += "ai"}
		else if (textValue[x] === "e") {encriptedWord += "enter"}
		else if (textValue[x] === "i") {encriptedWord += "imes"}
		else if (textValue[x] === "o") {encriptedWord += "ober"}
		else if (textValue[x] === "u") {encriptedWord += "ufat"}
		else { encriptedWord += textValue[x]}

	}

	console.log(encriptedWord)
	textValueEncripted.value = encriptedWord
	
}

function Decriptografia(){

	/* 
	pairaibenterns 
	poberr 
	enterncairair 
	enterssenter 
	dentersaifimesober 
	enter 
	tenterr 
	fimesnailimeszaidober 
	enterlenter 
	coberm 
	sufatcenterssober
	*/

	var textValue = document.getElementById("textAreaDecripto").value
	var textValueDecripted = document.getElementById("textAreaEncripto")

	var decriptedText = textValue.replace(/ai/g, 'a')
	decriptedText = decriptedText.replace(/enter/g, 'e')
	decriptedText = decriptedText.replace(/imes/g, 'i')
	decriptedText = decriptedText.replace(/ober/g, 'o')
	decriptedText = decriptedText.replace(/ufat/g, 'u')

	textValueDecripted.value = decriptedText

}

function textCopy(target) {

    let getTextFromTextArea = document.getElementById(target);

    getTextFromTextArea.select();

    getTextFromTextArea.setSelectionRange(0, getTextFromTextArea.value.length)
    document.execCommand("copy");

    alert("O texto é: " + getTextFromTextArea.value);

}