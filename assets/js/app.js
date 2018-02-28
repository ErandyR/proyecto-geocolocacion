var lugares = [
  {
    "nombre": "Pizza del Perro Negro",
    "telefono": "55 5351 7401",
    "direccion": "Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "assets/img/pizza_perro_negro.jpg",
    "lat": 19.4164809,
    "lng": -99.1696219
  },
  {
    "nombre": "Forever Vegano",
    "telefono": "55 6726 0975",
    "direccion": "Guanajuato 54, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "assets/img/4ever_vegano.jpg",
    "lat": 19.417372,
    "lng": -99.1568815
  },
  {
    "nombre": "Sushi Roll",
    "telefono": "55 9130 8354",
    "direccion": "Calle Campeche 439, Condesa, 06140 Cuauhtémoc, CDMX, México",
    "foto": "assets/img/sushi_roll.jpg",
    "lat": 19.4115907,
    "lng": -99.1774
  },
  {
    "nombre": "Papa Guapa",
    "telefono": "55 5207 8052",
    "direccion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "assets/img/papa_guapa.png",
    "lat": 19.4238476,
    "lng": -99.1610728
  },
  {
    "nombre": "La Casa Gallega",
    "telefono": "55 5588 1553",
    "direccion": "Avenida Cuauhtémoc 166, Roma Nte., 06720 Ciudad de México, CDMX, México",
    "foto": "assets/img/la-casa-gallega.jpg",
    "lat": 19.417008,
    "lng": -99.154207
  },
];

var plantillaLugar = '<div class="col s12 m7 lugar">' +
  '<div class="card horizontal">' +
    '<div class="card-image" height="150" width="300">' +
      '<img src="__foto__" height="150" width="300" alt="lugar">' +
    '</div>' +
    '<div class="card-stacked">' +
      '<div class="card-content">' +
        '<p>Nombre: __nombre__</p>' +
        '<p>Telefono: __telefono__</p>' +
        '<p>Direccion: __direccion__</p>' +
      '</div>' +
      '<div class="card-action">' +
        '<a href="" class="cambiarMapa" data-lng="__lng__" data-lat="__lat__">Mostrar en el Mapa</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';
function cargarPagina() {
    mostrarMapa();
    $("#search-form").submit(filtrarLugares);
    obtenerUbicacionActual();
   $(document).on("click", ".cambiarMapa", cambiarMapa)
}

function mostrarMapa(coordenadas) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: coordenadas
        });
        var marker = new google.maps.Marker({
          position: coordenadas,
          map: map
        });
        mostrarLugares(lugares);    
    
	      
}

var filtrarLugares = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var lugaresFiltrados = lugares.filter(function (lugar) {
		return lugar.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarLugares(lugaresFiltrados);
};

var mostrarLugares = function (lugares) {
	var plantillaFinal = "";
	lugares.forEach(function (lugar) {
		plantillaFinal += plantillaLugar.replace("__nombre__", lugar.nombre)
			.replace("__telefono__", lugar.numero)
            .replace("__direccion__", lugar.direccion)
			.replace("__foto__", lugar.foto)
            .replace("__lng__", lugar.lng)
            .replace("__lat__", lugar.lat);
	});
	$(".lugares").html(plantillaFinal);
    
};

function obtenerUbicacionActual() {
   if (navigator.geolocation) {
     navigator.geolocation.
     getCurrentPosition(
       mostrarPosicionActual);
   } else {
     alert("geolocalizacion no soportada en tu navegador");
   }
 }

function mostrarPosicionActual(posicion) {
     var latitud = posicion.coords.latitude;
     var longitud = posicion.coords.longitude;

     var coordenadas = {
         lat: latitud,
         lng: longitud  
     };  
    mostrarMapa(coordenadas);
}

function cambiarMapa(e){
    e.preventDefault();
     var latitud = $(this).data("lat");
     var longitud = $(this).data("lng");

     var coordenadas = {
         lat: latitud,
         lng: longitud  
     };  
    mostrarMapa(coordenadas);
}

$(document).ready(cargarPagina);
