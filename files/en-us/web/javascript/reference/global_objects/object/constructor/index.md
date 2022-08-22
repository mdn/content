---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
  - Prototype
browser-compat: javascript.builtins.Object.constructor
---
{{JSRef}}

The **`constructor`** property returns a reference to the {{jsxref("Object")}} constructor function that created the instance object. Note that the value of this property is a reference to _the function itself_, not a string containing the function's name.

The value is only read-only for primitive values such as `1`, `true`, and `"test"`.

## Description

Any object (with the exception of objects created with `Object.create(null)`) will have a `constructor` property on its `[[Prototype]]`. Objects created without the explicit use of a constructor function (such as object literals and array literals) will have a `constructor` property that points to the Fundamental Object constructor type for that object.

```js
let o = {}
o.constructor === Object // true

let o = new Object
o.constructor === Object // true

let a = []
a.constructor === Array // true

let a = new Array
a.constructor === Array // true

let n = new Number(3)
n.constructor === Number // true
```

## Examples

### Displaying the constructor of an object

The following example creates a constructor (`Tree`) and an object of that type (`theTree`). The example then displays the `constructor` property for the object `theTree`.

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree('Redwood');
console.log(`theTree.constructor is ${theTree.constructor}`);
```

This example displays the following output:

```
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### Assigning the `constructor` property to an object

One can assign the `constructor` property of non-primitives.

```js
const arr = [];
arr.constructor = String
arr.constructor === String // true
arr instanceof String // false
arr instanceof Array // true

const foo = new Foo();
foo.constructor = 'bar'
foo.constructor === 'bar' // true

// etc.
```

This does not overwrite the old `constructor` property — it was originally present on the instance's `[[Prototype]]`, not as its own property.

```js
const arr = [];
Object.hasOwn(arr, "constructor") // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor") // true

arr.constructor = String;
Object.hasOwn(arr, "constructor") // true — the instance property shadows the one on its prototype
```

But even when `Object.getPrototypeOf(a).constructor` is re-assigned, it won't change other behaviors of the object. For example, the behavior of `instanceof` is controlled by [`Symbol.hasInstance`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance), not `constructor`:

```js
const arr = [];
arr.constructor = String;
arr instanceof String // false
arr instanceof Array // true
```

There is nothing protecting the `constructor` property from being re-assigned or shadowed, so using it to detect the type of a variable should usually be avoided in favor of less fragile ways like `instanceof` and [`Symbol.toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) for objects, or [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) for primitives.

### Changing the `constructor` of a constructor function's `prototype`

Every function constructor will have a `prototype` property, which will become the instance's `[[Prototype]]` when called via the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. `ConstructorFunction.prototype.constructor` will therefore become a property on the instance's `[[Prototype]]`, as previously demonstrated.

However, if `ConstructorFunction.prototype` is re-assigned, the `constructor` property will be lost. For example, the following is a common way to create an inheritance pattern:

```js
function Parent() { /* … */ }
Parent.prototype.parentMethod = function parentMethod() {}

function Child() {
  Parent.call(this); // Make sure everything is initialized properly
}
// Pointing the [[Prototype]] of Child.prototype to Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

The `constructor` of instances of `Child` will be `Parent` due to `Child.prototype` being re-assigned. Ensuring that `Child.prototype.constructor` always points to `Child` itself is crucial when you are using `constructor` to access the original class from an instance. Take the following case: the object has the `create()` method to create itself.

```js
function Parent() { /* … */ }
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create is undefined, since constructor === Parent
```

In the example above, an exception is thrown, since the `constructor` links to `Parent`. To avoid this, just assign the necessary constructor you are going to use.

```js
function Parent() { /* … */ }
function CreatedConstructor() { /* … */ }

CreatedConstructor.prototype = Object.create(Parent.prototype);
// Return original constructor to Child
CreatedConstructor.prototype.constructor = CreatedConstructor;

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // it's pretty fine
```

However, even better, do not re-assign `ConstructorFunction.prototype` — instead, use [`Object.setPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) to manipulate the prototype chain.

```js
function Parent() { /* … */ }
function CreatedConstructor() { /* … */ }

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // still works without re-creating constructor property
```

Let's consider one more involved case.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
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
Child = Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create() a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;
// …
```

But even better, we can make the constructor functions themselves extend each other, as classes' [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) do.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Properly create inheritance!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

> **Note:** Manually updating or setting the constructor can lead to different and sometimes confusing consequences. To prevent this, just define the role of `constructor` in each specific case. In most cases, `constructor` is not used and reassigning it is not necessary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("statements/class","Class declaration","",1)}}
- {{jsxref("Classes/constructor","Class constructor","",1)}}
- Glossary: {{Glossary("constructor", "", 1)}}
