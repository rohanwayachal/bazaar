var express = require('express')
const Category = require('../model/category');

var router = express.Router()



router.get('/', (req, res, next) => {
  

  Category.find().exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })

  
})


router.post('/', (req, res, next) => {


    console.log(req.body.category)
    console.log(req.body.imageurl)

    const cat = new Category(
      {
        category: req.body.category,
        imageurl: req.body.imageurl
      });

    cat.save().then(result => {
      console.log(result);
      res.json({ msg: "saved" });

    }).catch(err => {
      console.log(err);
      res.json({ msg: "error" });
    });


  });



module.exports = router