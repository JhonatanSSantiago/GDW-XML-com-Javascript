function ajax(caminho, funcao) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = funcao;
    xhttp.open("GET",caminho,true);
    xhttp.send();
}

document.getElementById("botao").onclick=()=>{ajax("dados.txt",executar)};

function executar() {
    if(this.readyState===4&&this.status===200){
       // document.getElementById("res").innerHTML=this.responseText;
        let ptxt = document.createElement("p");
        let texto = this.responseText;
        let notexto = document.createTextNode(texto);
        ptxt.appendChild(notexto);
        document.getElementById("res").appendChild(ptxt);
    }
}

document.getElementById("btXml").onclick=()=>{ajax("nota.xml",mostrar)};

function mostrar() {
    if(this.readyState===4&&this.status===200) {
        let doc=this.responseXML;
        let filhos=doc.documentElement.childNodes;
        let tam=filhos.length;
        
        for(let i=0;i<tam;i++) {
            if(filhos[i].nodeType==1) {
                let p = document.createElement("p");
                let b = document.createElement("b");
                let tag = filhos[i].nodeName + ": ";
                let notag = document.createTextNode(tag)
                b.appendChild(notag);
                p.appendChild(b);
           
                let txt = filhos[i].firstChild.nodeValue;
                let notxt = document.createTextNode(txt);
                p.appendChild(notxt);
                document.getElementById("resxml").appendChild(p);
            }                    
        }
    }
}

/*
<p>
    <b>
        notag
        :

    </b>
    notxt
</p>
*/