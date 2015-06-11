arr= [100,25,27,13,-4]
var convert2F = function(arr) {
    var t =[];
    for(var i=0;i<=arr.length-1;i++){
        var result = (((9/5)*arr[i])+32)
        t.push(result)
    }
    return t
    
}
 convert2F(arr)