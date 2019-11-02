//  TODO:
//      - Tratamento de exceções
//      - Refatoração
//      - Controle de data

class Eventos {
    // Método construtor da classe.
    constructor(tipo, data, causa, impacto_nivel, impacto_desc, plano_restauracao, tempo_restauracao, obs_evento, fk_usuario, fk_reserva, id) {
        this._tipo = tipo;
        this._data = data;
        this._causa = causa;
        this._impacto_nivel = impacto_nivel;
        this._impacto_desc = impacto_desc;
        this._plano_restauracao = plano_restauracao;
        this._tempo_restauracao = tempo_restauracao;
        this._obs_evento = obs_evento;
        this._fk_usuario = fk_usuario;
        this._fk_reserva = fk_reserva;
        this._id = id;

        // Definindo a instância como final.
        Object.freeze(this);
    }

    // Métodos de acesso.
    get tipo(){
        return(this._tipo);
    }
    
    get data(){
        return(this._data);
    }

    get causa(){
        return(this._causa);
    }

    get impacto_nivel(){
        return(this._impacto_nivel);
    }

    get impacto_desc(){
        return(this._impacto_desc);
    }

    get plano_restauracao(){
        return(this._plano_restauracao);
    }

    get tempo_restauracao(){
        return(this._tempo_restauracao);
    }
    
    get obs_evento(){
        return(this._obs_evento);
    }

    get fk_usuario(){
        return(this._fk_usuario);
    }

    get fk_reserva(){
        return(this._fk_reserva);
    }

    get id(){
        return(this._id);
    }
    
    set tipo(tipo){
        this._tipo = tipo;
    }

    set data(data){
        this._data = data;
    }

    set causa(causa){
        this._causa = causa;
    }

    set impacto_nivel(impacto_nivel){
        this._impacto_nivel = impacto_nivel;
    }

    set impacto_desc(impacto_desc){
        this._impacto_desc = impacto_desc;
    }

    set plano_restauracao(plano_restauracao){
        this._plano_restauracao = plano_restauracao;
    }
    
    set tempo_restauracao(tempo_restauracao){
        this._tempo_restauracao = tempo_restauracao;
    }

    set obs_evento(obs_evento){
        this._obs_evento = obs_evento;
    }

    set fk_usuario(fk_usuario){
        this._fk_usuario = fk_usuario;
    }

    set fk_reserva(fk_reserva){
        this._fk_reserva = fk_reserva;
    }

    set id(id){
        this._id = id;
    }
}