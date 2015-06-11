function convertCelsius(arrayNew){
         var newArray =[];
         for(var i=0; i < arrayNew.length; i++) {
         var f = (9/5) * arrayNew[i] + 32;
         newArray.push(f +" "+ "F");
            }
         return newArray;
    }
convertCelsius([3, 5, 8, 8]);