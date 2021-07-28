---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Class
  - JavaScript
  - Object
browser-compat: javascript.builtins.Object
---
{{JSRef}}

The **`Object`** class represents one of [JavaScript's data types](/en-US/docs/Web/JavaScript/Data_structures). It is used to store various keyed collections and more complex entities. Objects can be created using the {{jsxref("Object/Object", "Object()")}} constructor or the [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Description

Nearly all objects in JavaScript are instances of {{jsxref("Object")}}; a typical object inherits properties (including methods) from `Object.prototype`, although these properties may be shadowed (a.k.a. overridden). However, an `Object` may be deliberately created for which this is not true (e.g. by {{jsxref("Object.create", "Object.create(null)")}}), or it may be altered so that this is no longer true (e.g. with {{jsxref("Object.setPrototypeOf")}}).

Changes to the `Object` prototype object are seen by **all** objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

The `Object` constructor creates an object wrapper for the given value.

- If the value is {{jsxref("null")}} or {{jsxref("undefined")}}, it will create and return an empty object.
- Otherwise, it will return an object of a Type that corresponds to the given value.
- If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

See also the [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Deleting a property from an object

There isn't any method in an Object itself to delete its own properties (such as {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). To do so, one must use the [delete operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete).

## Constructor

- {{jsxref("Object/Object", "Object()")}}
  - : Creates a new `Object` object. It is a wrapper for the given value.

## Static methods

- {{jsxref("Object.assign","Object.assign()")}}
  - : Copies the values of all enumerable own properties from one or more source objects to a target object.
- {{jsxref("Object.create","Object.create()")}}
  - : Creates a new object with the specified prototype object and properties.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : Adds the named property described by a given descriptor to an object.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : Adds the named properties described by the given descriptors to an object.
- {{jsxref("Object.entries","Object.entries()")}}
  - : Returns an array containing all of the `[key, value]` pairs of a given object's **own** enumerable string properties.
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : Freezes an object. Other code cannot delete or change its properties.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : Returns a new object from an iterable of `[key, value]` pairs. (This is the reverse of {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : Returns a property descriptor for a named property on an object.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : Returns an object containing all own property descriptors for an object.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable and non-enumerable properties.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : Returns an array of all symbol properties found directly upon a given object.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : Returns the prototype (internal `[[Prototype]]` property) of the specified object.
- {{jsxref("Object.is","Object.is()")}}
  - : Compares if two values are the same value. Equates all `NaN` values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : Determines if extending of an object is allowed.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : Determines if an object was frozen.
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : Determines if an object is sealed.
- {{jsxref("Object.keys","Object.keys()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable string properties.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : Prevents any extensions of an object.
- {{jsxref("Object.seal","Object.seal()")}}
  - : Prevents other code from deleting properties of an object.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : Sets the object's prototype (its internal `[[Prototype]]` property).
- {{jsxref("Object.values","Object.values()")}}
  - : Returns an array containing the values that correspond to all of a given object's **own** enumerable string properties.

## Instance properties

- {{jsxref("Object.prototype.constructor")}}
  - : Specifies the function that creates an object's prototype.
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
  - : Points to the object which was used as prototype when the object was instantiated.

## Instance methods

- {{jsxref("Object.prototype.__defineGetter__()")}}
  - : Associates a function with a property that, when accessed, executes that function and returns its return value.
- {{jsxref("Object.prototype.__defineSetter__()")}}
  - : Associates a function with a property that, when set, executes that function which modifies the property.
- {{jsxref("Object.prototype.__lookupGetter__()")}}
  - : Returns the function associated with the specified property by the {{jsxref("Object.prototype.__defineGetter__()", "__defineGetter__()")}} method.
- {{jsxref("Object.prototype.__lookupSetter__()")}}
  - : Returns the function associated with the specified property by the {{jsxref("Object.prototype.__defineSetter__()", "__defineSetter__()")}} method.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Returns a boolean indicating if the internal [ECMAScript \[\[Enumerable\]\] attribute](/en-US/docs/Web/JavaScript/Data_structures#properties) is set.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Calls {{jsxref("Object.toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Returns a string representation of the object.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object.

## Examples

### Using `Object` given `undefined` and `null` types

The following examples store an empty `Object` object in `o`:

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

### Using `Object` to create `Boolean` objects

The following examples store {{jsxref("Boolean")}} objects in `o`:

```js
// equivalent to o = new Boolean(true)
let o = new Object(true)
```

```js
// equivalent to o = new Boolean(false)
let o = new Object(Boolean())
```

### Object prototypes

When altering the behavior of existing `Object.prototype` methods, consider injecting code by wrapping your extension before or after the existing logic. For example, this (untested) code will pre-conditionally execute custom logic before the built-in logic or someone else's extension is executed.

When a function is called, the arguments to the call are held in the array-like "variable" [arguments](/en-US/docs/Web/JavaScript/Reference/Functions/arguments). For example, in the call `myFn(a, b, c)`, the arguments within `myFn`'s body will contain 3 array-like elements corresponding to `(a, b, c)`.

When modifying prototypes with hooks, pass `this` and the arguments (the call state) to the current behavior by calling `apply()` on the function. This pattern can be used for any prototype, such as `Node.prototype`, `Function.prototype`, etc.

```js
var current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
}
```

Since JavaScript doesn't exactly have sub-class objects, prototype is a useful workaround to make a “base class” object of certain functions that act as objects. For example:

```js
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Customer (child).

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
