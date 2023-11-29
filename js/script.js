//fetch server para requisitos http

fetch("http://localhost:3000/lista/vizualizar")
.then((resposta)=>{
if(resposta.status == 200){
    resposta.json().then((dados)=>{
        const div = document.querySelector("#get");
        dados.map ( (produto)=>{

           

            const input = document.createElement('input')
            input.type = "checkbox"

            const card = document.createElement("tr")
            card.id = produto.id

            const desc = document.createElement("th")
            desc.innerText = produto.desc

            const qtd = document.createElement("th")
            qtd.innerText = produto.qtd

            const preco = document.createElement("th")
            preco.innerText = produto.preco

            const categoria = document.createElement("th")
            categoria.innerText = produto.categoria

            const iconeContainer = document.getElementById("iconeContainer");
            const icone = document.createElement("button");
            icone.className = "material-symbols-outlined"
            icone.innerText = "edit"


            const edit = document.createElement('a')
            edit.href = `./index.html?id=${produto.id}&desc=${produto.desc}&qtd=${produto.qtd}&preco=${produto.preco}&categoria=${produto.categoria}`           

            icone.append(edit)


            

        
            const icone2= document.createElement('button') 
            icone2.className = "material-symbols-outlined"
            icone2.innerText = "delete"

            const del = document.createElement('button')


            del.append(icone2)
           
            
            

            del.addEventListener('click', ()=>{
                fetch(`http://localhost:3000/lista/excluir/${id}` , {
                    method: 'DELETE',
                    headers:{
                        'Content-type': 'application/json'
                    },
                }).then((resposta)=>{
                    if(resposta.status != 200){
                        console.log(resposta.json())
                    }
                })
            })
           
           
            card.append(input,desc,preco,qtd,icone,icone2,)
           
            div.append(card)
        })
    })
}
})


