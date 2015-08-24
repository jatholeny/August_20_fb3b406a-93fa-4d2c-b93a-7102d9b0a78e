/**
 * Created by Layric on 8/23/2015.
 */
describe('tesing ajax',function(){
    var result;

    beforeEach(function(){
        obj.ajaxcall('https://api.github.com/search/repositories?q=nodejs',function(data){
            console.log(data);
            result = data;
        });

    });

    it('ajax test',function(){
        obj.ajaxcall('https://api.github.com/search/repositories?q=nodejs',function(data){
            console.log(data);
            expect(typeof result).toEqual('string');
        });
    });

    it("another ajax test", function () {
        getProduct(function(data){
            result = data
            expect(typeof result).toEqual('object');
        });


    });

    function getProduct(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/search/repositories?q=jatholeny');
        xhr.addEventListener('readystatechange',function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        });
        xhr.send();
    }

});