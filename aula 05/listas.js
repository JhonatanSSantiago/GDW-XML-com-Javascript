function ajax(caminho,funcao) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=funcao;
    xhttp.open("GET",caminho,true);
    xhttp.send();
}
let doc;
ajax("listas.xml",mostrarTudo);

function mostrarTudo(){
    if(this.readyState==4&&this.status==200) {
        doc=this.responseXML;
        let listas=doc.getElementsByTagName("lista");
        let conteudo = document.getElementById("conteudo");

        for(let lista of listas){
            let div = document.createElement("div");
			div.setAttribute("class", "lista" );
			addTitulos(pegaTitulo(lista), div);
			listaItem(lista, div);
			conteudo.appendChild(div);
        }       
    }
}

function pegaTitulo(lista) {
	return lista.getElementsByTagName("titulo")[0].firstChild.nodeValue;
}

function listaItem(lista, div) {
    let itens=lista.getElementsByTagName("item");
    let ul = document.createElement("ul");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].nodeType == 1) {
			texto = itens[i].firstChild.nodeValue;
			let feito = document.createElement("del");
			let b = document.createElement("b");
            let li = document.createElement("li");
			let noTxt = document.createTextNode(texto);

			if (itens[i].getAttribute("prioridade") == "sim") {
				b.appendChild(noTxt);
				noTxt = b
			}
			if (itens[i].getAttribute("feito") == "sim") {
				feito.appendChild(noTxt);
                li.setAttribute("class", "feito" );
				noTxt = feito
			}
            li.appendChild(noTxt);
	        ul.appendChild(li);
	        div.appendChild(ul);
		}
    }
}

function addTitulos(texto, div) {
	let h3 = document.createElement("h3");
	let noTxt = document.createTextNode(texto);
	h3.appendChild(noTxt);
	div.appendChild(h3);
}

