const H1 = document.getElementById('h1')
const BODY = document.body
const INPUT = document.getElementById('input-txt')
const LI = document.getElementsByTagName('li')


const array =[]

function setea() {
    let task = document.getElementById('input-txt').value;
    let id = 'id ' + task
    localStorage.setItem(task,id)
    return task, id;
}

function addElement() {
    let container = document.getElementById('container');
    let li = document.createElement('li')
    container.appendChild(li)
    let texto =  document.getElementById('input-txt').value;
    texto==''?li.innerHTML='Intenta con un comando':li.innerHTML=INPUT.value
}



function verValue() {
    let soyValue = INPUT.value
    array.push(soyValue)
    console.log(array);
    return soyValue
}



function cambioFondo() {
    let texto =  document.getElementById('input-txt').value;
    if(texto=='fondo1') BODY.style.backgroundImage='url(https://w0.peakpx.com/wallpaper/707/472/HD-wallpaper-minimal-desert-black-dark-desert-minimal-moon-red-stars.jpg)' 

}
function cambioFondo2() {
    let texto =  document.getElementById('input-txt').value;
    if(texto=='fondo2') BODY.style.backgroundImage='url(https://th.bing.com/th/id/R.4a3b168ac3f8d92e4ce383c2953da46d?rik=1vPyeDQ8jrr2ow&pid=ImgRaw&r=0)' 

}function messi() {
    let texto =  document.getElementById('input-txt').value;
    if(texto=='messi') BODY.style.backgroundImage='url(https://th.bing.com/th/id/R.788d5b4d1d78a039ad0686911bdf9580?rik=1trGvAP9KKdCUQ&pid=ImgRaw&r=0)' 

}
function modoBlancoh1 (){
    let texto =  document.getElementById('input-txt').value;
    if(texto=='modo claro'){
        H1.style.color='black'
    }
}
function cambioInput(){
    let texto =  document.getElementById('input-txt').value;
    if(texto=='modo claro') INPUT.style.color='black'
}

function cambioFondoBlanco() {
    let texto =  document.getElementById('input-txt').value;
    if(texto=='modo claro') BODY.style.backgroundColor='white' 

}

function cambioTema(){
    modoBlancoh1()
    cambioFondoBlanco()
    cambioInput()
}
function cambioDeFondos(){
    cambioFondo()
    cambioFondo2()
    messi()
}

function conecta(){
    setea()
    verValue()
    addElement() 
    cambioDeFondos()
    cambioTema()
}

//comandos
//color.
//fecha.
//fondo1
//fondo2
// modo claro
//messi