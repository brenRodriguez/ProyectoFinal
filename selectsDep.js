

var options = {
		discos : ["Rock","Pop","Punk"],
		juegos : ["Teg", "Carrera de mente", "Scrabble"],
		accesorios: ["Infusores", "Tazas", "Libretas"]
}

$(function(){
	var fillSecondary = function(){
		var selected = $('#primary').val();
		$('#secondary').empty();
		options[selected].forEach(function(element,index){
			$('#secondary').append('<option value="'+element+'">'+element+'</option>');
		});
	}
	$('#primary').change(fillSecondary);
	fillSecondary();
});



{"nombreProducto":nombreProducto,"detalle":detalle, "categoria":categoria,"subCategoria": subCategoria, "precio": precio, "stock": stock};


var categorias=["Discos", "Juegos", "Accesorios"];
var musica =["Rock", "Pop","Punk"];

var jueguitos=["TEG", "CarreraMente", "Scrabble"];

var varios=["infusores", "tazas", "libretas"];
