---
title: Rest parameters
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - Functions
  - JavaScript
  - Language feature
  - Rest
  - Rest parameters
browser-compat: javascript.functions.rest_parameters
---
{{jsSidebar("Functions")}}

The **rest parameter** syntax allows a function
to accept an indefinite number of arguments as an array, providing a way to represent
{{interwiki("wikipedia", "Variadic_function", "variadic functions")}} in
JavaScript.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## Syntax

```js
function f(a, b, ...theArgs) {
  // ...
}
```

## Description

A function definition's last parameter can be prefixed with "`...`" (three
U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters
to be placed within a ["standard"
JavaScript array.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Only the last parameter in a function definition can be a rest
parameter.

```js
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

#### Quick reference

A function definition can have only one `...`_restParam_.

```js example-bad
foo(...one, ...wrong, ...wrong)
```

The rest parameter must be the last parameter in the function
definition.

```js example-bad
foo(...wrong, arg2, arg3)
```

```js example-good
foo(arg1, arg2, ...correct)
```

### The difference between rest parameters and the `arguments` object

There are three main differences between rest parameters and the
{{jsxref("Functions/arguments", "arguments")}} object:

- The `arguments` object is **not a real array**, while rest
  parameters are {{jsxref("Global_Objects/Array", "Array")}} instances, meaning methods
  like {{jsxref("Array.sort", "sort")}}, {{jsxref("Array.map", "map")}},
  {{jsxref("Array.forEach", "forEach")}} or {{jsxref("Array/pop", "pop")}} can be
  applied on it directly;
- The `arguments` object has additional functionality specific to itself
  (like the `callee` property).
- The `...restParam` bundles all the extra parameters into a single array,
  therefore it does not contain any named argument defined **before** the
  `...restParam`. Whereas the `arguments` object contains all of
  the parameters -- including all of the stuff in the `...restParam` --
  **un**bundled.

### From arguments to an array

Rest parameters were introduced to reduce the boilerplate code that was commonly used
for converting a set of arguments to an array.

```js
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}
```

## Examples

### Using rest parameters

In this example, the first argument is mapped to `a` and the second to
`b`, so these named arguments are used as normal.

However, the third argument, `manyMoreArgs`, will be an array that contains
the third, fourth, fifth, sixth ...
nth — as many arguments that the user includes.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array
```

Below, even though there is just one value, the last argument still gets put into an
array.

```js
// using the same function definition from example above

myFun("one", "two", "three")

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- notice it's an array, even though there's just one value
```

Below, the third argument isn't provided, but `manyMoreArgs` is still an
array (albeit an empty one).

```js
// using the same function definition from example above

myFun("one", "two")

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- yip, still an array
```

### Argument length

Since `theArgs` is an array, a count of its elements is given by the
`length` property:

```js
function fun1(...theArgs) {
  console.log(theArgs.length)
}

fun1()         // 0
fun1(5)        // 1
fun1(5, 6, 7)  // 3
```

### Using rest parameters in combination with ordinary parameters

In the next example, a rest parameter is used to collect all parameters after the first
parameter into an array. Each one of the parameter values collected into the array is
then multiplied by the first parameter, and the array is returned:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => {
    return multiplier * element
  })
}

let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]
```

### Rest parameters are real arrays; the arguments object is not.

`Array` methods can be used on rest parameters, but not on the
`arguments` object:

```js
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort()
  return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort()
  return sortedArgs  // this will never happen
}

console.log(sortArguments(5, 3, 7, 1))
// throws a TypeError (arguments.sort is not a function)
```

To use `Array` methods on the `arguments` object, it must be
converted to a real array first.

```js
function sortArguments() {
  let args = Array.from(arguments)
  let sortedArgs = args.sort()
  return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Spread
  syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (also ‘`...`’)
- [Arguments
  object](/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions "Functions and function scope")
- [Original
  proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript
  arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
- [Destructuring
  assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
