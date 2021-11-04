const express = require('express');
const router = express.Router();

const javacmp = require('../compiler-cd/javacompiler');
const pythoncmp = require('../compiler-cd/pycompiler');
const ccmp = require('../compiler-cd/ccompiler');
const cppcmp = require('../compiler-cd/cppcompiler');

router.post('/java',async(req,res)=>{
    const obj = {
        code: req.body.code,
        input: req.body.input,
        output:""
    }
    const acceptObj=await javacmp.run(obj);
    // console.log(acceptObj);
    res.json(acceptObj); 
})

router.post('/python',async(req,res)=>{
    const obj = {
        code: req.body.code,
        input: req.body.input,
        output:""
    }
    const acceptObj=await pythoncmp.run(obj);
    // console.log(acceptObj);
    res.send(acceptObj); 
})

router.post('/c',async(req,res)=>{
    const obj = {
        code: req.body.code,
        input: req.body.input,
        output:""
    }
    const acceptObj=await ccmp.run(obj);
    // console.log(acceptObj);
    res.json(acceptObj); 
})

router.post('/cpp',async(req,res)=>{
    const obj = {
        code: req.body.code,
        input: req.body.input,
        output:""
    }
    const acceptObj=await cppcmp.run(obj);
    // console.log(acceptObj);
    res.json(acceptObj); 
})
module.exports = router; 