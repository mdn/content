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

The **`for...in` statement** iterates over all [enumerable
properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) of an object that are keyed by strings (ignoring ones keyed by [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)s),
including inherited enumerable properties.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js
for (variable in object) {
  statement
}
```

- `variable`
  - : A different property name is assigned to `variable` on each
    iteration.
- `object`
  - : Object whose non-Symbol enumerable properties are iterated over.

## Description

A `for...in` loop only iterates over enumerable, non-Symbol properties.
Objects created from built–in constructors like `Array` and
`Object` have inherited non–enumerable properties from
`Object.prototype` and `String.prototype`, such as
{{jsxref("String")}}'s {{jsxref("String.indexOf", "indexOf()")}} method or
{{jsxref("Object")}}'s {{jsxref("Object.toString", "toString()")}} method. The loop will
iterate over all enumerable properties of the object itself and those the object
inherits from its prototype chain (properties of nearer prototypes take precedence over
those of prototypes further away from the object in its prototype chain).

### Deleted, added, or modified properties

A `for...in` loop iterates over the properties of an object in an arbitrary
order (see the {{jsxref("Operators/delete", "delete")}} operator for more on why one
cannot depend on the seeming orderliness of iteration, at least in a cross-browser
setting).

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

> **Note:** `for...in` should not be used to iterate over an
> {{jsxref("Array")}} where the index order is important.

Array indexes are just enumerable properties with integer names and are otherwise
identical to general object properties. There is no guarantee that `for...in`
will return the indexes in any particular order. The `for...in` loop
statement will return all enumerable properties, including those with non–integer names
and those that are inherited.

Because the order of iteration is implementation-dependent, iterating over an array may
not visit elements in a consistent order. Therefore, it is better to use a
{{jsxref("Statements/for", "for")}} loop with a numeric index (or
{{jsxref("Array.prototype.forEach()")}} or the {{jsxref("Statements/for...of",
  "for...of")}} loop) when iterating over arrays where the order of access is important.

### Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its
prototypes, use {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} or
perform a {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} check
({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} can also
be used). Alternatively, if you know there won't be any outside code interference, you
can extend built-in prototypes with a check method.

## Why Use for...in?

Given that `for...in` is built for iterating object properties, not
recommended for use with arrays, and options like `Array.prototype.forEach()`
and `for...of` exist, what might be the use of `for...in` at all?

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
var obj = {a: 1, b: 2, c: 3};

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
{{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}: the inherited
properties are not displayed.

```js
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
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
var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

This nonstandard behavior is now ignored in version 40 and later, and will present a
{{jsxref("SyntaxError")}} ("[for-in
loop head declarations may not have initializers](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)") error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) ([bug 748550](https://bugzilla.mozilla.org/show_bug.cgi?id=748550) and [bug 1164741](https://bugzilla.mozilla.org/show_bug.cgi?id=1164741)).

Other engines such as v8 (Chrome), Chakra (IE/Edge), and JSC (WebKit/Safari) are
investigating whether to remove the nonstandard behavior as well.

## See also

- {{jsxref("Statements/for...of", "for...of")}} – a similar statement that iterates
  over the property _values_
- {{jsxref("Statements/for_each...in", "for each...in")}} – a similar but deprecated
  statement that iterates over the values of an object's properties, rather than the
  property names themselves
- {{jsxref("Statements/for", "for")}}
- [Iterators and
  Generator functions](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (usable with `for...of` syntax)
- [Enumerability
  and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
