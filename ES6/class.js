class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(`(${this.x}, ${this.y})`)
    }

    describe() {
        console.log('I am a Point')
    }


}

let p = new Point(4, 5);

p.print();

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    };
    print() {
        console.log('Color point')
        super.print();
        console.log(this.color)
    }

}

let cp = new ColorPoint(4,3,'orange');
cp.print();
cp.describe();