---
title: The arguments object
slug: Web/JavaScript/Reference/Functions/arguments
page-type: javascript-language-feature
browser-compat: javascript.functions.arguments
---

{{jsSidebar("Functions")}}

**`arguments`** is an array-like object accessible inside [functions](/en-US/docs/Web/JavaScript/Guide/Functions) that contains the values of the arguments passed to that function.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Description

> **Note:** In modern code, [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) should be preferred.

The `arguments` object is a local variable available within all non-[arrow](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) functions. You can refer to a function's arguments inside that function by using its `arguments` object. It has entries for each argument the function was called with, with the first entry's index at `0`.

For example, if a function is passed 3 arguments, you can access them as follows:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

The `arguments` object is useful for functions called with more arguments than they are formally declared to accept, called [_variadic functions_](https://en.wikipedia.org/wiki/Variadic_function), such as {{jsxref("Math.min()")}}. This example function accepts any number of string arguments and returns the longest one:

```js
function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

You can use {{jsxref("Functions/arguments/length", "arguments.length")}} to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's {{jsxref("Function/length", "length")}} property.

### Assigning to indices

Each argument index can also be set or reassigned:

```js
arguments[1] = "new value";
```

Non-strict functions that only have simple parameters (that is, no rest, default, or destructured parameters) will sync the new value of parameters with the `arguments` object, and vice versa:

```js
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99
```

Non-strict functions that _are_ passed [rest](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters will not sync new values assigned to parameters in the function body with the `arguments` object. Instead, the `arguments` object in non-strict functions with complex parameters will always reflect the values passed to the function when the function was called.

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// An untracked default parameter
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

This is the same behavior exhibited by all [strict-mode functions](/en-US/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler), regardless of the type of parameters they are passed. That is, assigning new values to parameters in the body of the function never affects the `arguments` object, nor will assigning new values to the `arguments` indices affect the value of parameters, even when the function only has simple parameters.

> **Note:** You cannot write a `"use strict";` directive in the body of a function definition that accepts rest, default, or destructured parameters. Doing so will throw [a syntax error](/en-US/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### arguments is an array-like object

`arguments` is an array-like object, which means that `arguments` has a {{jsxref("Functions/arguments/length", "length")}} property and properties indexed from zero, but it doesn't have {{jsxref("Array")}}'s built-in methods like {{jsxref("Array/forEach", "forEach()")}} or {{jsxref("Array/map", "map()")}}. However, it can be converted to a real `Array`, using one of [`slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, or [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

For common use cases, using it as an array-like object is sufficient, since it both [is iterable](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) and has `length` and number indices. For example, [`Function.prototype.apply()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) accepts array-like objects.

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## Properties

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : The number of arguments that were passed to the function.
- [`arguments[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Returns a new [array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) object that contains the values for each index in `arguments`.

## Examples

### Defining a function that concatenates several strings

This example defines a function that concatenates several strings. The function's only formal argument is a string containing the characters that separate the items to concatenate.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

You can pass as many arguments as you like to this function. It returns a string list using each argument in the list:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Defining a function that creates HTML lists

This example defines a function that creates a string containing HTML for a list. The only formal argument for the function is a string that is `"u"` if the list is to be [unordered (bulleted)](/en-US/docs/Web/HTML/Element/ul), or `"o"` if the list is to be [ordered (numbered)](/en-US/docs/Web/HTML/Element/ol). The function is defined as follows:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

You can pass any number of arguments to this function, and it adds each argument as a list item to a list of the type indicated. For example:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Using typeof with arguments

The {{jsxref("Operators/typeof", "typeof")}} operator returns `'object'` when used with `arguments`

```js
console.log(typeof arguments); // 'object'
```

The type of individual arguments can be determined by indexing `arguments`:

```js
console.log(typeof arguments[0]); // returns the type of the first argument
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
