const express=require('express')
const app=express()
const port=process.env.PORT || 3000
const pg=require('pg')

app.set('view engine','ejs')

const pool=new pg.Pool({
    user:'postgres',
   host:'localhost',
   database : 'inventory class',
   password:'Trogen@2023',
   port:'5432'
})

app.get('/',async(req,res)=>{
    const client =await pool.connect()
    try{
        const value=await client.query('select * from customer')
        console.log(value.rows[1])

    }catch(e){

    }finally{
        client.release()
    }

})



//route
app.get('/',async(req,res)=>{

    res.render('home')
})
app.get('/customer',async(req,res)=>{

    res.render('customer')
})

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})