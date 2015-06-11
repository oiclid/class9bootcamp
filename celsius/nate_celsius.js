var cels = [0,12,32,40,100];

function C2F(cels){
	
	var fahr=[];
	for (var i=0; i<cels.length;i++){
	    var fahr1=(9/5*cels[i])+32;
	    fahr.push(fahr1);
	    
	}
	return fahr
	
}
C2F(cels);