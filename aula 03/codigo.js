document.getElementById("botao").onclick=()=>
{
    let texto=document.getElementsByTagName("input")[0].value;
    let lista=document.getElementById("lista");
    let li=document.createElement("li");
    let noTexto=document.createTextNode(texto);
    li.appendChild(noTexto);
    lista.appendChild(li);

    let botao=document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("value","Remover");
    botao.onclick=remover;
    li.appendChild(botao);

  /*  let caixa=document.createElement("input");
    caixa.setAttribute("type", "button");
    caixa.setAttribute("id", "alterar");
    caixa.setAttribute("placeholder", "Digite aqui o novo nome");
    li.appendChild(caixa); */

    let btrocar=document.createElement("input");
    btrocar.setAttribute("type","button");
    btrocar.setAttribute("value","Alterar");
    btrocar.onclick=alterar;    
    li.appendChild(btrocar);
}
let remover=function()
{
    let pai=this.parentNode;
    pai.parentNode.removeChild(pai);
}

let alterar=function(){
    let NovoTexto=document.getElementById("alterar").value;
    let Novali=document.createElement("li");
    let lista=document.getElementById("lista");
    let NovoNoTexto=document.createTextNode(NovoTexto);
    Novali.appendChild(NovoNoTexto);
    lista.appendChild(Novali);  
    let pai=this.parentNode;
    pai.parentNode.replaceChild(Novali, pai);

    let botao=document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("value","Remover");
    botao.onclick=remover;
    Novali.appendChild(botao);

    let btrocar=document.createElement("input");
    btrocar.setAttribute("type","button");
    btrocar.setAttribute("value","Alterar");
    btrocar.onclick=alterar;    
    Novali.appendChild(btrocar);
}