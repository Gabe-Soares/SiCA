app.controller('homeCtrl', function(){
    let self = this;

    self.user = {
        tipoUser: "tipo 1"
    }

    if(self.user.tipoUser == "adm"){
        self.isAdm = true;
    }else{
        self.isAdm = false
    }
})