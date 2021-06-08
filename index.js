const express = require("express")

const app = express()

app.use("/todayis", function(req, res){
    res.send("Monday")
})

app.use("/whoiswriting", function(req, res){
    res.send("Person 1")
})

app.use("/whoislistening", function(req, res){
    res.send("Person 2")
})

app.use("/todaysummary", function(req, res) {
    res.send({
        "Day" : "Monday",
        "Writing" : "P1",
        "Listening" : "P2",
        "Missing" : "P3"
    })
})

app.listen(3020, function(){
    console.log("Process is Running");
})