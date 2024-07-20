---
title: in
slug: Web/JavaScript/Reference/Operators/in
page-type: javascript-operator
browser-compat: javascript.operators.in
---

{{jsSidebar("Operators")}}

The **`in`** operator returns `true` if the specified property is in the specified object or its prototype chain.

The `in` operator cannot be used to search for values in other collections. To test if a certain value exists in an array, use {{jsxref("Array.prototype.includes()")}}. For sets, use {{jsxref("Set.prototype.has()")}}.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

```js-nolint
prop in object
#prop in object
```

### Parameters

- `prop`
  - : A string or symbol representing a property name (non-symbols will be [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Can also be a [private property identifier](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties).
- `object`
  - : Object to check if it (or its prototype chain) contains the property with specified name (`prop`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `object` is not an object (i.e. a primitive).

## Description

The `in` operator tests if a string or symbol property is present in an object or its prototype chain. If you want to check for only _non-inherited_ properties, use {{jsxref("Object.hasOwn()")}} instead.

A property may be present in an object but have value `undefined`. Therefore, `x in obj` is not the same as `obj.x !== undefined`. To make `in` return `false` after a property is added, use the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator instead of setting that property's value to `undefined`.

You can also use the `in` operator to check whether a particular [private class field or method](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) has been defined in an object. The operator returns `true` if the property is defined, and `false` otherwise. This is known as a _branded check_, because it returns `true` if and only if the object was created with that class constructor, after which you can safely access other private properties as well.

This is a special syntax — the left-hand side of the `in` operator is a property identifier instead of an expression, but unquoted (because otherwise it's a string property, not a private property).

Because accessing private properties on objects unrelated to the current class throws a {{jsxref("TypeError")}} instead of returning `undefined`, this syntax allows you to shorten:

```js
class C {
  #x;
  static isC(obj) {
    try {
      obj.#x;
      return true;
    } catch {
      return false;
    }
  }
}
```

To:

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

It also generally avoids the need for dealing with error handling just to access a private property that may be nonexistent.

However, the `in` operator still requires the private property to be declared beforehand in the enclosing class — otherwise, it would throw a {{jsxref("SyntaxError")}} ("Private field '#x' must be declared in an enclosing class"), the same one as when you try to access an undeclared private property.

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError: Private field '#x' must be declared in an enclosing class
```

## Examples

### Basic usage

The following examples show some uses of the `in` operator.

```js
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)
Symbol.iterator in trees; // returns true

// Predefined objects
"PI" in Math; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

You must specify an object on the right side of the `in` operator. For example, you can specify a string created with the `String` constructor, but you cannot specify a string literal.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Using the in operator with deleted or undefined properties

If you delete a property with the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator, the `in` operator returns `false` for that property.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

If you set a property to {{jsxref("undefined")}} but do not delete it, the `in` operator returns true for that property.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // returns true
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // returns true
```

The `in` operator will return `false` for [empty array slots](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), even if accessing it directly returns `undefined`.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

To avoid this, make sure a new array is always filled with non-empty values or not write to indexes past the end of array.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Inherited properties

The `in` operator returns `true` for properties in the prototype chain. This may be undesirable if you are using objects to store arbitrary key-value pairs.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

You can use {{jsxref("Object.hasOwn()")}} to check if the object has the key.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Alternatively, you should consider using a [null prototype object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) or a {{jsxref("Map")}} for storing `ages`, to avoid other bugs.

```js example-good
const ages = new Map([
  ["alice", 18],
  ["bob", 27],
]);

function hasPerson(name) {
  return ages.has(name);
}

hasPerson("hasOwnProperty"); // false
```

### Using the in operator to implement branded checks

The code fragment below demonstrates a static function that tells if an object was created with the `Person` constructor and therefore can perform other methods safely.

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static isPerson(o) {
    return #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); // -10
console.log(Person.isPerson(p1)); // true

if (Person.isPerson(p1) && Person.isPerson(p2)) {
  console.log(p1.ageDifference(p2)); // -10
}
```

It helps to prevent the following case:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Without the `in` operator, you would have to use a `try...catch` block to check if the object has the private property.

You can also implement this as a [`[Symbol.hasInstance]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) method of the class, so that you can use the [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator to perform the same check (which, by default, only checks for the existence of `Person.prototype` in the object's prototype chain).

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // Testing `this` to prevent false-positives when
    // calling `instanceof SubclassOfPerson`
    return this === Person && #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);

if (p1 instanceof Person && p2 instanceof Person) {
  console.log(p1.ageDifference(p2)); // -10
}
```

For more examples, see [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) and the [class guide](/en-US/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
