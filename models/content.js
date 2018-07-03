var mongoose = require('mongoose');
 
var contentSchema = mongoose.Schema({
    uid:{
		type:Number,
	},
	name:{
		type:String,
	},
	content:{
		type:String,
	},
	timestamp:{
        type: Date, default: Date.now
    }
    
});
 
var content = mongoose.model('content', contentSchema);
 
module.exports = content;