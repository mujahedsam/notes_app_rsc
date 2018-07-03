var express = require('express');
var router = express.Router();
//db connections
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notesdb');
var db = mongoose.connection;
var content = require('../models/content')



router.get('/', (req, res) => {
	res.send("test.....");
});

//  router.get('/getbyid/:uid', (req, res)=>{

// 	var uid=req.params.uid;
// 	content.find({uid:uid},function(err, result) {
// 		if (err){
// 			throw err;
// 		} else{
// 			if(result==''){
// 				res.send("No record fot this UID")
// 			}else{
// 				res.send(result);
// 			}
// 		}

//   });	

// });

router.get('/getbyid/:uid', (req, res) => {

	var uid = req.params.uid;
	content.find({ uid: uid }).sort({ 'timestamp': '-1' }).limit(1).exec((err, data) => {
		if (err) {
			throw err;
		} else {
			if (data == '') {
				res.send(["No record for this UID"]);
			} else {
				res.send(data);
			}
		}
	})

});



router.post('/save', (req, res) => {

	var uid = req.body.uid;
	var name = req.body.name;
	var content2 = req.body.content;

	var ins_content = new content({
		uid: uid,
		name: name,
		content: content2
	})


	ins_content.save((err) => {
		if (err) {
			res.send("error in saving the record! to db");
		} else {
			res.send("Notes saved to DB");
		}
	})
})
module.exports = router;