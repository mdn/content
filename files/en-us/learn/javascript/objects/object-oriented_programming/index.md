---
title: Object-oriented programming
slug: Learn/JavaScript/Objects/Object-oriented_programming
tags:
  - JavaScript
  - Learn
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, including Java and C++. In this article we'll give an overview of the basic concepts of OOP. We'll describe three main concepts: **classes and instances**, **inheritance**, and **encapsulation**. For now we'll describe these concepts without reference to JavaScript in particular, so all the examples given are given in {{Glossary("Pseudocode", "pseudocode")}}.

> **Note:** To be precise, the features described here are features of a particular style of OOP called **class-based** or "classical" OOP. When people talk about OOP, this is generally the type they mean.

After that we'll look at how in JavaScript constructors and the prototype chain relate to these OOP concepts, and how they differ. Then in the next article we'll look at some additional features of JavaScript that make it easier to implement object-oriented programs.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Understanding JavaScript functions, familiarity with JavaScript basics
        (see
        <a href="/en-US/docs/Learn/JavaScript/First_steps">First steps</a> and
        <a href="/en-US/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >), and OOJS basics (see
        <a href="/en-US/docs/Learn/JavaScript/Objects/Basics"
          >Introduction to objects</a
        > and <a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">Object prototypes</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand the basic concepts of class-based object-oriented programming.
      </td>
    </tr>
  </tbody>
</table>

Object-oriented programming is about modeling a system as a collection of objects, which each represent some particular aspect of the system. Objects contain both functions (or methods) and data (together `members`). An object provides a public interface to other code that wants to use it, but it maintains its own private internal state: this means that other parts of the system don't have to care about what is going on inside the object.

## Classes and instances

In OOP, when we model a problem in terms of objects we create abstract definitions representing the types of object we want to have in our system. For example, if we were modeling a planometry objects, we might want to have objects representing rectangles. Every rectangle has property `points` (array of points). Also, every rectangle can do certain things: calculate it's area.

So `Rectangle` could be a **class** in our system, and the definition of the class lists the data and methods that every rectangle has.

So in pseudocode a `Rectangle` class could be written like this:

```
class Rectangle
    properties
        points
    methods
        area()
```

This defines a `Rectangle` class with:

- property: `points` (array of Points);
- method: `area()` to calculate rectangle area.

On its own, a class doesn't do anything. It's a kind of template for creating concrete objects of that type. Each concrete rectangle we create is called an **instance** of the `Rectangle` class. The process of creating an instance is performed by a special function called a **constructor**. We pass the constructor values for any internal state that we want to initialize in the new instance.

Generally, the constructor is written out as part of the class definition, and it usually has the same name as the class itself:

```
class Rectangle
    properties
        points
    constructor
        Rectangle(x1, y1, x2, y2)
    methods
        area()
```

This constructor takes four parameters so we can initialize four points based on two pairs of coordinates (`x, y`) and store them into property `points` when we create a new concrete rectangle.

Now we have a constructor we can create some rectangles. Programming languages often use the keyword `new` to signal that a constructor is being called.

```js
const rectangle = new Rectangle(10, 10, 30, -10);

console.log(rectangle.points.length);  // 4
console.log(rectangle.points.area());  // 400

console.log(rectangle);
```

Output:

```
Rectangle {
  points: [
    { x: 10, y: 10 },
    { x: 30, y: 10 },
    { x: 30, y: -10 },
    { x: 10, y: -10 }
  ]
}
```

This creates object, an instance of the `Rectangle` class, access its property and call methods.

## Inheritance

Suppose we also want to represent triangles. Unlike rectangles, triangles have just three vertices, and we have a different formula to calculate its area. However, triangles do have a list of points (vertices). So we might write out the definition of a triangle class like this:

```
class Triangle
    properties
        points
    constructor
        Triangle(x1, y1, x2, y2, x3, y3)
    methods
        area()
```

It would be helpful if we could represent the fact that triangles and rectangles share some properties: or more accurately, the fact that at some level they are the _same kind of thing_. **Inheritance** lets us do this.

We start by observing that triangles and rectangles are both polygons, and polygons have vertices and we have a generic formula to calculate area of any polygon. We can then model that by defining a new class `Polygon`, where we define all the common properties of polygon. Then `Rectangle` and `Triangle` can both **derive** from `Polygon`, adding their extra properties:

```
class Polygon
    properties
        points
    constructor
        Polygon(...points)
    methods
        area()

class Rectangle
    properties
        points
    constructor : extends Polygon
        Rectangle(x1, y1, x2, y2)
    methods
        area()

class Triangle : extends Polygon
    properties
        points
    constructor
        Triangle(x1, y1, x2, y2, x3, y3)
```

In this case we would say that `Polygon` is the **superclass** or **parent class** of both `Rectangle` and `Triangle`. Conversely `Rectangle` and `Triangle` are **subclasses** or **child classes** of `Polygon`.

You might notice that `area()` is defined in `Polygon` and `Rectangle` classes. The reason is that `Polygon` implements generic `area()` method containing common formial for any polygon (including `Triangle`), while `Rectangle` has its own short method to calculate area:

```js
const triangle = new Triangle(0, 0, 15, 0, 0, 15);
triangle.area();  // 112.5

const rectangle = new Rectangle(10, 10, 30, -10);
rectangle.area();  // 400
```

We might have a default implementation of `area()` for other shapes or use generic one inherited from `Polygon`.

```js
const polygon = new Polygon({ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 0, y: 15 });
polygon.area();  // 112.5
```

This feature - when a method has the same name, but a different implementation in different classes - is called **polymorphism**. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass **overrides** the version in the superclass.

## Encapsulation

Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept **private**, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called **encapsulation**.

This is a useful feature because it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.

For example let's add triangles ability to validate number of vertices. We could implement this just by accessing the triangle's `points` property, and other code could examine its length:

```js
if (polygon.points.length === 3) {
  // it is triangle
}
```

The problem is, if we decide to change the criteria, we'd need to update every place in our system that performs this test. It would be better to have a `validateTriangle()` method on `Triangle` objects, that implements the logic in one place:

```
class Triangle : extends Polygon
    properties
        points
    constructor
        Triangle(x1, y1, x2, y2, x3, y3)
    methods
        area()
        validTriangle() { return this.points.length === 3; }
```

```js
if (triangle.validTriangle()) {
  // it is triangle
}
```

In many OOP languages, we can prevent other code from accessing an object's internal state by marking some properties as `private`. This will generate an error if code outside the object tries to access them:

```
class Triangle : extends Polygon
    properties
        private points
    constructor
        Triangle(x1, y1, x2, y2, x3, y3)
    methods
        area()
        validTriangle() { return this.points.length === 3; }

const triangle = new Triangle(0, 0, 15, 0, 0, 15);
console.log(triangle.points.length);  // Error: 'points' is a private property of Triangle
```

In languages that don't enforce access like this, programmers use naming conventions, such as starting the name with an underscore, to indicate that the property should be considered private.

## OOP and JavaScript

In this article we've described some of the basic features of class-based, sometimes referred to as "classical" object-oriented programming, as implemented in languages like Java and C++.

In the previous two articles we looked at a couple of core JavaScript features: [constructors](/en-US/docs/Learn/JavaScript/Objects/Basics) and [prototypes](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes). These features certainly have some relation to some of the OOP concepts described above.

- **constructors** in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place. But prototypes can be used here, too. For example, if a method is defined on a constructor's `prototype` property, then all objects created using that constructor get that method via their prototype, and we don't need to define it in the constructor.

- **the prototype chain** seems like a natural way to implement inheritance. For example, if we can have a `Triangle` object whose prototype is `Polygon`, then it can inherit `points` and override `area()`.

But it's worth understanding the differences between these features and the "classical" OOP concepts described above. We'll highlight a couple of them here.

First, in class-based OOP, classes and objects are two separate constructs, and objects are always created as instances of classes. Also, there is a distinction between the feature used to define a class (the class syntax itself) and the feature used to instantiate an object (a constructor). In JavaScript, we can and often do create objects without any separate class definition, either using a function or an object literal. This can make working with objects much more lightweight than it is in classical OOP.

Second, although a prototype chain looks like an inheritance hierarchy and behaves like it in some ways, it's different in others. When a subclass is instantiated, a single object is created which combines properties defined in the subclass with properties defined further up the hierarchy. With prototyping, each level of the hierarchy is represented by a separate object, and they are linked together via the `__proto__` property. The prototype chain's behavior is less like inheritance and more like **delegation**. Delegation is a programming pattern where an object, when asked to perform a task, can perform the task itself or ask another object (its **delegate**) to perform the task on its behalf. In many ways delegation is a more flexible way of combining objects than inheritance (for one thing, it's possible to change or completely replace the delegate at run time).

That said, constructors and prototypes can be used to implement class-based OOP patterns in JavaScript. But using them directly to implement features like inheritance is tricky, so JavaScript provides extra features, layered on top of the prototype model, that map more directly to the concepts of class-based OOP. These extra features are the subject of the next article.

## Summary

This article has described the basic features of class-based object oriented programming, and briefly looked at how JavaScript constructors and prototypes compare with these concepts.

In the next article we'll look at the features JavaScript provides to support class-based object-oriented programming.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

## In this module

- [Object basics](/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Object prototypes](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- **Object-oriented programming concepts**
- [Classes in JavaScript](/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [Working with JSON data](/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Object building practice](/en-US/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adding features to our bouncing balls demo](/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
