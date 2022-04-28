



/* -------- This is not the main file, Refer index.js for backend APIs  --------------------


const sqlite3 = require("sqlite3").verbose();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/json
app.use(express.json());

//Localhost Running Port
app.listen(1337, () => console.log("Server is running on port 1337"))

//DB Connection
let db = new sqlite3.Database('./EAD_DB.db',sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to EAD_DB database in sqlite');
});

//----------- APIs for different functionalities --------------//

// Show all Products

// GET all records from database
app.get('/garments',(req, res) => {
    let sql = "SELECT * FROM t_project";
    let query = db.all(sql,[], (err, results) => {
        if(err) return console.error(err.message);
        res.send(JSON.stringify({status: 200, success: true, data: results}));
    });
});

/!**
 * GET single product by ID
 *!/
app.get("/product/:id", (req, res) => {
    let sql1 = "SELECT * FROM t_project WHERE Product_ID=?";
    //var params = [req.params.id]
    let query = db.all(sql1,[req.params.id], (err, results) => {
        if(err) return console.error(err.message);
        console.log(results);
        res.send(JSON.stringify({status: 200, success: true, data: results}));
    });
});


//Add new product
app.post("/post/garment",(req, res)=> {
    const data = {Product_ID: req.body.Product_ID, Product: req.body.Product, Color: req.body.Color,
        Brand: req.body.Brand,Type: req.body.Type,Store_Code: req.body.Store_Code,Size: req.body.Size,
        Price: req.body.Price,Discount: req.body.Discount,Quantity: req.body.Quantity};

    //dataString = JSON.stringify(data);
    const sql = "INSERT INTO t_project (Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity) VALUES (?,?,?,?,?,?,?,?,?,?)";
    /!*const data = [req.body.Product_ID, req.body.Product, req.body.Color,
        req.body.Brand,req.body.Type,req.body.Store_Code,req.body.Size,
        req.body.Price,req.body.Discount,req.body.Quantity];*!/
        db.run(sql, [data],(err, results) => {
        console.log(req.body)
        console.log("Error: " + err)
        console.log("Results: " + results)
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});




/!*!//Search by Product_ID
app.get('/product_id/:id',(req, res) => {
    let sql = "SELECT * FROM t_project WHERE Product_ID="+req.params.id;
    let query = db.run(sql,[], (err, results) => {
        if(err) return console.error(err.message);
        res.send(JSON.stringify({status: 200, success: true, data: results}));
        db.close((err) => {
            if(err) return console.error(err.message);
        });
    });
});*!/









//Test GET request
/!*app.get("/test", (req, res) =>{
    res.status(200).json({success: true});
    });*!/

/!*const sql13 = 'SELECT * FROM t_project';

db.all(sql13,[], (err,rows)=>{
    if (err) return console.error(err.message);
    rows.forEach((row)=>{
        console.log(row)
    })
})*!/

    //db.run('CREATE TABLE t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)');
    
/!*const sql1 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql2 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';

const sql3 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql4 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql5 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql6 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql7 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql8 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql9 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql10 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql11 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';
const sql12 = 'INSERT INTO t_project(Product_ID, Product, Color, Brand, Type, Store_Code, Size, Price, Discount, Quantity)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?)';



/!*db.run(sql,[1000000001,"Tshirt", "Peach", "Lululemon", "Top Wear", 1, "Large", 23.69, 0, 0], (err) => {
    if (err) return console.error(err.message);
    console.log("A new row has been created");
});*!/

db.run(sql1,[1000000002,"Tshirt", "Red", "Zara", "Top Wear", 2, "Medium", 35.00, 10, 200], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql2,[1000000003,"Shorts", "Green", "Hermes", "Bottom Wear", 3, "Small", 20.00, 5, 1000], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql3,[1000000004,"Pant", "Black", "Gucci", "Bottom Wear", 2, "Medium", 15.00, 10, 2000], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql4,[1000000005,"Skirt", "Pink", "Zara", "Bottom Wear", 3, "Small", 122.00, 5, 1500], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql5,[1000000006,"Dress", "Blue", "Germes", "Full Wear", 1, "Extra-large", 200.00, 0, 2500], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql6,[1000000007,"Jeans", "Blue", "Gucci", "Bottom Wear", 3, "Large", 35.00, 5, 4000], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql7,[1000000008,"Tank Top", "Peach", "Zara", "Top Wear", 2, "Large", 30.00, 5, 2200], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql8,[1000000009,"Tshirt", "Yellow", "Louis Vuitton", "Top Wear", 3, "Large", 25.00, 10, 1400], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql9,[1000000010,"Pant", "Green", "Gucci", "Bottom Wear", 2, "Large", 27.99, 0, 500], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql10,[1000000011,"Shirt", "White", "Lululemon", "Top Wear", 1, "Large", 49.00, 0, 5600], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql11,[1000000012,"Shorts", "Green", "Zara", "Bottom Wear", 3, "Medium", 38.00, 5, 2700], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);
db.run(sql12,[1000000013,"Tshirt", "Cyan", "Louis Vuitton", "Top Wear", 2, "Large", 44.00, 20, 2670], (err) => {
        if (err) return console.error(err.message);
        console.log("A new row has been created");
    }
);*!/


/!*db.close((err) => {
    if(err) return console.error(err.message);
});*!/



*/
