/*INICIO Carga de Datos*/
function cargarDatos() {
	$.ajax({
		url: "http://127.0.0.1:5500/datos.json"
	}).done(function (respuesta) {
		pintarCard(respuesta);
		formularioCanciones(respuesta);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	cargarDatos()
})
/*FIN Carga de Datos*/
