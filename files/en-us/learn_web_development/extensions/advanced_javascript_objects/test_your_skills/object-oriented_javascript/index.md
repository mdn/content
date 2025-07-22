---
title: "Test your skills: Object-oriented JavaScript"
short-title: Object-oriented JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to help you assess whether you've understood our [Classes in JavaScript](/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## OOJS 1

In this task we provide you with the start of a definition for a `Shape` class. It has three properties: `name`, `sides`, and `sideLength`. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

To complete the task:

1. Add a constructor to this class. The constructor takes arguments for the `name`, `sides`, and `sideLength` properties, and initializes them.
2. Add a new method `calcPerimeter()` method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
3. Create a new instance of the `Shape` class called `square`. Give it a `name` of `square`, `4` `sides`, and a `sideLength` of `5`.
4. Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser's console as expected.
5. Create a new instance of `Shape` called `triangle`, with a `name` of `triangle`, `3` `sides` and a `sideLength` of `3`.
6. Call `triangle.calcPerimeter()` to check that it works OK.

```js live-sample___oojs-1
class Shape {
  name;
  sides;
  sideLength;
}
```

{{ EmbedLiveSample("oojs-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JS could look something like this:

```js
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
```

</details>

## OOJS 2

Now it's time to add some inheritance into the mix.

To complete the task:

1. Create a `Square` class that inherits from `Shape`.
2. Add a `calcArea()` method to `Square` that calculates its area.
3. Set up the `Square` constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.
4. Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works OK.

```js live-sample___oojs-2
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("oojs-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JS could look something like this:

```js
// ...
// Don't edit the code above here!

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(
      `The ${this.name}'s area is ${this.sideLength * this.sideLength} squared.`,
    );
  }
}

const square = new Square(4);

square.calcPerimeter();
square.calcArea();
```

</details>

&nbsp;
