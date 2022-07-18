---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
  - Error
  - Errors
  - InternalError
  - RangeError
  - JavaScript
---
{{jsSidebar("Errors")}}

The JavaScript exception "too much recursion" or "Maximum call stack size exceeded"
occurs when there are too many function calls, or a function is missing a base case.

## Message

```
RangeError: Maximum call stack size exceeded (Chrome)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded. (Safari)
```

## Error type

{{jsxref("InternalError")}} in Firefox; {{jsxref("RangeError")}} in Chrome and Safari.

## What went wrong?

A function that calls itself is called a _recursive function_. Once a condition
is met, the function stops calling itself. This is called a _base case_.

In some ways, recursion is analogous to a loop. Both execute the same code multiple
times, and both require a condition (to avoid an infinite loop, or rather, infinite
recursion in this case). When there are too many function calls, or a function is
missing a base case, JavaScript will throw this error.

## Examples

This recursive function runs 10 times, as per the exit condition.

```js
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Setting this condition to an extremely high value, won't work:

```js example-bad
function loop(x) {
  if (x >= 1000000000000)
    return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

This recursive function is missing a base case. As there is no exit condition, the
function will call itself infinitely.

```js example-bad
function loop(x) {
  // The base case is missing
  loop(x + 1); // Recursive call
}

loop(0);

// InternalError: too much recursion
```

### Class error: too much recursion

```js example-bad
class Person {
  constructor() {}
  set name(name) {
    this.name = name; // Recursive call
  }
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
```

When a value is assigned to the property name (this.name = name;) JavaScript needs to
set that property. When this happens, the setter function is triggered.

In this example when the setter is triggered, it is told to do the same thing again: _to set the same property that it is meant to handle._ This causes the function to call itself, again and again, making it infinitely recursive.

This issue also appears if the same variable is used in the getter.

```js example-bad
class Person {
  get name() {
    return this.name; // Recursive call
  }
}
```

To avoid this problem, make sure that the property being assigned to inside the setter
function is different from the one that initially triggered the setter. The same goes
for the getter.

```js
class Person {
  constructor() {}
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
```

## See also

- {{Glossary("Recursion")}}
- [Recursive functions](/en-US/docs/Web/JavaScript/Guide/Functions#recursion)
