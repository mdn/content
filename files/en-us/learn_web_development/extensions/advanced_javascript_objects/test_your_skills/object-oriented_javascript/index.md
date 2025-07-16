---
title: "Test your skills: Object-oriented JavaScript"
short-title: Object-oriented JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [Classes in JavaScript](/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
> If there is an error in your code, it will be logged into the results panel on this page or in the JavaScript console.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## OOJS 1

In this task we provide you with the start of a definition for a `Shape` class. It has three properties: `name`, `sides`, and `sideLength`. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Add a constructor to this class. The constructor takes arguments for the `name`, `sides`, and `sideLength` properties, and initializes them.
3. Add a new method `calcPerimeter()` method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
4. Create a new instance of the `Shape` class called `square`. Give it a `name` of `square`, `4` `sides`, and a `sideLength` of `5`.
5. Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser's console as expected.
6. Create a new instance of `Shape` called `triangle`, with a `name` of `triangle`, `3` `sides` and a `sideLength` of `3`.
7. Call `triangle.calcPerimeter()` to check that it works OK.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

<!-- Code shared across examples -->

```css hidden live-sample___oojs-1 live-sample___oojs-2
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

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

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create a `Square` class that inherits from `Shape`.
3. Add a `calcArea()` method to `Square` that calculates its area.
4. Set up the `Square` constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.
5. Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works OK.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

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
