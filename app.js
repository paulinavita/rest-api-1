// require('dotenv').config()
console.log(process.env.JWT_SECRET)
const express = require("express")
const app = express()
const routes = require("./routes")
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extends: true}))

app.use("/", routes)

app.listen(port, () => {
    console.log('listening on..', port);
    
})