/*
Matrix function to represent a 3x3 matrix. A simple two-dimensional array structure is used
*/
Matrix = function(){
	this.arr = new Array(4);
	this.arr[0] = new Array(0,0,0);
	this.arr[1] = new Array(0,0,0);
	this.arr[2] = new Array(0,0,0);
	this.arr[3] = new Array(0,0,0);
}

/*
buildMatrix: Creates a matrix using a 1D array
*/
Matrix.prototype.buildMatrix = function(matarr){
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
				this.arr[i][j] = matarr[j+(4*i)];
		}
	}
	return this;
}

/*
addSelf: Takes in a Matrix and adds it to the calling Matrix
*/
Matrix.prototype.addSelf = function( matrix ) {
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
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
	result[0] = [0,0,0,0];
	result[1] = [0,0,0,0];
	result[2] = [0,0,0,0];
	result[3] = [0,0,0,0];
	
	for(i =0; i < 4; i++){
			for(j = 0; j < 4; j++){
				for(k = 0; k < 4; k++){
					result[i][j] += this.arr[i][k] * matrix.arr[k][j];
				}
			}
		}
	
	
	var flatMatrix = new Matrix().get1DArr(result);
	var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}


Matrix.prototype.get1DArr = function(arr){

    var result = new Array();

    for (var x = 0; x < arr.length; x++){
        for (var y = 0; y < arr[x].length; y++){
        result.push(arr[x][y])
        }
    }
    return result
}

/*
scale: Takes in a number and scales the matrix by that value
*/
Matrix.prototype.scale = function(scaler){
	for(var i = 0; i < this.arr.length; i++){
		for(var j = 0; j < this.arr.length; j++){
			this.arr[i][j] *= scaler;
		}
	}
}


/*
a 0 0 0
0 b 0 0
0 0 c 0
0 0 0 1
*/
Matrix.prototype.scaleMatrix = function(a,b,c){
	var scaling = new Array(4);
	scaling[0] = [a,0,0,0];
	scaling[1] = [0,b,0,0];
	scaling[2] = [0,0,c,0];
	scaling[3] = [0,0,0,1];
	var arr = new Matrix().get1DArr(scaling);
	return new Matrix().buildMatrix(arr);
}

/*
clone: Takes in a matrix and creates a copy of it
return: the copy of the matrix
*/
Matrix.prototype.clone = function (matrix){
	var flat = new Matrix().get1DArr(matrix.arr);
	return new Matrix().buildMatrix(flat);
}

/*
translate: Takes in two integers, a and b. These represent the values we are translating by
return: the translation matrix for those values
*/
Matrix.prototype.translate = function(a,b,c){
var transMat = new Array(4);
transMat[0] = [1,0,0,a];
transMat[1] = [0,1,0,b];
transMat[2] = [0,0,1,c];
transMat[3] = [0,0,0,1];

	var flat = new Matrix().get1DArr(transMat);
	var newMat = new Matrix();
	return newMat.buildMatrix(flat);
}

//simple string representation of a matrix
Matrix.prototype.toString = function(){
	var myMat = "";
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
			myMat += this.arr[i][j] + " ";
		}
		myMat += '\n';
	}
	return myMat;
}

/*
rotationX: Takes in an integer theta, representing the angle we are rotating by
return: the rotation matrix for that angle around the x-axis
*/
Matrix.prototype.rotationX = function(theta){
var rotateMatrix = new Array(4);
theta = (theta*Math.PI)/180
rotateMatrix[0] = [1,0,0,0];
rotateMatrix[1] = [0,Math.cos(theta),-Math.sin(theta),0];
rotateMatrix[2] = [0,Math.sin(theta),Math.cos(theta),0];
rotateMatrix[3] = [0,0,0,1];
var flatMatrix = new Matrix().get1DArr(rotateMatrix);
var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}


/*
rotationY: Takes in an integer theta, representing the angle we are rotating by
return: the rotation matrix for that angle around the y-axis
*/
Matrix.prototype.rotationY = function(theta){
var rotateMatrix = new Array(4);
theta = (theta*Math.PI)/180
rotateMatrix[0] = [Math.cos(theta),0,-Math.sin(theta),0];
rotateMatrix[1] = [0,1,0,0];
rotateMatrix[2] = [Math.sin(theta),0,Math.cos(theta),0];
rotateMatrix[3] = [0,0,0,1];
var flatMatrix = new Matrix().get1DArr(rotateMatrix);
var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}

/*
rotationZ: Takes in an integer theta, representing the angle we are rotating by
return: the rotation matrix for that angle around the y-axis
*/
Matrix.prototype.rotationZ = function(theta){
var rotateMatrix = new Array(4);
theta = (theta*Math.PI)/180
rotateMatrix[0] = [0,0,1,0];
rotateMatrix[1] = [Math.cos(theta),-Math.sin(theta),0,0];
rotateMatrix[2] = [Math.sin(theta),Math.cos(theta),0,0];
rotateMatrix[3] = [0,0,0,1];
var flatMatrix = new Matrix().get1DArr(rotateMatrix);
var newMat = new Matrix();
	return newMat.buildMatrix(flatMatrix);
}



