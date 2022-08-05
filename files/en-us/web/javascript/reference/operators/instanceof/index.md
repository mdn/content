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

The **`instanceof` operator** tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with [`Symbol.hasInstance`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance).

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntax

```js
object instanceof constructor
```

### Parameters

- `object`
  - : The object to test.
- `constructor`
  - : Constructor to test against.

## Description

The `instanceof` operator tests the presence of `constructor.prototype` in `object`'s prototype chain. This usually means `object` was constructed with `constructor`.

```js
// defining constructors
function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true

// Re-assign `constructor.prototype`: you should
// rarely do this in practice.
C.prototype = {};
const o2 = new C();

o2 instanceof C  // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C

D.prototype = new C()  // add C to [[Prototype]] linkage of D
const o3 = new D();
o3 instanceof D        // true
o3 instanceof C        // true since C.prototype is now in o3's prototype chain
```

Note that the value of an `instanceof` test can change if `constructor.prototype` is re-assigned after creating the object (which is usually discouraged). It can also be changed by changing `object`'s prototype using [`Object.setPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

Classes behave in the same way, because classes also have the `prototype` property.

```js
class A {}
class B extends A {}

const o1 = new A();
// true, because Object.getPrototypeOf(o1) === A.prototype
o1 instanceof A
// false, because B.prototype is nowhere in o1's prototype chain
o1 instanceof B

const o2 = new B();
// true, because Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype
o2 instanceof A
// true, because Object.getPrototypeOf(o2) === B.prototype
o2 instanceof B
```

If `constructor` has a [`Symbol.hasInstance`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) method, the method will be called in priority, with `object` as its only argument and `constructor` as `this`.

```js
// This class allows plain objects to be disguised as this class's instance,
// as long as the object has a particular flag as its property.
class Forgeable {
  static isInstanceFlag = Symbol("isInstanceFlag");

  static [Symbol.hasInstance](obj) {
    return Forgeable.isInstanceFlag in obj;
  }
}

const obj = { [Forgeable.isInstanceFlag]: true };
console.log(obj instanceof Forgeable); // true
```

### `instanceof` and multiple contexts (e.g. frames or windows)

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
const literalString = 'This is a literal string';
const stringObject = new String('String created with constructor');

literalString instanceof String;  // false, string primitive is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string primitive is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
```

### Using instanceof with Date

The following example shows the behavior of `instanceof` with `Date` objects.

```js
const myDate = new Date();

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

const rect = new Rectangle();

rect instanceof Object; // true
rect instanceof Shape;  // true
rect instanceof Rectangle; // true
rect instanceof String; // false

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

literalObject instanceof Object; // true, every object literal has Object.prototype as prototype
({}) instanceof Object; // true, same case as above
nullObject instanceof Object; // false, prototype is end of prototype chain (null)
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
const mycar = new Car('Honda', 'Accord', 1998);
const a = mycar instanceof Car; // returns true
const b = mycar instanceof Object; // returns true
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

```js example-bad
if (!mycar instanceof Car) {
  // unreachable code
}
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
