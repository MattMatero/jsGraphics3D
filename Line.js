Line = function(vec1,vec2){
	this.slope = vec2.subtract(vec1);
	this.intercept = new Vector();
	this.intercept.clone(vec1);
}
	
Line.prototype.intersect= function(plane){
	var w = plane.getPoint().subtract(this.intercept);
	var num = w.dotProduct(plane.getNormal());
	var den = plane.getNormal().dotProduct(this.slope);
	var t = num/den;
	return this.eval(t);
}

Line.prototype.eval = function(t){
	var v = this.slope.scaleMult(t);
	v.addSelf(this.intercept);
	return v;
	//return this.slope.scaleMult(t).addSelf(this.intercept);
}

Line.prototype.getSlope = function(){
	return this.slope;
}

Line.prototype.getIntercept = function(){
	return this.intercept;
}