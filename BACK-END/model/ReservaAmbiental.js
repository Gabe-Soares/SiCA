// TODO:
//      - Tratamento de exceções
//      - Refatoração

class ReservaAmbiental {
    // Método construtor da classe.
    constructor(usuario, nome, local, tamanho, tipo, saude, id) {
        this._usuario = usuario;
        this._nome = nome;
        this._local = local;
        this._tamanho = tamanho;
        this._tipo = tipo;
        this._saude = saude;
        this._id = id;

        // Definindo a instância como final.
        Object.freeze(this);
    }

    // Métodos de acesso.
    get usuario(){
        return(this._usuario);
    }
    
    get nome(){
        return(this._nome);
    }
    
    get local(){
        return(this._local);
    }
    
    get tamanho(){
        return(this._tamanho);
    }
    
    get tipo(){
        return(this._tipo);
    }
    
    get saude(){
        return(this._saude);
    }

    get id(){
        if(this._id != ""){
            return(this._id);
        }
        else{
            return("Sem ID");
        }
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    set nome(nome){
        this._nome = nome;
    }
    
    set local(local){
        this._local = local;
    }
        
    set tamanho(tamanho){
        this._tamanho = tamanho;
    }
        
    set tipo(tipo){
        this._tipo = tipo;
    }
        
    set saude(saude){
        this._saude = saude;
    }
    
    set id(id){
        this._id = id;
    }
}