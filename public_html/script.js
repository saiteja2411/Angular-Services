var app= angular.module("app",[]);

app.provider("colorProvider",function(){
    var hex;
   return {
       setColor:function(value){
           hex=value;
       },
       $get:function(){
           return{
               color:hex
           };
       }
   };
});

app.config(function(colorProvider){
    colorProvider.setColor("red");
});

app.controller("myController", function($scope,colorProvider){
    $scope.color=colorProvider.color;
});