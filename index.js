$(document).ready(function () {

    $.ajax({
        url: '/productos'
    }).done(function whenGotData(arrayDeServidor) {

        //============================================================

        var fillSelection = function (id, arrayOpciones) {
            //var selected = $('#primary').val();
            $(id).empty();
            arrayOpciones.forEach(function (element) {
                $(id).append('<option value="' + element + '">' + element + '</option>');
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

        var categorias = arrayDeServidor.productos
            .map(function (producto) {
                return producto.categoria;
            }).reduce(function (newArray, categoria) {
                if (newArray.indexOf(categoria) === -1) {
                    return newArray.concat([categoria]);
                } else {
                    return newArray;
                }
            }, []);

        var valorPrimerSelect = '';

        console.log(categorias);
        fillSelection('#primary', categorias);
        $('#primary').change(function () {
            valorPrimerSelect = $('#primary').val();


            var subCategorias = arrayDeServidor.productos
                .filter(function (producto) {
                    return producto.categoria === valorPrimerSelect;
                })
                .map(function (producto) {
                    return producto.subcategoria;
                })

                .reduce(function (newArray, subcategoria) {
                    if (newArray.indexOf(subcategoria) === -1) {
                        return newArray.concat([subcategoria]);
                    } else {
                        return newArray;
                    }
                }, []);
            console.log(subCategorias);
            fillSelection('#secondary', subCategorias);
            var productosFiltrados = arrayDeServidor.productos.filter(function (producto) {
                return producto.categoria === valorPrimerSelect;
            });
            mostrarProductos(productosFiltrados);


        });


        $('#secondary').change(function () {
            var subcategoriaSeleccionada = $('#secondary').val();
            var productosFiltrados = arrayDeServidor.productos.filter(function (producto) {
                return producto.categoria === valorPrimerSelect
                    && producto.subcategoria === subcategoriaSeleccionada;
            });
            mostrarProductos(productosFiltrados);
        });

    })
});
