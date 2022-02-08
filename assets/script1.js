let form = document.getElementById('formulario')
form.addEventListener('submit', let = (event) => {
event.preventDefault()
    
    clean_error()
    let text_name = document.querySelector('#nombre').value;
    let text_subject = document.querySelector("#asunto").value;
    let text_message = document.querySelector("#mensaje").value;
    let resultado = validate(text_name, text_subject, text_message);
    if(resultado == true){
        success()
    };
})

function clean_error(){
    document.querySelector(".resultado").innerHTML='';
    document.querySelector(".errorNombre").innerHTML='';
    document.querySelector(".errorAsunto").innerHTML='';
    document.querySelector(".errorMensaje").innerHTML='';
}

let success = () =>{
    document.querySelector(".resultado").innerHTML= 'Mensaje enviado con éxito !!!'
    console.log("Formulario pasó la validación")
}

let validate = (nombre, asunto, mensaje)  => {

    let validation = true;

    let validate_name = /[a-zA-Z]/gim
    if(validate_name.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML='El nombre es requerido !!!'
        validation = false;
    }

    let validate_subject = /[a-zA-Z]/gim
    if(validate_subject.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML='El asunto es requerido !!!'
        validation = false;
    }

    let validate_message = /[a-zA-Z]/gim
    if(validate_message.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML='El mensaje es requerido !!!'
        validation = false;
    }

    return validation
}

