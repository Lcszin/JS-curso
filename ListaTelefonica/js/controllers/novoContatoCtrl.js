angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, $http, serialGenerator, $location) {//adicionar contatos e operadoras no lugar de $http (ao adicionar os dois pode retirar $http)
    //adicionar no lugar de carregarOperadoras
    //$scope.operadoras = operadoras.data;       
    //apagar carregarOperadoras caso use o link     
    var carregarOperadoras = function(){
                    
        /*      
           operadorasAPI.getOperadoras().then(function(data){
            $scope.operadoras = data;  
        });
        */
        $scope.operadoras = [{"nome":"Oi","codigo":14,"categoria":"Celular","preco":3},{"nome":"Vivo","codigo":15,"categoria":"Celular","preco":2},{"nome":"Tim","codigo":41,"categoria":"Celular","preco":3},{"nome":"GVT","codigo":25,"categoria":"Fixo","preco":3},{"nome":"Embratel","codigo":21,"categoria":"Fixo","preco":2}];
     };
    
    $scope.adicionarContato = function(contato){
                    contato.serial = serialGenerator.generate(5);
                    $scope.contatos.data = contato.data;
                    $scope.contatos.push(angular.copy(contato));
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    $location.path("/contatos");
                };
               carregarOperadoras();
            });