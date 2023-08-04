---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Function.toString
---

{{JSRef}}

The **`toString()`** method returns a string representing the source code of the specified {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Return value

A string representing the source code of the function.

## Description

The {{jsxref("Function")}} object overrides the `toString()` method
inherited from {{jsxref("Object")}}; it does not inherit
{{jsxref("Object.prototype.toString")}}. For user-defined `Function`
objects, the `toString` method returns a string containing the source text
segment which was used to define the function.

JavaScript calls the `toString` method automatically when a
`Function` is to be represented as a text value, e.g. when a function is
concatenated with a string.

The `toString()` method will throw a {{jsxref("TypeError")}} exception
("Function.prototype.toString called on incompatible object"), if its
`this` value object is not a `Function` object.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

If the `toString()` method is called on built-in function objects, a
function created by {{jsxref("Function.prototype.bind()")}}, or
other non-JavaScript functions, then `toString()` returns a
_native function string_ which looks like

```plain
function someName() { [native code] }
```

For intrinsic object methods and functions, `someName` is the initial name of the function; otherwise its content may be implementation-defined, but will always be in property name syntax, like `[1 + 1]`, `someName`, or `1`.

> **Note:** This means using [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) on native function strings is a guaranteed syntax error.

If the `toString()` method is called on a function created by the `Function` constructor, `toString()` returns the source code of a synthesized function declaration named "anonymous" using the provided parameters and function body. For example, `Function("a", "b", "return a + b").toString()` will return:

```plain
function anonymous(a,b
) {
return a + b
}
```

Since ES2018, the spec requires the return value of `toString()` to be the exact same source code as it was declared, including any whitespace and/or comments — or, if the host doesn't have the source code available for some reason, requires returning a native function string. Support for this revised behavior can be found in the [compatibility table](#browser_compatibility).

## Examples

### Comparing actual source code and toString results

```js
function test(fn) {
  console.log(fn.toString());
}

function f() {}
class A {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(A); // "class A { a() {} }"
test(g); // "function* g() {}"
test((a) => a); // "(a) => a"
test({ a() {} }.a); // "a() {}"
test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(Object.getOwnPropertyDescriptor({ get a() {} }, "a").get); // "get a() {}"
test(Object.getOwnPropertyDescriptor({ set a(x) {} }, "a").set); // "set a(x) {}"
test(Function.prototype.toString); // "function toString() { [native code] }"
test(function f() {}.bind(0)); // "function () { [native code] }"
test(Function("a", "b")); // function anonymous(a\n) {\nb\n}
```

Note that after the `Function.prototype.toString()` revision, when `toString()` is called, implementations are never allowed to synthesize a function's source that is not a native function string. The method always returns the exact source code used to create the function — including the [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) examples above. The [`Function`](/en-US/docs/Web/JavaScript/Reference/Functions) constructor itself has the capability of synthesizing the source code for the function (and is therefore a form of implicit [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Getting source text of a function

It is possible to get the source text of a function by coercing it to a string — for example, by wrapping it in a template literal:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

This source text is _exact_, including any interspersed comments (which won't be stored by the engine's internal representation otherwise).

```js
function foo /* a comment */() {
  return "bar";
}
console.log(foo.toString());
// function foo /* a comment */() {
//   return "bar";
// }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
