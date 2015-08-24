/**
 * Created by Layric on 8/23/2015.
 */
var obj = {
    ajaxcall:function(url,callback){
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.addEventListener('readystatechange',function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                callback(xhr.responseText);
            }
        });
        xhr.send();
    }
};

module.exports = obj;