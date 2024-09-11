---
title: "SyntaxError: new keyword cannot be used with an optional chain"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "new keyword cannot be used with an optional chain" occurs when the constructor of a {{jsxref("Operators/new", "new")}} expression is an [optional chain](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), or if there's an optional chain between the constructor and the parenthesized list of arguments.

## Message

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There are two ways to get this error. The first one is if the constructor expression is an optional chain expression, like this:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

The second one is if `?.` occurs between the constructor and the arguments list, like this:

```js-nolint
new Intl.DateTimeFormat?.();
```

Optional `new` is specifically forbidden because its syntax is complicated (`new` with and without arguments), and the result is unclear (it would be the only case where `new` does not evaluate to an object value). You need to translate the optional chaining to its underlying condition (see [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) for more information).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Remember that optional chaining only short-circuits within a parenthesized unit. If you parenthesize your constructor expression, the optional chaining will not cause an error, because now the constructor does not short-circuit and the result is clear (the constructor will produce `undefined` and then cause the `new` expression to throw).

```js-nolint
new (Intl?.DateTimeFormat)(); // Throws if Intl?.DateTimeFormat is undefined
```

However this is a bit nonsensical anyway because optional chaining prevents errors inside the property access chain, but is then guaranteed to generate an error when calling `new`. You would probably still want to use a conditional check.

Note that optional chaining is only forbidden as the constructor expression. You can use optional chaining inside the argument list, or use optional chaining on the `new` expression as a whole.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Note that there's no needs to use `?.` on the `new` expression itself: `new a()?.b`, because `new` is guaranteed to produce a non-nullish object value.

## See also

- {{jsxref("Operators/new", "new")}}
- [Optional chaining (`?.`)](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Original discussion on whether "optional new" should be allowed](https://github.com/tc39/proposal-optional-chaining/issues/22)
