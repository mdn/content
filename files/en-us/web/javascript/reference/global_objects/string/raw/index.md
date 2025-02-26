---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
page-type: javascript-static-method
browser-compat: javascript.builtins.String.raw
---

{{JSRef}}

The **`String.raw()`** static method is a tag function of [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals). This is similar to the `r` prefix in Python, or the `@` prefix in C# for string literals. It's used to get the raw string form of template literals — that is, substitutions (e.g. `${foo}`) are processed, but escape sequences (e.g. `\n`) are not.

{{InteractiveExample("JavaScript Demo: String.raw()")}}

```js interactive-example
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\about.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\about.html"
```

## Syntax

```js-nolint
String.raw(strings)
String.raw(strings, sub1)
String.raw(strings, sub1, sub2)
String.raw(strings, sub1, sub2, /* …, */ subN)

String.raw`templateString`
```

### Parameters

- `strings`
  - : Well-formed template literal array object, like `{ raw: ['foo', 'bar', 'baz'] }`. Should be an object with a `raw` property whose value is an array-like object of strings.
- `sub1`, …, `subN`
  - : Contains substitution values.
- `templateString`
  - : A [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals), optionally with substitutions (`${...}`).

### Return value

The raw string form of a given template literal.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the first argument doesn't have a `raw` property, or the `raw` property is `undefined` or `null`.

## Description

In most cases, `String.raw()` is used with template literals. The first syntax mentioned above is only rarely used, because the JavaScript engine will call this with proper arguments for you, (just like with other [tag functions](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` is the only built-in template literal tag. It has close semantics to an untagged literal since it concatenates all arguments and returns a string. You can even re-implement it with normal JavaScript code.

> [!WARNING]
> You should not use `String.raw` directly as an "identity" tag. See [Building an identity tag](#building_an_identity_tag) for how to implement this.

If `String.raw()` is called with an object whose `raw` property doesn't have a `length` property or a non-positive `length`, it returns an empty string `""`. If `substitutions.length < strings.raw.length - 1` (i.e. there are not enough substitutions to fill the placeholders — which can't happen in a well-formed tagged template literal), the rest of the placeholders are filled with empty strings.

## Examples

### Using String.raw()

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
// \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

String.raw`Hi \${name}!`;
// 'Hi \\${name}!', the dollar sign is escaped; there's no interpolation.
```

### Using String.raw with RegExp

Combining a `String.raw` template literal with the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor allows you to
create regular expressions with dynamic parts (which is not possible with regex literals) without double-escaping (`\\`) regular expression escape sequences (which is not possible with normal string literals). This is also valuable in strings that contain a lot of slashes, such as file paths or URLs.

```js
// A String.raw template allows a fairly readable regular expression matching a URL:
const reRawTemplate = new RegExp(
  String.raw`https://developer\.mozilla\.org/en-US/docs/Web/JavaScript/Reference/`,
);

// The same thing with a regexp literal looks like this, with \/ for
// each forward slash:
const reRegexpLiteral =
  /https:\/\/developer\.mozilla\.org\/en-US\/docs\/Web\/JavaScript\/Reference\//;

// And the same thing written with the RegExp constructor and a
// traditional string literal, with \\. for each period:
const reStringLiteral = new RegExp(
  "https://developer\\.mozilla\\.org/en-US/docs/Web/JavaScript/Reference/",
);

// String.raw also allows dynamic parts to be included
function makeURLRegExp(path) {
  return new RegExp(String.raw`https://developer\.mozilla\.org/${path}`);
}

const reDynamic = makeURLRegExp("en-US/docs/Web/JavaScript/Reference/");
const reWildcard = makeURLRegExp(".*");
```

### Building an identity tag

Many tools give special treatment to literals tagged by a particular name.

```js
// Some formatters will format this literal's content as HTML
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;
```

One might naïvely implement the `html` tag as:

```js
const html = String.raw;
```

This, in fact, works for the case above. However, because `String.raw` would concatenate the _raw_ string literals instead of the "cooked" ones, escape sequences would not be processed.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

This may not be what you want for a "true identity" tag, where the tag is purely for markup and doesn't change the literal's value. In this case, you can create a custom tag and pass the "cooked" (i.e. escape sequences are processed) literal array to `String.raw`, pretending they are raw strings.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Notice the first argument is an object with a `raw` property, whose value is an array-like object (with a `length` property and integer indexes) representing the separated strings in the template literal. The rest of the arguments are the substitutions. Since the `raw` value can be any array-like object, it can even be a string! For example, `'test'` is treated as `['t', 'e', 's', 't']`. The following is equivalent to `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
