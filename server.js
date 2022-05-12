var express = require('express');
var app = express();
var fs = require('fs');
const cors = require('cors');

const productdata= require('./json/product.json');
app.use(cors({
  origin: "http://localhost:3000",
}))
//Endpoint to get product list and descriptions


//get all products

app.get('/ecomm/products/', function (req, res) {
    fs.readFile("./json/product.json", 'utf8', function (err, data) {
     
        res.end(data);
    });
})

//Get images


/* var base64str = base64_encode('./products/images/Product101_Image_1.jpg');
console.log(base64str);
  
function base64_encode(file) {
    return "data:image/jpg;base64,"+fs.readFileSync(file, 'base64');
}
 */


//API for searchbar and product details
app.get('/ecomm/products/:id', (req, resp) => {
  const { id } = req.params;
   const fouduser = productdata.find((user) =>user.id === id);
  resp.send(fouduser)
});


//server Creation to listen at port 9090
var server = app.listen(9090, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Rest Api for Product description", host, port);
})