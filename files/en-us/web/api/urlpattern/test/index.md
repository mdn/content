---
title: "URLPattern: test() method"
short-title: test()
slug: Web/API/URLPattern/test
page-type: web-api-instance-method
browser-compat: api.URLPattern.test
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`test()`** method of the {{domxref("URLPattern")}} interface takes a URL string or object of URL parts, and returns a boolean indicating if the given input matches the current pattern.

## Syntax

```js-nolint
test(input)
test(url)
test(url, baseURL)
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

A {{jsxref("boolean")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates that a `baseURL` is provided, but the `url` is the URL object instead of a string.

## Description

The method is called on a {{domxref("URLPattern")}}, specifying an input url as a string with an optional base URL, or as object with properties for each URL-part.

The method returns `true` if all components of the test URL/input match all components of the pattern, and `false` if any component don't match.
The method also returns `false` if a relative `url` is passed but `baseURL` is not specified (an absolute test URL cannot be resolved).
Note that when passing an `input` object, `input.baseURL` is always optional.

### Inheritance from a BaseURL

URL-parts that are more specific than the least-specific part defined in the `url` _may_ be inherited from `baseURL` (or from `input.baseURL` for `input`).
Intuitively this means that if the `pathname` part is specified in the input, the parts to its left in a URL may be inherited from the base URL (`protocol`, `hostname` and `port`), while the parts to its right may not (`search` and `hash`).
The `username` and `password` are never inherited from a base URL.

For more information see [Inheritance from a BaseURL](/en-US/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in the API overview.

## Examples

This example shows how to use the `test()` method to match a URL against a pattern.
The example prints the result of the `test()` calls to the console.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL strings
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false

// Relative URL strings
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
console.log(pattern.test("/books/123")); // false

// Structured objects
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  })
); // true
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  })
); // true
console.log(
  pattern.test({
    protocol: "file",
    hostname: "store.example.com",
    pathname: "/books/123",
  })
); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
