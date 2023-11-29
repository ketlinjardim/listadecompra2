const params = new URLSearchParams(window.location.search)

const id = params.get('id');
const desc = params.get('desc');
const preco = params.get('preco');
const qtd = params.get('qtd');
const categoria = params.get('categoria');



if(id != null && desc != null && preco != null && qtd != null  && categoria != null){


document.querySelector('button')
.addEventListener('click',()=>{
    fetch(`http://localhoste/${id}` , {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "desc" :  document.querySelector('#desc').value,
          "preco" : parseFloat( document.querySelector('#preco').value),
          "qtd" :  parseFloat(document.querySelector('#qtd').value),
        })
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
})
}

else{ document.querySelector('#botao')
.addEventListener('click',()=>{ 
    fetch("http://localhost:3000/lista/cadastrar", {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }, 
    body : JSON.stringify({
        "desc": document.querySelector("#desc").value,
        "preco": parseFloat(document.querySelector("#preco").value),
        "qtd": parseFloat(document.querySelector("#qtd").value),
        "categoria": document.querySelector("#categoria").value
    })
}).then((resposta)=>{
    if(resposta.status == 200){
        console.log(resposta.json())
    }
})
})}
