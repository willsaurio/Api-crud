const express= require('express')
const morgan= require('morgan')
const app=express()

app.use(morgan('dev'))

app.get('/clients', (req,res)=>{
    res.send('obteniendo clients')
})
app.post('/clients', (req,res)=>{
    res.send('creando clients')
})
app.put('/client',(req,res)=>{
    res.send('actualizando clients')
})
app.delete('/clients', (req,res)=>{
    res.send('eliminando clients')
})

app.get('/clients/:id', (req,res)=>{
    res.send('obtenido client')
})

app.listen(3000)
console.log(`server on port ${3000}`)