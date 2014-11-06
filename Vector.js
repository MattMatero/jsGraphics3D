
/*
Vector function that will take in 2 components and set the 3 to 1
*/
var Vector = function(a,b,c){
	if(a === undefined){
		a = 1;
	}

	if( b === undefined){
		b = 1;
	}
	
	if( c === undefined){
		c = 1;
	}
	
	 this.arr = [a,b,c,1];
}

Vector.prototype.clone = function(vec){
	for( i = 0; i < 4; i++)
		this.arr[i] = vec.getElement(i);
}

Vector.prototype.getElement = function(i){
	return this.arr[i];
}

/*
Addself: Does vector addition and stores the result in the calling function's attributes. 
*/
Vector.prototype.addSelf = function(Vector){
	this.arr[0] += Vector.getX();
	this.arr[1] += Vector.getY();
	this.arr[2] += Vector.getZ();
	this.arr[3] += Vector.getK();
}
/*
add: Does vector addition and returns a new vector containing the information
*/
Vector.prototype.add = function( Vector ){
	var addedVector = new Vector();
	addedVector.setX(this.arr[0] + Vector.getX());
	addedVector.setY(this.arr[1] + Vector.getY());
	addedVector.setZ(this.arr[2] + Vector.getZ());
	addedVector.setK(this.arr[3] + Vector.getK());
	return addedVector;
}

/*
build: Takes in an array of values and stores them in the attributes of the calling vector
returns the calling object 
*/
Vector.prototype.build = function( array ) {
	
	for(i = 0; i < 4; i++){
		if(  !(array[i] === undefined)){
			this.arr[i] = array[i];
		}else{
			arr[i] = 1;
		}
	}
	
	return this;
}

/*
multMatrix: Takes in a matrix and multiplies it by the calling vector
returns a new vector containing the result. 
*/
Vector.prototype.multMatrix = function( Matrix ){
	var result = new Array(4);
	result = [0,0,0,0];

	for(i =0; i < 4; i++){
			for(j = 0; j < 4; j++){
					result[i] += Matrix.arr[i][j] * this.arr[j];
			}
		}
	
	
	var newVec = new Vector();
	return newVec.build(result);
}

/*
multSelf: Multiplies a vector and the calling vector, stores the outcome in the calling function
*/
Vector.prototype.multSelf = function( Vector ) {
	var element = 0;
	var sum = 0;
	elements = [0,0,0];
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			elements[i] = this.arr[i]*Vector.arr[j];
			sum += elements[i];
		}
		elements[i] = sum;
		sum = 0;
	}
	
	for( i = 0; i < 3; i++){
		this.arr[i] = elements[i];
	}

}

/*
make3D: Takes in 2 integers and turns it into a 3D vector with the z dimension equal to 1
returns: a new vector
*/
Vector.prototype.make3D = function( a,b ){
	var v = new Vector();
	v.setX(a);
	v.setY(b);
	v.setZ(1);
	return v;
}



/*
multNew: multiplies two vectors together and returns a new vector with the outcome
return: a new vector representing the product of the previous two.
*/
Vector.prototype.multNew = function( Vector ) {
	var element = 0;
	var sum = 0;
	elements = [0,0,0];
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			elements[i] = this.arr[i]*Vector.arr[j];
			sum += elements[i];
		}
		elements[i] = sum;
		sum = 0;
	}
	var multVec = new Vector();
	
	multVec.setValues(elements);
		
	return multVec;

}


//simple string representation of a vector
Vector.prototype.toString = function(){
	return "x: " + this.arr[0] + " y: " + this.arr[1] + " z: " + this.arr[2] + " k: " + this.arr[3];
}

//getter...
Vector.prototype.getX = function(){
	return this.arr[0];
}

//getter...
Vector.prototype.getY = function(){
	return this.arr[1];
}

//getter...
Vector.prototype.getZ = function(){
	return this.arr[2];
}

//getter...
Vector.prototype.getK = function(){
	return this.arr[3];
}

//setter...
Vector.prototype.setX = function(num){
	this.arr[0] = num;
}

//setter...
Vector.prototype.setY = function(num){
	this.arr[1] = num;
}

//setter...
Vector.prototype.setZ = function(num){
	this.arr[2] = num;
}


//setter...
Vector.prototype.setK = function(num){
	this.arr[3] = num;
}
/*
setValues: Takes in an array of values and sets the calling vector's attributes equal to them.
*/
Vector.prototype.setValues = function(arr){
	for(i = 0; i < 3; i++){
		this.arr[i] = arr[i];
	}
}