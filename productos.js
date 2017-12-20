


$(document).ready(function(){
	$('#select1').on('change', function()){
		$(#select2).html("");
		var x = $('#select1').val();
		if (x=="juegos") {
			juegos.forEach(function(i,e){
				var o='<option value="i">' + e ' </option>'
				$('#select2').append(o);	

			});

		}
	}





});