function login(login, senha, imagem){
    alert(login);
    alert(senha);
    alert(imagem);
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8080/api/Usuario/Auth/",//api do gabe
        data: {
            login: login,
            senha: senha,
            imagem: imagem
        },
        // contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function(jqXHR, settings){
            
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("erroooooooo");
            console.log(jqXHR);
            return false;
        },
        success: function(data){
            console.log(data);
        },
        complete: function(jqXHR, textStatus){
            
        }
    });
}

$("#btn_login").click(function(){
var login_field = $("#login_field").val();
var senha = $("#password").val();
var imagem = $("#image").val();
login(login_field, senha, imagem);
//  login();
console.log("login "+login_field);
console.log("senha "+senha);
console.log("imagem "+imagem);
})