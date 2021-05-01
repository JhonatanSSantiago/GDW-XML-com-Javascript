function ajax(caminho,funcao) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=funcao;
    xhttp.open("GET",caminho,true);
    xhttp.send();
}
let doc;
function iniciarMenu(){
    if(this.readyState==4&&this.status==200){
        doc=this.responseXML;

        let textoItem = "";
        let listas = doc.getElementsByTagName("lista");
        let tam = listas.length;
        let div = document.createElement("div");
        

        for(let i=0; i<tam; i++){
            let ul = document.createElement("ul");
            if(listas[i].nodeType==1){
                
                let h3 = document.createElement("h3");
                let tituloValue = listas[i].getElementsByTagName("titulo")[0].firstChild.nodeValue;
                let notitulo = document.createTextNode(tituloValue);
                h3.appendChild(notitulo);
                div.appendChild(h3);


                let item=listas[i].getElementsByTagName("item");
                let tamitem = item.length;
                for(let y=0; y< tamitem; y++){
                    if (item[y].nodeType==1){
                        
                        let li=document.createElement("li");
                        let b = document.createElement("b");
                        let p = document.createElement("p");
                        let pri = document.createElement("p");                     
                        let del = document.createElement("del");
                        textoItem = item[y].firstChild.nodeValue;
                        let noItem = document.createTextNode(textoItem);
                       

                                                  
                        if(item[y].getAttribute("feito")=="sim"){
                          //  p.setAttribute("class", "feito");
                            del.appendChild(noItem);

                            if(item[y].getAttribute("prioridade")=="sim"){
                                p.setAttribute("class", "prioridade feito");
                                b.appendChild(del);
                                p.appendChild(b);
                            }else{
                                p.appendChild(del);
                                p.setAttribute("class", "feito");
                            }
                            
                        } else {
                          //  p.setAttribute("class", "naofeito");
                            if(item[y].getAttribute("prioridade")=="sim"){
                                p.setAttribute("class", "prioridade naofeito");
                                b.appendChild(noItem);
                                p.appendChild(b);
                            }else {
                                p.appendChild(noItem);
                                p.setAttribute("class", "naofeito");
                            }
                        }          
                        li.appendChild(p);
                        ul.appendChild(li);
                        div.appendChild(ul);
                    }                 
                }
                document.getElementById("titulo").appendChild(div);              
            }                  
        }    
    }
}

/*
document.getElementById("botao").onclick=()=>{
    let texto=document.getElementById("pesquisa").value;
    let titulos=doc.getElementsByTagName("titulo");
    for (let titulo of titulos) {
       let pesquisa =  titulo.firstChild.nodeValue;
       if (texto == pesquisa){
           console.log("igual");
       }
    }
    
    
} */

ajax("listas.xml",iniciarMenu);