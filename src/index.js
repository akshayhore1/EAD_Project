/**
 * This file contains NODE JS APIs - For Add, Delete, Update and Search
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(express.json());

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", 'POST, PUT, GET, DELETE,OPTIONS, Origin, X-Requested-With, Content-Type, Accept');
    res.header()
    next();
};
app.use(allowCrossDomain);


// Connection details for MY SQL
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password",
    database: "EAD_DB",
    port: "3306"
})
// Setting connection
conn.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    } else {
        console.log("Connected to database EAD_DB")
    }
})

/**
 * --------------APIs for different functionalities-----------
 * Display all products from inventory
 */
app.get('/products',(req, res) => {
    let sql = "SELECT * FROM t_project";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Search garment using product id
 */
app.get('/product_id/:id',(req, res) => {
    let sql = "SELECT * FROM t_project WHERE Product_ID="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Search product using product name
 */
app.get('/product_name',(req, res) => {
    const name=req.query.search;
    const sql = 'SELECT * FROM t_project WHERE Product LIKE "%"?"%"';
    let query = conn.query(sql, [name],(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Search products by Color
 */
app.get('/product_color',(req, res) => {
    const category=req.query.search;
    const sql = 'SELECT * FROM t_project WHERE Color LIKE "%"?"%"';
    let query = conn.query(sql, [category],(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Display product by Type
 */
app.get('/product_type',(req, res) => {
    const category=req.query.search;
    const sql = 'SELECT * FROM t_project WHERE Type LIKE "%"?"%"';
    let query = conn.query(sql, [category],(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Display product by Brand
 */
app.get('/product_brand',(req, res) => {
    const category=req.query.search;
    const sql = 'SELECT * FROM t_project WHERE Brand LIKE "%"?"%"';
    let query = conn.query(sql, [category],(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Display product by Store
 */
app.get('/product_store',(req, res) => {
    const category=req.query.search;
    const sql = 'SELECT * FROM t_project WHERE Store_Code LIKE "%"?"%"';
    let query = conn.query(sql, [category],(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * List products By price
 */
app.get('/productsByPrice',(req, res) => {
    const sql = 'SELECT * FROM t_project ORDER BY Price ASC';
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * List products By Size
 */
app.get('/productsBySize',(req, res) => {
    const sql = 'SELECT * FROM t_project ORDER BY Size DESC';
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * List products By Availability
 */
app.get('/productsByAvailability',(req, res) => {
    const sql = 'SELECT * FROM t_project ORDER BY Quantity DESC';
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * List products By Discount
 */
app.get('/productsByDiscount',(req, res) => {
    const sql = 'SELECT * FROM t_project ORDER BY Discount DESC';
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


/**
 * Add new product
 */
app.post('/api/addProduct',(req, res) => {
    let data = {Product: req.body.Product, Color: req.body.Color,
        Brand: req.body.Brand,Type: req.body.Type,Store_Code: req.body.Store_Code,Size: req.body.Size,
        Price: req.body.Price,Discount: req.body.Discount,Quantity: req.body.Quantity};
    //dataString = JSON.stringify(data);
    let sql1 = "ALTER table t_project auto_increment=1;"
    let sql = "INSERT INTO t_project SET ?";
    let query1 = conn.query(sql1);
    let query = conn.query(sql, data,(err, results) => {
        console.log("Error: " + err)
        console.log("Results: " + results)
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Update existing product
 */
app.put('/api/products/:id',(req, res) => {
    let sql = "UPDATE t_project SET Product='"+ req.body.Product + "', Color='" + req.body.Color +
        "', Brand='"+req.body.Brand+"', Type='"+req.body.Type+"', Store_Code='"+req.body.Store_Code+
        "', Size='"+req.body.Size+"', Price='"+req.body.Price+"', Discount='"+req.body.Discount+
        "' , Quantity='"+req.body.Quantity+"' WHERE Product_ID="+
        req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/**
 * Delete an existing product
 */
app.delete('/api/deleteProduct/:id',(req, res) => {
    let sql = "DELETE FROM t_project WHERE Product_ID="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});



//Server listening
app.listen(8080,() =>{
    console.log('Server started on port 8080...');
});