 const body = document.getElementsByName("body");
const main = document.createElement("main");
document.body.appendChild(main)

main.className="principal"

const titulo=document.createElement("h3")
const p11=document.createElement("p")
titulo.appendChild(p11)
main.appendChild(titulo)

p11.innerText="Virtual Market"


let  productsCart = [
    {   
        name: "Lápis",
        price: 2.00
    },
    {   
        name: "Caderno",
        price: 15.00
    },
    {   
        name: "Bolsa",
        price: 50.00
    }
]


let lista = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")
let li6 = document.createElement("li")


lista.appendChild(li1)
lista.appendChild(li2)
lista.appendChild(li3)
lista.appendChild(li4)
lista.appendChild(li5)
lista.appendChild(li6)
main.appendChild(lista)

let sec=document.createElement("section")
li5.appendChild(sec)


let p1= document.createElement("p")
let p2= document.createElement("p")
let p3= document.createElement("p")
let p4= document.createElement("p")
let p5= document.createElement("p")
let p6= document.createElement("p")
let p7= document.createElement("p")
let p8= document.createElement("p")
let p9= document.createElement("p")
let p10= document.createElement("p")

li2.className="movi"
li3.className="movi"
li4.className="movi"

li1.appendChild(p1)
li1.appendChild(p2)
li2.appendChild(p3)
li2.appendChild(p4)
li3.appendChild(p5)
li3.appendChild(p6)
li4.appendChild(p7)
li4.appendChild(p8)
sec.appendChild(p9)
sec.appendChild(p10)

li1.className='c1'
li2.className='produtos'
li3.className='produtos'
li4.className='produtos'
li5.className='sec'

p1.innerText="Item"
p2.innerText="Valor"
p3.innerText=productsCart[0].name
p4.innerText=`R$ ${productsCart[0].price}`
p5.innerText=productsCart[1].name
p6.innerText=`R$ ${productsCart[1].price}`
p7.innerText=productsCart[2].name
p8.innerText=`R$ ${productsCart[2].price}`
p9.innerText="Total"

const button=document.createElement("button")
li6.appendChild(button)

button.innerText="Finalizar Compras"

let soma=0;

li2.addEventListener('click', function(){
    soma+=productsCart[0].price
    p10.innerText=soma
})

li3.addEventListener('click', function(){
    
    soma+=productsCart[1].price
    p10.innerText=soma
})

li4.addEventListener('click', function(){
    
     soma+=productsCart[2].price
     p10.innerText=soma
})


button.addEventListener('click', function(){
    
   if(p10.innerText>0){
     alert("Compra realizada!")
   }
   else{
    alert("Nenhuma compra efetuada!")
    }
})



