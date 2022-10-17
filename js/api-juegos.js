const cargarJuego = async () => {
	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/28?key=11ba47a8de764f8480804184fa62c172');


		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const pc = await datos.platforms[0].platform;
			const ps4 = await datos.platforms[1].platform;
			const xbone = await datos.platforms[2].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${pc.name}` + ', ' + `${ps4.name}` + ', ' + `${xbone.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('rdr2').innerHTML = juego;
		} else if (respuesta.status === 404) {
			// Si algo salió mal
			console.log('La URL de la API tiene un error');
		}
		// Si la API Key tiene un error la consola devuelve un typeError por defecto.

	} catch (error) {
		console.log(error);
	}

}


const cargarJuego2 = async () => {

	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/3990?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const pc = await datos.platforms[0].platform;
			const ps4 = await datos.platforms[1].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${pc.name}` + ', ' + `${ps4.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('tlou').innerHTML = juego;
		} else if (respuesta.status === 404) {
			// Si algo salió mal
			console.log('La URL de la API tiene un error');
		}
		// Si la API Key tiene un error la consola devuelve un typeError por defecto.

	} catch (error) {
		console.log(error);
	}
}


const cargarJuego3 = async () => {

	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/58175?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const ps5 = await datos.platforms[0].platform;
			const ps4 = await datos.platforms[1].platform;
			const pc = await datos.platforms[2].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${ps5.name}` + ', ' + `${ps4.name}` + ', ' + `${pc.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('gow2018').innerHTML = juego;
		} else if (respuesta.status === 404) {
			// Si algo salió mal
			console.log('La URL de la API tiene un error');
		}
		// Si la API Key tiene un error la consola devuelve un typeError por defecto.

	} catch (error) {
		console.log(error);
	}
}


const cargarJuego4 = async () => {

	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/28026?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const nSwitch = await datos.platforms[0].platform;

			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${nSwitch.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('smo').innerHTML = juego;
		} else if (respuesta.status === 404) {
			// Si algo salió mal
			console.log('La URL de la API tiene un error');
		}
		// Si la API Key tiene un error la consola devuelve un typeError por defecto.

	} catch (error) {
		console.log(error);
	}
}


cargarJuego();
cargarJuego2();
cargarJuego3();
cargarJuego4();