---
title: Function() constructor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Function.Function
---
{{JSRef}}

<span class="seoSummary">The <strong><code>Function</code> constructor</strong>
creates a new <code>Function</code> <strong>object</strong>. Calling the
constructor directly can create functions dynamically, but suffers from security
and similar (but far less significant) performance issues to
{{jsxref("Global_Objects/eval")}}. However, unlike eval, the
<code>Function</code> constructor creates functions which execute in the global
scope only.</span>

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

## Syntax

```js
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, ... , argN, functionBody)
```

### Parameters

- `arg1, arg2, ... argN`
  - : Names to be used by the function as formal argument names. Each must be a
    string that corresponds to a valid JavaScript identifier, or a list of such
    strings separated with a comma. For example: "`x`", "`theValue`"—or
    "`x,theValue`".
- `functionBody`
  - : A string containing the JavaScript statements comprising the function
    definition.

## Description

`Function` objects created with the `Function` constructor are parsed when the
function is created. This is less efficient than declaring a function with a
{{jsxref("Operators/function", "function expression", "", 1)}}
or
{{jsxref("Statements/function", "function statement", "", 1)}}
and calling it within your code because such functions are parsed with the rest
of the code.

All arguments passed to the function are treated as the names of the identifiers
of the parameters in the function to be created, in the order in which they are
passed. Omitting an argument will result in the value of that parameter being
`undefined`.

Invoking the `Function` constructor as a function (without using the `new`
operator) has the same effect as invoking it as a constructor.

## Examples

### Specifying arguments with the Function constructor

The following code creates a `Function` object that takes two arguments.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// 8
```

The arguments "`a`" and "`b`" are formal argument names that are used in the
function body, "`return a + b`".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Operators/function", "function")}} expression
- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("Operators/function*", "function*")}} expression
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
