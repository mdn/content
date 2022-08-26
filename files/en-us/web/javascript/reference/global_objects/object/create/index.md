---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - 'Null'
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.create
---
{{JSRef}}

The **`Object.create()`** method creates a new object, using an
existing object as the prototype of the newly created object.

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## Syntax

```js
Object.create(proto)
Object.create(proto, propertiesObject)
```

### Parameters

- `proto`
  - : The object which should be the prototype of the newly-created object.
- `propertiesObject` {{Optional_inline}}
  - : If specified and not {{jsxref("undefined")}}, an object whose enumerable own
    properties (that is, those properties defined upon itself and _not_ enumerable
    properties along its prototype chain) specify property descriptors to be added to the
    newly-created object, with the corresponding property names. These properties
    correspond to the second argument of {{jsxref("Object.defineProperties()")}}.

### Return value

A new object with the specified prototype object and properties.

### Exceptions

The `proto` parameter has to be either

- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or
- an {{jsxref("Object")}} excluding [primitive wrapper objects](/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript).

If `proto` is neither of these a {{jsxref("TypeError")}} is thrown.

## Object with `null` prototype

A new object with `null` prototype can behave in unexpected ways, because it doesn't inherit any object methods from `Object.prototype`. This is especially true when debugging, since common object-property converting/detecting utility functions may generate errors, or lose information (especially if using silent error-traps that ignore errors).

For example, the lack of [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) often makes debugging intractable:

```js
const normalObj = {};   // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Other methods will fail as well.

```js
normalObj.valueOf() // shows {}
nullProtoObj.valueOf() // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p") // shows "true"
nullProtoObj.hasOwnProperty("p") // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor // shows "Object() { [native code] }"
nullProtoObj.constructor // shows "undefined"
```

We can add the `toString` method back to the null-prototype object by simply assigning it one:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Unlike normal objects, in which `toString()` is on the object's prototype, the `toString()` method here is an own property of `nullProtoObj`. This is because `nullProtoObj` has no (`null`) prototype.

In practice, objects with `null` prototype are usually used as a cheap substitute for [maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The presence of `Object.prototype` properties will cause some bugs:

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty") // true
getAge("toString") // [Function: toString]
```

Using a null-prototype object removes this hazard without introducing too much complexity to the `hasPerson` and `getAge` functions:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty") // false
getAge("toString") // undefined
```

In such case, the addition of any method should be done cautiously, as they can be confused with the other key-value pairs stored as data.

Making your object not inherit from `Object.prototype` also prevents prototype pollution attacks. If a malicious script adds a property to `Object.prototype`, it will be accessible on every object in your program, except objects that have null prototype.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

## Examples

### Classical inheritance with `Object.create()`

Below is an example of how to use `Object.create()` to achieve classical
inheritance. This is for a single inheritance, which is all that JavaScript supports.

```js
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

### Using propertiesObject argument with Object.create()

```js
let o;

// create an object with null as prototype
o = Object.create(null);

o = {};
// is equivalent to:
o = Object.create(Object.prototype);

// Example where we create an object with a couple of
// sample properties. (Note that the second parameter
// maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
});

function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function,
// the Object.create() cannot reflect it

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify a property with the same attributes as in an initializer
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
// This is not equivalent to:
// o2 = Object.create({ p: 42 })
// which will create an object with prototype { p: 42 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.create` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- John Resig's post on [getPrototypeOf()](https://johnresig.com/blog/objectgetprototypeof/)
