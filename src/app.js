/**
 * Created by Layric on 8/23/2015.
 */
var myApp =angular.module('myApp',[]);

myApp.controller('myController',function($scope){

});
myApp.value('Dessertmenu',{
    menu:[
        {name:'cheesecake',price:10},
        {name:'icecream',price:5},
        {name:'fruit',price:3}
    ]
});
myApp.directive('myDiv',function(){
    return{
        restrict:'AE',
        template:'<div>Just a div</div>',
        replace:true
    }
});

myApp.filter('nametoupper',function(){
    return function(input){
        input ++;
        return input;
    }
});

