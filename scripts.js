

/*  VARIAVEL
Um esxpço de memorias que voce reserva e pode guardar o que quiser la dentro

3 Jeitos de criar uma Variavel
- Var / jeiro antigo -  NAO USAR
- let / Voce pode alterar o valor
- const / constante - NAO altera 

*/
/*
 const numero1 = 100
 const numero2 = 300
 const numeroTotal = numero1 + numero2

 console.log (numeroTotal)

 /* Funcoes 
*
 const carla = "Oi, sou a Carla"
 const vinicius = "Ele é o Vinicius"
 const numero3 = 400
 const numero4 = 300

 function soma () {
    const somatoria = numero3 + numero4
    console.log (somatoria)
 }

 console.log (carla)
 soma()
 soma()
 soma()
 
/* DOM
Arvore de elementos do site */

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex (-50%)"
    mascara.style.visibility = "visible"
}


    function esconderForm() {
        form.style.left = "-300%"
        form.style.transform = "translatex (0)"
        mascara.style.visibility = "hidden"
    }
