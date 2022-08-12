---
title: delete operator
slug: Web/JavaScript/Reference/Operators/delete
tags:
  - JavaScript
  - Language feature
  - Memory Management
  - Object
  - Operator
  - Reference
  - Release
  - Unary
  - delete
browser-compat: javascript.operators.delete
---
{{jsSidebar("Operators")}}

The JavaScript **`delete` operator**
removes a property from an object; if no more references to the same property are
held, it is eventually released automatically.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Syntax

```js
delete expression
```

Where `expression` should evaluate to a [property](/en-US/docs/Glossary/property/JavaScript) reference, e.g.:

```js
delete object.property
delete object['property']
```

### Parameters

- `object`
  - : The name of an object, or an expression evaluating to an object.
- `property`
  - : The property to delete.

### Return value

`true` for all cases except when the property is an
{{jsxref("Object.hasOwn")}} {{jsxref("Errors/Cant_delete", "non-configurable")}} property, in which case, `false` is returned in
non-strict mode.

### Exceptions

Throws {{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) if the property is an own non-configurable property.

## Description

Unlike what common belief suggests (perhaps due to other programming languages like
[delete in C++](https://docs.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)),
the `delete` operator has **nothing** to do with directly freeing memory.
Memory management is done indirectly via breaking references.
See the [memory management](/en-US/docs/Web/JavaScript/Memory_Management) page for more details.

The **`delete`** operator removes a given property from an
object. On successful deletion, it will return `true`, else
`false` will be returned.

However, it is important to consider the following scenarios:

- If the property which you are trying to delete does not exist, `delete`
  will not have any effect and will return `true`.
- If a property with the same name exists on the object's prototype chain, then,
  after deletion, the object will use the property from the prototype chain (in
  other words, `delete` only has an effect on own properties).
- Any property declared with {{jsxref("Statements/var","var")}} cannot be deleted
  from the global scope or from a function's scope.

  - As such, `delete` cannot delete any functions in the global
    scope (whether this is part from a function definition or a function
    expression).
  - Functions which are part of an object (apart from the global scope) can be
    deleted with `delete`.

- Any property declared with {{jsxref("Statements/let","let")}} or
  {{jsxref("Statements/const","const")}} cannot be deleted from the scope within
  which they were defined.
- Non-configurable properties cannot be removed. This includes properties of
  built-in objects like {{jsxref("Math")}}, {{jsxref("Array")}},
  {{jsxref("Object")}} and properties that are created as non-configurable with
  methods like {{jsxref("Object.defineProperty()")}}.

The following snippet gives a simple example:

```js
const Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary); // returns true
```

### Non-configurable properties

When a property is marked as non-configurable, `delete` won't have any
effect, and will return `false`. In strict mode this will raise a
`TypeError`.

```js
const Employee = {};
Object.defineProperty(Employee, 'name', { configurable: false });

console.log(delete Employee.name);  // returns false
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}}, and
{{jsxref("Statements/const","const")}} create non-configurable properties that cannot
be deleted with the `delete` operator:

```js
var nameOther = 'XYZ';

// We can access this global property using:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Since "nameOther" is added using with the
// var keyword, it is marked as "non-configurable"

delete nameOther;   // return false
```

In strict mode, this would have raised an exception.

### Strict vs. non-strict mode

When in strict mode, if `delete` is used on a direct reference to a
variable, a function argument or a function name, it will throw a
{{jsxref("SyntaxError")}}. Therefore, to avoid syntax errors in
strict mode, you must use the `delete` operator in the form of
`delete object.property` or `delete object['property']`.

```js
Object.defineProperty(globalThis, 'variable1', { value: 10, configurable: true, });
Object.defineProperty(globalThis, 'variable2', { value: 10, configurable: false, });

// SyntaxError in strict mode.
console.log(delete variable1); // true

// SyntaxError in strict mode.
console.log(delete variable2); // false
```

```js
function func(param) {
  // SyntaxError in strict mode.
  console.log(delete param); // false
}

// SyntaxError in strict mode.
console.log(delete func); // false
```

### Cross-browser notes

As of modern ECMAScript specification, the traversal order of object properties is well-defined and stable across implementations. However, in the
case of Internet Explorer, when one uses `delete` on a property, some
confusing behavior results, preventing other browsers from using simple objects like
object literals as ordered associative arrays. In Explorer, while the property
_value_ is indeed set to `undefined`, if one later adds back a
property with the same name, the property will be iterated in its _old_
position--not at the end of the iteration sequence as one might expect after having
deleted the property and then added it back.

If you want to use an ordered associative array with support of old runtimes, use a {{jsxref("Map")}} object if available (through a polyfill, for example), or simulate this structure with two separate arrays (one for the keys and the other for the values), or build an array of single-property objects, etc.

## Examples

```js
// Creates the property adminName on the global scope.
adminName = 'xyz';

// Creates the property empCount on the global scope.
// Since we are using var, this is marked as non-configurable.
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName is a property of the global scope.
// It can be deleted since it is created without var,
// and is therefore configurable.
delete adminName;       // returns true

// On the contrary, empCount is not configurable
// since var was used.
delete empCount;       // returns false

// delete can be used to remove properties from objects.
delete EmployeeDetails.name; // returns true

// Even when the property does not exist, delete returns "true".
delete EmployeeDetails.salary; // returns true

// delete does not affect built-in static properties.
delete Math.PI; // returns false

// EmployeeDetails is a property of the global scope.
// Since it was defined without "var", it is marked configurable.
delete EmployeeDetails;   // returns true

function f() {
  var z = 44;

  // delete doesn't affect local variable names
  delete z;     // returns false
}
```

### delete and the prototype chain

In the following example, we delete an own property of an object while a property with
the same name is available on the prototype chain:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

const foo = new Foo();

// foo.bar is associated with the
// own property.
console.log(foo.bar); // 10

// Delete the own property within the
// foo object.
delete foo.bar; // returns true

// foo.bar is still available in the
// prototype chain.
console.log(foo.bar); // 42

// Delete the property on the prototype.
delete Foo.prototype.bar; // returns true

// The "bar" property can no longer be
// inherited from Foo since it has been
// deleted.
console.log(foo.bar); // undefined
```

### Deleting array elements

When you delete an array element, the array `length` is not affected. This
holds even if you delete the last element of the array.

When the `delete` operator removes an array element, that element is no
longer in the array. In the following example, `trees[3]` is removed with
`delete`.

```js
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(3 in trees); // false
```

If you want an array element to exist but have an undefined value, use the
`undefined` value instead of the `delete` operator. In the
following example, `trees[3]` is assigned the value `undefined`,
but the array element still exists:

```js
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
console.log(3 in trees); // true
```

If instead, you want to remove an array element by changing the contents of the array,
use the {{jsxref("Array.splice()", "splice()")}} method. In the following example,
`trees[3]` is removed from the array completely using
{{jsxref("Array.splice()", "splice()")}}:

```js
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [In depth analysis on delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
