---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
page-type: javascript-operator
browser-compat: javascript.operators.instanceof
---

{{jsSidebar("Operators")}}

The **`instanceof`** operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with [`Symbol.hasInstance`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance).

{{InteractiveExample("JavaScript Demo: Expressions - instanceof")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```

## Syntax

```js-nolint
object instanceof constructor
```

### Parameters

- `object`
  - : The object to test.
- `constructor`
  - : Constructor to test against.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `constructor` is not an object. If `constructor` doesn't have a [`[Symbol.hasInstance]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) method, it must also be a function.

## Description

The `instanceof` operator tests the presence of `constructor.prototype` in `object`'s prototype chain. This usually (though [not always](#overriding_the_behavior_of_instanceof)) means `object` was constructed with `constructor`.

```js
// defining constructors
function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object; // true

// Re-assign `constructor.prototype`: you should
// rarely do this in practice.
C.prototype = {};
const o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C;

D.prototype = new C(); // add C to [[Prototype]] linkage of D
const o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain
```

Note that the value of an `instanceof` test can change if `constructor.prototype` is re-assigned after creating the object (which is usually discouraged). It can also be changed by changing `object`'s prototype using [`Object.setPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

Classes behave in the same way, because classes also have the `prototype` property.

```js
class A {}
class B extends A {}

const o1 = new A();
// true, because Object.getPrototypeOf(o1) === A.prototype
o1 instanceof A;
// false, because B.prototype is nowhere in o1's prototype chain
o1 instanceof B;

const o2 = new B();
// true, because Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype
o2 instanceof A;
// true, because Object.getPrototypeOf(o2) === B.prototype
o2 instanceof B;
```

For [bound functions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), `instanceof` looks up for the `prototype` property on the target function, since bound functions don't have `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

### instanceof and Symbol.hasInstance

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

Because all functions inherit from `Function.prototype` by default, most of the time, the [`Function.prototype[Symbol.hasInstance]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) method specifies the behavior of `instanceof` when the right-hand side is a function. See the {{jsxref("Symbol.hasInstance")}} page for the exact algorithm of `instanceof`.

### instanceof and multiple realms

JavaScript execution environments (windows, frames, etc.) are each in their own _realm_. This means that they have different built-ins (different global object, different constructors, etc.). This may result in unexpected results. For instance, `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== window.frames[0].Array.prototype` and arrays in the current realm inherit from the former.

This may not make sense at first, but for scripts dealing with multiple frames or windows, and passing objects from one context to another via functions, this will be a valid and strong issue. For instance, you can securely check if a given object is in fact an Array using {{jsxref("Array.isArray()")}}, neglecting which realm it comes from.

For example, to check if a [`Node`](/en-US/docs/Web/API/Node) is an [`SVGElement`](/en-US/docs/Web/API/SVGElement) in a different context, you can use `myNode instanceof myNode.ownerDocument.defaultView.SVGElement`.

## Examples

### Using instanceof with String

The following example shows the behavior of `instanceof` with `String` objects.

```js
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false
```

### Using instanceof with Map

The following example shows the behavior of `instanceof` with `Map` objects.

```js
const myMap = new Map();

myMap instanceof Map; // true
myMap instanceof Object; // true
myMap instanceof String; // false
```

### Objects created using Object.create()

The following example shows the behavior of `instanceof` with objects created using {{jsxref("Object.create()")}}.

```js
function Shape() {}

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect instanceof Object; // true
rect instanceof Shape; // true
rect instanceof Rectangle; // true
rect instanceof String; // false

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

literalObject instanceof Object; // true, every object literal has Object.prototype as prototype
({}) instanceof Object; // true, same case as above
nullObject instanceof Object; // false, prototype is end of prototype chain (null)
```

### Demonstrating that myCar is of type Car and type Object

The following code creates an object type `Car` and an instance of that object type, `myCar`. The `instanceof` operator demonstrates that the `myCar` object is of type `Car` and of type `Object`.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Honda", "Accord", 1998);
const a = myCar instanceof Car; // returns true
const b = myCar instanceof Object; // returns true
```

### Not an instanceof

To test if an object is not an `instanceof` a specific constructor, you can do:

```js
if (!(myCar instanceof Car)) {
  // Do something, like:
  // myCar = new Car(myCar)
}
```

This is really different from:

```js-nolint example-bad
if (!myCar instanceof Car) {
  // unreachable code
}
```

This will always be `false`. (`!myCar` will be evaluated before `instanceof`, so you always try to know if a boolean is an instance of `Car`).

### Overriding the behavior of instanceof

A common pitfall of using `instanceof` is believing that, if `x instanceof C`, then `x` was created using `C` as constructor. This is not true, because `x` could be directly assigned with `C.prototype` as its prototype. In this case, if your code reads [private fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) of `C` from `x`, it would still fail:

```js
class C {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x)); // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

To avoid this, you can override the behavior of `instanceof` by adding a `Symbol.hasInstance` method to `C`, so that it does a branded check with [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in):

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return #value in x;
  }

  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  // Doesn't run, because x is not a C
  console.log(C.getValue(x));
}
```

Note that you may want to limit this behavior to the current class; otherwise, it could lead to false positives for subclasses:

```js
class D extends C {}
console.log(new C() instanceof D); // true; because D inherits [Symbol.hasInstance] from C
```

You could do this by checking that `this` is the current constructor:

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return this === C && #value in x;
  }
}

class D extends C {}
console.log(new C() instanceof D); // false
console.log(new C() instanceof C); // true
console.log({ __proto__: C.prototype } instanceof C); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
