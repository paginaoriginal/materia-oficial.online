const p1Div = document.getElementById('p1');
const p2Div = document.getElementById('p2');
const p3Div = document.getElementById('p3');
const p4Div = document.getElementById('p4');


function mostrarPagina(pagina) {
    p1Div.style.display = pagina === 'p1' ? 'block' : 'none';
    p2Div.style.display = pagina === 'p2' ? 'block' : 'none';
    p3Div.style.display = pagina === 'p3' ? 'block' : 'none';
    p4Div.style.display = pagina === 'p4' ? 'block' : 'none';
}

let valor = 207.00;
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



/* DIV 1 */
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
/* DIV 1 */


/* DIV 2 */
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
/* DIV 2 */


/* DIV 3 */
function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block'
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none'
}

function showLoadingB3() {
    var button = document.getElementById("B3");
    aumentarValor();
    showPopupB3();
    setTimeout(function() {
        closePopupB3();
        mostrarPagina('p4')
    }, 4000)

}
/* DIV 3 */


/* DIV 4 */
function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block'
}

function redirectToSaque(utm) {
    window.location.href = "saqueFinal.html";
}

function showLoadingB4(utm) {
    var utm = utm;
    var button = document.getElementById("B4");
    aumentarValor();
    showPopupB4();
    setTimeout(function() {
        redirectToSaque(utm);
    }, 4000)

}
/* DIV 4 */



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
}function funcao4(){
    if(document.getElementById("chatId4").value.toLowerCase() !=document.getElementById("codigoAleatorio4").textContent.toLowerCase()){
        alert("Código incorreto! Por favor, digite o código corretamente para continuar!")
    }else{
        document.getElementById("popupB4").style.display="block"
        showLoadingB4();
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


const codigoAleatorio4 = generateRandomCode(7);

document.getElementById("codigoAleatorio4").textContent = codigoAleatorio4;

document.getElementById("chatId4").style.textTransform="uppercase"

document.getElementById("gerarCodigo4").addEventListener("click", ()=>{
    document.getElementById("codigoGerado4").style.display = "block";
    document.getElementById("formGerado4").style.display = "block";
})






const codigoAleatorio5 = generateRandomCode(7);
const codigoAleatorioErrado5= generateRandomCode(7);

document.getElementById("codigoAleatorio5").textContent = codigoAleatorisao5;

document.getElementById("codigoAleatorioCerto5").textContent = codigoAleatorio5;

document.getElementById("codigoAleatorioErrado5").textContent = codigoAleatorioErrado5;

document.getElementById("codigoGerado5").style.display = "block";



const codigoAleatorio6 = generateRandomCode(7);
const codigoAleatorioErrado6 = generateRandomCode(7);

document.getElementById("codigoAleatorio6").textContent = codigoAleatorio6;

document.getElementById("codigoAleatorioCerto6").textContent = codigoAleatorio6;

document.getElementById("codigoAleatorioErrado6").textContent = codigoAleatorioErrado6;

document.getElementById("codigoGerado6").style.display = "block";



const codigoAleatorio7 = generateRandomCode(7);
const codigoAleatorioErrado7 = generateRandomCode(7);

document.getElementById("codigoAleatorio7").textContent = codigoAleatorio7;

document.getElementById("codigoAleatorioCerto7").textContent = codigoAleatorio7;

document.getElementById("codigoAleatorioErrado7").textContent = codigoAleatorioErrado7;

document.getElementById("codigoGerado7").style.display = "block";