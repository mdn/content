---
title: Rest parameters
slug: Web/JavaScript/Reference/Functions/rest_parameters
page-type: javascript-language-feature
browser-compat: javascript.functions.rest_parameters
---

{{jsSidebar("Functions")}}

The **rest parameter** syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html", "taller")}}

## Syntax

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

## Description

A function definition's last parameter can be prefixed with `...` (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.

```js example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
```

The rest parameter is not counted towards the function's [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property.

### The difference between rest parameters and the arguments object

There are three main differences between rest parameters and the {{jsxref("Functions/arguments", "arguments")}} object:

- The `arguments` object is **not a real array**, while rest parameters are {{jsxref("Array")}} instances, meaning methods like {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/forEach", "forEach()")}} or {{jsxref("Array/pop", "pop()")}} can be applied on it directly.
- The `arguments` object has the additional (deprecated) [`callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) property.
- In a non-strict function with simple parameters, the `arguments` object [syncs its indices with the values of parameters](/en-US/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices). The rest parameter array never updates its value when the named parameters are re-assigned.
- The rest parameter bundles all the _extra_ parameters into a single array, but does not contain any named argument defined _before_ the `...restParam`. The `arguments` object contains all of the parameters — including the parameters in the `...restParam` array — bundled into one array-like object.

## Examples

### Using rest parameters

In this example, the first argument is mapped to `a` and the second to `b`, so these named arguments are used as normal.

However, the third argument, `manyMoreArgs`, will be an array that contains the third, fourth, fifth, sixth, …, nth — as many arguments as the user specifies.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- an array
```

Below, even though there is just one value, the last argument still gets put into an array.

```js
// Using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- an array with just one value
```

Below, the third argument isn't provided, but `manyMoreArgs` is still an array (albeit an empty one).

```js
// Using the same function definition from example above

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array
```

Below, only one argument is provided, so `b` gets the default value `undefined`, but `manyMoreArgs` is still an empty array.

```js
// Using the same function definition from example above

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array
```

### Argument length

Since `theArgs` is an array, a count of its elements is given by the {{jsxref("Array/length", "length")}} property. If the function's only parameter is a rest parameter, `restParams.length` will be equal to [`arguments.length`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length).

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Using rest parameters in combination with ordinary parameters

In the next example, a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### From arguments to an array

{{jsxref("Array")}} methods can be used on rest parameters, but not on the `arguments` object:

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // this will never happen
}

console.log(sortArguments(5, 3, 7, 1));
// throws a TypeError (arguments.sort is not a function)
```

Rest parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of arguments to an array.

Before rest parameters, `arguments` need to be converted to a normal array before calling array methods on them:

```js
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — or —
  const normalArray2 = [].slice.call(arguments);
  // — or —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}
```

Now, you can easily gain access to a normal array using a rest parameter:

```js
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
