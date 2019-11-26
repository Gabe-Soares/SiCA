function login(login, senha, imagem){

    $.ajax({
          url : "http://127.0.0.1:8080/api/Usuario/Auth/",
          type : 'post',
          data : {
               "login" : login,
               "senha" : senha,
               "imagem": imagem
          },
          beforeSend : function(){
               console.log(this.data)
          }
     })
     .done(function(msg){
          console.log(msg)
     })
     .fail(function(jqXHR, textStatus, msg){
          console.log(msg);
     }); 
}

$("#btn_login").click(function(){
var login_field = $("#login_field").val();
var senha = $("#password").val();
var imagem = 'C:/Users/Matheus/Desktop/APS/SiCA/FRONT-END/img/'+document.getElementById('image').files[0].name;
login(login_field, senha, imagem);
//  login();
console.log("login "+login_field);
console.log("senha "+senha);
console.log("imagem "+imagem);
})