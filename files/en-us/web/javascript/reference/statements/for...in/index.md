---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
page-type: javascript-statement
browser-compat: javascript.statements.for_in
---

{{jsSidebar("Statements")}}

The **`for...in`** statement iterates over all [enumerable string properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) of an object (ignoring properties keyed by [symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)), including inherited enumerable properties.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js-nolint
for (variable in object)
  statement
```

### Parameters

- `variable`
  - : Receives a string property name on each iteration. May be either a declaration with [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var), or an [assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) target (e.g. a previously declared variable or an object property). Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for...in` loop is in.
- `object`
  - : Object whose non-symbol enumerable properties are iterated over.
- `statement`
  - : A statement to be executed on every iteration. May reference `variable`. You can use a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block) to execute multiple statements.

## Description

The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).

A `for...in` loop only iterates over enumerable, non-symbol properties. Objects created from built–in constructors like `Array` and `Object` have inherited non–enumerable properties from `Array.prototype` and `Object.prototype`, such as {{jsxref("Array")}}'s {{jsxref("Array/indexOf", "indexOf()")}} method or {{jsxref("Object")}}'s {{jsxref("Object/toString", "toString()")}} method, which will not be visited in the `for...in` loop.

The traversal order, as of modern ECMAScript specification, is well-defined and consistent across implementations. Within each component of the prototype chain, all non-negative integer keys (those that can be array indices) will be traversed first in ascending order by value, then other string keys in ascending chronological order of property creation.

The `variable` part of `for...in` accepts anything that can come before the `=` operator. You can use {{jsxref("Statements/const", "const")}} to declare the variable as long as it's not reassigned within the loop body (it can change between iterations, because those are two separate variables). Otherwise, you can use {{jsxref("Statements/let", "let")}}. You can use [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to assign multiple local variables, or use a property accessor like `for (x.y in iterable)` to assign the value to an object property.

A [legacy syntax](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) allows `var` declarations of the loop variable to have an initializer. This throws a [syntax error](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in strict mode and is ignored in non–strict mode.

### Deleted, added, or modified properties

`for...in` visits property keys in the following fashion:

1. It first gets all own string keys of the current object, in a fashion very similar to {{jsxref("Object.getOwnPropertyNames()")}}.
2. For each key, if no string with the same value has ever been visited, the [property descriptor is retrieved](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) and the property is only visited if it is enumerable. However, this property string will be marked as visited even if it's not enumerable.
3. Then, the current object is replaced with its prototype, and the process is repeated.

This means:

- Any property added to the currently visited object during iteration will not be visited, because all own properties of the current object have already been saved beforehand.
- If multiple objects in the prototype chain have a property with the same name, only the first one will be considered, and it is only visited if it's enumerable. If it is non-enumerable, no other properties with the same name further up the prototype chain will be visited, even if they are enumerable.

In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. The spec explicitly allows the implementation to not follow the algorithm above in one of the following cases:

- The object's prototype chain is modified during iteration.
- A property is deleted from the object or its prototype chain during iteration.
- A property is added to the object's prototype chain during iteration.
- A property's enumerability is changed during iteration.

In these cases, implementations may behave differently from what you may expect, or even from each other.

### Array iteration and for...in

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. The `for...in` loop will traverse all integer keys before traversing other keys, and in strictly increasing order, making the behavior of `for...in` close to normal array iteration. However, the `for...in` loop will return all enumerable properties, including those with non–integer names and those that are inherited. Unlike `for...of`, `for...in` uses property enumeration instead of the array's iterator. In [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), `for...of` will visit the empty slots, but `for...in` will not.

It is better to use a {{jsxref("Statements/for", "for")}} loop with a numeric index, {{jsxref("Array.prototype.forEach()")}}, or the {{jsxref("Statements/for...of", "for...of")}} loop, because they will return the index as a number instead of a string, and also avoid non-index properties.

### Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its prototypes, you can use one of the following techniques:

- {{jsxref("Object.keys", "Object.keys(myObject)")}}
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(myObject)")}}

`Object.keys` will return a list of enumerable own string properties, while `Object.getOwnPropertyNames` will also contain non-enumerable ones.

Many JavaScript style guides and linters recommend against the use of `for...in`, because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used `for...of` loop. `for...in` is most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). In situations where objects are used as ad hoc key-value pairs, `for...in` allows you check if any of those keys hold a particular value.

## Examples

### Using for...in

The `for...in` loop below iterates over all of the object's enumerable, non-symbol properties and logs a string of the property names and their values.

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iterating own properties

The following function illustrates the use of {{jsxref("Object.hasOwn", "Object.hasOwn()")}}: the inherited properties are not displayed.

```js
const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Logs:
// "obj.color = red"
```

### Concurrent modification

> **Warning:** You should not write code like this yourself. It is only included here to illustrate the behavior of `for...in` in some corner cases.

Properties added to the current object during iteration are never visited:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  obj.c = 3;
}

// Logs:
// obj.a = 1
// obj.b = 2
```

Shadowed properties are only visited once:

```js
const proto = { a: 1 };
const obj = { __proto__: proto, a: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// obj.a = 2

Object.defineProperty(obj, "a", { enumerable: false });

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Logs nothing, because the first "a" property visited is non-enumerable.
```

In addition, consider the following cases, where the behavior is unspecified, and implementations tend to diverge from the specified algorithm:

Changing the prototype during iteration:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.setPrototypeOf(obj, { c: 3 });
}
```

Deleting a property during iteration:

```js
const obj = { a: 1, b: 2, c: 3 };

// Deleting a property before it is visited
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  delete obj.c;
}

const obj2 = { a: 1, b: 2, c: 3 };

// Deleting a property after it is visited
for (const prop in obj2) {
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  delete obj2.a;
}
```

Enumerable properties added to the prototype during iteration:

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

Changing the enumerability of a property during iteration:

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.defineProperty(obj, "c", { enumerable: false });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for", "for")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
