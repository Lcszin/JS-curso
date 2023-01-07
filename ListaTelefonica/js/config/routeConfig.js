angular.module("listaTelefonica").config(function($routeProvider){
   $routeProvider.when("/contatos",{
       templateUrl: "view/contatos.html",
       controller: "listaTelefonicaCtrl"
       /*adicionar no caso de uso do uso do link
        * resolve: {
           contatos: function(contatosAPI){
               return contatosAPI.getOperadoras();
           }
         * 
       }
         * 
        */
   });
   $routeProvider.when("/novoContato", {
       templateUrl: "view/novoContato.html",
       controller: "listaTelefonicaCtrl"
       /*adicionar no caso de uso do uso do link
        * resolve: {
           operadoras: function(OperadorasAPI){
               return operadorasAPI.getOperadoras();
           }
         * 
       }
         * 
        */
   });
   $routeProvider.when("/detalhesContato/:id", {
       tampleteUrl: "view/detalhesContato.html",
       controller: "detalhesContatoCtrl",
       resolve: {
           contato: function($route){//adicionar contatosAPI
               return $scope.Contatos.getContatos($route.current.params.id);
           }
       }
   });
   //$routeProvider.otherwise({redirectTo: "/contatos"});
});
