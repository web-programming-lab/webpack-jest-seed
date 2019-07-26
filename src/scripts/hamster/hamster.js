let hamster = { 
    stomach: [],
    eat(food) { 
	   this.stomach.push(food); 
	}
}; 

module.exports.speedy = { 
	__proto__: hamster 
}; 

module.exports.lazy = { 
	__proto__: hamster 
}; 