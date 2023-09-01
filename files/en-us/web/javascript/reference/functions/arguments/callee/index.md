---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
page-type: javascript-instance-data-property
status:
  - deprecated
browser-compat: javascript.functions.arguments.callee
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> **Note:** Accessing `arguments.callee` in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) will throw a {{jsxref("TypeError")}}. If a function must reference itself, either give the [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) a name or use a [function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function).

The **`arguments.callee`** data property contains the currently executing function that the arguments belong to.

## Value

A reference to the currently executing function.

{{js_property_attributes(1, 0, 1)}}

> **Note:** `callee` is a data property only in non-strict functions with simple parameters (in which case the `arguments` object is also [auto-syncing](/en-US/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Otherwise, it is an accessor property whose getter and setter both throw a {{jsxref("TypeError")}}.

## Description

`callee` is a property of the `arguments` object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").

(The text below is largely adapted from [a Stack Overflow answer by olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

Early versions of JavaScript did not allow named function expressions, and for this reason you could not make a recursive function expression.

For example, this syntax worked:

```js
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

but:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
});
```

did not. To get around this `arguments.callee` was added so you could do

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

However, the design of `arguments.callee` has multiple issues. The first problem is that the recursive call will get a different `this` value. For example:

```js
const global = this;

const sillyFunction = function (recursed) {
  if (this !== global) {
    console.log("This is:", this);
  } else {
    console.log("This is the global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
};

sillyFunction();
// This is the global
// This is: [object Arguments]
```

In addition, references to `arguments.callee` make inlining and tail recursion impossible in the general case. (You can achieve it in select cases through tracing, etc., but even the best code is suboptimal due to checks that would not otherwise be necessary.)

ECMAScript 3 resolved these issues by allowing named function expressions. For example:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

This has numerous benefits:

- the function can be called like any other from inside your code
- it does not create a variable in the outer scope ([except for IE 8 and below](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- it has better performance than accessing the arguments object

Strict mode has banned other properties that leak stack information, like the [`caller`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) property of functions. This is because looking at the call stack has one single major effect: it makes a large number of optimizations impossible, or much more difficult. For example, if you cannot guarantee that a function `f` will not call an unknown function, it is not possible to inline `f`.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

If the JavaScript interpreter cannot guarantee that all the provided arguments are numbers at the point that the call is made, it needs to either insert checks for all the arguments before the inlined code, or it cannot inline the function. This means any call site that may have been trivially inlinable accumulates a large number of guards. Now in this particular case a smart interpreter should be able to rearrange the checks to be more optimal and not check any values that would not be used. However in many cases that's just not possible and therefore it becomes impossible to inline.

## Examples

### Using arguments.callee in an anonymous recursive function

A recursive function must be able to refer to itself. Typically, a function refers to itself by its name. However, an anonymous function (which can be created by a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) or the [`Function` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)) does not have a name. Therefore if there is no accessible variable referring to it, the only way the function can refer to itself is by `arguments.callee`.

The following example defines a function, which, in turn, defines and returns a factorial function. This example isn't very practical, and there are nearly no cases where the same result cannot be achieved with [named function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function).

```js
function create() {
  return function (n) {
    if (n <= 1) {
      return 1;
    }
    return n * arguments.callee(n - 1);
  };
}

const result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

### Recursion of anonymous functions with a Y-combinator

Although function expressions can now be named, [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) always remain anonymous, which means they cannot reference themselves without being assigned to a variable first. Fortunately, in Lambda calculus there's a very good solution which allows a function to both be anonymous and self-referential. The technique is called a [Y-combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator). Here we will not explain _how_ it works, only _that_ it works.

```js
// The Y-combinator: a utility function!
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // Wrap the higher-order function in the Y-combinator
    // "factorial" is not a function's name: it's introduced as a parameter
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]
```

> **Note:** This method allocates a new closure for every iteration, which may significantly increase memory usage. It's only here to demonstrate the possibility, but should be avoided in production. Use a temporary variable or a named function expression instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
