const h1 = document.getElementById('titulo');
const campo = document.getElementById('campo');
const campo2 = document.getElementById('campo2');
const op = document.getElementById('op'); 
const resLabel = document.createElement('p');
const button = document.getElementById('boton');
button.addEventListener('click', suma);
function suma() {
    if(campo.value == '' || campo2.value == '') {
        alert("two values are needed!");
    }
    else {
        let resultado = parseInt(campo.value) + parseInt(campo2.value);
        resLabel.innerHTML = 'the result is: ' + resultado;
        op.appendChild(resLabel);
    }
}