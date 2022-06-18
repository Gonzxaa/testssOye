const items = document.getElementById('items')
const templateCard = document.getElementById('template-card-songs').content;
const fragment = document.createDocumentFragment()
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado')

/*INICIO Carga canciones*/
const pintarCard = respuesta => {
	respuesta.canciones.forEach(element => {
		templateCard.querySelector('h3').textContent = element.nombre
		templateCard.querySelector('img').setAttribute("src", "./imagenes/icon_" + element.icono + ".svg")
		templateCard.querySelector('img').setAttribute("alt", "Icono Numero: " + element.icono)
		templateCard.querySelector('audio').setAttribute("src", "./canciones/" + element.ruta)
		templateCard.querySelector('audio').setAttribute("alt", "Cancion Nombre: " + element.nombre)

		const clone = templateCard.cloneNode(true)
		fragment.appendChild(clone)
	});
	items.appendChild(fragment)
}
/*FIN Carga canciones*/


/*INICIO Creacion Formulario Busqueda*/
const formularioCanciones = respuesta => {
	const filtrar = () => {
		resultado.innerHTML = '';
		const texto = formulario.value.toLowerCase()
		for (let formularioCanciones of respuesta.canciones) {
			let nombre = formularioCanciones.nombre.toLowerCase()
			if (nombre.indexOf(texto) !== -1) {
				console.log(texto)
				resultado.innerHTML += `
				
				<td><img src="./imagenes/icon_${formularioCanciones.icono}.svg" alt="${formularioCanciones.nombre}" class="img-buscador"></td>
				<td><b>${formularioCanciones.nombre.toUpperCase()}</b></td>
				<td><audio src="./canciones/${formularioCanciones.ruta}" controls></audio>
				`
			}
		}
		if (resultado.innerHTML === '') {
			resultado.innerHTML += `
			<td>No existen coincidencias..</td>
				`
		}
	}
	formulario.addEventListener('keyup', filtrar)
}
/*FIN Creacion Formulario Busqueda*/
