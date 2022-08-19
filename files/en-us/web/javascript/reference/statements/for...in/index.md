---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.for_in
---
{{jsSidebar("Statements")}}

The **`for...in` statement** iterates over all
[enumerable properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
of an object that are keyed by strings
(ignoring ones keyed by [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)),
including inherited enumerable properties.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js
for (const variable in object) {
  statement
}
```

- `variable`
  - : A different property name is assigned to `variable` on each iteration.
- `object`
  - : Object whose non-Symbol enumerable properties are iterated over.

## Description

The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).

A `for...in` loop only iterates over enumerable, non-Symbol properties. Objects created from built–in constructors like `Array` and `Object` have inherited non–enumerable properties from `Array.prototype` and `Object.prototype`, such as {{jsxref("Array")}}'s {{jsxref("Array.indexOf", "indexOf()")}} method or {{jsxref("Object")}}'s {{jsxref("Object.toString", "toString()")}} method, which will not be visited in the `for...in` loop.

The traversal order, as of modern ECMAScript specification, is well-defined and consistent across implementations. Within each component of the prototype chain, all non-negative integer keys (those that can be array indices) will be traversed first in ascending order by value, then other string keys in ascending chronological order of property creation.

### Deleted, added, or modified properties

If a property is modified in one iteration and then visited at a later time, its value
in the loop is its value at that later time. A property that is deleted before it has
been visited will not be visited later. Properties added to the object over which
iteration is occurring may either be visited or omitted from iteration.

In general, it is best not to add, modify, or remove properties from the object during
iteration, other than the property currently being visited. There is no guarantee
whether an added property will be visited, whether a modified property (other than the
current one) will be visited before or after it is modified, or whether a deleted
property will be visited before it is deleted.

### Array iteration and for...in

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. The `for...in` loop will traverse all integer keys before traversing other keys, and in strictly increasing order, making the behavior of `for...in` close to normal array iteration. However, the `for...in` loop will return all enumerable properties, including those with non–integer names and those that are inherited. Unlike `for...of`, `for...in` uses property enumeration instead of the array's iterator. In sparse arrays, `for...of` will visit the empty slots, but `for...in` will not.

It is better to use a {{jsxref("Statements/for", "for")}} loop with a numeric index, {{jsxref("Array.prototype.forEach()")}}, or the {{jsxref("Statements/for...of", "for...of")}} loop, because they will return the index as a number instead of a string, and also avoid non-index properties.

### Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its
prototypes, you can use one of the following techniques:

- {{jsxref("Object.keys", "Object.keys(myObject)")}}
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(myObject)")}}

`Object.keys` will return a list of enumerable own string properties, while `Object.getOwnPropertyNames` will also contain non-enumerable ones.

## Why Use for...in?

Many JavaScript style guides and linters recommend against the use of `for...in`, because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used `for...of` loop. In what cases would `for...in` be useful at all?

It may be most practically used for debugging purposes, being an easy way to check the
properties of an object (by outputting to the console or otherwise). Although arrays are
often more practical for storing data, in situations where a key-value pair is preferred
for working with data (with properties acting as the "key"), there may be instances
where you want to check if any of those keys hold a particular value.

## Examples

### Using for...in

The `for...in` loop below iterates over all of the object's enumerable,
non-Symbol properties and logs a string of the property names and their values.

```js
const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iterating own properties

The following function illustrates the use of
{{jsxref("Object.hasOwn", "Object.hasOwn()")}}: the inherited
properties are not displayed.

```js
const triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility: Initializer expressions in strict mode

Prior to Firefox 40, it was possible to use an initializer expression
(`i=0`) in a `for...in` loop:

```js example-bad
const obj = { a: 1, b: 2, c: 3 };
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

This nonstandard behavior is now ignored in version 40 and later, and will present a {{jsxref("SyntaxError")}} ("[for-in loop head declarations may not have initializers](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)") error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) ([bug 748550](https://bugzilla.mozilla.org/show_bug.cgi?id=748550) and [bug 1164741](https://bugzilla.mozilla.org/show_bug.cgi?id=1164741)).

Other engines such as v8 (Chrome), Chakra (IE/Edge), and JSC (WebKit/Safari) are
investigating whether to remove the nonstandard behavior as well.

## See also

- {{jsxref("Statements/for...of", "for...of")}} – a similar statement that iterates
  over the property _values_
- {{jsxref("Statements/for", "for")}}
- [Iterators and Generator functions](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (usable with `for...of` syntax)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
