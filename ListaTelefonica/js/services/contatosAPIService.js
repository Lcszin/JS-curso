  angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getContatos = function(){
        return  $http.get(config.baseUrl + "/contatos.php") ;
    };
    var _saveContato = function(contato){
        return  $http.post(config.baseUrl + "/contatos.php", contato) ;
    };
    return {
        getContatos: _getContatos,
        saveContatos: _saveContato
    };
});
