---
title: Default parameters
slug: Web/JavaScript/Reference/Functions/Default_parameters
page-type: javascript-language-feature
browser-compat: javascript.functions.default_parameters
---

{{jsSidebar("Functions")}}

**Default function parameters** allow named parameters to be initialized with default values if no value or `undefined` is passed.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntax

```js-nolint
function fnName(param1 = defaultValue1, /* … ,*/ paramN = defaultValueN) {
  // …
}
```

## Description

In JavaScript, function parameters default to {{jsxref("undefined")}}. However, it's often useful to set a different default value. This is where default parameters can help.

In the following example, if no value is provided for `b` when `multiply` is called, `b`'s value would be `undefined` when evaluating `a * b` and `multiply` would return `NaN`.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

In the past, the general strategy for setting defaults was to test parameter values in the function body and assign a value if they are `undefined`. In the following example, `b` is set to `1` if `multiply` is called with only one argument:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

With default parameters, checks in the function body are no longer necessary. Now, you can assign `1` as the default value for `b` in the function head:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> **Note:** The first default parameter and all parameters after it will not contribute to the function's [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

The default parameter initializers live in their own scope, which is a parent of the scope created for the function body.

This means that earlier parameters can be referred to in the initializers of later parameters. However, functions and variables declared in the function body cannot be referred to from default value parameter initializers; attempting to do so throws a run-time {{jsxref("ReferenceError")}}. This also includes [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)-declared variables in the function body.

For example, the following function will throw a `ReferenceError` when invoked, because the default parameter value does not have access to the child scope of the function body:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

This function will print the value of the _parameter_ `a`, because the variable `var a` is hoisted only to the top of the scope created for the function body, not the parent scope created for the parameter list, so its value is not visible to `b`.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

## Examples

### Passing undefined vs. other falsy values

In the second call in this example, even if the first argument is set explicitly to `undefined` (though not `null` or other {{glossary("falsy")}} values), the value of the `num` argument is still the default.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(""); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)
```

### Evaluated at call time

The default argument is evaluated at _call time_. Unlike with Python (for example), a new object is created each time the function is called.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

This even applies to functions and variables:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Earlier parameters are available to later default parameters

Parameters defined earlier (to the left) are available to later default parameters:

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

This functionality can be approximated like this, which demonstrates how many edge cases are handled:

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Destructured parameter with default value assignment

You can use default value assignment with the [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax.

A common way of doing that is to set an empty object/array as the default value for the destructured parameter; for example: `[x = 1, y = 2] = []`. This makes it possible to pass nothing to the function and still have those values prefilled:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
