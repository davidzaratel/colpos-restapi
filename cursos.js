var url ="";
function postCurso(){
    var nombre = $('#nombre').val();
    var descripcion= $('#descripcion').val();
    var nivel= $('#nivel').val();
    var categoria= $('#categoria').val();
    var duracion= $('#duracion').val();
    // console.log(typeof(descripcion));
    // console.log(typeof(duracion));
    if (nombre == "" || descripcion == "" || nivel == "" || categoria == "" || duracion == NaN){
        window.alert("Debe llenar todos los campos");
    }else{
        var myCurso={
        nombreCurso: nombre,
        descripcion: descripcion,
        nivel: nivel,
        categoria: categoria,
        duracion: duracion
        };
    
    console.log(myCurso);
    
    // $.ajax({
    //     url: url,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType: 'application/json',
    //     success: function(dataPosted){
    //         $('#postExito').html('<p> Curso publicado con éxito </p>')
    //     },
    //     data: JSON.stringify(myCurso)
        

    // });
    }
}

function getAllCursos(){
    $.getJSON(url,
        function(json){
            console.log(json);
            var arrCursos = json.cursos;
            var htmlTableCursos = '<table id="tablaResultados"> <tr> <th>Nombre</th> <th>Descripción</th> <th>Nivel</th> <th>Categoría</th> <th>Duración (horas)</th> </tr>'

            arrCursos.forEach(function(item) {
                console.log(item);
                htmlTableCursos+= '<tr>'+
                                        '<td>'+item.nombreCurso+'</td>'+
                                        '<td>'+item.descripcion+'</td>'+
                                        '<td>'+item.nivel+'</td>'+
                                        '<td>'+item.categoria+'</td>'+
                                        '<td>'+item.duracion+'</td>'+
                                    '</tr>';           
            });
            htmlTableCursos+='</table>';
            $('#resultado').html(htmlTableCursos);
        }
    );

}