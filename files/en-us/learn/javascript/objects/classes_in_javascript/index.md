---
title: Classes in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
tags:
  - JavaScript
  - Learn
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

In [the last article](/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming) we introduced some basic concepts of object-oriented programming (OOP), and discussed an example where we used OOP principles to model professors and students in a school.

We also talked about how it's possible to use [prototypes](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) and [constructors](/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) to implement a model like this, and that JavaScript also provides features that map more closely to classical OOP concepts.

In this article we'll go through these features. It's worth keeping in mind that the features described here are not a new way of combining objects: under the hood, they still use prototypes. They're just a way to make it easier to set up a prototype chain.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a basic understanding of HTML and CSS,
        familiarity with JavaScript basics (see
        <a href="/en-US/docs/Learn/JavaScript/First_steps">First steps</a> and
        <a href="/en-US/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >) and OOJS basics (see
        <a href="/en-US/docs/Learn/JavaScript/Objects/Basics"
          >Introduction to objects</a
        >, <a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">Object prototypes</a>, and <a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming">Object-oriented programming</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand how to use the features JavaScript provides to implement "classical" object-oriented programs.
      </td>
    </tr>
  </tbody>
<table>

## Classes and constructors

You can declare a class using the {{jsxref("Statements/class", "class")}} keyword. Here's a class declaration for `Adder`:

```js
class Adder {
  value;

  constructor(initial) {
    this.value = initial;
  }

  add(x) {
    this.value += x;
  }
}
```

This declares a class called `Adder`, with:

- a `value` property;
- a constructor that takes a `value` parameter that is used to initialize the new object's `value` property;
- an `add()` method that can refer to the object's properties using `this`.

The `value` field declaration is optional: you could omit it, and the line `this.value = initial;` in the constructor will create the `value` property before initializing it. However, listing properties explicitly in the class declaration might make it easier for people reading your code to see which properties are part of this class.

You could also initialize the property to a default value when you declare it, with a line like `value = 0;`.

The constructor is defined using the {{jsxref("Classes/constructor", "constructor")}} keyword. Just like a [constructor outside a class definition](/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors), it will:

- create a new object
- bind `this` to the new object, so you can refer to `this` in your constructor code
- run the code in the constructor
- return the new object.

Given the class declaration code above, you can create and use a new `Adder` instance like this:

```js
const adder = new Adder(0);
adder.add(10);
console.log(adder); // Adder { value: 10 }
```

Note that we call the constructor using the name of the class, `Adder` in this example.

### Omitting constructors

If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:

```js
class Adder {
  value = 0;
  add(x) {
    this.value += x
  }
}

const adder = new Adder(0);
adder.add(10);
console.log(adder); // Adder { value: 10 }
```

## Inheritance

Given our `Adder` class above, let's define the `AverageAdder` subclass.

```js
class AverageAdder extends Adder {
  constructor(initial) {
    super(initial);
    this.counter = 0;
  }

  add(x) {
    super.add(x);
    this.counter++;
  }

  average() {
    return this.value / this.counter;
  }
}
```

We use the {{jsxref("Classes/extends", "extends")}} keyword to say that this class inherits from another class.

The `AverageAdder` class adds a new property `counter`, so we declare that.

Class `AverageAdder` inherit a constructor from `Adder` which takes `initial` value as an arguments. The first thing this constructor does is call the superclass constructor using {{jsxref("Operators/super", "super()")}}, passing up the `initial` parameter. The superclass constructor takes care of setting `value`. After that the `AverageAdder` constructor sets the `counter` property.

> **Note:** If a subclass has any of its own initialization to do, it **must** first call the superclass constructor using `super()`, passing up any parameters that the superclass constructor is expecting.

We've also overridden the `add()` method from the superclass, and added a new method `average()`.

With this declaration we can now create and use adder:

```js
const adder = new AverageAdder(0);
adder.add(10);
console.log(adder); // Adder { value: 10, counter: 1 }
console.log(adder.average()); // 10
adder.add(20);
console.log(adder); // Adder { value: 30, counter: 2 }
console.log(adder.average()); // 15
adder.add(0);
console.log(adder); // Adder { value: 30, counter: 3 }
console.log(adder.average()); // 10
```

## Encapsulation

Finally, let's see how to implement encapsulation in JavaScript. In the last article we discussed how we would like to make the `year` property of `Student` private, so we could change the rules about archery classes without breaking any code that uses the `Student` class.

Here's a declaration of the `Student` class that does just that:

```js
class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  toString() {
    return `(${this.#x}, ${this.#y})`;
  }
}
```

In this class declaration, `#x` is a [private data property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), and `#y` as well. We can construct a `Point` object, and it can use `#x` internally, but if code outside the object tries to access `#x` the JavaScript runtime throws an error:

```js
const point = new Point(10, 10);
console.log(point.toString()); // (10, 10)
console.log(point.#x); // SyntaxError
```

Private data properties must be declared in the class declaration, and their names start with `#`.

### Private methods

You can have private methods as well as private data properties. Just like private data properties, their names start with `#`, and they can only be called by the object's own methods. Also you can define static private methods. Both cases are shown in the following example:

```js
class Point {
  #x;
  #y;

  constructor(x, y) {
    if (!Point.#validate(x, y)) {
      throw new Error('Cordinate is not a Number');
    }
    this.#x = x;
    this.#y = y;
  }

  toString() {
    if (this.#isOrigin()) return `(The origin)`;
    return `(${this.#x}, ${this.#y})`;
  }

  static #validate(x, y) {
    return typeof x === 'number' && typeof y === 'number';
  }

  #isOrigin() {
    return this.#x === 0 && this.#y === 0;
  }
}

const point = new Point(0, 0);
console.log(point.toString()); // (The origin) instead of (0, 0)
point.#isOrigin(); // SyntaxError

const dot = new Point('10, 'hello'); // Error: Cordinate is not a Number
Point.#validate('10, 'hello'); // SyntaxError
```

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Object-oriented JavaScript](/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Summary

In this article we've gone through the main tools available in JavaScript for writing object-oriented programs. We haven't covered everything here, but this should be enough to get you started. Our [article on Classes](/en-US/docs/Web/JavaScript/Reference/Classes) is a good place to learn more.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

## In this module

- [Object basics](/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Object prototypes](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Object-oriented programming concepts](/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- **Classes in JavaScript**
- [Working with JSON data](/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Object building practice](/en-US/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adding features to our bouncing balls demo](/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
