---
title: in operator
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Language feature
  - Operator
  - Relational Operators
browser-compat: javascript.operators.in
---
{{jsSidebar("Operators")}}

The **`in` operator** returns
`true` if the specified property is in the specified object or its
prototype chain.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

```js
prop in object
```

### Parameters

- `prop`
  - : A string or symbol representing a property name or array index (non-symbols will be
    coerced to strings).
- `object`
  - : Object to check if it (or its prototype chain) contains the property with specified name
    (`prop`).

## Examples

### Basic usage

The following examples show some uses of the `in` operator.

```js
// Arrays
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
'bay' in trees    // returns false (you must specify the index number, not the value at that index)
'length' in trees // returns true (length is an Array property)
Symbol.iterator in trees // returns true

// Predefined objects
'PI' in Math          // returns true

// Custom objects
const mycar = {make: 'Honda', model: 'Accord', year: 1998}
'make' in mycar  // returns true
'model' in mycar // returns true
```

You must specify an object on the right side of the `in` operator. For
example, you can specify a string created with the `String` constructor, but
you cannot specify a string literal.

```js
const color1 = new String('green')
'length' in color1 // returns true

const color2 = 'coral'
// generates an error (color2 is not a String object)
'length' in color2
```

### Using `in` with deleted or undefined properties

If you delete a property with the
[`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
operator, the `in` operator returns `false` for that property.

```js
const mycar = {make: 'Honda', model: 'Accord', year: 1998}
delete mycar.make
'make' in mycar   // returns false

const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
delete trees[3]
3 in trees  // returns false
```

If you set a property to {{jsxref("Global_Objects/undefined", "undefined")}} but do not
delete it, the `in` operator returns true for that property.

```js
const mycar = {make: 'Honda', model: 'Accord', year: 1998}
mycar.make = undefined
'make' in mycar   // returns true
```

```js
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
trees[3] = undefined
3 in trees  // returns true
```

The `in` operator will return `false` for empty array slots. Even
if accessing it directly returns `undefined`.

```js
const empties = new Array(3)
empties[2] // returns undefined
2 in empties  // returns false
```

To avoid this, make sure a new array is always filled with non-empty values or not
write to indexes past the end of array.

```js
const empties = new Array(3).fill(undefined)
2 in empties  // returns true
```

### Inherited properties

The `in` operator returns `true` for properties in the prototype
chain. (If you want to check for only _non-inherited_ properties,
use {{jsxref("Object.hasOwn()")}} instead.)

```js
'toString' in {}  // returns true
```

### Private fields and methods

You can also use the `in` operator to check whether a particular [private class field or method](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) has been defined in a class. The operator returns `true` if the method is defined, and `false` otherwise.

> **Note:** Code will `throw` if you attempt to access a _private_ class field/method that has not been defined. Using the `in` operator to check for potentially missing private fields is more compact than using `try/catch`.

The code fragment below demonstrates a static function that checks whether a specified class has particular private methods and fields.

```js
class ClassWithPrivateFeatures {
  #a;
  #b = null;
  #c() {}
  get #d() {}
  static f(o) {
    return #a in o && #b in o && #c in o && #d in o;
  }
}
ClassWithPrivateFeatures.f(new ClassWithPrivateFeatures()) // returns true
ClassWithPrivateFeatures.f({}) // returns false
```

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
