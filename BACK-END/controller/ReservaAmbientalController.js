//  TODO:
//      - Tratamento de exceções

// Imports
var mysql = requiser('mysql');

class ReservaAmbientalController{
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._data_input = $('#data');
        this._qtde_input = $('#quantidade');
        this._valor_input = $('#valor');

        this._lista_negociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        
        this._lista_negociacoes.adiciona(this._criaNegociacao());
        this._limpaForm();
    }

    _criaNegociacao(){
        return (new Negociacao(DateHelper.textToDate(this._data_input),
             this._qtde_input.value,
             this._valor_input.value));
    }

    _limpaForm(){
        this._data_input.value = '';
        this._qtde_input.value = 1;
        this._valor_input.value = 0.0;

        this._data_input.focus();
    }
}
/*
    

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var td_volume = document.createElement('td');
    td_volume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(td_volume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();*/