---
title: 'TypeError: ''x'' is not iterable'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "is not iterable" occurs when the value which is given as the
right hand-side of [for…of
](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)or as argument of a function such as {{jsxref("Promise.all")}} or
{{jsxref("TypedArray.from")}}, is not an [iterable
object](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## Message

```js
TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The value which is given as the right hand-side of [for…of
](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)or as argument of a function such as {{jsxref("Promise.all")}} or
{{jsxref("TypedArray.from")}}, is not an [iterable
object](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).  An iterable can be a built-in iterable type such as
{{jsxref("Array")}}, {{jsxref("String")}} or {{jsxref("Map")}}, a generator result, or
an object implementing the [iterable
protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Examples

### Iterating over Object properties

In JavaScript, {{jsxref("Object")}}s are not iterable unless they implement the [iterable
protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Therefore, you cannot use [for…of
](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)to iterate over the properties of an object.

```js example-bad
var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}
```

Instead you have to use {{jsxref("Object.keys")}} or {{jsxref("Object.entries")}}, to
iterate over the properties or entries of an object.

```js example-good
var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
    console.log(country, capital);
```

Another option for this use case might be to use a {{jsxref("Map")}}:

```js example-good
var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// Iterate over the property names:
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
```

### Iterating over a generator

[Generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators)
are functions you call to produce an iterable object.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
    console.log(x);
```

When they are not called, the {{jsxref("Function")}} object corresponding to the
generator is callable, but not iterable. Calling a generator produces an iterable
object which will iterate over the values yielded during the execution of the
generator.

```js example-good
function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
```

### Iterating over a custom iterable

Custom iterables can be created by implementing the
{{jsxref("Symbol.iterator")}} method. You must be certain that your iterator method
returns an object which is an iterator, which is to say it must have a next method.

```js example-bad
const myEmptyIterable = {
    [Symbol.iterator]() {
        return [] // [] is iterable, but it is not an iterator -- it has no next method.
    }
}

Array.from(myEmptyIterable);  // TypeError: myEmptyIterable is not iterable
```

Here is a correct implementation:

```js example-good
const myEmptyIterable = {
    [Symbol.iterator]() {
        return [][Symbol.iterator]()
    }
}

Array.from(myEmptyIterable);  // []
```

## See also

- [iterable
  protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators)
- [for…of](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
