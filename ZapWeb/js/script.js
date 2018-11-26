/** 


function mostrarConteudo(){

}

function buscarConversa(){
    for(let i= 0; i <listaElementos.length; i++){
        $("#grupo").append( "")


    }
    
}

**/
 //Aqui a lista Hard Coded
 let listaElementos = [
    {nome: "Grupo de Oração Almeidinha", id: "1", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "22", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "32", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "42", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "42", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "32", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "12", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    {nome: "Grupo de Oração Almeidinha", id: "10", conversa:"Essa mensagem aqui","lastMessage":"Queima raparigal","pathToPhoto":"users/ldasdllaskldasldk.png"},
    
];

function createChildren( object ) 
{
    let struct = `<div id="${object.id}" class="contato">
                        <img class="miniaturaContato" src="${object.pathToPhoto}">
                        <span class="nomeMiniaturaContato">${object.nome}</span>
                        <span class="ultimaMensagemMiniaturaContato">${object.lastMessage}</span>
                    </div>`;
    return struct;
}

function mountViewContacts()
{
    let elem = $("#navmain");
    $.each( listaElementos, function(  key, object ){
        let newObject = createChildren(object);
        elem.append( newObject )
    });
}


mountViewContacts();


//percorre a lista e adiciona a tag <li> pra cada elemento da lista usando a função append do Jquery
/*
for(let i=0; i < listaElementos.length; i++){
    $("#grupos").append(
        "<li id="+listaElementos[i].id+">"+listaElementos[i].nome+"</li>"
    );

    //pega o elemento da lista que foi adicionado usando o id dele e coloca o evento de click
    $("#"+listaElementos[i].id).on("click", function(){
        //se o cara clicar no item da lista, ele vai mudar o nome do header
        $("#header").html(listaElementos[i].nome);
    });
}
*/
