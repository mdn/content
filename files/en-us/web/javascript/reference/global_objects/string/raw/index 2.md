---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.raw
---
{{JSRef}}

The static **`String.raw()`** method
is a tag function of [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals).
This is _similar_ to the `r` prefix in Python, or the `@`
prefix in C# for string literals. (But it is not _identical_; see explanations
in [this issue](https://bugs.chromium.org/p/v8/issues/detail?id=5016).)
It's used to get the raw string form of template literals, that is, substitutions (e.g.
`${foo}`) are processed, but escapes (e.g. `\n`) are not.

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## Syntax

```js
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

### Parameters

- `callSite`
  - : Well-formed template call site object, like
    `{ raw: ['foo', 'bar', 'baz'] }`.
- `...substitutions`
  - : Contains substitution values.
- `templateString`
  - : A {{jsxref("template_literals", "template literal", "", 1)}}, optionally with
    substitutions (`${...}`).

### Return value

The raw string form of a given template literal.

### Exceptions

- {{jsxref("TypeError")}}
  - : A {{jsxref("TypeError")}} is thrown if the first argument is not a well-formed
    object.

## Description

In most cases, `String.raw()` is used with template literal. The first
syntax mentioned above is only rarely used, because the JavaScript engine will call this
with proper arguments for you, (just like with other [tag
functions](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals)).

`String.raw()` is the only built-in tag function of template literals. It
works just like the default template function and performs concatenation. You can even
re-implement it with normal JavaScript code.

## Examples

### Using String.raw()

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.raw` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
