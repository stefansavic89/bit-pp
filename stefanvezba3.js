
var a = 67;
var prva;
var druga;
var zamena;

if (typeof a === "number" && a > 9 && a < 100) {
    prva = a % 10;
    druga = (a - prva) / 10;
    zamena = prva * 10 + druga;

    console.log(zamena);

} else {
    console.log("a nije dvocifreni broj")
}

