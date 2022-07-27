let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.

obj = "hello";


let myName: string = "Alice";

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }


  //type alias vs interface
  //https://betterprogramming.pub/differences-between-type-aliases-and-interfaces-in-typescript-4-6-6489246d4e48

//  A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });


//interface
interface Point {
    x: number;
    y: number;
  }
  
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });

// you can technically do the following, but it's strange

// by themselves, literal types aren’t very valuable:

//let x: "hello" = "hello";
// OK
//x = "hello";
//x = "howdy";
//Type '"howdy"' is not assignable to type '"hello"'.

//It’s not much use to have a variable that can only have one value!

//But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
//Argument of type '"center"' is not assignable to parameter of type '"left" | "right" | "center"'.

//Numeric literal types work the same way:
//return values

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

