var url ="35.223.20.167:8135/Users";
function postUser(){
    var myNombre = $('#name').val();
    var myApellido = $('#apellido').val();
    var myCorreo = $('#email').val();
    var myTelefono = parseInt($('#tel').val(),10);
    var myPwd = $('#pwd').val();
    if (myNombre == "" || myApellido == "" || myCorreo == "" || myTelefono == NaN || myPwd == ""){
        window.alert("Debe llenar todos los campos");
    }else{
        var myUsuario = {
            name: myNombre,
            apellidos: myApellido,
            email: myCorreo,
            numero: myTelefono,
            contrasenia: myPwd
        };
        console.log(myUsuario);
    
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

    function getAllUsers(){
        $.getJSON(url,
            function(json){
                console.log(json);
                var arrUsuarios = json.usuarios;
                var htmlTableUsuarios = '<table id="tablaResultados"> <tr> <th>Nombre</th> <th>Apellido</th> <th>Correo</th> <th>Teléfono</th> <th>Contraseña</th>  </tr>'
    
                arrUsuarios.forEach(function(item) {
                    console.log(item);
                    htmlTableUsuarios+= '<tr>'+
                                            '<td>'+ item.nombre +'</td>'+
                                            '<td>'+ item.apellidos +'</td>'+
                                            //'<td>'+ item.fechaNac +'</td>'+
                                            '<td>'+ item.email +'</td>'+
                                            '<td>'+ item.numero +'</td>'+
                                            '<td>'+ item.contrasenia +'</td>'+
                                        '</tr>';           
                });
                htmlTableUsuarios+='</table>';
                $('#resultado').html(htmlTableUsuarios);
            }
        );
    }