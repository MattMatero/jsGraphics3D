/*
Constructor for a Point function, checks for undefined values and either creates a vector with values[0,0,1] or clones the vector given

*/
Point = function(vec){
	this.vec3 = new Vector();
	if ( vec === undefined){
		this.vec3 = new Vector(0,0);
	}else{
		this.vec3.clone(vec);
	}
}

/*
setPosXY: takes two integers and creates a 3D vector using them as a location
*/
Point.prototype.setPosXY = function(x,y){
	if( x === undefined){
		x = 0;
	}
	
	if( y === undefined){
		y = 0;
	}
	
	this.vec3 = this.vec3.make3D(x,y);
}

/*
setPosV: takes in a vector and sets the Point to that vector as a position
*/
Point.prototype.setPosV = function( vec2 ){
	this.vec3.setX(vec2.getX());
	this.vec3.setY(vec2.getY());
	this.vec3.setZ(vec2.getZ());
}

//getter...
Point.prototype.getX = function(){
	return this.vec3.getX();
}

//getter...
Point.prototype.getY = function(){
	return this.vec3.getY();
}

/*
applyMatrix: takes in a matrix and multiplies it to the Point's vector
*/
Point.prototype.applyMatrix = function( matrix ){
	this.vec3 = this.vec3.multMatrix(matrix);
	return this;
}

/*
draw: Takes in a context on which to draw, then displays the point
*/
Point.prototype.draw = function( context ){
	
	context.fillStyle = "#FF0000";
	context.fillRect(this.vec3.getX()-4,this.vec3.getY()-4,8,8);
}

/*
rotate: takes in an angle and rotates the point by that many degrees.
*/
Point.prototype.rotate = function(a){
	var rotMat = new Matrix().rotationMatrix(a);
	this.vec3 = this.vec3.multMatrix(rotMat);
	return this;
}

/*
translate: takes in two integers and creates a translation matrix. Then applies that matrix to the Point's vector
return: the current object
*/
Point.prototype.translate = function(x,y){
	var transMat = new Matrix().translate(x,y);
	this.applyMatrix(transMat);
	return this;
}

/*
rotateAroundPt: Takes in an 3 integers. One angle and x,y values representing a point
*/
Point.prototype.rotateAroundPt = function(a,x,y){
	this.translate(-x,-y).rotate(a).translate(x,y);
	return this;
}

//a simple string representation of a Point
Point.prototype.toString = function(){
	return this.vec3.toString();
}
