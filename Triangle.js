Triangle = function(){
	this.points = new Array(3);
	this.points = [new Point(), new Point(), new Point()];
	this.color; //eventually to fill the triangle
}

/*
setPoints: sets the vertices of the triangle
*/
Triangle.prototype.setPoints = function(p1,p2,p3){
	this.points[0] = p1;
	this.points[1] = p2;
	this.points[2] = p3;
}

/*
translate: takes in two integers x and y that represent a coordinate
*/
Triangle.prototype.translate = function(x,y){
	for(var i = 0; i < 3; i++){
		this.points[i].translate(x,y);
	}
	
	return this;
}

/*
rotate: takes in an integer representing an angle in degrees that we wish to rotate by
*/
Triangle.prototype.rotate = function(a){
	for(var i = 0; i < 3; i++){
		this.points[i].rotate(a);
	}
	
	return this;
}

/*
rotateAroundPt: takes in 3 integers, a representing an angle to rotate by and x,y which represent a coordinate to rotate around
*/
Triangle.prototype.rotateAroundPt = function(a,x,y){
	for(var i = 0; i < 3; i++){
		this.points[i].rotateAroundPt(a,x,y);
	}
	
	return this;
}

/*
draw: takes in a context on which to draw
*/
Triangle.prototype.draw = function(context){
	for(var i = 0; i < 3; i++){
		this.points[i].draw(context);
	}
	
	context.beginPath();
	context.moveTo(this.points[2].getX(), this.points[2].getY());
	for(var i = 0; i < 3; i++){
		context.lineTo(this.points[i].getX(), this.points[i].getY());
	}
	
	
	context.stroke();
}

//multiplies the given matrix to each point in the triangle
Triangle.prototype.applyMatrix = function(matrix){
	for(var i = 0; i < 3; i++){
		this.points[i].applyMatrix(matrix);
	}
	
}

//simple string representation of a triangle
Triangle.prototype.toString = function(){
	return this.points[0].toString() + " " + this.points[1].toString() + " " + this.points[2].toString();
}