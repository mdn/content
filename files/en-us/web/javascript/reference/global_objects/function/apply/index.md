---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.Function.apply
---
{{JSRef}}

The **`apply()`** method calls the specified function with a given `this` value, and `arguments` provided as an array (or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameters

- `thisArg`
  - : The value of `this` provided for the call to `func`. If the function is not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be converted to objects.
- `argsArray` {{optional_inline}}
  - : An array-like object, specifying the arguments with which `func` should be called, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) if no arguments should be provided to the function.

### Return value

The result of calling the function with the specified `this` value and arguments.

## Description

> **Note:** This function is almost identical to {{jsxref("Function.prototype.call()", "call()")}}, except that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments** — for example, `func.apply(this, ['eat', 'bananas'])` vs. `func.call(this, 'eat', 'bananas')`.

You can assign a different `this` object when calling an existing function. `this` refers to the current object (the calling object). With `apply`, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.

You can also use any kind of object which is array-like as the second parameter. In practice, this means that it needs to have a `length` property, and integer ("index") properties in the range `(0..length - 1)`. For example, you could use a {{domxref("NodeList")}}, or a custom object like `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. You can also use {{jsxref("Functions/arguments", "arguments")}}, for example:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

With the [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and parameter [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), this can be rewritten as:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

In general, `fn.apply(null, args)` is equivalent to `fn(...args)` with the parameter spread syntax.

## Examples

### Using apply to append an array to another

You can use {{jsxref("Array.prototype.push()")}} to append an element to an array. Because `push()` accepts a variable number of arguments, you can also push multiple elements at once. But if you pass an array to `push()`, it will actually add that array as a single element, instead of adding the elements individually, ending up with an array inside an array. On the other hand, {{jsxref("Array.prototype.concat()")}} does have the desired behavior in this case, but it does not append to the _existing_ array—it instead creates and returns a new array.

In this case, you can use `apply` to implicitly "spread" an array as a series of arguments.

```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

The same effect can be achieved with the spread syntax.

```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### Using apply and built-in functions

Clever usage of `apply` allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

As an example, here are {{jsxref("Global_Objects/Math/max", "Math.max")}}/{{jsxref("Global_Objects/Math/min", "Math.min")}}, used to find out the maximum/minimum value in an array.

```js
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], …)
// or Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

But beware: by using `apply` this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded [argument limit of 65536](https://bugs.webkit.org/show_bug.cgi?id=80797).)

This is because the limit (and indeed, even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments (actual limits are of course significantly higher), it would be as if the arguments `5, 6, 2, 3` had been passed to `apply` in the examples above, rather than the full array.

If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:

```js
function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(submin, min);
  }

  return min;
}

const min = minOfArray([5, 6, 2, 3, 7]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Reflect.apply()")}}
- {{jsxref("Operators/Spread_syntax", "Spread syntax", "", 1)}}
