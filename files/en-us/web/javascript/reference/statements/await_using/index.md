---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
page-type: javascript-statement
browser-compat: javascript.statements.await_using
sidebar: jssidebar
---

The **`await using`** declaration declares block-scoped local variables that are _asynchronously disposed_. Like {{jsxref("Statements/const", "const")}}, variables declared with `await using` must be initialized and cannot be reassigned. The variable's value must be either `null`, `undefined`, or an object with an [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) or [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method. When the variable goes out of scope, the `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method of the object is called and awaited, to ensure that resources are freed.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : The name of the variable to declare. Each must be a legal JavaScript [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) and _not_ a [destructuring binding pattern](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Initial value of the variable. It can be any legal expression but its value must be either `null`, `undefined`, or an object with an [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) or [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method.

## Description

This declaration can only be used in places where both {{jsxref("Operators/await", "await")}} and {{jsxref("Statements/using", "using")}} can be used, which include:

- Inside a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block) (if the block is also in an async context)
- Inside an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or async generator function body
- At the top level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules)
- In the initializer of a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) (if the `for` loop is also in an async context), or [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop

An `await using` declares an async disposable resource that's tied to the lifetime of the variable's scope (block, function, module, etc.). When the scope exits, the resource is disposed of asynchronously. Its syntax may be somewhat confusing, because the `await` does not have an awaiting effect when the variable is first declared, but only when the variable goes out of scope.

When the variable is first declared, a _disposer_ is retrieved from the object. The `[Symbol.asyncDispose]` property is tried first, and falls back to `[Symbol.dispose]` if `[Symbol.asyncDispose]` is `undefined`. If neither property contains a function, a `TypeError` is thrown. Notably, the `[Symbol.dispose]()` method is wrapped into a function that looks like `async () => { object[Symbol.dispose](); }`, which means if it returns a promise, that promise is _not_ awaited. This disposer is saved to the scope.

When the variable goes out of scope, the disposer is called and awaited. If the scope contains multiple `using` or `await using` declarations, all disposers are run in sequence in the reverse order of declaration, regardless of the type of declaration. All disposers are guaranteed to run (much like the `finally` block in `try...catch...finally`). All errors thrown during disposal, including the initial error that caused the scope exit (if applicable), are all aggregated inside one {{jsxref("SuppressedError")}}, with each earlier exception as the `suppressed` property and the later exception as the `error` property. This `SuppressedError` is thrown after disposal is complete.

The variable is allowed to have value `null` or `undefined`, so the resource can be optionally present. As long as one `await using` variable is declared in this scope, at least one `await` is guaranteed to happen on scope exit, even if the variable actually has value `null` or `undefined`. This prevents the disposal to end synchronously, causing timing issues (see [control flow effects of `await`](/en-US/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` ties resource management to lexical scopes, which is both convenient and sometimes confusing. See below for some examples where it may not behave how you expect. If you want to hand-manage resource disposal, while maintaining the same error handling guarantees, you can use {{jsxref("AsyncDisposableStack")}} instead.

## Examples

You should also check {{jsxref("Statements/using", "using")}} for more examples.

### `await using` with `for await...of`

### Implicit work on scope exit

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("AsyncDisposableStack")}}
