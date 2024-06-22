const p1Div = document.getElementById('p1');

const p2Div = document.getElementById('p2');

const p3Div = document.getElementById('p3');

const p4Div = document.getElementById('p4');

const p5Div = document.getElementById('p5');

const p6Div = document.getElementById('p6');

const p7Div = document.getElementById('p7');

const p8Div = document.getElementById('p8');

const p9Div = document.getElementById('p9');

const p10Div = document.getElementById('10');



function mostrarPagina(pagina) {

    p1Div.style.display = pagina === 'p1' ? 'block' : 'none';

    p2Div.style.display = pagina === 'p2' ? 'block' : 'none';

    p3Div.style.display = pagina === 'p3' ? 'block' : 'none';

}

let valor = 0.00;

const valorSpan = document.getElementById('valor');



function atualizarValor() {

    valorSpan.textContent = `R$ ${valor.toFixed(2)}`

}

atualizarValor();



function aumentarValor() {

    const incremento = [69];

    const indiceAleatorio = Math.floor(Math.random() * incremento.length);

    const valorIncremento = incremento[indiceAleatorio];

    valor += valorIncremento;

    atualizarValor()

}

atualizarValor();


function verificarLarguraDaTela() {

    const isMobile = /Android|iPhone/i.test(navigator.userAgent);

    const isSmallScreen = window.innerWidth <= 800;

    if (isMobile || isSmallScreen) {} else {

    // window.location.href = "about:blank"

    }

}

window.addEventListener('load', verificarLarguraDaTela);



function showPopupB1() {

    document.getElementById('popupB1').style.display = 'block'

}



function closePopupB1() {

    document.getElementById('popupB1').style.display = 'none'

}



function showLoadingB1() {

    var button = document.getElementById("B1");

    aumentarValor();

    showPopupB1();

    setTimeout(function() {

    closePopupB1();

    mostrarPagina('p2')

    }, 4000)

}



function showPopupB2() {

    document.getElementById('popupB2').style.display = 'block'

}



function closePopupB2() {

    document.getElementById('popupB2').style.display = 'none'

}



function showLoadingB2() {

    var button = document.getElementById("B2");

    aumentarValor();

    showPopupB2();

    setTimeout(function() {

    closePopupB2();

    mostrarPagina('p3')

    }, 4000)

}



function showPopupB3() {

    document.getElementById('popupB3').style.display = 'block'

}



function redirectToVsl(utm) {

    window.location.href = "cadastro.html";

}


function showBugPopup(){
    document.getElementById("popupL").style.display="block"
}

function closePopupB3() {

    document.getElementById('popupB3').style.display = 'none'

}

function showLoadingB3(utm) {

    var utm = utm;

    var button = document.getElementById("B3");

    button.disabled=true;

    aumentarValor();

    showPopupB3();

    setTimeout(function() {

        closePopupB3()
        
    setTimeout(() => {
        showBugPopup()
    }, 1000);

    }, 4000)

}


function generateRandomCode(length) {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    codigo += characters.charAt(randomIndex)

    }

    return codigo

}

function funcao(){
    if(document.getElementById("chatId").value.toLowerCase() !=document.getElementById("codigoAleatorio").textContent.toLowerCase()){
        alert("Código incorreto! Por favor, digite o código corretamente para continuar!")
        return false
    }else{
        document.getElementById("popupB1").style.display="block"
        showLoadingB1()
    }
}function funcao2(){
    if(document.getElementById("chatId2").value.toLowerCase() !=document.getElementById("codigoAleatorio2").textContent.toLowerCase()){
        alert("Código incorreto! Por favor, digite o código corretamente para continuar!")
    }else{
        document.getElementById("popupB2").style.display="block"
        showLoadingB2();
    }
}function funcao3(){
    if(document.getElementById("chatId3").value.toLowerCase() !=document.getElementById("codigoAleatorio3").textContent.toLowerCase()){
        alert("Código incorreto! Por favor, digite o código corretamente para continuar!")
    }else{
        document.getElementById("popupB3").style.display="block"
        showLoadingB3();
    }
}


const codigoAleatorio = generateRandomCode(7);

document.getElementById("codigoAleatorio").textContent = codigoAleatorio;

document.getElementById("chatId").style.textTransform="uppercase"

document.getElementById("gerarCodigo").addEventListener("click", ()=>{
    document.getElementById("codigoGerado").style.display = "block";
    document.getElementById("formGerado").style.display = "block";
})


const codigoAleatorio2 = generateRandomCode(7);

document.getElementById("codigoAleatorio2").textContent = codigoAleatorio2;

document.getElementById("chatId2").style.textTransform="uppercase"

document.getElementById("gerarCodigo2").addEventListener("click", ()=>{
    document.getElementById("codigoGerado2").style.display = "block";
    document.getElementById("formGerado2").style.display = "block";
})


const codigoAleatorio3 = generateRandomCode(7);

document.getElementById("codigoAleatorio3").textContent = codigoAleatorio3;

document.getElementById("chatId3").style.textTransform="uppercase"

document.getElementById("gerarCodigo3").addEventListener("click", ()=>{
    document.getElementById("codigoGerado3").style.display = "block";
    document.getElementById("formGerado3").style.display = "block";
})
