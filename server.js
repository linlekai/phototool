var express = require('express')
var axios = require("axios")
var cheerio = require("cheerio")
var app = express()
var http = require("http")

var baseurl = 'https://api.500px.com/v1/photos?rpp=50&feature=popular&image_size=5&page=2&include_states=true&authenticity_token='

app.use(function(req, res, next) {
  axios.get("http://500px.com/popular").then(function(a) {
    $ = cheerio.load(a.data)
    var content = $('meta[name="csrf-token"]').attr("content")
    baseurl = baseurl + content
  }, function(e) {
    console.log("error-1")
  }).then(() => {
    console.log(baseurl)
      // axios.get("http://www.youku.com").then(a => console.log(a))
  })
})

// app.use(function(req, res, next) {
//     console.log("linlekai")
//     axios.get(baseurl).then(a => console.log(a))
//     next()
//   })
// app.get("/", function(req, res, next) {
//   console.log("hello,world")
//   axios.get(baseurl).then(function(a) {
//     res.send(a)
//   })
// })

app.listen(5000, function() {
  console.log("success at 5000")
})
