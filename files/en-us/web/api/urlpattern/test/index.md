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
    If a relative URL, then [`baseURL`](#baseurl) must also be provided and together they must resolve to an absolute URL.
    If the input cannot be parsed, or a relative URL without a base URL is provided, the method will return `false`.
- `baseURL` {{optional_inline}}
  - : A string representing the base URL to use in cases where [`url`](#url) is a relative URL.
    If not specified, it defaults to `undefined`.
    If provided but the base URL cannot be parsed, the method will return `false`.

URL parts that are not specified in the `url`/`input` may be [inherited from a base URL](#inheritance_from_a_baseurl) in some circumstances.
Omitted parts are treated as empty strings.

### Return value

A {{jsxref("boolean")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates that a `baseURL` is provided when an [`input`](#input) object is passed (it should only be passed with the `url` string).

## Description

The method is called on a {{domxref("URLPattern")}}, specifying an input url as a string with an optional base URL, or as object with properties for each URL-part.

The method returns `true` if all components of the test URL/input match all components of the pattern, and `false` if any component don't match.
The method also returns `false` if a relative `url` is passed but `baseURL` is not specified (an absolute test URL cannot be resolved).
Note that when passing an `input` object, `input.baseURL` is always optional.

### Inheritance from a BaseURL

URL-parts that are more specific than the least-specific part defined in the `url` can be inherited from `baseURL` (or from `input.baseURL` for `input`).
Intuitively this means that if the `pathname` part is specified in the input, the parts to its left in a URL may be inherited from the base URL (`protocol`, `hostname` and `port`), while the parts to its right may not (`search` and `hash`).
The `username` and `password` are never inherited from a base URL.

For more information see [Inheritance from a BaseURL](/en-US/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in the API overview.

## Examples

The examples shows how to use the `test()` method to match a URL against a pattern.
In each case the result of the `test()` is printed to the console.

### Testing an absolute URL

First we define the pattern to use for matching URLs.
This pattern matches against URLs that have either `http` or `https` protocol, are subdomains of `.example.com` and have a path that is `/books/` followed by any value.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Next we match against two absolute URL strings.
The first matches but the second doesn't, because the test URL is not a subdomain of `example.com`.

```js
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false
```

### Testing a relative URL

This example uses the same pattern as before to test against a number of relative URLs.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Next we match against some relative URLs.
The case matches as the resolved URL is `https://store.example.com/books/123`, while the second does note because the resolved URL is not a subdomain of `example.com`.

```js
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "http://example.com")); // false
```

This test does not match because the provided URL is relative and no baseURL is provided.
Note that you can define a test that matches against just a pathname, but you need to use the object input.

```js
console.log(pattern.test("/books/123")); // false
```

This test does not match because the base URL is not a valid URL, and together with the `/books/123` does not resolve to an absolute URL.

```js
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
```

### Testing a URL object

This example uses the same pattern as before to test against a number of URLs defined as structured objects.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

The first case matches because it defines a match exactly against each part of the pattern:

```js
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
```

In this code the pathname is present and the missing parts are supplied in the `baseURL`.
The result is the same as the previous code.

```js
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
```

This structured URL does not match the pattern, because the protocol is `file` (not `https` or `http`).

```js
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
