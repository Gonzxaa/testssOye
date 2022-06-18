/*INICIO Carga de Datos*/
function cargarDatos() {
	$.ajax({
		url: "https://gonzxaa.github.io/testssOye/datos.json"
	}).done(function (respuesta) {
		pintarCard(respuesta);
		formularioCanciones(respuesta);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	cargarDatos()
})
/*FIN Carga de Datos*/
