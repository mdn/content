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

- {{jsxref("null")}} or
- an {{jsxref("Object")}} excluding [primitive wrapper objects](/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript).

If `proto` is neither of these a {{jsxref("TypeError")}} is thrown.

## Object with `null` prototype

A new object with `null` prototype can behave in unexpected ways, because it doesn't inherit any object methods from `Object.prototype`. This is especially true when debugging, since common object-property
converting/detecting utility functions may generate errors, or lose information
(especially if using silent error-traps that ignore errors). For example, here are two
objects:

```js
oco = {};   // create a normal object
ocn = Object.create(null); // create a "null" object

> console.log(oco) // {} -- Seems normal
> console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

> console.log(oco) // {p: 1} -- Still seems normal
> console.log(ocn) // {p: 0} -- Still seems normal here too. BUT WAIT...
```

As shown above, all seems normal so far. However, when attempting to actually use these
objects, their differences quickly become apparent:

```js
> "oco is: " + oco // shows "oco is: [object Object]"

> "ocn is: " + ocn // throws error: Cannot convert object to primitive value
```

Testing just a few of the many most basic built-in functions shows the magnitude of the
problem more clearly:

```js
> alert(oco) // shows [object Object]
> alert(ocn) // throws error: Cannot convert object to primitive value

> oco.toString() // shows [object Object]
> ocn.toString() // throws error: ocn.toString is not a function

> oco.valueOf() // shows {}
> ocn.valueOf() // throws error: ocn.valueOf is not a function

> oco.hasOwnProperty("p") // shows "true"
> ocn.hasOwnProperty("p") // throws error: ocn.hasOwnProperty is not a function

> oco.constructor // shows "Object() { [native code] }"
> ocn.constructor // shows "undefined"
```

As said, these differences can make debugging even simple-seeming problems quickly go
astray. For example:

_A simple common debugging function:_

```js
// display top-level property name:value pairs of given object
function showProperties(obj) {
  for (const prop in obj) {
    console.log(prop + ": " + obj[prop] + "\n");
  }
}
```

_Not such simple results: (especially if silent error-trapping had hidden the error
messages)_

```js
ob = {}; ob.po = oco; ob.pn = ocn; // create a compound object using the test objects from above as property values

> showProperties(ob) // display top-level properties
- po: [object Object]
- Error: Cannot convert object to primitive value
```

Note that only first property gets shown, due to `ob.po` being traversed first. But if the same object is created in a different order...

```js
ob = {}; ob.pn = ocn; ob.po = oco; // create same compound object again, but create same properties in different order

> showProperties(ob) // display top-level properties
- Error: Cannot convert object to primitive value
```

Note that neither property gets shown.

Such a different order may arise statically via disparate fixed codings such
as here, but also dynamically via whatever the order any such property-adding
code-branches actually get executed at runtime as depends on inputs and/or
random-variables.

Beware, also, that using [`Object.entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) on an object created via `Object.create()`
will result in an empty array being returned, because the first argument is the _prototype_, not the object's own properties.

```js
const obj = Object.create({ a: 1, b: 2 });

> console.log(Object.entries(obj)); // shows "[]"
```

### Adding object methods back

As demonstrated above, lack of default object methods can make debugging unwieldy. We can add the `toString` method back to the "null" object by simply assigning it one:

```js
ocn = Object.create(null); // create "null" object (same as before)

ocn.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

> ocn.toString() // shows "[object Object]"
> "ocn is: " + ocn // shows "ocn is: [object Object]"

ob = {}; ob.pn = ocn; ob.po = oco; // create a compound object (same as before)

> ShowProperties(ob) // display top-level properties
- po: [object Object]
- pn: [object Object]
```

Different from normal objects, `toString` here is an own property of `ocn`, instead of being on its prototype. This is because, well, `ocn` has no (`null`) prototype.

Resetting the new object's prototype works even better:

```js
ocn = Object.create(null);                  // create "null" object (same as before)
Object.setPrototypeOf(ocn, Object.prototype); // set new object's [[Prototype]] to Object.prototype
```

In addition to all the string-related functions shown above, this also adds:

```js
> ocn.valueOf() // shows {}
> ocn.hasOwnProperty("x") // shows "false"
> ocn.constructor // shows "Object() { [native code] }"

// ...and all the rest of the properties and methods of Object.prototype.
```

In fact, `Object.setPrototypeOf(ocn, Object.prototype)` effectively reverts the `Object.create(null)` operation: objects created with the literal syntax (`ocn = {}`) automatically gets `Object.prototype` as its prototype.

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

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

### Using propertiesObject argument with Object.create()

```js
var o;

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
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
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
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
/* is not equivalent to:
This will create an object with prototype : {p: 42 }
o2 = Object.create({p: 42}) */
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
