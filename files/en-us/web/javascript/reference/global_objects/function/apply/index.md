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

The **`apply()`** method calls a function with a given `this` value, and `arguments` provided as an array (or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameters

- `thisArg`

  - : The value of `this` provided for the call to `func`.

    Note that `this` may not be the actual value seen by the method: if the method is a function in {{jsxref("Strict_mode", "non-strict mode", "", 1)}} code, {{jsxref("null")}} and {{jsxref("undefined")}} will be replaced with the global object, and primitive values will be boxed. This argument is required.

- `argsArray` {{optional_inline}}

  - : An array-like object, specifying the arguments with which `func` should be called, or {{jsxref("null")}} or {{jsxref("undefined")}} if no arguments should be provided to the function.

    Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for [browser compatibility](#browser_compatibility) information.

### Return value

The result of calling the function with the specified **`this`** value and arguments.

## Description

> **Note:** While the syntax of this function is almost identical to that of {{jsxref("Function.call", "call()")}}, the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments**.

> **Note:** When the first argument is undefined or null a similar outcome can be achieved using the array [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

You can assign a different `this` object when calling an existing function. `this` refers to the current object (the calling object). With `apply`, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.

`apply` is very similar to {{jsxref("Function.call", "call()")}}, except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With `apply`, you can also use an array literal, for example, `func.apply(this, ['eat', 'bananas'])`, or an {{jsxref("Array")}} object, for example, `func.apply(this, new Array('eat', 'bananas'))`.

You can also use {{jsxref("Functions/arguments", "arguments")}} for the `argsArray` parameter. {{jsxref("Functions/arguments", "arguments")}} is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the `apply` method. You can use `arguments` to pass all the arguments to the called object. The called object is then responsible for handling the arguments.

Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a `length` property, and integer ("index") properties in the range `(0..length - 1)`. For example, you could use a {{domxref("NodeList")}}, or a custom object like `{ 'length': 2, '0': 'eat', '1': 'bananas' }`.

> **Note:** Many older browsers—including Chrome <17 and Internet Explorer <9—don't accept array-like objects, and will throw an exception.

## Examples

### Using apply to append an array to another

You can use `push` to append an element to an array. And, because `push` accepts a variable number of arguments, you can also push multiple elements at once.

But, if you pass an array to `push`, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.

What if that is not what you want? `concat` does have the desired behavior in this case, but it does not append to the _existing_ array—it instead creates and returns a new array.

But you wanted to append to the existing array... So what now? Write a loop? Surely not?

`apply` to the rescue!

```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### Using apply and built-in functions

Clever usage of `apply` allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

As an example, here are `Math.max`/`Math.min`, used to find out the maximum/minimum value in an array.

```js
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

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

But beware: by using `apply` this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded [argument limit of 65536](https://bugs.webkit.org/show_bug.cgi?id=80797).

This is because the limit (and indeed, even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments (actual limits are of course significantly higher), it would be as if the arguments `5, 6, 2, 3` had been passed to `apply` in the examples above, rather than the full array.

If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:

```js
function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
```

### Using apply to chain constructors

You can use `apply` to chain {{jsxref("Operators/new", "constructors", "", 1)}} for an object (similar to Java).

In the following example we will create a global {{jsxref("Function")}} method called `construct`, which will enable you to use an array-like object with a constructor instead of an arguments list.

```js
Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

Example usage:

```js
function MyConstructor(arguments) {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
```

> **Note:** This non-native `Function.construct` method will not work with some native constructors; like {{jsxref("Date")}}, for example. In these cases you have to use the {{jsxref("Function.prototype.bind")}} method.
>
> For example, imagine having an array like the following, to be used with {{jsxref("Global_Objects/Date", "Date")}} constructor: `[2012, 11, 4]`; in this case you have to write something like: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()`.
>
> This is not the best way to do things, and probably not to be used in any production environment.

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
