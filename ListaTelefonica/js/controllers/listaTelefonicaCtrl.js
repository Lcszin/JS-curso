angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http, serialGenerator) {//adicionar ContatosAPI e operadorasAPI no lugar de $http (ao adicionar os dois pode retirar $http)
                $scope.app = "Lista Telefonica";
                $scope.contatos = [];
                $scope.operadoras = [];
                var carregarContatos = function(){
                   /*contatosAPI.getContatos().then(function(data){
                        $scope.contatos = data;
                    }).catch(function(data){
                        $scope.message = "Não foi possível carregar os dados!";
                    });
                    */
                   $scope.contatos = [{"nome":"Bruno da Silva","telefone":"9999-2222","data":"24\/11\/2022","operadora":{"nome":"Oi","codigo":14,"categoria":"Celular"}, "serial": serialGenerator.generate()},{"nome":"Sandra Maria Oliveira","telefone":"9999-3333","data":"24\/11\/2022","operadora":{"nome":"Vivo","codigo":15,"categoria":"Celular"}, "serial": serialGenerator.generate()}, {"nome":"Carlos Machado","telefone":"9999-9999","data":"24\/11\/2022","operadora":{"nome":"Tim","codigo":41,"categoria":"Celular"}, 'serial':serialGenerator.generate()}];
                };
                var carregarOperadoras = function(){
                    /*
                operadorasAPI.getOperadoras().then(function(data){
                        $scope.operadoras = data;  
                    });
                    */
                   $scope.operadoras = [{"nome":"Oi","codigo":14,"categoria":"Celular","preco":3},{"nome":"Vivo","codigo":15,"categoria":"Celular","preco":2},{"nome":"Tim","codigo":41,"categoria":"Celular","preco":3},{"nome":"GVT","codigo":25,"categoria":"Fixo","preco":3},{"nome":"Embratel","codigo":21,"categoria":"Fixo","preco":2}];
                };
                /*
                 * substituir no caso de importar a lista de fora
                 * $scope.adicionarContato = function(contato){
                    contato.serial = "";
                    contato.data = new Date;
                    contatosAPI.saveContatos(contato).then(function (data){
                    delete $scolp.contatos;
                    $scolp.contatoForm.$setPristine();
                    carregarContatos();
                    });
                };
                 */
                $scope.adicionarContato = function(contato){
                    contato.serial = serialGenerator.generate(5);
                    $scope.contatos.data = contato.data;
                    $scope.contatos.push(angular.copy(contato));
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                };
               $scope.apagarContatos = function(contatos) {
                    $scope.contatos = contatos.filter(function(contato){
                      if(!contato.selecionado) return contato; 
                   });
               };
               $scope.isContatoSelecionado = function (contatos) {
                 return contatos.some(function (contato){
                    return contato.selecionado; 
                 });
               };
               $scope.ordenarPor = function(campo){
                 $scope.criterioDeOrdenacao = campo;  
                 $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
               };
               carregarContatos();
               carregarOperadoras();
            });