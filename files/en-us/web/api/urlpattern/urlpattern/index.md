---
title: URLPattern()
slug: Web/API/URLPattern/URLPattern
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - URLPattern
  - URL Pattern API
  - Polyfill
  - Experimental
browser-compat: api.URLPattern.URLPattern
---
{{APIRef("URLPattern API")}}{{SeeCompatTable}}

The **`URLPattern()`** constructor returns a new {{domxref("URLPattern")}}
object representing the url pattern defined by the parameters.

{{AvailableInWorkers}}

## Syntax

```js
new URLPattern(input)
new URLPattern(input, baseURL)
```

### Parameters

- `input`
  - : The pattern that will be used for matching. This can either be a
    string, or an object providing patterns for each URL part
    individually. The object members can be any of `protocol`, `username`,
    `password`, `hostname`, `port`, `pathname`, `search`, `hash`, or `baseURL`.
    Omitted parts in the object will be treated as wildcards (`*`).
- `baseURL` {{Optional_Inline}}
  - : A string representing the base URL to use in cases where
    `input` is a relative pattern. If not specified, it defaults to `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates one of the following:
    - The given pattern or base URL is not valid or syntactically correct.
    - A `baseURL` is provided, and input is an absolute pattern or a structured object.

## Examples

```js
// Matching a pathname
let pattern1 = new URLPattern('https://example.com/books/:id')
// same as
let pattern2 = new URLPattern(
  '/books/:id',
  'https://example.com',
);
// or
let pattern3 = new URLPattern({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/books/:id',
});
// or
let pattern4 = new URLPattern({
  pathname: '/books/:id',
  baseURL: 'https://example.com',
});
```

```js
// Match the protocol and hostname
let pattern = new URLPattern({
  protocol: 'http{s}?',
  hostname: ':subdomain.example.com',
});
```

```js
// Match all possible structured parts
let pattern = new URLPattern({
  protocol: 'http{s}?',
  username: ':username',
  password: ':password',
  hostname: ':subdomain.example.com',
  port: ':port(80|443)',
  pathname: '/:path',
  search: '*',
  hash: '*',
});
```

## Usage notes

The `URLPattern` constructor has two forms. The constructor either takes a
pattern object, or a pattern string and optional baseURL.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

The first type of constructor (see above) takes an object that describes the
URLs that should be matched by specifying patterns for each individual URL part.
Its members can be any of `protocol`, `username`, `password`, `hostname`,
`port`, `pathname`, `search`, `hash`, or `baseURL`. If the baseURL property is
provided it will be parsed as a URL and used to populate any other properties
that are missing. If the baseURL property is missing, then any other missing
properties default to the pattern `*` wildcard, accepting any input.

The second type of constructor (see above) takes a URL string that contains
patterns embedded in it. The URL string may be relative if a base URL is
provided as the second argument. Note, it may be necessary to escape some
characters in the URL string where its ambiguous whether the character is
separating different URL components or if it's instead part of a pattern. For
example, you must write `about\\:blank` to indicate that the `:` is the protocol
suffix and not the start of a `:blank` named group pattern.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
