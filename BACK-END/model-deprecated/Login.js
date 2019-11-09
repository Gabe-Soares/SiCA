//  TODO:
//      - Tratamento de exceções
//      - Refatoração

class Login {
    // Método construtor da classe.
    constructor(login, tipo, senha, imagem, id) {
        this._login = login;
        this._tipo = tipo;
        this._senha = senha;
        this._imagem = imagem;
        this._id = id;

        // Definindo a instância como final.
        Object.freeze(this);
    }

    // Métodos de acesso.
    get login(){
        return(this._login);
    }
    
    get tipo(){
        return(this._tipo);
    }
    
    get senha(){
        return(this._senha);
    }
    
    get imagem(){
        return(this._imagem);
    }
    
    get id(){
        return(this._id);
    }

    set login(login){
        this._login = login;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }
    
    set senha(senha){
        this._senha = senha;
    }
        
    set imagem(imagem){
        this._imagem = imagem;
    }
        
    set id(id){
        this._id = id;
    }
}