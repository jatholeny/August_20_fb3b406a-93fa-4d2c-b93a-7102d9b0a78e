/**
 * Created by Layric on 8/23/2015.
 */
describe('testing filter',function(){
    var filtertest,dessertmenu;
    beforeEach(function(){
        module('myApp');
        inject(function(_Dessertmenu_){

            dessertmenu = _Dessertmenu_;
        })
    });
    it('testing filter',function(){
        inject(function(nametoupperFilter){
            filtertest = nametoupperFilter;
        });
        expect(filtertest(dessertmenu.menu[0].price)).toBe(11);
    });
});