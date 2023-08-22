// const express = require('express');
// const router = express.Router();

// const session = require('express-session');
// const user = require('../Schemas/user');
// const bcrypt = require('bcrypt');
// router.get('/' , (req,res)=>{
//     const payload = {errorMessage:""};
//     payload.firstName = ""
//     payload.lastName = ""
//     payload.username = ""
//     payload.email = ""
//     payload.password = ""
//     res.render('register' , payload);
// });
// router.post('/' ,async (req,res)=>{
//     // const payload = req.body;
//     // payload.errorMessage = "";
//     // const user = await user.findOne(
//     //     {$or:[
//     //         {email:payload.email}
//     //     ]}
//     // );
//     // if(user){
//     //     if(payload.email == user.email) payload.errorMessage = "EmailFound";
//     //     return res.render('register' , payload);
//     // }
//     // var data = {
//     //     firstName:payload.firstName, 
//     //     lastName:payload.lastName,
//     //     email:payload.email,
//     //     password:payload.password
//     // }
//     // await user.create(data)
//     // .then(async (user)=>{
//     //     req.session.user = user;
//     // })
//     // res.redirect('/home');
//     // console.log(req.body)
// })
// module.exports = router;
