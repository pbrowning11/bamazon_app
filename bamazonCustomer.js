var mysql = require("mysql");
var inquirer = require("inquirer")
var dataArr = [];


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product + " | $ " + res[i].price)
        }
        dataArr = res;
        askUser();
    });

}

function askUser() {
    inquirer.prompt([
        {
            name: "id",
            message: "Which Item Would You Like To Purchase? (1-10):",
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                }
                return false;
            }
        }, {
            name: "quantity",
            message: "How Many Would You Like To Purchase?",
        }
    ]).then(function (answers) {
        if (parseInt(answers.quantity) > dataArr[answers.id - 1].quantity) {
            console.log("Insufficient Quantity! There are only " + dataArr[answers.id - 1].quantity + " left in stock!")
            askUser();
        } else {
            console.log("Order Placed!")
            var newInv = parseInt(dataArr[answers.id - 1].quantity - answers.quantity);
            var total = (parseInt(answers.quantity) * (dataArr[answers.id - 1].price));
            updateProduct(newInv, answers.id, total);
            connection.end()
        }
    })
}
function updateProduct(update, place, num) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                quantity: update
            },
            {
                id: parseInt(place)
            }
        ],
        function (err, res) {
        }
    ); totalAmt(num);
}

function totalAmt(amount) {
    console.log("Your Total Spent Is: " + amount);
}