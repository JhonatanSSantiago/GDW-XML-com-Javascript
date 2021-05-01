function ajax(caminho,funcao) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=funcao;
    xhttp.open("GET",caminho,true);
    xhttp.send();
}
document.getElementById("botao").onclick=()=>{ajax("dados.txt",executar)};
function executar()
{
    if(this.readyState===4&&this.status===200)
        document.getElementById("res").innerHTML=this.responseText;
}

document.getElementById("btXml").onclick=()=>{ajax("nota.xml",mostrar)};
function mostrar()
{
    if(this.readyState===4&&this.status===200)
    {
        let doc=this.responseXML;
        let texto="";
        let filhos=doc.documentElement.childNodes;
        let tam=filhos.length;
        for(let i=0;i<tam;i++)
        {
            if(filhos[i].nodeType==1)
                texto+="<p><b>"+filhos[i].nodeName+"</b>: "+
                filhos[i].firstChild.nodeValue+"</p>";
        }
        document.getElementById("resxml").innerHTML=texto;
    }
}
