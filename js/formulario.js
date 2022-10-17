const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	apellido: false,
	mail: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "mail":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('div-form-incorrecto');
		document.getElementById(`${campo}`).classList.add('div-form-correcto');
		document.querySelector(`#${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#${campo} .error`).classList.remove('error-activo');
		document.querySelector(`#${campo} .error2`).classList.remove('error2-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('div-form-incorrecto');
		document.getElementById(`${campo}`).classList.remove('div-form-correcto');
		document.querySelector(`#${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#${campo} .error2`).classList.remove('error2-activo');
		document.querySelector(`#${campo} .error`).classList.add('error-activo');
		campos[campo] = false;
	}

	if(input.value === ''){
		document.querySelector(`#${campo} .error`).classList.remove('error-activo');
		document.querySelector(`#${campo} .error2`).classList.add('error2-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.mail && campos.telefono){
		formulario.reset();

		document.getElementById('form-exito').classList.add('form-exito-activo');
		document.getElementById('form-mensaje').classList.remove('form-mensaje-activo');
		setTimeout(() => {
			document.getElementById('form-exito').classList.remove('form-exito-activo');
		}, 5000);

		document.querySelectorAll('.div-form-correcto').forEach((icono) => {
			icono.classList.remove('div-form-correcto');
		});
	} else {
		document.getElementById('form-mensaje').classList.add('form-mensaje-activo');
	}
});