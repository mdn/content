---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Object.constructor
---

{{JSRef}}

The **`constructor`** data property of an {{jsxref("Object")}} instance returns a reference to the constructor function that created the instance object. Note that the value of this property is a reference to _the function itself_, not a string containing the function's name.

> **Note:** This is a property of JavaScript objects. For the `constructor` method in classes, see [its own reference page](/en-US/docs/Web/JavaScript/Reference/Classes/constructor).

## Value

A reference to the constructor function that created the instance object.

{{js_property_attributes(1, 0, 1)}}

> **Note:** This property is created by default on the [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property of every constructor function and is inherited by all objects created by that constructor.

## Description

Any object (with the exception of [`null` prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) will have a `constructor` property on its `[[Prototype]]`. Objects created with literals will also have a `constructor` property that points to the constructor type for that object — for example, array literals create {{jsxref("Array")}} objects, and [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) create plain objects.

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

Note that `constructor` usually comes from the constructor's [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property. If you have a longer prototype chain, you can usually expect every object in the chain to have a `constructor` property.

```js
const o = new TypeError(); // Inheritance: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## Examples

### Displaying the constructor of an object

The following example creates a constructor (`Tree`) and an object of that type (`theTree`). The example then displays the `constructor` property for the object `theTree`.

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`);
```

This example displays the following output:

```plain
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### Assigning the constructor property to an object

One can assign the `constructor` property of non-primitives.

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// etc.
```

This does not overwrite the old `constructor` property — it was originally present on the instance's `[[Prototype]]`, not as its own property.

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true — the instance property shadows the one on its prototype
```

But even when `Object.getPrototypeOf(a).constructor` is re-assigned, it won't change other behaviors of the object. For example, the behavior of `instanceof` is controlled by [`Symbol.hasInstance`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance), not `constructor`:

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

There is nothing protecting the `constructor` property from being re-assigned or shadowed, so using it to detect the type of a variable should usually be avoided in favor of less fragile ways like `instanceof` and [`Symbol.toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) for objects, or [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) for primitives.

### Changing the constructor of a constructor function's prototype

Every constructor has a [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which will become the instance's `[[Prototype]]` when called via the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. `ConstructorFunction.prototype.constructor` will therefore become a property on the instance's `[[Prototype]]`, as previously demonstrated.

However, if `ConstructorFunction.prototype` is re-assigned, the `constructor` property will be lost. For example, the following is a common way to create an inheritance pattern:

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // Make sure everything is initialized properly
}
// Pointing the [[Prototype]] of Child.prototype to Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

The `constructor` of instances of `Child` will be `Parent` due to `Child.prototype` being re-assigned.

This is usually not a big deal — the language almost never reads the `constructor` property of an object. The only exception is when using [`@@species`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) to create new instances of a class, but such cases are rare, and you should be using the [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) syntax to subclass builtins anyway.

However, ensuring that `Child.prototype.constructor` always points to `Child` itself is crucial when some caller is using `constructor` to access the original class from an instance. Take the following case: the object has the `create()` method to create itself.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create is undefined, since constructor === Parent
```

In the example above, an exception is thrown, since the `constructor` links to `Parent`. To avoid this, just assign the necessary constructor you are going to use.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Return original constructor to Child
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // Make it non-enumerable, so it won't appear in `for...in` loop
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // it's pretty fine
```

Note that when manually adding the `constructor` property, it's crucial to make the property [non-enumerable](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties), so `constructor` won't be visited in [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops — as it normally isn't.

If the code above looks like too much boilerplate, you may also consider using [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) to manipulate the prototype chain.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // still works without re-creating constructor property
```

`Object.setPrototypeOf()` comes with its potential performance downsides because all previously created objects involved in the prototype chain have to be re-compiled; but if the above initialization code happens before `Parent` or `CreatedConstructor` are constructed, the effect should be minimal.

Let's consider one more involved case.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // Using this.constructor, in hope that getStartPosition exists as a static method
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Error: this.constructor.getStartPosition is undefined, since the
// constructor is Child, which doesn't have the getStartPosition static method
```

For this example to work properly, we can reassign the `Parent`'s static properties to `Child`:

```js
// …
Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create() a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

But even better, we can make the constructor functions themselves extend each other, as classes' [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) do.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Properly create inheritance!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

Again, using `Object.setPrototypeOf()` may have adverse performance effects, so make sure it happens immediately after the constructor declaration and before any instances are created — to avoid objects being "tainted".

> **Note:** Manually updating or setting the constructor can lead to different and sometimes confusing consequences. To prevent this, just define the role of `constructor` in each specific case. In most cases, `constructor` is not used and reassigning it is not necessary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes/constructor", "constructor")}}
- {{Glossary("Constructor")}}
