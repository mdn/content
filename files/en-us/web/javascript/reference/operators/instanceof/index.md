---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - Language feature
  - Object
  - Operator
  - Prototype
  - Relational Operators
  - instanceof
browser-compat: javascript.operators.instanceof
---
{{jsSidebar("Operators")}}

The **`instanceof` operator** tests to see if the
`prototype` property of a constructor appears anywhere in the prototype chain
of an object. The return value is a boolean value.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntax

```js
object instanceof constructor
```

### Parameters

- `object`
  - : The object to test.
- `constructor`
  - : Function to test against

## Description

The `instanceof` operator tests the presence of
`constructor.prototype` in `object`'s prototype chain.

```js
// defining constructors
function C() {}
function D() {}

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true

C.prototype = {}
let o2 = new C()

o2 instanceof C  // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C

D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D()
o3 instanceof D        // true
o3 instanceof C        // true since C.prototype is now in o3's prototype chain
```

Note that the value of an `instanceof` test can change based on changes to
the `prototype` property of constructors. It can also be changed by changing
an object's prototype using `Object.setPrototypeOf`. It is also possible
using the non-standard `__proto__` property.

### `instanceof` and multiple context (e.g. frames or windows)

Different scopes have different execution environments. This means that they have
different built-ins (different global object, different constructors, etc.). This may
result in unexpected results. For instance,
`[] instanceof window.frames[0].Array` will return `false`,
because `Array.prototype !== window.frames[0].Array.prototype` and arrays
inherit from the former.

This may not make sense at first, but for scripts dealing with multiple frames or
windows, and passing objects from one context to another via functions, this will be a
valid and strong issue. For instance, you can securely check if a given object is, in
fact, an Array using `Array.isArray(myObj)`

For example, checking if a [Node](/en-US/docs/Web/API/Node) is a [SVGElement](/en-US/docs/Web/API/SVGElement) in a different context, you can
use `myNode instanceof myNode.ownerDocument.defaultView.SVGElement`.

## Examples

### Using instanceof with String

The following example shows the behavior of `instanceof` with `String` objects.

```js
let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string literal is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
```

### Using instanceof with Date

The following example shows the behavior of `instanceof` with `Date` objects.

```js
let myDate = new Date();

myDate instanceof Date;      // true
myDate instanceof Object;    // true
myDate instanceof String;    // false
```

### Objects created using Object.create()

The following example shows the behavior of `instanceof` with objects created using `Object.create()`

```js
function Shape() {
}

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

rect instanceof Object;    // true
rect instanceof Shape;     // true
rect instanceof Rectangle; // true
rect instanceof String;    // false

let literalObject     = {};
let nullObject  = Object.create(null);
nullObject.name = "My object";

literalObject    instanceof Object;   // true, every object literal has Object.prototype as prototype
({})             instanceof Object;   // true, same case as above
nullObject       instanceof Object;   // false, prototype is end of prototype chain (null)
```

### Demonstrating that `mycar` is of type `Car` and type `Object`

The following code creates an object type `Car` and an instance of that
object type, `mycar`. The `instanceof` operator demonstrates that
the `mycar` object is of type `Car` and of type
`Object`.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // returns true
let b = mycar instanceof Object  // returns true
```

### Not an instanceof

To test if an object is not an `instanceof` a specific constructor, you can
do

```js
if (!(mycar instanceof Car)) {
  // Do something, like:
  // mycar = new Car(mycar)
}
```

This is really different from:

```js
if (!mycar instanceof Car)
```

This will always be `false`. (`!mycar` will be evaluated before
`instanceof`, so you always try to know if a boolean is an instance of
`Car`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
