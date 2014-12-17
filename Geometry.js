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


Geometry.prototype.setVertices = function(vecArr){
	for(var i = 0; i < vecArr.length; i++){
		this.vertices.push(vecArr[i]);
	}
	
	return this;
}


Geometry.prototype.setFaces = function(faceArr){
	for(var i = 0; i < faceArr.length; i++){
		this.faces.push(faceArr[i]);
	}
	
	return this;
}



/*
makeCube: Makes a unit cube 
*/
Geometry.prototype.makeCube = function(){
	var verts = new Array(0);
	var cFaces = new Array(0);
	//vertices of a cube
	verts.push(new Vector(0,0,0));
	verts.push(new Vector(100,0,0));
	verts.push(new Vector(0,100,0));
	verts.push(new Vector(100,100,0));
	verts.push(new Vector(0,0,-100));
	verts.push(new Vector(100,0,-100));
	verts.push(new Vector(0,100,-100));
	verts.push(new Vector(100,100,-100));

	//faces of a cube
	//top face
	cFaces.push(new Face().set(0,2,3,1)); //front
	cFaces.push(new Face().set(2,6,7,3)); //top
	cFaces.push(new Face().set(1,3,7,5)); //right
	cFaces.push(new Face().set(0,4,5,1)); //bottom
	cFaces.push(new Face().set(0,2,6,4)); //left
	cFaces.push(new Face().set(6,7,5,4)); //back

	return new Geometry().setVertices(verts).setFaces(cFaces);
}