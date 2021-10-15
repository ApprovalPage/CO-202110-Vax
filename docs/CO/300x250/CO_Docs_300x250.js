(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CO_Docs_300x250_atlas_1", frames: [[0,0,600,400]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.HeroDocs250OMNI = function() {
	this.initialize(ss["CO_Docs_300x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.V = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgyBLQAAgQAHgNQAGgPAXgRQAUgOAFgGQAJgJAAgMQAAgJgEgHQgGgGgKAAQgMAAgFAKQgDAGAAAMIgcAAQABgTAFgLQAMgXAeAAQAXAAANANQAPANAAAWQAAARgKALQgGAJgQAKIgLAJIgOALQgFADgCAFIBAAAIAAAag");
	this.shape.setTransform(19.4,10.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgnA5QgLgUAAglQAAgkALgTQAMgVAbABQAcgBAMAVQALATAAAkQAAAlgLAUQgMATgcABQgbgBgMgTgAgQgmQgEAMAAAaQAAAZAEAOQAEAOAMAAQANAAAEgOQAEgOAAgZQAAgagEgMQgEgNgNgBQgMABgEANg");
	this.shape_1.setTransform(7.775,10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiFBuIAAjbIELAAIAADbg");
	this.shape_2.setTransform(13.375,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.V, new cjs.Rectangle(0,0,29.1,25), null);


(lib.PIC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HeroDocs250OMNI();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC, new cjs.Rectangle(0,0,300,200), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFgBQAHABAEAEQAEAEAAAFQAAAGgEAFQgEADgHAAQgFAAgEgDg");
	this.shape.setTransform(147.675,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA3QgGgEAAgJQAAgHAEgFQAEgEAHAAQAIAAADAGQADAHgEAHQAMAAAHgUIAAAAIgfhEQgCgEgDAAIgGAAIAAgOIAuAAIAAAOIgGAAQgGAAADAFIASApIARgpQADgFgGAAIgHAAIAAgOIAlAAIAAAOIgHAAQgDAAgCAEIgdBFQgIASgGAIQgJAHgOABQgKgBgHgFg");
	this.shape_1.setTransform(140.525,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAnQgGgGAAgKQAAgPAPgIQAMgGAegEIAAgFQAAgRgSAAQgHAAgEACQADAEAAAGQAAAFgEAEQgEAEgGAAQgPAAAAgPQAAgXApAAQAUAAAJAHQAJAGAAAQIAAAqQAAAEADAAIAIAAIAAAOIgdAAQgEgGgCgJQgEAHgIAFQgIAFgLAAQgMAAgIgHgAgNAGQgJAEAAAJQAAAMANAAQAJAAAGgHQAFgHABgLIAAgGQgRACgIAEg");
	this.shape_2.setTransform(130.7,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAxQgLgNAAgUQAAgUALgNQAKgNASAAQAVABAIARIAAgcQAAgGgDABIgJAAIAAgOIAQAAQANAAAHgCIAABmQAAAFAEAAIAHAAIAAANIggAAIgBgQQgJATgWAAQgSAAgKgNgAgUgHQgFAHAAAOIAAADQAAAOAFAIQAGAHAKAAQAJAAAGgHQAGgIAAgOIAAgDQAAgOgGgHQgGgHgJAAQgKAAgGAHg");
	this.shape_3.setTransform(120.25,18.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQABgUANgNQANgMATAAQAVAAANAMQANANAAAUQAAAVgNAMQgNANgVAAQgUAAgNgNgAgVAAIAAABQAAAfAVAAQAXAAAAgfIAAgBQAAgfgXAAQgVAAAAAfg");
	this.shape_4.setTransform(109.7,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAzQgHgGAAgPIAAgwIgLAAIAAgMIAGAAQAKgCABgIIACgQIAQAAIAAAZIARAAIAAANIgSAAIAAAwQAAANALAAIAJgCIAAAOQgIACgIAAQgOAAgGgGg");
	this.shape_5.setTransform(101.65,19.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAxQgLgNAAgUQAAgUALgNQAKgNASAAQAVABAIARIAAgcQAAgGgDABIgJAAIAAgOIAPAAQAOAAAHgCIAABmQAAAFAEAAIAHAAIAAANIggAAIgBgQQgJATgWAAQgSAAgKgNgAgUgHQgFAHAAAOIAAADQAAAOAFAIQAGAHAKAAQAJAAAGgHQAGgIAAgOIAAgDQAAgOgGgHQgGgHgJAAQgKAAgGAHg");
	this.shape_6.setTransform(89.3,18.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAhQgMgMAAgVQAAgUAMgNQANgMATAAQAVAAALAMQALAMAAAVIAAAFIg+AAQAAAbAYAAQARAAAGgRIAOAGQgJAZgeAAQgXAAgMgNgAAUgHQgBgNgEgGQgEgFgKAAQgSAAgCAYIAnAAIAAAAg");
	this.shape_7.setTransform(79.025,20.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAsIAAgOIAHAAIACgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgNgSIgPASQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAHAAIAAAOIglAAIAAgOIAHAAQACAAADgEIAYgaIgXgZQgDgEgDAAIgFAAIAAgOIAvAAIAAAOIgGAAQgEAAADAEIALAQIAOgQQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAIgCgBIgHAAIAAgOIAmAAIAAAOIgIAAQgCAAgEAEIgVAYIAYAbQADAEADAAIAFAAIAAAOg");
	this.shape_8.setTransform(69.125,20.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABAsIAAgOIAHAAIACgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgNgSIgPASQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAHAAIAAAOIglAAIAAgOIAHAAQACAAADgEIAYgaIgXgZQgDgEgDAAIgFAAIAAgOIAvAAIAAAOIgGAAQgEAAADAEIALAQIAOgQQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAIgCgBIgHAAIAAgOIAmAAIAAAOIgIAAQgCAAgEAEIgVAYIAYAbQADAEADAAIAFAAIAAAOg");
	this.shape_9.setTransform(58.925,20.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAnQgGgGgBgKQAAgPAQgIQAMgGAegEIAAgFQAAgRgSAAQgHAAgFACQAEAEAAAGQAAAFgEAEQgEAEgGAAQgPAAAAgPQAAgXApAAQAUAAAJAHQAJAGAAAQIAAAqQAAAEADAAIAIAAIAAAOIgeAAQgDgGgCgJQgDAHgJAFQgIAFgLAAQgMAAgIgHgAgMAGQgKAEAAAJQAAAMAMAAQAKAAAGgHQAFgHABgLIAAgGQgRACgHAEg");
	this.shape_10.setTransform(49.05,20.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAsIgfhFQgCgFgDAAIgHAAIAAgNIAvAAIAAANIgHAAQgGAAADAFIASArIASgqQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgJAAIAAgNIAoAAIAAANIgHAAQgEAAgCAFIgfBFg");
	this.shape_11.setTransform(38.85,20.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAzQgHgGAAgPIAAgwIgLAAIAAgMIAGAAQAKgCABgIIACgQIAQAAIAAAZIARAAIAAANIgSAAIAAAwQAAANALAAIAJgCIAAAOQgIACgIAAQgOAAgGgGg");
	this.shape_12.setTransform(26.4,19.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAhQgMgMAAgVQAAgUAMgNQANgMATAAQAVAAALAMQALAMAAAVIAAAFIg+AAQAAAbAYAAQARAAAGgRIAOAGQgJAZgeAAQgXAAgMgNgAAUgHQgBgNgEgGQgEgFgKAAQgSAAgCAYIAnAAIAAAAg");
	this.shape_13.setTransform(18.875,20.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAuQgOgQAAgeQAAgbAPgRQAPgRAYAAQAbAAAIAVIAFgTIAOAAIAAAtIgUAAQgFgggZAAQggAAAAAsIAAAFQABAsAeAAQAMAAAHgHQAHgIAAgMIAAgFIgZAAIAAgNIAyAAIAAA6IgLAAIgGgUQgJAWgdAAQgZAAgOgQg");
	this.shape_14.setTransform(7.9,18.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(0,5,224,26.9), null);


(lib.HEAD2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAOQgEgGAAgIQAAgIAEgFQAGgFAIAAQAIAAAGAFQAFAFABAIQgBAIgFAGQgGAFgIAAQgIAAgGgFg");
	this.shape.setTransform(240.05,40.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA9IAAgTIAFAAQADAAAAgFIAAhGQAAgGgDAAIgGAAIAAgTIAWAAQAMAAAJgCIAABhQAAAFAEAAIAEAAIAAATg");
	this.shape_1.setTransform(234.875,36.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAoQgHgGAAgLQAAgQATgIQAJgDAbgGIAAgEQAAgOgMAAIgHAAIABAIQAAAGgFAEQgEAEgIAAQgRAAAAgPQAAgZAtAAQAXABAKAGQAKAHAAASIAAAiQAAAGADgBIAFAAIAAATIgjAAQgFgFgDgIQgDAGgIAFQgIAFgKAAQgMAAgIgHgAgJAHQgHAEAAAGQAAAFADACQACACAEAAQANAAAAgRIAAgGQgKABgFADg");
	this.shape_2.setTransform(227.075,38.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA0QgHgIAAgRIAAgoIgKAAIAAgQIAEAAQANgEABgLIADgNIAXAAIAAAaIAPAAIAAASIgQAAIAAAoQAAALAKAAIAHgBIAAATQgJADgKAAQgQgBgIgGg");
	this.shape_3.setTransform(218.5,36.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA/IAAgSIAFAAQAEAAAAgGIAAgmQAAgHgEAAIgFAAIAAgSIAVAAQAMAAAKgCIAABBQAAAGADAAIAFAAIAAASgAgMgiQgFgEAAgIQAAgHAFgFQAFgEAHAAQAIAAAFAEQAGAFAAAHQAAAIgGAEQgFAFgIAAQgHAAgFgFg");
	this.shape_4.setTransform(212.625,36.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1A9IAAgTIAFAAQAEAAAAgFIAAhGQAAgGgEAAIgFAAIAAgSIAVAAQANAAAJgDIAAASQAHgSAUAAQARAAALANQAJAMAAAWQAAAUgKAMQgLANgRAAQgSAAgHgPIAAAUQAAAFADAAIAGAAIAAATgAgJgPIAAADQAAAXANAAQAOAAAAgXIAAgDQAAgXgOAAQgNAAAAAXg");
	this.shape_5.setTransform(204.125,39.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAoIAAgXIAXAAIAAAMIAMABQALAAAAgIQAAgEgFgCIgMgDQgOgEgGgEQgKgHAAgMQAAgPAKgJQAMgHASgBQAUAAAOAIIAAAVIgVAAIAAgLQgFgCgGAAQgKABAAAHQAAAEAEADIAMADQAOADAHAFQAKAFAAAOQAAAPgLAIQgLAJgTAAQgRgBgUgGg");
	this.shape_6.setTransform(194.4,38.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAhQgNgMAAgVQAAgUANgNQAOgNAVAAQAXAAANANQAOANAAAUQAAAVgOAMQgOAOgWAAQgVAAgOgOgAgJgVQgEAGAAAOIAAADQAAAOAEAGQACAGAHgBQAIAAADgFQAEgGAAgOIAAgDQAAgOgEgGQgDgGgIAAQgHAAgCAGg");
	this.shape_7.setTransform(185,38.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEA9IAAgTIAEAAQAEAAAAgFIAAgfQAAgGgDgDQgCgEgGAAQgLAAAAATIAAAZQAAAFAEAAIAEAAIAAATIgzAAIAAgTIAFAAQADAAAAgFIAAhGQAAgGgDAAIgGAAIAAgTIAWAAQANAAAJgCIAAAuQAIgPAUAAQAdAAAAAiIAAAgQAAAFADAAIAFAAIAAATg");
	this.shape_8.setTransform(174.275,36.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQAAgUAOgNQANgNAVAAQAtABAAAwIAAADIg5AAQABAUATgBQAOAAAGgMIAQAMQgLAVggABQgXAAgNgOgAAOgIQgBgKgCgFQgDgEgGgBQgLABgBATIAYAAIAAAAg");
	this.shape_9.setTransform(159.575,38.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEA9IAAgTIAEAAQAEAAAAgFIAAgfQAAgGgDgDQgCgEgGAAQgLAAAAATIAAAZQAAAFAEAAIAEAAIAAATIgzAAIAAgTIAFAAQADAAAAgFIAAhGQAAgGgDAAIgGAAIAAgTIAWAAQANAAAJgCIAAAuQAIgPAUAAQAdAAAAAiIAAAgQAAAFADAAIAFAAIAAATg");
	this.shape_10.setTransform(149.125,36.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMA0QgHgIAAgRIAAgoIgKAAIAAgQIAEAAQANgEACgLIACgNIAXAAIAAAaIAPAAIAAASIgQAAIAAAoQAAALAKAAIAHgBIAAATQgJADgKAAQgQgBgIgGg");
	this.shape_11.setTransform(140.2,36.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA+IAAgTIAGAAQADAAAAgGIAAgtIgKAAIAAgRIAKAAIAAgCQAAgTAIgHQAIgIAQAAQALABAHADIAAARIgGAAQgHABgCACQgDACABAKIAOAAIAAARIgNAAIAAAtQAAAGADAAIAHAAIAAATg");
	this.shape_12.setTransform(129.85,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjAhQgOgMAAgVQABgUAOgNQANgNAWAAQAWAAANANQANANAAAUQAAAVgNAMQgNAOgXAAQgWAAgNgOgAgKgVQgDAGAAAOIAAADQAAAOADAGQAEAGAGgBQAIAAADgFQADgGAAgOIAAgDQAAgOgDgGQgDgGgIAAQgGAAgEAGg");
	this.shape_13.setTransform(121.5,38.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMA0QgHgIAAgRIAAgoIgLAAIAAgQIAFAAQAMgEADgLIACgNIAWAAIAAAaIAPAAIAAASIgPAAIAAAoQAAALAJAAIAHgBIAAATQgIADgKAAQgRgBgHgGg");
	this.shape_14.setTransform(108.75,36.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtAKIAAgeQAAgGgEAAIgFAAIAAgSIArAAIAAA2QAAAHADAEQACADAGAAQALAAAAgTIAAgZQAAgGgEAAIgGAAIAAgSIAtAAIAAA+QAAAGADAAIAGAAIAAATIgWAAQgNAAgJACIAAgOQgJAOgSAAQgdAAAAgjg");
	this.shape_15.setTransform(100.1,38.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAhQgOgMAAgVQAAgUAPgNQANgNAWAAQAWAAANANQANANAAAUQAAAVgNAMQgOAOgWAAQgVAAgOgOgAgJgVQgEAGAAAOIAAADQAAAOAEAGQADAGAGgBQAIAAADgFQADgGAAgOIAAgDQAAgOgDgGQgDgGgIAAQgGAAgDAGg");
	this.shape_16.setTransform(89.4,38.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguAKIAAgeQAAgGgDAAIgFAAIAAgSIAsAAIAAA2QgBAHADAEQACADAGAAQALAAAAgTIAAgZQAAgGgEAAIgHAAIAAgSIAuAAIAAA+QAAAGAEAAIAFAAIAAATIgWAAQgNAAgJACIAAgOQgJAOgTAAQgdAAAAgjg");
	this.shape_17.setTransform(74.4,38.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjAhQgNgMAAgVQgBgUAOgNQAOgNAVAAQAXAAANANQAOANAAAUQAAAVgOAMQgOAOgWAAQgWAAgNgOgAgKgVQgDAGAAAOIAAADQAAAOADAGQADAGAHgBQAIAAADgFQADgGABgOIAAgDQgBgOgDgGQgDgGgIAAQgHAAgDAGg");
	this.shape_18.setTransform(63.7,38.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA3QgGgGgBgKQAAgJAFgEQAEgFAIAAQAJAAAFAGQAEAHgDAJQAHgDADgMIAAgBIgdg/QgEgGgDAAIgDAAIAAgSIA0AAIAAASIgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAAABABIALAcIALgcQADgHgGAAIgFAAIAAgSIAqAAIAAASIgFAAIgEABIgCAFIgZA6QgIAVgHAIQgIAKgSAAQgNAAgIgGg");
	this.shape_19.setTransform(53.25,39.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1A9IAAgTIAFAAQAEAAAAgFIAAhGQAAgGgEAAIgFAAIAAgSIAVAAQANAAAJgDIAAASQAHgSAUAAQARAAALANQAJAMAAAWQAAAUgKAMQgLANgRAAQgSAAgHgPIAAAUQAAAFADAAIAGAAIAAATgAgJgPIAAADQAAAXANAAQAOAAAAgXIAAgDQAAgXgOAAQgNAAAAAXg");
	this.shape_20.setTransform(38.175,39.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQAAgUAOgNQANgNAVAAQAtABAAAwIAAADIg5AAQABAUATgBQAOAAAGgMIAQAMQgLAVggABQgXAAgNgOgAAOgIQgBgKgCgFQgDgEgGgBQgLABgBATIAYAAIAAAAg");
	this.shape_21.setTransform(27.775,38.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQAAgUAOgNQANgNAVAAQAtABAAAwIAAADIg5AAQABAUATgBQAOAAAGgMIAQAMQgLAVggABQgXAAgNgOgAAOgIQgBgKgCgFQgDgEgGgBQgLABgBATIAYAAIAAAAg");
	this.shape_22.setTransform(18.025,38.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADA9IAAgTIAEAAQABAAAAAAQABAAAAgBQAAAAAAgBQgBgBAAgBIgIgOIgKAKIAAADQAAAFADAAIAFAAIAAATIgzAAIAAgTIAEAAQAEAAAAgFIAAhGQAAgGgEAAIgFAAIAAgTIAVAAQAOAAAJgCIAABLIAUgSQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgHAAIAAgSIAzAAIAAASIgHAAQgEAAgEADIgLAJIAUAiQACAEAEAAIADAAIAAATg");
	this.shape_23.setTransform(7.6,36.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag1A9IAAgTIAFAAQAEAAAAgFIAAhGQAAgGgEAAIgFAAIAAgSIAVAAQANAAAJgDIAAASQAHgSAUAAQARAAALANQAJAMAAAWQAAAUgKAMQgLANgRAAQgSAAgHgPIAAAUQAAAFADAAIAGAAIAAATgAgJgPIAAADQAAAXANAAQAOAAAAgXIAAgDQAAgXgOAAQgNAAAAAXg");
	this.shape_24.setTransform(200.175,16.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYA9IAAgTIAFAAQADAAAAgFIAAhGQAAgGgDAAIgGAAIAAgTIAWAAQAMAAAJgCIAABhQAAAFAEAAIAEAAIAAATg");
	this.shape_25.setTransform(191.825,13.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQAAgUAOgNQANgNAVAAQAtABAAAwIAAADIg5AAQABAUATgBQAOAAAGgMIAQAMQgLAVggABQgXAAgNgOgAAOgHQgBgLgCgFQgDgFgGAAQgLAAgBAVIAYAAIAAAAg");
	this.shape_26.setTransform(184.175,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAEA9IAAgTIAEAAQAEAAAAgFIAAgfQAAgGgDgDQgCgEgGAAQgLAAAAATIAAAZQAAAFAEAAIAEAAIAAATIgzAAIAAgTIAFAAQADAAAAgFIAAhGQAAgGgDAAIgGAAIAAgTIAWAAQANAAAJgCIAAAuQAIgPAUAAQAdAAAAAiIAAAgQAAAFADAAIAFAAIAAATg");
	this.shape_27.setTransform(173.725,13.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglAoIAAgXIAWAAIAAAMIAMABQALAAAAgIQAAgEgFgCIgMgDQgNgEgHgFQgKgGAAgMQAAgPALgJQAKgHATgBQAUABAPAGIAAAXIgWAAIAAgMQgFgCgGAAQgKABAAAHQAAAFAFACIALACQAOAEAGAFQALAFAAAOQAAAPgLAIQgLAJgSAAQgTgBgSgGg");
	this.shape_28.setTransform(159.7,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghAhQgNgMAAgVQAAgUAOgNQANgNAVAAQAtABAAAwIAAADIg5AAQABAUATgBQAOAAAGgMIAQAMQgLAVggABQgXAAgNgOgAAOgHQgBgLgCgFQgDgFgGAAQgLAAgBAVIAYAAIAAAAg");
	this.shape_29.setTransform(150.575,15.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAtIAAgSIADAAQAEAAAAgGIAAgeQAAgOgKAAQgLAAAAAUIAAAYQAAAGADAAIAEAAIAAASIgzAAIAAgSIAFAAQAEAAAAgGIAAgmQAAgHgEAAIgFAAIAAgSIAVAAQANAAAJgCIAAAPQAIgPAUAAQAdAAAAAjIAAAeQAAAGAEAAIAFAAIAAASg");
	this.shape_30.setTransform(140.175,15.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZA/IAAgSIAFAAQAEAAAAgGIAAgmQAAgHgEAAIgFAAIAAgSIAVAAQAMAAAKgCIAABBQAAAGADAAIAFAAIAAASgAgMgiQgFgEAAgIQAAgHAFgFQAFgEAHAAQAIAAAFAEQAGAFAAAHQAAAIgGAEQgFAFgIAAQgHAAgFgFg");
	this.shape_31.setTransform(131.675,13.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAiQgOgMAAgWQAAgVAOgMQANgNAWAAQAUAAALAIQALAIAAAPQAAAJgFAGQgFAFgJAAQgIAAgFgEQgEgEAAgGQAAgNAMgCQgEgEgJAAQgSAAAAAZIAAAEQAAAYASAAQANAAAGgNIASAKQgKAZggAAQgWAAgNgNg");
	this.shape_32.setTransform(124.175,15.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgfAiQgOgMAAgWQAAgVAOgMQANgNAWAAQAUAAALAIQALAIAAAPQAAAJgFAGQgFAFgJAAQgIAAgFgEQgEgEAAgGQAAgNAMgCQgEgEgJAAQgSAAAAAZIAAAEQAAAYASAAQANAAAGgNIASAKQgKAZggAAQgWAAgNgNg");
	this.shape_33.setTransform(114.725,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqAoQgHgGAAgMQAAgPATgIQAJgDAbgGIAAgEQAAgOgMAAIgHAAIABAHQAAAHgFAEQgEAEgIAAQgRAAAAgPQAAgZAtAAQAXAAAKAHQAKAIAAARIAAAiQAAAGADgBIAFAAIAAATIgjAAQgFgFgDgIQgDAGgIAFQgIAFgKAAQgMAAgIgHgAgJAHQgHAEAAAGQAAAFADACQACACAEAAQANAAAAgRIAAgGQgKACgFACg");
	this.shape_34.setTransform(104.925,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAsIgcg/QgCgHgEAAIgEAAIAAgSIA1AAIAAASIgEAAQgGAAADAIIALAgIANggQADgHgHgBIgFAAIAAgSIAqAAIAAASIgEAAQgFAAgCAHIgcA/g");
	this.shape_35.setTransform(94.5,15.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgxAlQAAgSAUAAQAIAAAFAEQAEAFAAAHQAAADgBADIAJABQALAAAFgHQAFgHAAgSIgBgGQgGAOgUAAQgUAAgLgKQgLgJAAgSQAAgUAOgLQANgLAYAAQAaAAAOAQQAOAQAAAdQAAAegPAQQgPAQgcAAQgsAAAAgZgAgMgkQgEAEAAAIIAAAFQAAARAQAAQAPAAAAgRIAAgFQAAgRgPAAQgIAAgEAFg");
	this.shape_36.setTransform(79.375,13.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghA8IAAgTIAPAAQADAAAAgFIAAg3QgGACgHAAIgHAAIAAgVIAGAAQAKAAAFgFQAEgEADgMIAaAAIAABfQAAAFAEAAIANAAIAAATg");
	this.shape_37.setTransform(70.025,13.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgZALIAAgVIAzAAIAAAVg");
	this.shape_38.setTransform(63.025,15.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag9A8IAAgTIAGAAIAEgBIAAgFIAAhFQAAgGgEAAIgGAAIAAgTIA9AAQAfAAAQAPQAPAPAAAdQAAA8hAAAgAgMApIALAAQANAAAFgIQAGgJAAgUIAAgHQAAgUgGgJQgFgIgMAAIgMAAg");
	this.shape_39.setTransform(53.525,13.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdA8IAAgTIAHAAQAEAAAAgGIAAhFQAAgGgEAAIgHAAIAAgTIA6AAIAAATIgGAAQgEAAAAAGIAABFQAAAGAEAAIAGAAIAAATg");
	this.shape_40.setTransform(43.85,13.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOA8IglheQgCgGgFAAIgGAAIAAgTIA/AAIAAATIgFAAIgFABQgBABACAEIATAzIASgzQACgGgGAAIgGAAIAAgTIAwAAIAAATIgGAAIgFABIgDAFIglBeg");
	this.shape_41.setTransform(33.95,13.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgtAtQgRgQAAgdQAAgbASgRQARgRAcAAQAdAAARARQAQAQAAAcQAAAdgRAQQgRARgdAAQgdAAgQgRgAgRgfQgFAJgBATIAAAHQABATAFAJQAGAIALAAQANAAAGgIQAFgJAAgTIAAgHQAAgTgFgJQgGgJgNAAQgLAAgGAJg");
	this.shape_42.setTransform(20.65,13.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpAuQgPgQAAgeQAAgbAPgRQAPgRAaAAQAYAAAHARIAGgPIATAAIAAAwIgdAAQgDgagSAAQgMAAgFAIQgGAIAAATIAAAFQAAATAGAJQAGAIALAAQAWAAACgZIAbAFQgEArgyAAQgbAAgRgQg");
	this.shape_43.setTransform(8.05,13.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,252,49.7), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAWQgHgJAAgNQAAgMAHgIQAJgJANAAQANAAAJAJQAJAIgBAMQABANgJAJQgJAHgNABQgNgBgJgHg");
	this.shape.setTransform(235.75,58.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7A+IAAgjIAkAAIAAASQAHACALAAQASAAAAgMQgBgHgHgDQgFgCgOgDQgWgGgKgHQgPgKAAgUQAAgXARgNQAQgMAeAAQAeAAAYALIAAAiIgjAAIAAgRQgHgDgJAAQgRAAAAAMQAAAGAIADIASAFQAWAFAKAIQAQAKAAAUQAAAYgQAMQgRANgeABQgcgBgegKg");
	this.shape_1.setTransform(225.55,54.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHAQIAAgwQAAgJgGAAIgHAAIAAgdIBDAAIAABVQAAAMAEAFQAEAFAIAAQASAAAAgdIAAgoQAAgJgGAAIgKAAIAAgdIBGAAIAABiQAAAKAGAAIAIAAIAAAdIghAAQgVAAgOADIAAgWQgNAXgeAAQgtAAAAg3g");
	this.shape_2.setTransform(210.225,54.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBkQgRgGAAgNQAAgTAggHQgagIAAgYQAAgVAZgIQgTgLAAgZQAAgVATgOQAUgMAfAAQAWgBARAIQAHgYAVABQAKgBAGAHQAGAFAAAIQAAAUgSAAQgKAAgFgIIgCACQAMAMAAASQAAAXgSAMQgTALggAAQgSAAgNgDQgHABAAAEQAAAIAQAAIA9gBQAXAAAMALQALALAAAUQAAA0hVAAQgsgBgSgGgAgtBLQAAAGAJACQAJACAXAAQAtAAAAgOQAAgGgEgCQgEgDgNAAIgyAAQgPAFAAAKgAgVgsIAAAFQAAAVAQAAQAQgBAAgUIAAgGQAAgUgPgBQgRAAAAAWg");
	this.shape_3.setTransform(186.675,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGBGIAAgcIAGAAQAFAAAAgJIAAgvQAAgVgPgBQgSABAAAeIAAAmQAAAJAFAAIAGAAIAAAcIhPAAIAAgcIAHAAQAGAAAAgJIAAg8QAAgKgGAAIgHAAIAAgdIAgAAQAVAAAOgDIAAAXQAMgXAgAAQAtAAAAA2IAAAwQAAAJAFAAIAIAAIAAAcg");
	this.shape_4.setTransform(169.575,54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBiIAAgcIAHAAQAGAAAAgJIAAg8QAAgKgGAAIgHAAIAAgdIAhAAQATAAAPgDIAABmQgBAJAGAAIAHAAIAAAcgAgUg1QgIgHAAgMQAAgLAIgHQAIgIAMAAQANAAAIAIQAHAHABALQgBAMgHAHQgIAHgNAAQgMAAgIgHg");
	this.shape_5.setTransform(156.35,51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBPQgMgLAAgaIAAg/IgPAAIAAgZIAGgBQAUgFADgQIAEgWIAjAAIAAAoIAXAAIAAAdIgYAAIAAA/QAAARAPAAIALgCIAAAeQgOAEgPAAQgaAAgLgMg");
	this.shape_6.setTransform(146.775,52.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA2QgVgUAAgiQAAgiAVgSQAUgUAjABQAgAAAQALQARANAAAXQAAAOgIAKQgIAIgNAAQgMAAgIgHQgHgFAAgLQAAgTATgEQgGgGgNABQgdgBgBAnIAAAGQABAmAcAAQAUAAAJgUIAcAQQgQAlgwABQgkgBgUgSg");
	this.shape_7.setTransform(134.7,54.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0A0QgUgTABghQgBggAVgUQAVgTAgAAQBGAAABBLIAAAGIhZAAQACAeAdAAQAWAAAJgUIAaASQgSAjgyAAQgkAAgUgVgAAVgNQAAgRgEgGQgFgIgJABQgSAAgBAeIAlAAIAAAAg");
	this.shape_8.setTransform(119.65,54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBPQgMgLAAgaIAAg/IgPAAIAAgZIAGgBQAUgFADgQIAEgWIAjAAIAAAoIAXAAIAAAdIgYAAIAAA/QAAARAPAAIALgCIAAAeQgOAEgPAAQgaAAgLgMg");
	this.shape_9.setTransform(106.875,52.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3A1QgVgUAAghQAAggAVgTQAWgVAhABQAjAAAVATQAVAUAAAgQAAAhgWAUQgUATgjABQgjgBgUgTgAgQghQgGAJABAWIAAAFQgBAWAGAJQAFAJALgBQAMABAFgJQAFgJAAgWIAAgFQAAgWgFgJQgFgJgMAAQgLAAgFAJg");
	this.shape_10.setTransform(94.1,54.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEBGIAAgcIAHAAQAGAAAAgJIAAg8QAAgKgGAAIgIAAIAAgdIAiAAQAUAAAOgDIAAAcQAIgcAbAAQARAAAKALQAJALAAATQAAARgJAJQgIAJgOAAQgKAAgGgGQgIgFABgJQgBgNALgIQgCgCgFAAQgTAAgBAlIAAAgQABAJAEAAIAJAAIAAAcg");
	this.shape_11.setTransform(78.9,54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhSBfIAAgdIAHAAQAFAAAAgIIAAhtQAAgKgFAAIgJAAIAAgdIAhAAQAVAAAOgDIAAAcQAMgcAfAAQAaAAAQATQAPAUAAAhQAAAggQAUQgQATgbABQgdAAgLgZIAAAgQAAAIAGAAIAIAAIAAAdgAgPgYIAAAGQAAAjAVAAQAWAAAAgjIAAgGQAAgkgWAAQgVAAAAAkg");
	this.shape_12.setTransform(62.85,56.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0A0QgUgTABghQgBggAVgUQAVgTAgAAQBGAAABBLIAAAGIhZAAQACAeAdAAQAWAAAJgUIAaASQgSAjgyAAQgkAAgUgVgAAVgNQAAgRgEgGQgFgIgJABQgSAAgCAeIAmAAIAAAAg");
	this.shape_13.setTransform(40,54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBGIAAgcIAHAAQAGAAAAgJIAAg8QAAgKgGAAIgIAAIAAgdIAiAAQAUAAAPgDIAAAcQAGgcAdAAQAQAAAKALQAJALAAATQAAARgIAJQgJAJgOAAQgKAAgGgGQgIgFABgJQgBgNALgIQgCgCgFAAQgTAAAAAlIAAAgQAAAJAEAAIAIAAIAAAcg");
	this.shape_14.setTransform(25.25,54);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBA+QgLgKAAgQQAAgaAcgMQAPgGArgHIAAgIQAAgVgUAAIgLABQACAGAAAEQAAALgIAGQgHAHgLAAQgbAAAAgZQAAglBGAAQAkAAAPAKQAQALAAAbIAAA2QAAAJAFAAIAHAAIAAAcIg2AAQgIgHgEgNQgFAKgMAHQgNAIgPAAQgUAAgLgLgAgOALQgLAGAAALQAAAGAEAEQAEADAGAAQAVAAAAgbIAAgKQgRADgHAEg");
	this.shape_15.setTransform(10.125,54.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4A0QgUgTAAghQAAggAVgUQAWgTAigBQAiAAAVAUQAVAUAAAgQAAAhgVATQgWAUgiAAQgjAAgVgUgAgQghQgFAJgBAXIAAADQABAXAFAJQAFAJALAAQAMAAAFgJQAFgJAAgXIAAgDQAAgXgFgJQgFgJgMAAQgLAAgFAJg");
	this.shape_16.setTransform(234.2,22.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGBfIAAgdIAGAAQAFAAAAgIIAAgwQAAgLgDgFQgDgFgKAAQgRAAAAAdIAAAoQAAAIAGAAIAGAAIAAAdIhPAAIAAgdIAHAAQAGAAgBgIIAAhuQABgKgGAAIgIAAIAAgdIAhAAQAVAAAOgCIAABGQANgXAeAAQAuABgBA1IAAAyQABAIAFAAIAIAAIAAAdg");
	this.shape_17.setTransform(217.5,20.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYBFIgYg/IgWA/IgrAAIglhkQgEgJgFAAIgGAAIAAgdIBQAAIAAAdIgFAAQgJABADAJIASAuIAQguQADgJgJgBIgEAAIAAgdIBJAAIAAAdIgGAAQgIABAEAJIASAwIAOgvQAEgKgIgBIgGAAIAAgdIA4AAIAAAdIgFAAQgDABgCABIgEAHIgiBkg");
	this.shape_18.setTransform(197,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(0,0,273,71.1), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A0QgUgTABghQgBggAVgUQAVgUAgAAQBGAAAABNIAAAFIhYAAQACAeAdAAQAWAAAJgUIAaASQgSAjgygBQgkABgUgVgAAVgMQAAgSgEgHQgFgHgJAAQgSAAgCAgIAmAAIAAAAg");
	this.shape.setTransform(170.95,22.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7A9IAAgjIAjAAIAAATQAIACALAAQARAAAAgMQAAgHgHgDQgFgCgPgEQgVgFgJgHQgQgKAAgUQAAgXARgMQAQgNAegBQAeABAYAKIAAAiIgjAAIAAgRQgHgCgJAAQgRAAAAALQAAAHAIADIASAFQAWAGAKAGQAQAKAAAWQAAAXgQANQgRANgegBQgcABgegMg");
	this.shape_1.setTransform(156.8,22.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4A0QgUgTAAghQAAggAVgUQAVgTAjgBQAiAAAVAUQAVAUAAAgQAAAhgVATQgWAUgiAAQgiAAgWgUgAgQghQgFAJgBAXIAAADQABAXAFAJQAFAJALAAQAMAAAFgJQAFgJAAgXIAAgDQAAgXgFgJQgFgJgMAAQgLAAgFAJg");
	this.shape_2.setTransform(142.2,22.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGBfIAAgdIAGAAQAFAAABgIIAAgwQgBgLgDgFQgDgFgKAAQgRAAAAAdIAAAoQAAAIAGAAIAFAAIAAAdIhOAAIAAgdIAHAAQAFAAAAgIIAAhuQAAgKgFAAIgJAAIAAgdIAiAAQAVAAAOgCIAABGQAMgXAgAAQAsABABA1IAAAyQAAAIAFAAIAHAAIAAAdg");
	this.shape_3.setTransform(125.5,20.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBPQgMgLAAgaIAAg/IgPAAIAAgZIAGgBQAUgFADgQIAEgWIAjAAIAAAoIAXAAIAAAdIgYAAIAAA/QAAARAPAAIALgCIAAAeQgOAEgPAAQgaAAgLgMg");
	this.shape_4.setTransform(111.625,20.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBPQgMgLAAgaIAAg/IgPAAIAAgZIAGgBQAUgFADgQIAEgWIAjAAIAAAoIAXAAIAAAdIgYAAIAAA/QAAARAPAAIALgCIAAAeQgOAEgPAAQgaAAgLgMg");
	this.shape_5.setTransform(95.025,20.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxA1QgVgTAAgiQAAghAVgUQAUgSAjgBQAgABAQALQARANAAAWQAAAPgIAKQgIAIgNAAQgMAAgIgHQgHgGAAgKQAAgTATgEQgGgFgNgBQgdABgBAnIAAAFQABAmAcAAQAUAAAJgVIAcARQgQAmgwgBQgkABgUgUg");
	this.shape_6.setTransform(82.95,22.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A0QgUgTABghQgBggAVgUQAVgUAgAAQBGAAABBNIAAAFIhZAAQACAeAdAAQAWAAAJgUIAaASQgSAjgygBQgkABgUgVgAAVgMQAAgSgEgHQgFgHgJAAQgSAAgBAgIAlAAIAAAAg");
	this.shape_7.setTransform(67.9,22.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBPQgMgLAAgaIAAg/IgPAAIAAgZIAGgBQAUgFADgQIAEgWIAjAAIAAAoIAXAAIAAAdIgYAAIAAA/QAAARAPAAIALgCIAAAeQgOAEgPAAQgaAAgLgMg");
	this.shape_8.setTransform(55.125,20.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3A0QgVgTAAghQAAggAVgUQAWgTAhgBQAjAAAVAUQAVAUAAAgQAAAhgWATQgUAUgjAAQgjAAgUgUgAgQghQgGAJABAXIAAADQgBAXAGAJQAFAJALAAQAMAAAFgJQAFgJAAgXIAAgDQAAgXgFgJQgFgJgMAAQgLAAgFAJg");
	this.shape_9.setTransform(42.35,22.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBHIAAgdIAHAAQAGAAAAgIIAAg9QAAgKgGAAIgIAAIAAgdIAiAAQAUAAAPgDIAAAcQAHgcAcgBQAQAAAKAMQAJALAAAUQAAAQgJAKQgIAIgOAAQgKAAgGgGQgIgFABgKQgBgNALgHQgCgCgFABQgTAAAAAkIAAAhQAAAIAEAAIAJAAIAAAdg");
	this.shape_10.setTransform(27.15,22.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVBdIAAgdIAKAAQAEAAABgBQACgDAAgGIAAhrQAAgLgHABIgKAAIAAgdIBgAAQAmAAASAOQATAOAAAdQAAAegSANQgSANgnAAIgUAAIAAAhQAAALAGgBIAMAAIAAAdgAgJgGIANAAQAZABAAgeQAAgPgFgGQgGgHgPAAIgMAAg");
	this.shape_11.setTransform(10.925,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(0,0,273,39.6), null);


(lib.covwhiteRGBai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// co-v-white-RGB.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyA1QgXgVAAggQAAgeAWgVQAVgWAeAAQAfAAAWAXQAVAVgBAdQAAAfgVAVQgVAVgfABQgdgBgVgUgAgvgvQgTAUAAAbQAAAcATAUQAUATAbAAQAcAAATgTQATgTABgdQAAgbgTgTQgUgUgcAAQgbAAgUATgAASAuQgCgDgCgKIgCgPQgCgIgFgEQgEgCgJAAIgGAAIAAAqIgRAAIAAhcIAfAAQAPAAAFACQAPAFAAARQAAAQgTAGQAGABADAEQADAEABAJQAEAVADAHgAgOgIIAOAAQATAAAAgNQAAgIgHgDQgDgBgMAAIgLAAg");
	this.shape.setTransform(526.5006,189.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACmLBQgKgEgNACQgPADgIAAQAAgDgKgCIgOgBQgRABgHgCQAAgDgSACQgjgBAAgBIgUgCIgTgBQgLgCgHAAQAAgBgQABQgRABAAgDIgOgEQgJgDAAAHQgDAAgFgDQgEgDgDAAQAAAFgJgBIgNgDQgNgCgLACQgRACgYgKIgJgEQgEgCgEABQgCAAgIgEQgIgFAAgBIgMABIgMABQgIACgFgBQgDAAgDgEQgEgFgDAAIAAAEQgEAAgEgCQgGgDAAgEQgCAGgBAAQAAgDgIgDQgIgCgFAAIgBABQgBAAAAAAQAAgBAAABQgBAAAAAAQAAAAAAAAQgDABgFgEQgEgDgEABQgEABAAgDIgIgGQgHgFAAAEQgCABgMgFQgNgGAAgCIgTgJQgBABAAAAQgBABAAAAQAAABAAAAQAAAAABAAIgEABIAAAAIgEAAIAEAAQABADgQgGQgCgDgFAAQAAgGgDgCIAAAGIgFgDQgGgDAAADIgIgIIgOgCQAAgCgNgGQgNgGAAgCQgKgEgDgKQgBgDgJgBIgOgCQgTgKgBABQgEgCgCABIABgDQgCAAgQgKQgLgIgDgIIgLgDQgCgCgBgDQgBgBgFAAIgDgHIgCgHQgEgBgCACQgCACgCAAQgBgLgTAAQgPAAAAgBIgNgBIgMgBQgSAFgHgCQAAgBgYgBQgaAAgDgBQAAACgJgCIgNgDQgLAFgDgEQgNgEgCABQAAABgGAAIgHgBIgJgCQgDgCgFAAIgOABQAAABgOgEQgGAAgFgHQgCgBgNABIgMAAQgEABgcgDQgcgDAAgBIgJgDQgGgCgDAAIgXgDQgDgEgbgGQgagHAAgBQgCAAgEgCQgDgDgDABQgOACAAgEQgJgEgPAAQAAgFgKgBQgNgBgBgBQgLgFgFgDQgHgGgQgDIgYgEQgDgDgDABIgHACIgGgDIgHgCQAAgEgJgBQgJgBgCgFIAJgCQgBgEgMgEQgMgFAAACIgSgJQgFAAgIgGIgLgHIgMgEIgNgBIAVAVQAAADAHAGQAHAGABAEQADACAGAHQAGAGAEABQAKADAEAHQADAAAHADIAKAFIAHAEQAHAEAAACQAFAAAHADQAGADAEAAIAEACQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAFABAGAGQACAFAWAEQAVAEAAADIAYAKQADAAAGADQAFAEAEAAQACgBATAGIATAFQADAAAIAEQAGAEAEgBQAEgBAJAEQAKAEADAAQAAgBARAEIAVAFQAEAAAJACIANAEQAAABAOACIAQABQAAAFBNAGQADADAjADQAiAEAAABQBPAIAAgBQADgBAkAEQAiAEAAgBQAIgBAAABQgGAAgMAGQgOAGgFABIgMgCQgLgCAAADIgGABQgDABgDgBQAAAGgUABQgTABAAgDQgQACAAgCIgGACQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgLgBQgDgBgDgGQgDAAgCADQgBABgGAAIgNgBQgXgCgDgCIgFgFIgJABIgMgEQgKgDAAADQgGAAgKgCQgCgGgEABIgJAFQgFADgFgCQAAgCgLgCQgKgCgEABQAAACgWgEIgbgFQAAgCgOgBQgPgBgBgEQgHAAgLgDQgMgDgGgBQgCgCgNgBQgNgBAAgCQgGAAgJgCIgOgEIgNgEQgNgEAAgBIgNgCQgKgCAAgBQgFAAgGgCIgLgFIgDgBIgCgBQgLAAAQALQACACAGACQAGACADADIAKADQAAABAFABIAHABQAAACASADQAAADAaAEQAZAFABAHIgKACQAAgDgXgDQgZgDgCgDIgagHQgVgHAAgDIgZgIQgUgIAAgBQgIgCgKgEQgNgGgFgGIgIgFQgJgEAAABQgCAAgHgFQgIgFAAgCQgKAAgPgHQgRgJgCgJQgPgKgGAAIgIgIQgFgFgDgCIgGgIIgJgFQgGgCAAgDQgGgEgHgIQgHgJgDgGQgDgBgEgHQgFgHAAgCQgDAAgDgJQgDgKgEAAQAAgEgDgGQgEgFAAgFQgBAAgFgTIgGgYIgHgkQgHgjAFAAIgFgVQgBAAgBgLIgBgNQgDAAAAgNQgBgOgCAAIgJhUIAAggQAAgcACAAIgCgjQgBggAEAAIgCgxQgCgsAFgDQAAgEAKgaQALgZgBgEQAIAAAHgOQAHgPAGgCQACgBADgFQACgGADgCQAAgFAGgGQAHgGAHgBIgDgEQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAABAAIAEgCQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAHgHIAKgHIAFAAIAEgCQALgIgHAAQgCgGAFgEQAFgFAFAAIAIgDIAIgCQAKgFAKgJIAQgRQAGgGADgBIAFgDIACgEQACAAAOgLQAAgCANgFQANgGAAgEQAEAAAJgGQAJgHABgDIAOgJQAHgEAIAAQAAgBAGgDIAFgCIAJABQAGACABgDIAXgEQAOgEAAgJQADgBACgEIADgEQABgCAEgDQAEgCABgDIgBAAQAAgFAHACIAJACIARgCIAIgFIAKgEIAJgFQAHgEACAAIAEgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAFAAAFgCQAHgCAAgDQgHAAAHgHQAHgGAEgBIANgHQAFAAAGgDQAAgDAHgCQAGgCAAgEQAGAAAAADQADAAAEgCIAHgCIAKACQAGABACgDIAOgGQAJgGAEAAQAAgBALgEQAKgDAEAAQAAgCAHAAQAHAAAAgBQAJAAACgCQACgBAAgHIAFgDIAEgEIAJACIgBAFIAEgCIADgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAfAAAHgDQAEgBAGACIAKACQALgGgFAAQgCgJASgGQATgGAAAFQAMgIAZAAQACgDAJAAQAJABACgEIAXgEQAUgEAAgBIABABIAVgFQAWgFADAAQAVAAAAgEIAIgCQAHgBAAgBIAggHIAvgHQAOAAAggFQAggGAQAAQAAgFBQAAQAAABAGACQAHACAAACQgIAFgXgCIgQABIgRABQgJAAgRADQgSADgJAAQAAgChXATQAAAFArgFIAxgGIAugGIAbgDQARgCAJACQAUgDABAKQASAAAAABIAHABQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAABIgIAAQAAADg1ACQAAABgRADIgUACIgTAAQgSAAAAADIgwAHIgSACIgUACQAAADgMACIgQACQgIgBgPAEQgQAFgHAAIgMACQgMACAAACQgEAAgGAEQgHAEgDAAIgJAAIgJgBQAAADgQACQgPADgBADQgCAKgMADQgOABgIACQAAADgTAHQgHAKgHAEQACAIAiABQAfABAHgEQADgCAagEQAXgDAAgCIAMgCIAMgDQAAgBAGABIAHABQARgEAJAAQAAgBAcgDIAcgFQAfgDAAgBIAVgCIAWgCQAAgCAmgCQAngDAFABIApgDQAkgDAAACQAMgCAYACIAcgBQASgBALACQAAADAJACQAJACAAgCIAQABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQADgBAKACQALADAAACQgEACgWABIgVAAIgmABQgCADgWAFQgVAFAAACIgQgBQgPgBAAACIgWAAQAAAFgZABIgegBQAAADglABQglACgBAIQARADAXgDIAngGQAAACAkgCQAjgBAAABQAFAAALgDQAEAAAEACQAFADAEAAIAQgBQAJABgEAGQgFAIghACIghACQhWAFAAADIgTACQgTACAAgCQgGgBgJADQgLADgDAAIgRACQgCACgGAAIgKgBQgGABgJAGQgIAGgGABQAAAFgdAEQAAABgHACQgIADAAABIgTADIgKACQgLACgBACQgRAAgMAMQgGABgKAFQgKAGgGABQAAgBgNAFIgPAFQAAgCgFABQgEAAgCACIAEABQgBADgMACIAAgEIgOAFQAKAIgUAEQgWAEAAACIgTAGQgNAFgGABQAAgCgvAQIgRAGQgRAGgCADQgTAAgDAEQgFAAgHAFQgGAEgFgBQgGAAgFAFQgGAGgFAAQgCgDgFACIgIAEIgKAFQgFACgFABQgBABgLADIgNACQAAAFgJACIgOADQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABgBAAQgCADgEAAQgEAAgCADQgDAEgDACIgDADQgBABgEAAQgBgCgGgBQgFgCAAAEQgFAAgBAFQgDAHgCABQAAADgJAAQgOAJgCAAQAAACgMACQgLADAAAEIgMAGQgIAFAAADQgFABgFAEQgGAEgEABIgGADQgEACgCAAQgRAJgCAAQgEAEgFAAIgQAMQAAADgIAFQgIAEAAADQgGAEgOACQgBAEgEACQgFACgBABQgFAAgEAIQgEAHgDABQgEABgIAHQgIAFgDAAQAAAFgHAEQgIADgBAFQgSALgLANQgEAAgGAGIgIAKQgGAIgFADQgBADgFACQgFACAAAEQgCAAgHAJQgGAIgDAAIABADQgFAAgFAHIgHAKIgIAIIgHAJQgDAHgLANQgJALgBAJQADAAAGgHQAIgJACgBQAGgKAEAAQAAgDAHgFQAGgFABgCQgCAAAKgJIALgJQAGAAAEgJQAEgJADAAIAGgGQAGgFACAAQACgEAHgEIALgHQAAgCAEgFIAHgFIAVgPQADgHAUgGQABgDAJgEQAIgEAAgCQgBgEAGgCIAIgDIAWgOQAEAAAFgFQAGgEADAAIAhgUQAGgCARgIQATgJAAgDQAHgBACgDQAEAAABgDQACgDACAAQAHgCABgCIAIgEQAFgDAAgBIAGgDIAFgDQAAADAMgFQALgFACgDIAHgCQAFgCAAgBQAHgBAOgJQANgIAIAAQADgEAJgCQAIgCADgDQAEAAAGgEQAFgEAEAAQAFgFAIAAIAIgIIAHAAIAGgBIASgHQAAgBAGgCIAHgBQADgEAKgBIALgCQABgCAHgDQAIgEAAgCIAQgDQAAgCALgDQAJgCAEAAQAAgGANgBQANgBACgCIApgMQAhgJAAgFQAEAAASgFQARgGAAgBQAFAAAJgCQAKgCAAgEQAygGAAgEQALAAAQgFQATgHAHgBQAAgBAYgFIAbgFQAAgBAdgGIAhgHQAIgCANgBQAAgBAFgBIAHgBIATgEQAMgDAHABQAAAIgWAFIgeAFQgQAEAAACQgDAAgHAFQgHAFgFgBQAAAAgBgBQAAAAAAAAQAAAAgBAAQgBAAAAAAQAAACgZAIIgHAFQgEADgEAAQgDAEgGABIgMABIgbAJQgQAFgMACIgEADQgEADAAACQgEAAAFAEQAFADAAgEIAMgBQAKgBAAgCQAfAAgQAFIgHAEIgGAGQgCABgHgCQgEgBgCAGQgJgBgIAEQgKAEgIAAQgFAAgHAEQgGAEgEAAQAAAEAGAAIAGgCIAHgCQAAANgmACQgBADgGABQgDACgEgBQgEAAgDABQgBACgPAFQgFAGgSAAQgLABgBAGQgEgBgFACQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgEgCgBABQAAABgFAEIgIAEQgOAFAAACQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIABACIgGACQgEACgCgBQgBAGgKABIgOgBQAHAFgHADQgFACgGAAQAAgBgIAEIgIAEQgDAGgPAAQAAgDgGACIgEADQgBgDgEAFIgEAIIgGgCQgBAAgBAAQgBAAgBAAQAAAAgBABQAAAAAAABQgFACgIAAQgEAAgMACQgNADAAADQgDAAgEAEQgFAEgDAAIgbAKQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgDADQgEAAgDACQgDACgCAAQAAADgEABQgEACgDAAQgFgBgDAEQgEAFgDAAIgHAEIgFADQAAAGgKACIgOABQAAABgFADIgHADQgDABgHAIQgFAHgGgBQgHgCgJAJQgRAEgBADIgFACQgCABAAAEIgJgBQABABAAAAQABAAgBABQAAAAAAAAQgBABgBAAIgEAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAABABABQAAAGgKAAQgCgCgGADIgJAEQgRAHgIAKQgJABgIAEIgPAJQAAAEgMAGQgMAHgCAFIgJAEQgGACAAAEIgMAFIgGACQgDABgCADIgCADIgEACQgJAHAAACQgDAAgCADQgDAEgCAAQgHABgFAEIgNAPQgHAIgJADQAAAGgOAJQgOAKAAAHQgEACAOALQAPANgBADQgFAAgGAKQgFAKgBAGQgDAAAPANQAPAMAAgEQAGAAAIAHQAIAHABAGQAAAEAKACQAKACACACIAMAJQAGAAALAGQALAFAGAAQAAAHArAAQAMAMAIAAQAAABAIAAQAJABABABIALAAQAGABAFADIAOAJQANAGAFgCIAKgCIALgCQAEADACAAQgCAEADACQACABANgBQAMAAACAEIATABIAIABIAJABQAAgCAPADIASADQADgEAGAAIALAAQABACAHAAQAHAAADADIAEAKQAEAIADgBIACAAIABgCIABgNQABgFAFAAIAKAAIAPACIARAAQAAgCAKADIAMAEQAAgFAKgCQAKgBAAAGIAugFIgBgCQADgCgDgPQgEgPABAAIgEgNQgFgMABAAQABgCgBgFQgBgFgCAAIgBgUQgBgFACgMQABgOACAAIAAgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAFAAAAgZQACAAACgIIADgJQAAgFADgGQADgHABgFIAIgfIAIgQQAFgKAAgGQAEgCACgGQADgIADgCQAHgGgBgHQAMgMgBAAIAEgGQADgCACgEQgCgFAEgBQAAgCAFgGQAGgFAAgDQACgBAFgGQAFgHACAAQAAgDAFgDIAIgGQACAAAEgEQADgEAAgCQANgGAPgPIAFgCQAAAAABAAQAAAAABABQAAAAAAABQABABAAABIgRANQgFACgFAIQgFAHgBAFQAGgBADgDIAGgIQAPgGAAgBQAIgCANgKQALgJAKAAIAIgBQADAAADgDQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAAgDAEgBQAAgDAJgHQAIgHAFgCQADgBAFgEIAIABQACgCAFAAQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBIAIgGQAHgGAAADQAGACAAgLQAGgBAFgEQACgCAJgCQAAgDACgDQADgDACAAQAAgCAMgGIANgHIACgFQABgCAEgBIAGgCIAGgFIAFgBIAFgCQAEgEAHgDQAIgDADgDQAFgEADACIAEADQADAHgOAHIgSAIQAAACgSAJIgMAJQgIAFgCAFQgEABgIAGQgIAGgGABQAAAIgLACIgMAJQgGAFgCAFQgIACgHAIQgCAAgDADQgDACgEAAQgGABgCAHQgIAEgCAJQgEACgEAFIgIAIIgPAMQgKAHAAAHQgNAGACANIgDAEIgCAGQgFACgBAJQgCAAgEAFIgFAFQgJAKAAgEQgDABgBAHQAAAGgIAAQAAABgEAEIgFAEIgBALIgGAJQgEAGgBAEIgMAKIgEAMIgGAEQgBACABAFQgBAAgEAHIgDAJQgDABgFAIIgHAHQAAATgIADQgGACABAJIAAANQgEAAgBAZQgBAZABAAQABgJAIgNQAKgOABgHQADAAAFgIQAEgGAAgDIALgUQACgBAFgIQAEgHAEAAQAEgPALgCQgCgKAMgGIANgPQABgEAJgIQAIgHAAgFQAFgCAGgIQAFgJAFgCQAAgDALgJQAJgIAFgDQAAgDALgHQAKgGAAgCQAGgEANgNIAPgNQAEAAADgFQADgFAEAAQACgEAHgGQAHgFAEgBQABgDAFgEQAHgEABgCQAIAAALgMQAMgMAGAAIAKgHQAIgFAAgCQADgBABgDQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAIAAgCgGIAGAAQAAgCARgIQAQgJAEgBQAAgEATgKQARgJAGAAQADgGAJgFQAIgEAHgCQAAgBAJgEQAJgEACAAQACgCAUgJQATgIAAgBIAEgEQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIAGgBQAAgCAIgDIAIgCQADgDAIAEQACgJAFAAQAGgGAIAAQAAgCAHgCIAKgDQAFgHAZgGQABgCAGgBQAFgCACgCIAGgCIAHgCQAAgCAGgBQAGgBAAgBIAEADIAdgQQAAgBAMgDQALgCAAgCQAXgGAAgCIAJAAQAHAAADgEQADAAAPgJQABAAABAGQAAgIAVgEIAMgEQAJgDABAAQAQAKgEgHIgCgDQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAugJQACgEAXgEQAWgEAAgBIAIgDQAEgCADAAQAAgDARgBQATgCABgCQADAAADgDQADgDADAAQAAgCALAAQAngIADABQAAgCAvgIQAHABANgDIAVgGQAYgFAGAAQA9gJAGAAQAJgBAVgEQATgEAMAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBIAKAFQAIADAAgGIAUgCQA+gHAAACQADABAZgFIAigBQAfAAAAgCIBjgBQAAgCAoADQAsAEAEAAIAKAAQADAEAEgCIAIgCQACAHgDgBQgBAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgFAEgNAAQAAAAAAgBQAAAAgBAAQgBAAAAAAQgBAAgBAAIgFACQgEAAgDgCQgDgCgCAAQgNAHAAgEQgQACgIgCQAAgCgMABQgMACAAABQgLAAgKABQgCAFgGgCIgKgDQAAADgLAAQgKgHgCACIgDADIgFABQgDADgGABQgDAAAAAHQgMAAgCAIQgCAIAMAAQACADAKABQAKABADACQAAgFAHADIAKADQAAgEANACQAIABgDACIgFADQgCACgJAAQgIAAgEgCQAAABgHABQgGABgBAFQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCADQgKAAgIACQgKADgHAAIgqADQgCAEgLAAIgRAAIgtACQAAABgfAEQggADgFgBQAAAGgzgBQAAABgIADIgJACQgYAAAAADQgFgBgOADIgiACQAAABgVAEIgYADQAAgDgKAHQgLAGAAACIAhAAIAbgEIATACQADAAAFgCQAEgCAFAAIAOgDQANgCAAACQAFABAHgFIAOABQAAAFALgHQAKgBARgDQAAgCAJAAQAGgBAFABQAGACAGgBQAGgCAFACQAAgDARgDQARgEAAAFQArAFAAgDIAJABQAGABAAADQgNAHgDgBQgFgBgKABQgLABAAADQAkgDBBACQANAAAaAEQAYADANAAQAlAAA5AKQArAFAAAFQAFAAAXAFQAZAFAAADIAIAAQAEAAABgEQAJgDAFAAQAFAAAFACQAAABAIACQAIACAAACQATAAAZAOQAPASgBAAQAAAGASAAIgLgKQgIgHAJAAQAGAAAJAFQAJAFAFAAQAqAWAEAAQAAABAPAEQAOADAAADQADAAAHAEQAIADADAAQAAABAoAOIAZAOQASALAAAHQAEAEAFACQAAACAJAIQAKAIAAADQAHAMACAAQAAADAEAGQAEAGAAAEQABAAACAHIACAJQAEAAAFATQAFATADAAIAJAUQAFAMAAAKQACAAAFAbQACAAAGAXIANAyIAHAaQAHAXgDAAQACAGADApQABADgCAFIgCAIQgCAAAAAGIAAAJQgCAAgDAIIgDAJQgDABgFAPIgFAPQgBADgDAAIgDAAIgBAGQgBAAAAAAQgBABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgIAAIAAAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgEACgBAGQgCAAgDAGQgDADgCgFQgHABgFAFQgEAAgCAIQgCAIgCABQAAAHgGADQgGADgGgCQABANgJgDQgMgEgCAEIAAAMQgCABgDADIgCADIgEACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAGQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQgJgCAAABIgKAEQgEAAgCADQgCAAAAAFQgBAFACAAQgBAKgNABQAAgDgIgBIgLgCIgGADQgGACAAADQAAADgMACQgEABgKAFQgKAFAAADQgCAAgNAHQgNAHAAACQgFACgDAHQgCAFgHgCQAAACgDAEQABAAACAEQACADAAACQgGACgLgDQgLgDgFABIABAKQAAAGgFAAQgCgDgEACQgBABAAAAQAAABAAABQgBAAABABQAAAAABAAQADACABADQgEACgFAAIgJAAQgCAAgHgFQgHgEgFAFIgDAGQgBACgEABIgHAEIgFADQgBAFgJAAIgPgBQAAAHgJADQgLADgCADIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQgCgDgDAAQgEgBAAAEQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAIAAAGIgMABQgDAAgGAFQgEADgDgHQgDgBgDAFQgDAEAAAEQgFAAgFADQgFADAAAEIgGgBIgHABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgEAAIgPADQgFAGgHACIgPACQAAAAgBAAQAAABAAAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAADABAGQAAAEgNgEIgHAFQgHAEAAADIgJgBQgEABgCAGIgJADQgHABgCgEQgGADgHAFIgMAIQAAAGgRgDQgSgDAAAIIgFgCQgBgBgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAgDAFQgDAEgCgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgGAHQgDAFgFgBIgEAAIgFACQAAAAgBABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgFAFIgJAEQgHADABABIAYAAQAOgBAIgDQADgBAcgFQAYgFAAgDQADgBAFAGQAEAGAEgCIARgFQACgFAZgDQAAgBALgDIALgEIALgCQAJgBgBgDQARgHABAHIAPgGQAKgDAHABQgSALgFABIgpAUQABgGgKACQgIABgEAEIAEADQgEAAgUAIQgUAIAAACIgJABQgIACAAADQgFABgFgBIgJgDQgBAKgHgBQgMgBgCABQAAABgIABQgJAAABAEQgRAJgKABQgWADAAACIgIABQgGgBAAgBQgDgBgEABIgHACQgWAMAAgIQgDAAgEACQgFABgBADQgDgBgIADIgGADQAAABgVAEQgGAAgFAEQgGAEAKABQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABQAAgDARAAQAQgBAAgCQAIAAAWgHIAdgEIAkgGIAVgEQATgEAAABQAIAAAMgEIASgHQgBgBAOgFIAQgEIAVgIQAPgHAEAFIgUAKIgRAHQgGABgLAGQgMAFgEABQABADgKACIgNACQgKAGgLACQAAgCgMAIQgCAFgDgFIgDgDQgEABgFADQgFAEgDAAIgKADQgJABAAADQgFAAgGACQgGACgGAAQAAAJgLgMQgCAGgBAAQgDgFgJACIgLADQgFAGgBADQgFAAgEgDQgFgDgEgBQAAAFgGAEIgLAEQgXALgNgLQgMAEgDAAQAAAHgPAAQAAACgMADQgLADgEgBQAAgEgIAAIgMAAQgCAHgBAAIgHgBQAAACgVgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAADgJAAQAAgGgEAIIgDAEIgIAEQAAgEgHABIgIACQgCABgQAAQgOAAgBADIgYAAQgFAAgHgDIgMgDQgHAHgIAAIgRgDQAAABgKADQgKACAAABIgPACQgMACgEgEQAAgBgNAAIgRgBQAAAFgHgBIgKgCQAAADgPABIgFAAQgKAAAAgDgACUKCQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAdgDQAZgCABAEQABAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBQACgDADAAIAEAAIADgBQAEgBAGABQAHAAADgBIAOgFQAJgCAHAEQABgGAEADIAFAFQADAAAFgFQADgGAEABIAHACQADAAAFgDQACgBAFAAIAHgCQAFgBABABIABAFQAEAAAEgGIAJgDIASgFIALgBQAHgBAEgDQALgFADAAQgFgBgPAEIgTAGIgfADQgPACgVgBIgWAEQgSACgBgEQgNACgBABQgKADgJgCQgKgDgNACIg1ADQgFABgCgFIgKADQgBgDgFgBQgIgBgCgCQgLAEgEgBQgMgDgagBIgagBQgFAAgJgCIgOgBIgMAAIgKgCIgBACQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDgCgCABQgBgDgFgBIgHAAQgKgDgYgBIgOgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDABQgLABgIgDIgFgDQgCgCgDABIgNAAQAAgCgFAAIgHAAQgDgBgEAAIgIAAQgEAAgDgCIgGgEIgPgDQgJgBgEgEQgFgEgBAAQgCACgEAAIgKgCQgGgBgEABQgBgEgMgDQgIgCgGAAQgDABgDgDQgCgCgDABQgDAAgGgBIgKgEQACABgSgIQgQgHAEgBQgCgBgHAAQgGABgDgCQgIgEADgCIgQgFQgDgBgPADQgRADgOgBIApAdQARgBALAEIANAFQAIgBAMAGIAMAFQAKAEAAACIAHgCQADgBACADIAGAHQACgBAIgBQAJgBABADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIASAGQADACAFAAIAIABIASAFQAEACAFABIAJABQAQAEAjAEQA8ALA6AFIAbACQARABALACIAhABQADgBALACIAQABIAMgBQAIgBAEACQABAAAAAAQAAAAABAAQAAAAABgBQABAAAAAAIABgBQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAgAGCH/IgCgHQAAgDAHAAQABABAHgBQAHgBABgCIAPADQALACAAgEQAGgHAHAFIAMAHQAGAAAAgDQgBgEADgCIAHgCQACAAACAEQAIgIAQgBQAJAAAQABQAAgBAFgCIAGgDIARAAQAAgCAPAAQACAGAEAAQAAgGAIgBQAHgCAAACIAJgCIAJgCQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAQADAAACgDQALgFAIADQACAAATgEIAGACQAAAAABAAQAAgBABAAQAAAAAAgBQABgBAAgBQAAgBAAgBQABgBAAAAQAAAAABAAQABgBAAABQAFACABgBQAAgCAPgDIARgDQABgCAOgFQANgFAEAAQADABAEgEQAEgDADAAQAAgDAQAAQAGABALgHQAGAAALgFQALgGAGAAQACgDANgEQANgFAFAAQABgCAMgEQALgDAAgBIAVgIQADAAAEgCQAEgDAEAAIAKgEIAHgDQAEgCAEgBQABgDAGgBQAGgCACgCQAEAAAIgDQAJgEACgCQAEAAAHgEQAHgEADgEQAFAAAJgFQAIgFAGAAIAYgMQAAgBAVgIQAWgJACgDQAFAAAJgFQAIgGAGAAQAFAAAGgGQAHgHADAAQAEAAAGgGQAHgGADAAQAHAAAKgIQAEgCAHgHQAAgBAGgCQAGgCAAgCQgHAAAGgCQAFgCADAAQAAgEAJgBQAHgBADABQAAgDADgEQADgFAAgFIAQAAQAAgEAEgCIAIgFIANgIQAAgFAMgGQALgGAAgCQAMgCADgDQAGgEADgJQAFgBAQgbQAMgGAGgKIACgEQABgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQADAAAFgJQAFgKAFAAQADgFAAgJQAFgDgBgEQABAAACgMQACgNACAAQAAgBgCgFIgEgGQAAAHgLAAIgFAGQgEAGACAAQAAADgHAGQgIAFAAACIgFAGIgGAIQgDAAgFAFIgIAFIgFADQgFADABAEIgJADIgHADIADAAIgBAEQADAAgMAKQgDADgIAAQgHABgCACQAFAAgFAHQgFAGgEAAQgJAMgOADQgEAIgOAFIgCACQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAIgKABQgCABAAAHQgbAFAAAGQgPALAAABIgJADQgGACgEAAQAAADgFACQgEACgEAAQgEgGgEAHQgEAHgCABQAAACgKAGIgMAGQgEABgIAGQgJAGAAAEQAAACgMAEIgQACQAAAEgJACQgJABABAEQAAABgaAFQAAAHgOAGQgLAFgKABQAAgFgOAHIgOAGQgDAAgJAEQgIAEAAABQgEAAgHADQgHADgEAAQAAACgJAEQgIADgCgBIgBADIgBADQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgDABgCgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgIAFIgDAAIgCgBQAAADgFABQgGABAAABQgEACgCgBQgDAAgDACQgDADgMAAIgIAGQAAABgKADIgNADQgNAGgDAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABIgYAKQgYAGgGAEQAAADgXAAIgHAEQgEABgBAFQgFACgEgBIAAAFIgPAAQAAAGgGABQgHACAAgCQgDAAgLAFQgJAEgFgBQAAgBgGACIgHACQgDADgIAAIgMgBQgCAEgLAAIgbAJQAAABgFACIgJADQgFADgKAAQgDgDgDACIgFAEIgKgDQAAAHgNABIgTABIgIABQgFACgBADIgMgBQgcALgDgBIgUACQgSADAAACIgPADIgOACIgHACQgFACAAABQgIAAgQACQgVAEgDAEQACgCATAAQAAAEAZAAQADgEALABIAQACQAAgEANACIAOABQACAAADADQADACADAAIAAAAgAn2HeQgCAEgDAAIANAKQAJAGAEAAIADgDQABAAAAgBQAAgBAAAAQgBgBAAAAQgBgBgBAAQgBgDgGgFIgKgFIgDgCIgCACgAAUGwQACAEACAAIAIACQAFABACgEIADgBQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAgBAHgBQAHgCAAgBQAigBAAgFIAGABQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAFgBANADIAJgDQAGgDADAEQACADAFgBQAFAAACgDQACgCAFACIAIACIgEgEIADgGIAKgCQAGAHAAgFIASABQAFgCAHgHQACgBAKABQAJABADgDQAEgEAHAAIALABQACgFALABIAOABQAAgDAHABIAJADQAAABAKgHQAKgBAOACQAAgIAPgBQAAgBAVgEQAVgFADABQABADAMAAQAMAAACgEIACgFQAEgEADAFQACABAEAAIAGAAQAAgIABgCQACgBAIABQABAEAHgDIALgDQAEgBAKAEIAIgEQAAgFANgDIARgCQAHgDAEgGQADgCAHABIALABIgBgFQAEAAABgCQACgDADgBQADgBADABIAHACQAAgCAPgCIASgBIgCgEIADgBQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAJgBAHgEQAJgHAFgCQAXAAADgFQANAAABgCQAGAAgDgGIAKgBIAEgGQABgBAAgBQABgBAAAAQABAAAAAAQAAAAAAAAQADABADgCQADgCADABQAAACAHAAQAHAAAAgCQAHAAAEgDIAJgIQAHgBAEAAQACgEAEABQAGACACAAQAAgBASgGIAUgIQgDgDABgCQACgCAFAAQADADAFgCIAIgDQAAgBAHgBQAHgBAAgDIAGACQAIgFgEAAQgBgDAPgEQAQgEAAgCQAHAAAHgDIAOgIQABgCAIABQAHABAAgEIADgDQABgCAFAAQAEAAAHgDQAAgBAKgDQAKgCADABQgBgFAFgDQAGgEACgDQAPABAAgDIAHABQAEAAABgEIAKgIQAAgDAIgEQAHgFAEAAIALAAQAAABATgLQAAgDAHgFIAIgFQAGAAAIgHQAIgIAFAAQAAADASgNQAIgGAKAAQAUgNAAgCIAWgPQALAAAMgIQADgHAEAAQADgDAJgDQAJgEACgDQAFAAADgGQADgHADAAIAKgHQABgDAEgEIAHgGIAGgCQAFgBABgCQAAgFANgGQAMgHgBgDQAVgZADgBIAHgPQAFgKgHgDQAAgCgHgEQgIgDgBgDQAAgDgEgCIgHgFQgMgLgGgDIgQgHQgNgHAAgDQgGAAgJgFQgKgGgEgBQAAgBgJgFIgKgHQgEgBgIgFQgHgFgEAAQAAgBgSgEQgUgHgDgDIgQgIIgKABQgHABgEgBIgFgCIgHgBQgRgLgDAAQAAABgSgHIgJgDQgDgEgGgCIgKgBQgtgKgGgBQgGgHgWADQgSACgDgEQgDgEgHAAQAAgBgOACQgPACAAgDIgTgBQAAgEgGgBQgHgHgIAEIgNAFQgHAAgKgEIgRgGQAAAFgXgBQgWgBAAgJQABgEgFgBQgEgBgFABQgCADgIgCQgBgBgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAADgJgBQADAHAAAEQAHAAACAeQACAcgCAIQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAAAQgBABAAAAIgBAUQgBATgEAAQgBADADADIgIAQIgGANQgFAIAAAGIgGAPQgFAOgHAAIABAFQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIAAAEQgCAAgCAGQgBAGgDAAIAAAEQAAABgBAAQAAAAAAABQAAAAgBABQgBAAAAABIgFAEIgBAHQgDAAgBAFQgBAAgGAIQgHAJgFABQgBADgIADQgIACABAFIgCAFIgCADQAAACgEAEIgGAFQAEAKgSACQgBAGgHAEQgIAGgCADQgFAIgTAJQgCABgDAEIgFAFQgJAAgRAOQgUARgFACIgNAFQgJAEAAAEIgLAHQgGAFgGABQAAgBgFAFQgFAEABAAIgKAFIgKAGQAAABgLADQgMADAAAEQgJAAgRANQgSAMgMAAIgKADQgIAEgBABIgJAHQgFAFgFAAQgeAKgEAAQAAACgJAGQgJAFAAgEQgEAAgHADQgHAEgDADIgLACQgFABgEAFQgFAAgKAGQgJAGgEAAQgDAFgVAAQgCADgDACQgEABgBACIgGABQgEABgCgCIgGgDQgHgBgGADIgKAIQgBAFgNAEQgDAAgIAFQgHAEgEAAQgsANgHAAQAAADgZAHQgaAIgDADQgTACghANQgHADgOAAQAAAGgPAAQAAACgVAGQABgGgiAKQgEAAgGACIgKAEQAAgBgMAEIgPAFQgIAGgMACIgWAFIAFAAIABABIARACQAOACABgDQAcAAASAEQAsgBAAAFQAFABAvgHQAHgDAHAEIANAHQAAgCAQgCIAUgCIAQgBQAEABACADgAqtGZQgHgMAAgBIAHAFIAGAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgGAAIgCgBIgBAAIAAgBQgDgDgDgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgBQgjAFAAgEIgJgBIgIgCQAAgEgOACIgQADQgGAJATADQAWADAAABIAVABQARAAAAACIASAAIAAAAgAopGGQgDABAAAFIADAEIAEAFIAHgBQALAAgJgLQgFgEgEAAgAmTFsIAIAOIAFAFIAOACQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIAOgCQAJgCAEABIBCgLQAAgCAVgDIAYgEQBOgSAHAAQAAgBAXgGQAXgFAEAAQAAgDAWgEQAWgDACgEQAHAAAKgEQALgDAGgBQAGAAALgEIAQgFQACgDAdgHQAagGgBgHQAYgBAAgDQAJgBARgHQAAgBAJgCQAJgCAAgBQADAAADgCQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAGgBIAFABQAAgDAQgFQAOgEAFAAQACgDAJgDQAKgCAAgDQAEAAAIgDQAJgDACgDQAGAAALgEQAJgEAFgEQAGgFAPgDQABgCANgEQANgEAAgCIANgGIAOgHIAPgFQAKgEADgEQACAAAJgFQAIgEAAgBQAEAAAIgEQAIgFADgDQAKAAAOgKQAOgKAIgBQACgEAUgJQATgKgBgCQAAgBANgHQAOgHAAgBIAHgGQADgDAFgBQAKACAEgGIAEgIQAEgIAFAAQAAgBAFgEQAGgDAAgCQAFgBAIgHQAIgHAFgBQADAAACgFQACgFADgBIAIgFIALgKQAEgCAFgHQAFgHAEgCQAAgFAOgMIAOgRQACgEAFgIQAGgIACAAQABgGAFgHIAGgMQACAAACgFIACgGIACgHQACgGgBgDQgFAAgJAOQgKAQgEACQAAAGgMAJIgLAKQgGAHgEACQAAAFgHAFIgKAKQgBACgIAFQgHAEAAAEQgDABgDAEQgDAEgFABIgEAFQgEADgCAAIgHADIgIADQAAACgEADQgFAEgBADIgKAGQgHAGgBACQgDAAgJAGQgJAGgCADQgKADgQANQgPAMgMACQgFAGgMAEQgLAEgIAAIgOAOQgFAAgHAGQgHAFgDAAQgCAEgIABQgHABgDADIgHADIgGADQgCAAgEAEIgFADQgCAEgJAAQgJABgDAEQgEACgDAAQgCAEgIABIgNABIgJABQgGAAgDABQgDABgDAHQgDAGgEABQgEAEgFgCQgHgCgDABQAAAEgFACQAAAEgVAJIgbALQgDAAgFADQgFADgDAAQAAACgNACQgEAEgIADQgHACgGAAQAAACgNADQgNADAAADIgNACQgKACgCADQgGAAgCABQgDABgFAFQgHAAgGACIgNADIgWAHQgBACgKACQgKACAAACIgbAHQgFAAgIADQgIADgFAAQgCACgOAEQgNADAAABQgDAAgFADQgFADgDAAQgBACgGABQgFABgCgCQgRAHgCAAQgDADgNADIgMACQgEABgKAEQgIADgEAAQAAACgOAAIgQgCQAAABgJADIgMACQgPAAgMAFQAAAFgLACQgMABAAABIgXAAQgQAAgFAFIgDACIgDADIgJADIgHACQgCADgcAEQgcAFAAACIgFAAIgFAAgAxuEwQAAgCgHgCQgFgCgEAAQAAAGAQAAgAzoD+IgCADIAOALIAKACIALACQAEAHAcAKQAbAKAAgGQgOAAAAgHQgQgCAAgCIgUgKQgCAAgEgIQgEgHgGAAQAAgDgKgBIgKgBIAAAAIgGACgAmhD9QgJAEgBADQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADAAQAAACAsgFIA0gGQAAgDAWgEIAcgFQABgDANAAIARAAQAFAAARgGQANgEAIACQAAgCATgDIAWgEQAAgFALACQAMACAAgEIAKAAQAGAAADgEIAJgDQAFgGAQACQAQABACgFQgIAAAHgEQAGgEAEAAIANgBIAEACIAFABIASgEQAAgCgFABIgHABQgDgGAcgHQAXgHAKAAQAAgBALgCQALgBABgCIAHgCIAHAAIADADIAFABQAAgBAAgBQgBgBABAAQAAgBAAAAQABAAABAAQgCgFAEgBIAJgCIAKAGQAKAGADgBIgHgDIgDgKIAGgFQADgBAFACQACABAMgFQALgFAAAEQADABAEgCQAEgCAAgCQAOAAADgFQAAgJAJAAQACgEAKAAIANAAQAFgBADgEQADgEADAAIAVAAIAEgJQADgDAEABIAGADQgBgJAGABIALADQADAAAEgDQAEgEADAAQACgCAJgFQALgFABACQAAgHAUgCQAUgCAAgCQAIAAAFgBIAFgDIAGgDQACgDALgDQAMgDAAAGQAEABAOgEQAGgEABgFQgEAAAEgHIAFgIQAEgCAAgJIANgHQAJgFAGAAQABACAKACIAMACQAAAEAMgGQALgFACgEQgHAAgCgMQAFAAAMgPQASgEAAgCQAMgCAOgGIAWgKQAFgFARgHQAOgGADgHQAGgCANgOQALgMAHAAQACgDAFgDQAFgEACgDQACgCAHgGQAHgFAAgEQACAAAFgIQAFgHAAgCQAEAAAJgXQAKgXgCgFQgCAAAAgMQABgMgEgCIADAAQgBAAgDgHIgHgRIgSgBQAAACgPgEQgPgDAAADQgmAHAAgBQgLABAAgCIgIABQgFABgDgDIgHABIgJABQAAgBAAAAQAAAAgBAAQgBAAAAAAQgBAAgBABIgGABQAAAEgMABQgLABgFgBIgPgBIgDAFQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIgOABQgCAHgNgEIgUgGQgBACgIABQgFABAAAHQgYAAgEABQAAADgUABQgUABAAACIgZABQgLAAgDADIgBABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgQABQAAABgGACIgIABQAAgBgSADQgTACAAACIgMADQgIACgFAAIgJAIQAAAEgJgHQgDAAgBADIgCAFQgBADgEABIgGABQAAAEgMAAQgBACgEABQgEABgDADQgDADgGAAQAAgEgGABIgKACQAAAFgWgCQAAAGgJADQgLADgCACQgCAAgEADIgHAEQgEACgCgBQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgDAAgCgCQgEgCgCAAIgIADIgIACQgDgCgEACIgHADIgEAEQgEAEAAACQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIgEAFIgCAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgDABgCgCQgDgCgCABQgFAJgVACIgUAMQgKAEgEgDIAAgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAgBgKAHQAAAHgEABIgIgCQgBgBgHADQgHADgBACQgFAAgDADQgDADABAEIgMACQgNADgEAFQgEAAgBAFIAAAGIgRAJQgEAGgIAAIgMgCQACAMgGACIgMAHQgMAIAAgFQgGgEgBADIAAAEQAAADgKAIQgLAGgEABQAAACgGAEIgKADQAAgGgFAEQgHAFACAAQAAAFgHAIQgGAHgFAEQgCAFgFADIgKAEQgJADgDgEIgIAHQgFAFAGAAIgCAHIgGAJQgFAGgCAAIgKAJQgHAHgCAEQgGAAgCADIgEAJQgEABgEAFIgGAHQACAEgZAYQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIAPgBIAqgFQAAAFARgHIAFAAIADgCQAAAAABAAQABgBAAAAQAAAAABAAQAAAAAAABIAEACQABgFAKgDIAJgEQAGAAAVgEQASgDAEAIQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAgBABAAQACgEACAAQAAgBAFABIAHAAQAAgBAGAAIAJgBQAAABAAAAQAAABABAAQAAAAABAAQABAAABAAQAAgKAqAAQAAgEAKgBIAOgBQAAgHAZgBQAZgCAAADQADgBAEgEQAEgDACAAQAAgCAHACIAIACQAAAHAVgMQAAgCAHgDIAJgCQAFAHAHgBIARgDIAOgBQAHgBAAgGQgEADgEAAQAAgEADgCQAEgCABgCIAOgCIAGgCQAAgFALAAIAPAAQAHAHAGgGQAJgKAEgBQAMAAAAgCQAFAAADAFQACAFgHAAQAAAEAHACQAGADAAgFQgEAAgBgDQAAgEAEAAQAAgCAKAAIAGgEQAFgCAAgDQAHAAAEgDQABgCAEABQAEABACgBQAEgHALAAQACABAHgDIAIgEQAVgLAAAFQALAAgDgBQgIgEgBgCQgHgCAGgCIAJgBIAFAGQACACAEABQAMAAAAgCIAYgLQAFAAAJgEQALgEAFAAQAAgEAMgEQAKgDAFAAQABgCAFgCQAFgCACgCQAQgEACAAQAEABADgDQAFgFADgBIAJgFQAHgDACAEQACADgLANQgEAAgHAGQgIAFgEAAQAAAFgNAGQgOAGgCAEQgCAEgKACQgIABgCAEQgEAAgHAFIgJAHQgcALAAgBIgTAPIgMAEIgLAEQgZAGgGAIQgGgBgGAEQgGADgEAAQAAABgMABQgLABAAAGIgQADQgLACgEAEQgMAGgHABQAAACgJADIgKAEIgEAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgKADQgEAGgJABIABADIgGACIgHACIgJAAQgFgBgEABIgKAGQgKAFAAgBQgIAAgPAFQgPAFgJAAQAAABgWAEQgWAEAAADQgdALAAgEQgEAAgIAFQgHAFgEAAIgQAFQgRAEgBABIgZAFIgkAJQgaAAgCAEIgIACIgIACQAAgDgUAHIgNAEQgIADgHAAQgKADgFAAIgTAAQgFAFgMAAQgNgCgFABQAAABgIACIgLADIgBgBIgIACgAz3D2QAEgHgIgCQAAgBgEgEIgFgFQgDAAgIgFQgHgEgEAAQgBgDgHgGQgHgGgDAAQAAgCgLgIQgLgIgEAAQACAFAGAIQAGAHAFADQANAKgCAAQADAFAGAAQAWATAAgCQACABAFgCQAAAHALAAgApzCuIAGAEQgEABgCADQgDAEADADQAFADgDADIgEAEQATgEAAgBQADgBAFABIAHACIAEgBIADgDIADgBIAKgCQgFgZACAAIgCgJQgCgGABgDIACgOQABgIABgEQADAAgBgIQgBgIgGgBIgMASQAAAFgGAJQgGAJABAEQgGADgCACIgEAJQgCAAgCAEIgDAFQAAAEgIgGQgBABAGAEgAnqBaQgEAAgDAIQgEAKgDABQgDAVgBAAIAAACQgDAAgDAUQgDAUACADQADgBAFgIIADgIQADgHACAAIAFgLQAEgIACAAIADgHQAEgFAAgDQACAAAEgJIAFgLIAIgGQAHgGAAgCQAEAAABgDIABgIQACAAACgDQABgEADAAQAIgJABgEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgFQAIgFAHgLQAEAAAGgJQAFgJAGAAQAegLgOAAQAAgGAFgCIAJgDQAAgGAIgEQAIgEAAgFQAFgBADgEQAEgFADgBQACgDAMgGQALgFAAgEQAKgGAGAAQAAgEAIgFQAIgEAAgDIAGgEIAHgEIAHgFQADAAAIgHQAIgGABABIALgGQAIgFACgDQAHgFABgGQAFAAAGgBQAGgCAJgGQAAAHAMgIIAPgKQACAAAGgEIAHgGQABgBAIgDIAIgDQAhgKAAgDQAFAAAJgEQAIgDAGAAQABgEAFACQAHABACgIIAGgCQACAAAHgEQACgCAOgEQANgDAAgCIAJgDQAGgDAAgDQAQgCAAgBIAJgCQAHgCAAgBQAFAAAKgEQALgFAGgBQAAgBAIgDIALgCQA2gRAEAAQAAgBAOgDIAQgEQATABAAgGQAFAAALgDQAKgDAGAAIAfgIQAAgCAMgBIAOgBQAAgCAMgCQAMgBABgCQAEAAAGgCQAHgDAEAAIAMABQAHgBADgDQAXgCAKgDQAAgEAygEQADgFAeAAQASABARgEQAAgFA4gBIA+gBQAAgCAGABQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIADAAIgBgCQgEAAgEgIQgFgIgDAAQAAgDgHgHQgHgGAAgEQAHgCAJADQALADAAAIQAEABAFAEQAFAEACAEQADACAAAFIADABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEADQAEgBAEABQAGABAMgBIAUAAIAmACQAhABAAABQAIABAHgBQAAgCAUACIAZADQArACAAACIAzAEQArAFAAAGQAKAAAUAFQAVAEAKAAQAAACAPADQAPACAAACQAHABAKAEQAJADAHABQADABAHADQAGADADAAQAAADAJAAQAKABABACIAcAJQAEAAAIAEQAJAEACADQAOAHAAgDIAEABIACACQAEAAALAGQALAGAAABQAFAAAIAGQAIAFAEAAQAAABAHAFQAHAEACAAQAAABAIADQAIAEABACQADADAKAFQAIAFADAEQAHAAgHgJQgGgKgFAAIgEgEQgEgDAAgCQgIAAgHgKQgEAAgKgJQgLgKAAgDIgLgBQgHgCAAgEIgDgCIgGgBQgIgIgCgBIgOgHQgGgEgHAAQgEgFgKgDQgEgBgBgCQgCgDgCgBQAAgCgSAAQAAgGgLgCIgPgCQgHAAgHgDQgIgEAAgEQgIAAgNgJQgNgKgHAAQAAgBgKgCIgKgBQgZgHAAgCIgPgDQgIgDgEAAQAAgEgdgGQgZgEgKAAQAAgCgOAAQgPgBAAgEIgXgDQAAgDgbgCIgbgDQgZgDgMAAQAAgBgMgBQgMgBgBgBIgbgBQAAADgogCQgBgCgOAAQgNgBAAACQgDABgGgBIgIgBQgRACgIgBIgKADQAAABgKAAIgMgBQAAADgVACQgVABgFgBIgwAEIg5AEQgFAAgYAEQgZAEAAACIgXACIgUADQAAAHgyACQAAADgkAGQgCADgJAAQgJAAgDAEQgFgBgGACIgJABQAAACgOABQgNABAAADIgeAJQgSAFgLAAIgdAKQgeAJgCgBQAAAEgNACQgOACgBAEIgOAEQgIACgFABQAAABgHADIgIACQAAABgKAEIgPADQgCAEgLADQgLADgCAEQgEAAgGADQgHAEgDAAQgVAFgFAHQgFAAgIAGQgJAGgFAAQgDADgHAEQgHAEgEAAQgCADgPAIQgEAAgJAHQgIAHgHgCQgBAEgJAAQgBAEgIADQgNAFgHAGIgPAJIgPAJIgJAIQgEAFgFAAQABgCgKAHQAAAGgYAPQgLAMgKAEQAAABgEADIgGAEQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAABgFAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABQgDAEgMAHIgDAEIgEAEQAAADgEAEQgDAEgDAAIgFAHIgHAFQAAACgJAIQgDADgEACQgFABgDADQAAADgEACQAAADgDACIgGAEQgCACAAAEQAAAFgCACIgFADQgDAAgCADQgCAFgBAAQgBACgEAGQgEAFgCABQAAAGgJAGQgKAGAAAGQABAAgFARIABAIQgBAFgDABIgBABIAAAAIgBABgAxpmXQgDABgCACIgCAFQgHAAgCADQgCAAgGADQgFADgCACIgHADIgGADQgGAHgTAGQgCAEgKACQgKABgBADIgHAGQgGAFAAABQgOAAgBAHIgSAOQgEAAgPAKQgJAGgGAHQgCADgFADQgFADgCADQAAAHgIAEQgKAEgBAFQgCABgDAGQgCAEgDABQgBACgGAFQgFAEAAADIgJAJIgIALIgDACQACACAlgbQAmgdAHgBIAHgFQAEgDADAAQAAgBAEgCIADgEQgDgBAAgEIAMgBQAIgCACgCIADgCQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgCAGgDQAFgDACAAQACgDALgFQAJgEACgDQADAAAFgFIAHgHQAMgEABgBQADAAAHgEQAJgEADgBQACgCAHAAQAEABABgFQABgJANAAIAHgIQACgDAFABQAFABABgDQACAAAHgEQAHgFACgBQAAgCARgHQAQgHADABIgBgEQAGgBAHgEQAHgEAFgBIALgFQAHgEACgDQADAAAFgCIAHgDQACgCAFAAIAIABQACgFADgCQAGgHAPgDIAYgDQACgDAIgDQAIgDAEAAQAAgDAIACQACABAEgCIAGgEIAIgEQAEgCADAAQAEgGAOgEIAWgEQAGgBALgDQAOgEAAgDIAHgCIAFgDIAJABQAFgBAAgFQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIACgDIgGgDIgvAMIgCgBQAAACgLABQgKACAAABQgHAAgLAGQgLAGgGABIAAgDQgFAAgKADQgJADgFAAQgEgBgCADIgFAEQgEAEgCAAIgHgDIgIAEQgIADgBAEIADABQgBADgFAAQgEABACgEQgDAAgHADQgHADgEAAIgFACQgGADgBACIgDAFQgDABgDgBQgCAGgOAFQAAABgFABQgFAAAAABIgLACQgEABgCAHIgDABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgKAAAAgCQgCAAgDACQgEADgCABIgOAHQgNAIACABIgNAGIgNgCIgDABgAlSlJQgFgDAKgGIALgHQAIgDAAgBQABgBABAAQAAAAABAAQABAAAAAAQAAABABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQACACgOAJQgJAGgFAAIgEgBg");
	this.shape_1.setTransform(271.9321,70.8329);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABwDnIAAkXQAAgygageQgbgeguAAQgfAAgdAPQgdAPgkAjIAAFEIhjAAIAAnEIBjAAIAAA8IADAAQAdghAogSQAngSAqAAQBLAAAvAtQAxAxAABZIAAEWg");
	this.shape_2.setTransform(494.55,205.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCCoQhLhEAAhnQAAhiBNhCQBNhDBxgBQB2AABNBCQBNBBAABlQAABqhMBCQhMBDh4AAQh1AAhLhEgAh4hvQgvAqAABCQAABGAuAsQAtArBIABQBPgBAugqQAugrAAhIQAAhBgwgrQgxgrhKAAQhGAAguArg");
	this.shape_3.setTransform(438.825,205.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiqEwQhCgnAAg8QABgyAegeQAfgfBBgOQgygbAAgeQAAgWAWgRQAWgRAjgIIAAgCQg3gVgdgkQgbgjAAgyQAAhIA8gqQA7gqBkAAIDRAAIAABFIhoAAQAeAbAMAWQALAVAAAdQAAAbgPAeQgNAcgTARQgiAghdAPQgoAGgOAGQgXAJAAARQAAASAnAOQAiAMBQAOQBNAOAlAjQAhAfgBAuQAABEg/AmQg/AmhvAAQhmAAhBgmgAhtCYQggATAAAeQAAAiAkASQAkASBEAAQBBAAAlgRQAlgSAAgfQgBgmg7gUQgsgOg9AAQgyAAggATgAhIjvQgdAYAAAhQABAlAbAXQAcAXAtAAQApAAAcgYQAbgYAAglQAAgggdgYQgdgYgnAAQgpAAgeAZg");
	this.shape_4.setTransform(386.35,217.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AijCiQhAhEAAhiQAAhoBCg/QBChABoAAQBmAAA5A+QA8BAAAB7IliAAQAYCHCQAAQBVAABbg2IAABXQguAcgsAMQgxAOg9AAQhxgBhEhJgAhPiAQgjAdgKA2ID9AAQgDg0gfgeQgggeg0AAQg4AAgiAdg");
	this.shape_5.setTransform(336.35,205.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai3DnIAAnEIBkAAIAABoIACAAQBHhxBKAAQA6AAA/A1Ig1BNQgXgTgbgNQgagMgSAAQgzAAgjAoQgjApAAA6IAADsg");
	this.shape_6.setTransform(296.35,205.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj1DJQhahSAAh3QAAh3BchTQBfhVCUAAQCWAABfBVQBbBSAAB4QAAB3haBSQhfBXiYAAQiVAAhfhXgAitiYQhGA8AABcQAABcBGA9QBFA9BoAAQBpAABFg9QBFg8AAhdQAAhchFg8QhFg9hpAAQhoAAhFA9g");
	this.shape_7.setTransform(236.525,200.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AijCiQhAhEAAhiQAAhoBCg/QBChABnAAQBnAAA5A+QA8BAAAB7IljAAQAMBCArAjQAqAiBIAAQBUAABdg2IAABXQgwAcgrAMQgwAOg/AAQhvgBhFhJgAhQiAQgjAdgKA2ID+AAQgDg0gfgeQgggeg0AAQg4AAgjAdg");
	this.shape_8.setTransform(171.8,205.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai4DnIAAnEIBkAAIAABoIADAAQBHhxBKAAQA7AAA9A1Ig1BNQgWgTgbgNQgagMgSAAQgyAAgkAoQgkApAAA6IAADsg");
	this.shape_9.setTransform(132.5,205.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABFDgQgTgLgHgYQhAAuhHABQg2AAgkgiQgiggAAguQABg7A3gkQAfgUBVgbIBYgcIAAgYQAAgpgWgUQgWgTguAAQhZAAhHBLIAAhiQA7g+BtAAQBQABAxAjQA1AoAABKIAADoQAAAXATAAQARAAAkgYIAAA2QgjAVgTAHQgUAIgWAAQghAAgSgMgAhCAtQgxAbAAAkQABAcAUASQAVASAeAAQAsAAArgmIAAiDQhOAXggATg");
	this.shape_10.setTransform(85.3,205.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjIDAQhRhQAAhnQAAiABhhUQBhhUCUAAQBcAAB7AuIAABXQg6gfg0gOQgzgOg3AAQhqAAhHA9QhHA+AABbQAABeBGA8QBGA7BwAAQBsAABug/IAABXQgzAYgwAMQg6AOhFAAQihAAhfhgg");
	this.shape_11.setTransform(28.225,200.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,533.9,251.3);


(lib.BUTTONbkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#256BA2").s().p("AmyCvQhIAAgzg0QgzgzAAhIQAAhHAzgzQAzg0BIAAINlAAQBIAAAzA0QAzAzAABHQAABIgzAzQgzA0hIAAg");
	this.shape.setTransform(0.028,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-13.6,95,27.2);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAeQgKgMgBgSQABgQAKgMQALgLARAAQAQAAALALQALAMAAARIAAAFIg7AAQABAJAGAGQAHAFAKAAQANABAIgJIAIALQgMAMgTAAQgRgBgMgKgAAWgFQAAgJgFgFQgHgHgJAAQgKAAgFAHQgGAFgBAJIArAAIAAAAg");
	this.shape.setTransform(34.65,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAoIAAhNIAQAAIAAALQAKgNAPABIAAAQIgFAAQgGAAgGACQgFADgDAFIAAA0g");
	this.shape_1.setTransform(28.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAdQgKgMAAgRQAAgQAKgMQALgLARAAQASAAALALQALAMAAAQQAAARgLAMQgLALgSABQgRgBgLgLgAgPgRQgHAHABAKQgBAKAHAIQAFAHAKAAQALAAAFgHQAGgIAAgKQAAgKgGgHQgFgIgLAAQgKAAgFAIg");
	this.shape_2.setTransform(21.05,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkA1IAAhRIggBRIgHAAIghhRIAABRIgSAAIAAhpIAaAAIAcBIIAdhIIAaAAIAABpg");
	this.shape_3.setTransform(10.3,-0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAoIAAgwQAAgQgPAAQgLAAgIALIAAA1IgRAAIAAhNIARAAIAAAKQAKgMAQABQAagBAAAZIAAA2g");
	this.shape_4.setTransform(-4,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAoIAAhNIAQAAIAAALQAKgNAPABIAAAQIgFAAQgGAAgGACQgFADgDAFIAAA0g");
	this.shape_5.setTransform(-10.4,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAiQgIgIAAgLQAAgNAIgFQAIgHAKAAQAQABAIAJIAAgLQAAgHgFgDQgFgEgHgBQgNAAgJALIgIgMQANgMATAAQAOgBAJAHQAJAGAAAPIAAAzIgRAAIAAgJQgIALgQAAQgKgBgIgGgAgMAFQgFAEAAAGQAAAGAFAEQAFAEAHAAQALAAAGgIIAAgMQgGgIgLAAQgHAAgFAEg");
	this.shape_6.setTransform(-17.575,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAeQgMgMAAgSQAAgQAMgMQAKgLARAAQAQAAALALQALAMAAARIAAAFIg7AAQABAJAGAGQAHAFAJAAQAOABAIgJIAIALQgMAMgTAAQgRgBgLgKgAAWgFQAAgJgFgFQgHgHgJAAQgKAAgFAHQgGAFgBAJIArAAIAAAAg");
	this.shape_7.setTransform(-25.55,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA1IAAhpIATAAIAABZIAuAAIAAAQg");
	this.shape_8.setTransform(-33.3,-0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.BUTTONbkgd();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-47.4,-13.6,95,27.2), null);


// stage content:
(lib.CO_Docs_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,387];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_387 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(387).call(this.frame_387).wait(1));

	// TEMP
	this.instance = new lib.V();
	this.instance.setTransform(12,11,1,1,0,0,0,11,11);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(388));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(388));

	// HEAD 1a
	this.instance_1 = new lib.HEAD1a();
	this.instance_1.setTransform(138,203.6,1,1,0,0,0,112,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},118).wait(270));

	// HEAD 1b
	this.instance_2 = new lib.HEAD1b();
	this.instance_2.setTransform(138,203.6,1,1,0,0,0,112,35.6);
	this.instance_2.alpha = 0.1211;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({alpha:1},5).to({_off:true},62).wait(270));

	// HEAD 2a
	this.instance_3 = new lib.HEAD2a();
	this.instance_3.setTransform(140,200.3,1,1,0,0,0,112,20.3);
	this.instance_3.alpha = 0.1211;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({_off:false},0).to({alpha:1},5).to({_off:true},152).wait(110));

	// HEAD 3
	this.instance_4 = new lib.HEAD3();
	this.instance_4.setTransform(132,201.6,1,1,0,0,0,112,35.6);
	this.instance_4.alpha = 0.1211;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(281).to({_off:false},0).to({alpha:1},5).wait(102));

	// LOGO
	this.instance_5 = new lib.covwhiteRGBai("synched",0);
	this.instance_5.setTransform(233,214.15,0.19,0.19,0,0,0,266.6,125.8);
	this.instance_5.alpha = 0.1211;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(281).to({_off:false},0).to({alpha:1},5).wait(102));

	// CTA
	this.instance_6 = new lib.CTA();
	this.instance_6.setTransform(68.95,224.4,1,1,0,0,0,-1,0);
	this.instance_6.alpha = 0.1211;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(338).to({_off:false},0).to({alpha:1},5).wait(45));

	// type bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8200").s().p("A3WGrIAAtVMAutAAAIAANVg");
	this.shape_1.setTransform(150,206.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(388));

	// PIC
	this.instance_7 = new lib.PIC();
	this.instance_7.setTransform(150,88.8,1,1,0,0,0,150,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(388));

	// bkgd
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(388));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,151,126);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CO_Docs_300x250_atlas_1.jpg?1634340143611", id:"CO_Docs_300x250_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;