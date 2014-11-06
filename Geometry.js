Geometry = function(){
	this.vertices = new Array(0);
	this.faces = new Array(0);
}


Geometry.prototype.applyMatrix = function(matrix){
	for(var i = 0; i < this.vertices.length; i++){
		this.vertices[i] = this.vertices[i].multMatrix(matrix);
	}
}

Geometry.prototype.addVertex = function(vertex){
	this.vertices.push(vertex);
}

Geometry.prototype.addFace = function(face){
	this.faces.push(face);
}

Geometry.prototype.draw = function(context){
	for(var i = 0; i < this.vertices.length; i++){
		this.vertices[i].draw(context);
	}
	
	for(var i = 0; i < this.faces.length; i++){
		context.beginPath();
		var f = this.faces[i];
		context.moveTo(this.vertices[f.index[2]].getX(), this.vertices[f.index[2]].getY());
		for(var j = 0; j < 3; j++){
			context.lineTo(this.vertices[f.index[j]].getX(), this.vertices[f.index[j]].getY());
		}
		context.stroke();
	}
	
	
}