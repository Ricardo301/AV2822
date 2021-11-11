module.exports = (()=>{
    const usuarioController = require('../controllers/usuario.controller')

    let router = require('express').Router()

    router.get("/",(req,res)=>{
        res.json({
           teste:'ok' 
        })
    })

    router.get("/:id",(req,res)=>{
        console.log(req.params)
        const usuario = usuarioController.show(req.params.id)
        res.json(usuario)
    })

    return router
})()