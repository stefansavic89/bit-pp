function Testarray (){
    this.name = "asd";
    this.values = [1, 2, 3, 4, 5, 6];
    this.print = function () {
        this.values.forEach((e, i) => {
            console.log(this.name, i, e);
        });
    }
}

let ta = new Testarray();

ta.print()