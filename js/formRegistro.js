const formularios = document.getElementById("formularios");

const userPssw = document.getElementById("userPssw");
const userPsswConfirm = document.getElementById("userPsswConfirm");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertPssw = document.getElementById("alertPssw");
const alertPsswConfirm = document.getElementById("alertPsswConfirm");
const alertEmail = document.getElementById("alertEmail");


//  /^[a-zA-Z\d]+/g%
//  /^[a-zA-Z\s\d]{15,20}$

const regUserPssw = /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,16}$/;
const regUserPsswConfirm = /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,16}$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
	alertSuccess.classList.remove("d-none");
	alertSuccess.textContent = "Registro exitoso, ¡Bienvenido!";
};

const pintarMensajeError = (errores) => {
	errores.forEach((item) => {
		item.tipo.classList.remove("d-none");
		item.tipo.textContent = item.msg;
	});
};

formularios.addEventListener("submit", (e) => {
	e.preventDefault();

	alertSuccess.classList.add("d-none");
	const errores = [];

	//Validar igualdad de contrasenas
	if (!regUserPsswConfirm.test(userPsswConfirm.value) || !userPsswConfirm.value.trim()) {
		userPsswConfirm.classList.add("is-invalid");
		userPssw.classList.add("is-invalid");

		errores.push({
			tipo: alertPsswConfirm,
			msg: "Formato no válido. La constrasena debe tener al menos: 1 Minúscula, 2 Números, Como minimo 8 caracteres y Maximo 16, No puede haber espacios en blanco",
		});
	} else {
		if (userPssw.value != userPsswConfirm.value) {
			userPsswConfirm.classList.add("is-invalid");
			userPssw.classList.add("is-invalid");

			errores.push({
				tipo: alertPsswConfirm,
				msg: "Las contrasenas NO son IGUALES!",
			});
		} else {
			userPsswConfirm.classList.remove("is-invalid");
			userPssw.classList.remove("is-invalid");
			userPsswConfirm.classList.add("is-valid");
			userPssw.classList.add("is-valid");
			alertPsswConfirm.classList.add("d-none");
		}
	}


	// validar email
	if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
		userEmail.classList.add("is-invalid");

		errores.push({
			tipo: alertEmail,
			msg: "Escriba un correo válido (Puede faltar el: '@' o '.com')",
		});
	} else {
		userEmail.classList.remove("is-invalid");
		userEmail.classList.add("is-valid");
		alertEmail.classList.add("d-none");
	}

	if (errores.length !== 0) {
		pintarMensajeError(errores);
		return;
	}
	pintarMensajeExito();
	setTimeout(function () {
		window.location.href = "./index.html";
	}, 1000);
});
