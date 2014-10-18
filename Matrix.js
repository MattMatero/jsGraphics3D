/*
Matrix function to represent a 3x3 matrix. A simple two-dimensional array structure is used
*/
Matrix = function(){
	this.arr = new Array(3);
	this.arr[0] = new Array(0,0,0);
	this.arr[1] = new Array(0,0,0);
	this.arr[2] = new Array(0,0,0);
}

/*
buildMatrix: Creates a matrix using a 1D array
*/
Matrix.prototype.buildMatrix = function(matarr){
	for(i = 0; i< 3; i++){
		for(j = 0; j < 3; j++){
				this.arr[i][j] = matarr[j+(3*i)];
		}
	}
	return this;
}

/*
buildMatrixNums: takes in 9 single integers and creates a 2D array, representing the matrix.
*/
Matrix.prototype.buildMatrixNums = function(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
	this.arr[0][0] = arg1;
	this.arr[0][1] = arg2;
	this.arr[0][2] = arg3;
	
	this.arr[1][0] = arg4;
	this.arr[1][1] = arg5;
	this.arr[1][2] = arg6;
	
	this.arr[2][0] = arg7;
	this.arr[2][1] = arg8;
	this.arr[2][2] = arg9;
}


/*
addSelf: Takes in a Matrix and adds it to the calling Matrix
*/
Matrix.prototype.addSelf = function( matrix ) {
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			this.arr[i][j] += matrix.arr[i][j];
		}
	}
	
	return this;
}

/*
mult: Takes in a matrix and multiplies it to the calling Matrix, the result is stored in a new Matrix
return: the product of the two matrices
*/
Matrix.prototype.mult = function( matrix ){
	var result = new Array(3);
	result[0] = [0,0,0];
	result[1] = [0,0,0];
	result[2] = [0,0,0];
	
	for(i =0; i < 3; i++){
			for(j = 0; j < 3; j++){
				for(k = 0; k < 3; k++){
					result[i][j] += this.arr[i][k] * matrix.arr[k][j];
				}
			}
		}
	
	
	var flatMatrix = [result[0][0],result[0][1],result[0][2],result[1][0],result[1][1],result[1][2],result[2][0],result[2][1],result[2][2]];
	var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}

/*
clone: Takes in a matrix and creates a copy of it
return: the copy of the matrix
*/
Matrix.prototype.clone = function (matrix){
	var flat = [matrix.arr[0][0],matrix.arr[0][1],matrix.arr[0][2],matrix.arr[1][0],matrix.arr[1][1],matrix.arr[1][2],matrix.arr[2][0],matrix.arr[2][1],matrix.arr[2][2]];
	return new Matrix().buildMatrix(flat);
}

/*
translate: Takes in two integers, a and b. These represent the values we are translating by
return: the translation matrix for those values
*/
Matrix.prototype.translate = function(a,b){
var transMat = new Array(3);
transMat[0] = [1,0,a];
transMat[1] = [0,1,b];
transMat[2] = [0,0,1];

	var flat = [transMat[0][0],transMat[0][1],transMat[0][2], transMat[1][0], transMat[1][1], transMat[1][2], transMat[2][0], transMat[2][1], transMat[2][2]];
	var newMat = new Matrix();
	return newMat.buildMatrix(flat);
}

//simple string representation of a matrix
Matrix.prototype.toString = function(){
	var myMat = "";
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			myMat += this.arr[i][j] + " ";
		}
		myMat += '\n';
	}
	return myMat;
}

/*
rotationMatrix: Takes in an integer theta, representing the angle we are rotating by
return: the rotation matrix for that angle
*/
Matrix.prototype.rotationMatrix = function(theta){
var rotateMatrix = new Array(3);
theta = (theta*Math.PI)/180
rotateMatrix[0] = [Math.cos(theta),-Math.sin(theta),0];
rotateMatrix[1] = [Math.sin(theta),Math.cos(theta),0];
rotateMatrix[2] = [0,0,1];
var flatMatrix = [rotateMatrix[0][0],rotateMatrix[0][1],rotateMatrix[0][2],rotateMatrix[1][0],rotateMatrix[1][1],rotateMatrix[1][2],rotateMatrix[2][0],rotateMatrix[2][1],rotateMatrix[2][2]];
var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}
