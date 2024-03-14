function Pen(name, type, price, discount) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.discount = discount;
    this.cost = function() {
        var totalCost = parseInt(this.price) - parseInt(this.discount);
        return "$" + totalCost;
    }
    this.message = function() {
        var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
        return discountPercent;
    }
};
// Pen number 1
    var n = prompt("Enter the pen name: ");
    var t = prompt("Enter the type: ");
    var p = prompt("Enter the price: ");
    var d = prompt("Enter the discount: ");
    var firstPen = new Pen(n, t, p, d);

// Pen number 2
    var secondPen = new Pen("Intensity", "Fineline", 5, 1);

// Add 7 days time 
    var today = new Date();
    var weekOut = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

// updating HTML values with user input for first pen
    document.getElementById("name1").innerHTML = "Name: " + firstPen.name;
    document.getElementById("type1").innerHTML = "Type: " + firstPen.type;
    document.getElementById("price1").innerHTML = "Price: " + "$" + firstPen.price;
    document.getElementById("discount1").innerHTML = "Discount: " + "$" + firstPen.discount;
    document.getElementById("total1").innerHTML = "Total: " + firstPen.cost();
    document.getElementById("dispercent1").innerHTML = "Discount: " + firstPen.message();

// updting HTML for predefined Pen 2
    document.getElementById("name2").innerHTML = "Name: " + secondPen.name;
    document.getElementById("type2").innerHTML = "Type: " + secondPen.type;
    document.getElementById("price2").innerHTML = "Price: " + "$" + secondPen.price;
    document.getElementById("discount2").innerHTML = "Discount: " + "$" + secondPen.discount;
    document.getElementById("total2").innerHTML = "Total: " + secondPen.cost();
    document.getElementById("dispercent2").innerHTML = "Discount: " + secondPen.message();

// update the date in footer of HTML
    document.getElementById("footer").innerHTML = "Prices are good through " + weekOut;