angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function(){
    var _length = 5;
    this.getLength = function (){
      return _length;
    };
    this.setLength = function(length){
        _length = length;
    };
    this.$get = function (){
       return {
           generate: function(){
               var serial = "";
               while(serial.length < _length){
                   serial += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
               }
               return serial;
           }
       };
   }; 
});