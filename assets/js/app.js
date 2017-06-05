var lugares = [
  {
    "nombre": "pizzas del perro negro",
    "telefono": "55 5351 7401",
    "direccion": "Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "http://via.placeholder.com/100x100"
  },
  {
    "nombre": "Forever Vegano",
    "telefono": "55 6726 0975",
    "direccion": "Guanajuato 54, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "http://via.placeholder.com/100x100"
  },
  {
    "nombre": "Sushi Roll",
    "telefono": "55 9130 8354",
    "direccion": "Calle Campeche 439, Condesa, 06140 Cuauhtémoc, CDMX, México",
    "foto": "http://via.placeholder.com/100x100"
  },
  {
    "nombre": "Papa Guapa",
    "telefono": "55 5207 8052",
    "direccion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX, México",
    "foto": "http://via.placeholder.com/100x100"
  },
  {
    "nombre": "La casa gallega",
    "telefono": "55 5588 1553",
    "direccion": "Avenida Cuauhtémoc 166, Roma Nte., 06720 Ciudad de México, CDMX, México",
    "foto": "http://via.placeholder.com/100x100"
  },
];

var plantillaLugar = '<div class="col s12 m7 lugar">' +
  '<div class="card horizontal">' +
    '<div class="card-image">' +
      '<img src="__foto__" alt="lugar">' +
    '</div>' +
    '<div class="card-stacked">' +
      '<div class="card-content">' +
        '<p>Nombre: __nombre__</p>' +
        '<p>Telefono: __telefono__</p>' +
        '<p>Direccion: __direccion__</p>' +
      '</div>' +
      '<div class="card-action">' +
        '<a href="#">Mostrar en el Mapa</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';


function initMap() {
        var uluru = {lat: 19.4177453, lng: -99.1671662};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        mostrarLugares(lugares);
      }

var mostrarLugares = function (lugares) {
	var plantillaFinal = "";
	lugares.forEach(function (lugar) {
		plantillaFinal += plantillaLugar.replace("__nombre__", lugar.nombre)
			.replace("__telefono__", lugar.numero)
      .replace("__direccion__", lugar.direccion)
			.replace("__foto__", lugar.foto);
	});
	$(".lugares").html(plantillaFinal);
};

$(document).ready(initMap);
