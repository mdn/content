---
title: URLPattern.exec()
slug: Web/API/URLPattern/exec
tags:
  - API
  - Method
  - Reference
  - URLPattern
  - URL Pattern API
  - Polyfill
  - Experimental
browser-compat: api.URLPattern.exec
---

{{APIRef("URL Pattern API")}}

The **`exec()`**method of the {{domxref("URLPattern")}} interface takes a URL or
object of URL parts, and returns either an object containing the results of
matching the URL to the pattern, or `null` if the URL does not match the
pattern.

{{AvailableInWorkers}}

## Syntax

```js
exec(input);
exec(input, baseURL);
```

### Parameters

- `input`
  - : The URL or URL parts to match against. This can either be a
    {{domxref("USVString")}}, or an object providing the individual URL parts.
    The object members can be any of `protocol`, `username`, `password`,
    `hostname`, `port`, `pathname`, `search`, `hash`, or `baseURL`. Omitted
    parts in the object will be treated as empty strings. If the input cannot be
    parsed, or a relative URL without a base is provided, the method will return
    `null`.
- `baseURL` {{optional_inline}}
  - : A {{domxref("USVString")}} representing the base URL to use in cases where
    `input` is a relative URL. If not specified, it defaults to `undefined`. If
    this parameter cannot be parsed, the method will return `null`.

### Return value

An {{jsxref("object")}} with an `inputs` key containing the array of arguments
passed into the function, and keys for each of the URL parts containing the
matched input, and matched groups for that part.

## Examples

This example shows how to use the `exec()` method to match a URL against a
pattern. The example prints the result of the `exec()` calls to the console.

```js
const pattern = new URLPattern('http{s}?://*.example.com/books/:id');

// Absolute URL strings
console.log(pattern.exec('https://example.com/books/123')); // null
let match = pattern.exec('https://store.example.com/books/123');
console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {} }
console.log(match.password); // { input: "", groups: {} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "1": "123" } }
console.log(match.search); // { input: "", groups: {} }
console.log(match.hash); // { input: "", groups: {} }

// Relative URL strings
pattern.test('/books/123', 'http://store.example.com'); // returns object
pattern.test('/books/123', 'data:text/plain,hello world!'); // returns object
pattern.test('/books/123'); // returns null

// Structured objects
pattern.test({
  pathname: '/books/123',
  baseURL: 'http://store.example.com',
}); // returns object
pattern.test({
  protocol: 'https',
  hostname: 'store.example.com',
  pathname: '/books/123',
}); // returns object
pattern.test({
  protocol: 'file',
  hostname: 'store.example.com',
  pathname: '/books/123',
}); // returns null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
