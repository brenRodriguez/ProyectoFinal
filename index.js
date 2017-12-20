$(document).ready(function(){
/*
$.ajax({
    url: 'http://localhost:8888'
}).done(function whenGotData(arrayDeServidor) {

*/

var arrayDeServidor= {
  "productos": [
    {
      "nombre": "George Harrison",
      "categoria": "Discos",
      "subcategoria": "Rock",
      "descripcion": "George Harrison: All things must pass",
      "precio": 300,
      "cantidad": 40,
      "imagenes": [
        "img/R-3624750-1479915561-9626.jpeg.jpg"
      ]
    },
    {
      "nombre": "dos",
      "categoria": "Discos",
      "subcategoria": "Pop",
      "descripcion": "Arcade Fire: The suburbs",
      "precio": 450,
      "cantidad": 80,
      "imagenes": [
        "img/Arcade_Fire_-_The_Suburbs.jpg"
      ]
    },
    {
      "nombre": "tres",
      "categoria": "Discos",
      "subcategoria": "Punk",
      "descripcion": "Los Saicos: Los Saicos",
      "precio": 280,
      "cantidad": 10,
      "imagenes": [
        "img/saicos.jpg"
      ]
    },
    {
      "nombre": "cuatro",
      "categoria": "Juegos",
      "subcategoria": "Teg",
      "descripcion": "Juego de mesa. Estrategia",
      "precio": 500,
      "cantidad": 200,
      "imagenes": [
        "img/tegpeque.jpg"
      ]
    },
    {
      "nombre": "cinco",
      "categoria": "Juegos",
      "subcategoria": "Scrabble",
      "descripcion": "Juego de mesa. Crucigramas",
      "precio": 650,
      "cantidad": 50,
      "imagenes": [
        "img/scrabble.jpg"
      ]
    },
    {
      "nombre": "seis",
      "categoria": "Juegos",
      "subcategoria": "Carrera de mente",
      "descripcion": "Juego de Mesa. Preguntas y respuestas",
      "precio": 400,
      "cantidad": 100,
      "imagenes": [
        "img/carrerademente.jpg_1810791533.jpg"
      ]
    },
    {
      "nombre": "siete",
      "categoria": "Accesorios",
      "subcategoria": "Libretas",
      "descripcion": "Libreta Mapa-Mundi",
      "precio": 250,
      "cantidad": 200,
      "imagenes": [
        "img/libreta.jpg"
      ]
    },
    {
      "nombre": "ocho",
      "categoria": "Accesorios",
      "subcategoria": "Infusores",
      "descripcion": "Infusor Robot para té",
      "precio": 120,
      "cantidad": 1000,
      "imagenes": [
        "img/Infusor-para-Te-Robot.jpg"
      ]
    },
    {
      "nombre": "nueve",
      "categoria": "Accesorios",
      "subcategoria": "Tazas",
      "descripcion": "Taza de Nasa",
      "precio": 380,
      "cantidad": 100,
      "imagenes": [
        "img/tazaNasa.jpg"  
      ]
    }
  ]
}

//============================================================

    var fillSelection = function(id, arrayOpciones){
        //var selected = $('#primary').val();
        $(id).empty();
        arrayOpciones.forEach(function(element){
            $(id).append('<option value="'+element+'">'+element+'</option>');
        });
    }

// TODO: borrar todos los <div>
function mostrarProductos(productosArr) {
    $('#productos').html("");
    console.log(productosArr);
    for (var i = 0; i < productosArr.length; i++) {
        var producto = productosArr[i];

        var forAppend =
            '<div id="id' + i + '">' +
            '<img src="' + producto.imagenes[0] + '" alt="">' +
            '<h3>' + producto.nombre + '</h3>' +
            '<h4>' + producto.descripcion + '</h4>' +
            '<h6>' + +producto.cantidad + '</h6>' +
            '<h3>ARS$' + +producto.precio + 'precio</h3>' +
            '<button>Ver detalle</button>' +
            '</div>'; 
        console.log(forAppend);
        $('#productos').append(forAppend);
    }
}

mostrarProductos(arrayDeServidor.productos);

var categorias= arrayDeServidor.productos
    .map(function(producto){
        return producto.categoria;
    }).reduce(function(newArray, categoria){
        if (newArray.indexOf(categoria)=== -1) {
            return newArray.concat([categoria]);
        }else{
            return newArray;
        }
    }, []);

var valorPrimerSelect = '';

console.log(categorias);
fillSelection('#primary', categorias);
$('#primary').change(function(){
    valorPrimerSelect = $('#primary').val();


    var subCategorias= arrayDeServidor.productos
    .filter(function(producto){
        return producto.categoria === valorPrimerSelect;
    })
    .map(function(producto){
        return producto.subcategoria;
    })

    .reduce(function(newArray, subcategoria){
        if (newArray.indexOf(subcategoria)=== -1) {
            return newArray.concat([subcategoria]);
        }else{
            return newArray;
        }
    }, []);
    console.log(subCategorias);
    fillSelection('#secondary', subCategorias);
    var productosFiltrados= arrayDeServidor.productos.filter(function(producto){
        return producto.categoria === valorPrimerSelect;
    });
    mostrarProductos(productosFiltrados);

    
});

   
$('#secondary').change(function(){
    var subcategoriaSeleccionada = $('#secondary').val();
    var productosFiltrados= arrayDeServidor.productos.filter(function(producto){
        return producto.categoria === valorPrimerSelect 
               && producto.subcategoria === subcategoriaSeleccionada;
    });
    mostrarProductos(productosFiltrados);
});
});
