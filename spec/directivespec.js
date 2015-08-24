/**
 * Created by Layric on 8/23/2015.
 */
describe('testing directive',function(){
    var $compile,$rootScope;

    beforeEach(function(){
        module('myApp');
        inject(function(_$compile_,_$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        })
    })


    it('testing directive',function(){
        var element = $compile('<my-div></my-div>')($rootScope);
        var element2 = $compile('<div my-div></div>')($rootScope);
        console.log(element);
        console.log(element2);
        expect(element.html()).toEqual('Just a div');
        expect(element2.html()).toEqual('Just a div');
    });

});