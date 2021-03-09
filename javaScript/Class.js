'use strict';

//class

class Shape {
  constructor(width , height , color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    console.log(this.width * this.height)
  }
}

//상속
class Rectangle extends Shape {}
//상속
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log(`!!!!!!!`);
  }
  getArea() {
    super.getArea();
    console.log(`~~~~~~~~~`);
  }
}

const rectangle = new Rectangle(20 , 20 , 'blue');
rectangle.draw();
rectangle.getArea();

const triangle = new Triangle(10 , 10 , 'red');
triangle.draw();
triangle.getArea();
