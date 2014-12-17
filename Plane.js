Plane = function(vec1,vec2,vec3){
	this.point = new Vector();
	this.point.clone(vec1);
	var v = vec2.subtract(vec1);
	var w = vec3.subtract(vec1);
	this.normal = v.cross(w);
}

Plane.prototype.getPoint = function(){
	return this.point;
}

Plane.prototype.getNormal = function(){
	return this.normal;
}