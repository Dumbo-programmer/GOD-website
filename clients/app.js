const express = require("express")
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Setting path for public directory
////const static_path = path.join('clients', "/confirm.html");
//app.use(express.static(static_path));
//app.use(express.urlencoded({ extended: true }));

// Handling request
app.post("/request", (req, res) => {
res.json([{
	name_recieved: req.body.name,
	designation_recieved: req.body.designation
}])
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

})

// Server Setup
app.listen(port, () => {
console.log(`server is running at ${port}`);
});
