const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment()


/*INICIO Top3 Canciones*/
const pintarCard = respuesta => {
	respuesta.canciones.sort((a, b) => {
		if (a.reproducciones > b.reproducciones) {
			return 1;
		}
		if (a.reproducciones < b.reproducciones) {
			return -1;
		}
		return 0;
	});
	const Top3 = respuesta.canciones.slice(7, 10).reverse();
	//console.log(Top3);   //<-- Muestra en consola el TOP 3

	Top3.forEach(element => {
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
/*FIN Top3 Canciones*/
