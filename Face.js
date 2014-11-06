Face = function(){
	this.index = new Array(3);
}

Face.prototype.set = function(a,b,c){
	this.index[0] = a;
	this.index[1] = b;
	this.index[2] = c;
}