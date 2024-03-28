---
title: "URLPattern: test() method"
short-title: test()
slug: Web/API/URLPattern/test
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.URLPattern.test
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`test()`** method of the {{domxref("URLPattern")}} interface takes a URL or
object of URL parts, and returns a boolean indicating if the given input matches
the current pattern.

## Syntax

```js-nolint
test(input)
test(input, baseURL)
```

### Parameters

- `input`
  - : The URL or URL parts to match against. This can either be a
    string, or an object providing the individual URL parts.
    The object members can be any of `protocol`, `username`, `password`,
    `hostname`, `port`, `pathname`, `search`, `hash`, or `baseURL`. Omitted
    parts in the object will be treated as empty strings. If the input cannot be
    parsed, or a relative URL without a base is provided, the method will return
    `null`.
- `baseURL` {{optional_inline}}
  - : A string representing the base URL to use in cases where
    `input` is a relative URL. If not specified, it defaults to `undefined`. If
    this parameter cannot be parsed, the method will return `false`.

### Return value

A {{jsxref("boolean")}}.

## Examples

This example shows how to use the `test()` method to match a URL against a
pattern. The example prints the result of the `test()` calls to the console.

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
  }),
); // true
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
console.log(
  pattern.test({
    protocol: "file",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
