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
}).factory('DessertManager',function(Dessertmenu){
    return{
        price:function(){
            return Dessertmenu.menu.map(function(){
                return menu.price;
            })
        },
        priceSort:function(){
            Dessertmenu.menu.sort(function(a,b){
                if(a.score > b.score){
                    return 1;
                }
                if(a.score < b.score){
                    return -1;
                }
                return 0;
            });
            return Dessertmenu.pies;
        }
    }
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

