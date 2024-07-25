---
title: "SyntaxError: await/yield expression can't be used in parameter"
slug: Web/JavaScript/Reference/Errors/await_yield_in_parameter
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "await expression can't be used in parameter" or "yield expression can't be used in parameter" occurs when the [default parameter](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) expression contains the {{jsxref("Operators/await", "await")}} or {{jsxref("Operators/yield", "yield")}} keyword and has the effect of pausing default parameter evaluation.

## Message

```plain
SyntaxError: Illegal await-expression in formal parameters of async function (V8-based)
SyntaxError: await expression can't be used in parameter (Firefox)
SyntaxError: Cannot use 'await' within a parameter default expression. (Safari)

SyntaxError: Yield expression not allowed in formal parameter (V8-based)
SyntaxError: yield expression can't be used in parameter (Firefox)
SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The default expression must be able to evaluate _synchronously_. If it contains an `await` or `yield` expression, it will pause the evaluation of the default expression, which is not allowed.

> [!NOTE]
> This error is only generated when `await` or `yield` are valid operators in this function context. Otherwise, `await` or `yield` would be parsed as an identifier, and either not cause an error, or cause an error like "reserved identifier", or "unexpected token" if there's an expression following it.

## Examples

### Invalid cases

```js example-bad
function *gen(a = yield 1) {}

async function f(a = await Promise.resolve(1)) {}
```

### Valid cases

You can use the [nullish coalescing assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) to provide a default value instead. If you want to treat `null` and `undefined` differently, you would need to use a condition.

```js example-good
function* gen(a) {
  a ??= yield 1;
}

async function f(a) {
  a ??= await Promise.resolve(1);
}
```

You are also allowed to use `await` or `yield` if the expression is contained in a function expression of the initializer and would not pause the evaluation of the default expression.

```js example-good
async function f(a = (async () => await Promise.resolve(1))()) {}
```

## See also

- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Operators/yield", "yield")}}
