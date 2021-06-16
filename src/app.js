const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
// Express path config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialssDirectoryPath = path.join(__dirname, '../templates/partials')

//Setting View Engine
app.set('views', viewsDirectoryPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialssDirectoryPath)

//Serving up Static Applications
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>
{
    res.render('index',{
        title : "Rachana",
        Message: "You are Awesome"
    })
   
})

app.get('/about',(req,res)=>
{
    res.render('about')
})

//JSON Response
app.get('/jsonRespone',(req,res)=>
{
    res.send([{'name' : 'Srujana','age':23},{'name':'Sravani','age': 23}])
})

//Error messgaes for invalid pages
app.get('*',(req,res)=>
{
    res.send("404 Page Not Found")
})

app.listen(3000,()=>
{
  console.log("Server started")
})

//Use below command to run app.js when working with handlebars
// nodemon app.js -e js,hbs