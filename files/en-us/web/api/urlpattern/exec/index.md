---
title: "URLPattern: exec() method"
short-title: exec()
slug: Web/API/URLPattern/exec
page-type: web-api-instance-method
browser-compat: api.URLPattern.exec
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`exec()`** method of the {{domxref("URLPattern")}} interface takes a URL or object of URL parts, and returns either an object containing the results of matching the URL to the pattern, or `null` if the URL does not match the pattern.

## Syntax

```js-nolint
exec(input)
exec(url)
exec(url, baseURL)
```

### Parameters

- `input`
  - : An object providing the individual URL parts.
    The object members can be any of `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash`, or `baseURL`.
- `url`
  - : A string defining an absolute or relative URL.
    If a relative URL, then `baseURL` must also be provided and together they must resolve to an absolute URL.
    If the input cannot be parsed, or a relative URL without a base URL is provided, the method will return `false`.
- `baseURL` {{optional_inline}}
  - : A string representing the base URL to use in cases where `url` is a relative URL.
    If not specified, it defaults to `undefined`.
    If provided but the base URL cannot be parsed, the method will return `false`.

URL parts that are not specified in the `url`/`input` may be [inherited from a base URL](inheritance_from_a_baseurl).
Omitted parts are treated as empty strings.

### Return value

An {{jsxref("object")}} with an `inputs` key containing the array of arguments passed into the function, and keys for each of the URL parts containing the matched input, and matched groups for that part.

`null` if the inputs did not match the pattern.

## Description

The method is called on a {{domxref("URLPattern")}}, specifying an input url as a string with an optional base URL, or as object with properties for each URL-part.

The method returns an object containing the results of matching the URL to the pattern, or `null` if the URL does not match the pattern.
It also returns `null` if a relative `url` is passed but `baseURL` is not specified (an absolute test URL cannot be resolved).
Note that when passing an `input` object, `input.baseURL` is always optional.

### Inheritance from a BaseURL

URL-parts that are more specific than the least-specific part defined in the `url` _may_ be inherited from `baseURL` (or from `input.baseURL` for `input`).
Intuitively this means that if the `pathname` part is specified in the input, the parts to its left in a URL may be inherited from the base URL (`protocol`, `hostname` and `port`), while the parts to its right may not (`search` and `hash`).
The `username` and `password` are never inherited from a base URL.

For more information see [Inheritance from a BaseURL](/en-US/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in the API overview.

## Examples

This example shows how to use the `exec()` method to match a URL against a pattern.
The example prints the result of the `exec()` calls to the console.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL strings
console.log(pattern.exec("https://s.example.com/books/123")); // null
let match = pattern.exec("https://store.example.com/books/123");
console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {} }
console.log(match.password); // { input: "", groups: {} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {} }
console.log(match.hash); // { input: "", groups: {} }

// Relative URL strings
pattern.exec("/books/123", "http://store.example.com"); // returns object
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns object
pattern.exec("/books/123"); // returns null

// Structured objects
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
