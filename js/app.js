var app = angular.module('myApp', []);

app.controller('BaseController', function() {

    this.players = data;
    this.sort = "first";
    this.setSort = function(columnName){
      this.sort = columnName;
    };
    this.toggle = function(){
     // this.hasBlueClass = !this.hasBlueClass;
      this.sort = !this.sort;
    };

});
