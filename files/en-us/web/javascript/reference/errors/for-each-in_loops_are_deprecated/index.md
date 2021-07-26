---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
  - Error
  - JavaScript
  - Warning
---
{{jsSidebar("Errors")}}

The JavaScript warning "JavaScript 1.6's for-each-in loops are deprecated; consider
using ES6 for-of instead" occurs when a {{jsxref("Statements/for_each...in", "for each
  (variable in obj)")}} statement is used.

## Message

```js
Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
```

## Error type

Warning

## What went wrong?

JavaScript 1.6's {{jsxref("Statements/for_each...in", "for each (variable in obj)")}}
statement is deprecated, and will be removed in the near future.

## Examples

### Object iteration

{{jsxref("Statements/for_each...in", "for each...in")}} has been used to iterate over
the specified object values.

#### Deprecated syntax

```js example-bad
var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
```

#### Alternative standard syntax

You can now use the standard {{jsxref("Statements/for...in", "for...in")}} loop to
iterate over specified object keys, and get each value inside the loop:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

Or, using {{jsxref("Statements/for...of", "for...of")}} (ES2015) and
{{jsxref("Object.values")}} (ES2017), you can get an array of the specified object
values and iterate over the array like this:

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### Array iteration

{{jsxref("Statements/for_each...in", "for each...in")}} has been used to iterate over
specified array elements.

#### Deprecated syntax

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### Alternative standard syntax

This is now possible with {{jsxref("Statements/for...of", "for...of")}} (ES2015) loops
as well.

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### Iterating over a null-able array

{{jsxref("Statements/for_each...in", "for each...in")}} does nothing if the specified
value is `null` or `undefined`, but
{{jsxref("Statements/for...of", "for...of")}} will throw an exception in these cases.

#### Deprecated syntax

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

#### Alternative standard syntax

To rewrite {{jsxref("Statements/for_each...in", "for each...in")}} statements so that
values can be `null` or `undefined` with
{{jsxref("Statements/for...of", "for...of")}} as well, you need to guard around
{{jsxref("Statements/for...of", "for...of")}}.

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### Iterating over an object's key-value pair

#### Deprecated syntax

There's a deprecated idiom to iterate over the specified object's key-value pairs using
{{jsxref("Statements/for_each...in", "for each...in")}} and the deprecated
{{jsxref("Iterator")}} object.

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### Alternative standard syntax

You can now use the standard {{jsxref("Statements/for...in", "for...in")}} loop to
iterate over specified object keys, and get each value inside the loop:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

Or, using {{jsxref("Statements/for...of", "for...of")}} (ES2015) and
{{jsxref("Object.entries")}} (ES2017), you can get an array of the specified object
values and iterate over the array like this:

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## See also

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
