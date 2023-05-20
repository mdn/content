---
title: "URLPattern: URLPattern() constructor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.URLPattern.URLPattern
---

{{APIRef("URLPattern API")}}{{SeeCompatTable}}

The **`URLPattern()`** constructor returns a new {{domxref("URLPattern")}}
object representing the url pattern defined by the parameters.

{{AvailableInWorkers}}

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### Parameters

- `input`
  - : The input pattern that will be used for matching. This can either be a
    string, or an object providing patterns for each URL part
    individually. The object members can be any of:
    - `protocol`
    - `username`
    - `password`
    - `hostname`
    - `port`
    - `pathname`
    - `search`
    - `hash`
    - `baseURL`
      > **Note:** Omitted parts of the object will be treated as wildcards (`*`).
- `baseURL` {{Optional_Inline}}
  - : A string representing the base URL to use in cases where
    `input` is a relative pattern. If not specified, it defaults to `undefined`.
- `options` {{Optional_Inline}}
  - : An object providing options for matching the given pattern. The possible object members are as follows:
    - `ignoreCase`
      - Enables case-insensitive matching if set to `true`. If omitted or set to `false`, matching will be case-sensitive.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates one of the following:
    - The given `input` or `baseURL` is not valid or syntactically correct.
    - The given `input` is relative, but no `baseURL` is provided to form a complete absolute URL.
    - A `baseURL` is provided, and input is an absolute pattern or a structured object.

## Examples

### Matching a pathname

```js
let pattern1 = new URLPattern("https://example.com/books/:id");

// same as
let pattern2 = new URLPattern("/books/:id", "https://example.com");

// or
let pattern3 = new URLPattern({
  protocol: "https",
  hostname: "example.com",
  pathname: "/books/:id",
});

// or
let pattern4 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com",
});
```

### Match the protocol and hostname

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Match all possible structured parts

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":username",
  password: ":password",
  hostname: ":subdomain.example.com",
  port: ":port(80|443)",
  pathname: "/:path",
  search: "*",
  hash: "*",
});
```

### Case-insensitive matching

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Setting the `ignoreCase` option to `true` in the constructor switches all matching operations to case-insensitive for the given pattern:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Usage notes

The `URLPattern` constructor's input pattern can take two forms — a
pattern object, or a pattern string and optional baseURL.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

The first type of constructor takes an object that describes the
URLs that should be matched by specifying patterns for each individual URL part.
Its members can be any of `protocol`, `username`, `password`, `hostname`,
`port`, `pathname`, `search`, `hash`, or `baseURL`. If the `baseURL` property is
provided it will be parsed as a URL and used to populate any other properties
that are missing. If the `baseURL` property is missing, then any other missing
properties default to the pattern `*` wildcard, accepting any input.

The second type of constructor takes a URL string that contains
patterns embedded in it. The URL string may be relative if a `baseURL` is
provided as the second argument. Note that it may be necessary to escape some
characters in the URL string if it is ambiguous whether the character is
separating different URL components or is part of a pattern. For
example, you must write `about\\:blank` to indicate that the `:` is the protocol
suffix and not the start of a `:blank` named group pattern.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
