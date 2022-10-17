const cargarJuego = async () => {
	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/850698?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const ps5 = await datos.platforms[0].platform;
			const xbox = await datos.platforms[1].platform;
			const pc = await datos.platforms[2].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${ps5.name}` + ', ' + `${xbox.name}` + ', ' + `${pc.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('ladir').innerHTML = juego;
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
		const respuesta = await fetch('https://api.rawg.io/api/games/630676?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const pc = await datos.platforms[0].platform;
			const xbox = await datos.platforms[1].platform;
			const ps5 = await datos.platforms[2].platform;
			const ps4 = await datos.platforms[3].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${pc.name}` + ', ' + `${xbox.name}` + ', ' + `${ps5.name}` + ', ' + `${ps4.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('judg').innerHTML = juego;
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
		const respuesta = await fetch('https://api.rawg.io/api/games/600924?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const pc = await datos.platforms[0].platform;
			const xbone = await datos.platforms[1].platform;
			const xboxsx = await datos.platforms[2].platform;
			const ps5 = await datos.platforms[3].platform;
			const ps4 = await datos.platforms[4].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${pc.name}` + ', ' + `${xbone.name}` + ', ' + `${xboxsx.name}` + ', ' + `${ps5.name}` + ', ' + `${ps4.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('lj').innerHTML = juego;
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
		const respuesta = await fetch('https://api.rawg.io/api/games/494384?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const ps4 = await datos.platforms[0].platform;
			const ps5 = await datos.platforms[1].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${ps4.name}` + ', ' + `${ps5.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('gowr').innerHTML = juego;
		} else if (respuesta.status === 404) {
			// Si algo salió mal
			console.log('La URL de la API tiene un error');
		}
		// Si la API Key tiene un error la consola devuelve un typeError por defecto.

	} catch (error) {
		console.log(error);
	}
}


const cargarJuego5 = async () => {

	try {
		const respuesta = await fetch('https://api.rawg.io/api/games/799265?key=11ba47a8de764f8480804184fa62c172');

		// Si todo salió bien
		if (respuesta.status === 200) {
			const datos = await respuesta.json();
			const ps5 = await datos.platforms[0].platform;
			const pc = await datos.platforms[1].platform;


			const juego = `<h5>Nombre: ${datos.name}</h5>` + `<h6>Fecha de Publicación: ${datos.released}</h6>` + "<h6>Plataformas: " + `${ps5.name}` + ', ' + `${pc.name}` + "</h6>" + `<h6>Desarrolladores: ${datos.developers[0].name}</h6>`

			document.getElementById('tlour').innerHTML = juego;
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
cargarJuego5();