
/**
	简单的事件广播机制
**/
function PubSub() {
  this.handler = {};
  this.handler.event = [];
}

PubSub.prototype.subscribe = function(callback) {
  //this.object.on.call(this.object, 'event', callback);
  this.handler.event.push(callback);
};

PubSub.prototype.unsubscribe = function(callback) {
  //this.object.off.call(this.object, 'event', callback);
  for(let i = 0; i<this.handler.event.length; i++){
	if(this.handler.event[i]==callback){
		this.handler.event.splice(i, 1);
	}
  }
};

PubSub.prototype.publish = function(value) {
  //this.object.trigger.call(this.object, 'event', value);
  this.handler.event.forEach((handlerevent, index, arry)=>{
	handlerevent(value);
  });
};

export default PubSub;
