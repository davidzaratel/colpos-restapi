var url ="http://35.223.20.167:8135/api/users";
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
    
            $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(dataPosted){
                $('#postExito').html('<p> Curso publicado con éxito </p>')
            },
            data: JSON.stringify(myUsuario)
            
    
        });
    }
}

function getAllUsers(){
    console.log(url);
    $.getJSON(url,
        function(json){
            console.log(json);
            var arrUsuarios = json.users;
            var htmlTableUsuarios = '<table id="tablaResultados"> <tr> <th>Nombre</th> <th>Apellido</th> <th>Correo</th> <th>Teléfono</th> <th>Contraseña</th>  </tr>'

            arrUsuarios.forEach(function(item) {
                console.log(item);
                htmlTableUsuarios+= '<tr>'+
                                        '<td>'+ item.name +'</td>'+
                                        '<td>'+ item.apellidos +'</td>'+
                                        '<td>'+ item.email +'</td>'+
                                        '<td>'+ item.numero +'</td>'+
                                        '<td>'+ item.contrasenia +'</td>'+
                                    '</tr>';           
            });
            htmlTableUsuarios+='</table>';
            $('#resultados').html(htmlTableUsuarios);
        }
    );
}