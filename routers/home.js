const express = require('express');
const Router = express.Router();
const Dub =require('../models/dub');

Router('/',(err,res)=>{
  res.render('index')
})

Router.post('/add',(req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
   //console.log(name,email);

   const dub = new Dub({
    name,
    email
   })
   dub.save(err=>{
    if(err){
      console.log('err is ')
    }else{
      res.redirect('/')
    }
   })
})

Router.get('/show',(req,res)=>{
  Dub.find((err,docs) => {
    if(err) throw err;
    

    res.render('show',{
      students :docs
    })


  })
})

Router.get('/edit/:id',(req,res)=>{
 // console.log(req.params.id)

 Dub.findOneAndUpdate({_id: req.params.id},req.body,{neq:true},(err,docs)=>{
  if(err){
    console.log("cant update")
  }else{
    res.render('edit',{studentdata:docs})
  }
 })

})

Router.post('/edit/:id',(req,res)=>{
  Dub.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
    if(err){
      console.log('err')
    }else
    res.redirect('/show')
  })
})


Router.get('/delete/:id',(req,res)=>{
  Dub.fineByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
    if(err){
      console.log("err is")
    }else{
      console.log("delted")
      res.redirect('/show')
    }
  })
})

module.exports = Router;