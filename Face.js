Face = function(){
	this.index = new Array(4);
}

Face.prototype.set = function(a,b,c,d){
	this.index[0] = a;
	this.index[1] = b;
	this.index[2] = c;
	this.index[3] = d;
	return this;
}