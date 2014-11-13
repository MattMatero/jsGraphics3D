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


Geometry.prototype.setVertices = new function(vecArr){
	for(var i = 0; i < this.vertices.length; i++){
		this.vertices.push(vecArr[i]);
	}
	
	return this;
}


Geometry.prototype.setFaces = new function(faceArr){
	for(var i = 0; i < this.faces.length; i++){
		this.faces.push(faceArr[i]);
	}
	
	return this;
}

/*
makeCube: Makes a unit cube 
*/
Geometry.prototype.makeCube = new function(){
	var verts = new Array(8);
	var cFaces = new Array(12);
	//vertices of a cube
	verts.push(new Vector(0,0,0));
	verts.push(new Vector(1,0,0));
	verts.push(new Vector(0,1,0));
	verts.push(new Vector(1,1,0));
	verts.push(new Vector(0,0,1));
	verts.push(new Vector(1,0,1));
	verts.push(new Vector(0,1,1));
	verts.push(new Vector(1,1,1));

	//faces of a cube
	//top face
	cFaces.push(new Face().set(0,4,1));
	cFaces.push(new Face().set(1,4,5));
	//left face
	cFaces.push(new Face().set(0,2,4));
	cFaces.push(new Face().set(4,2,6));
	//front
	cFaces.push(new Face().set(4,6,5));
	cFaces.push(new Face().set(5,6,7));
	//right
	cFaces.push(new Face().set(1,5,7));
	cFaces.push(new Face().set(5,7,3));
	//back
	cFaces.push(new Face().set(6,1,2));
	cFaces.push(new Face().set(1,3,2));
	//bottom
	cFaces.push(new Face().set(2,3,6));
	cFaces.push(new Face().set(3,7,6));
	
	return new Geometry().setVertices(verts).setFaces(cFaces);
}