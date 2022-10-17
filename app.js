const INPUT = document.getElementById('input-txt')

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
    return li.innerHTML =verValue()
}

function verValue() {
    let soyValue = INPUT.value.trim()
    array.push(soyValue)
    console.log(array);
    return soyValue
}

function conecta(){
    setea()
    verValue()
    addElement()   
}

