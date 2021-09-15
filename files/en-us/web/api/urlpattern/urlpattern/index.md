---
title: URLPattern()
slug: Web/API/URLPattern/URLPattern
tags:
  - API
  - Constructor
  - Reference
  - URLPattern
  - URLPattern API
  - Polyfill
  - Experimental
browser-compat: api.URLPattern.URLPattern
---

{{APIRef("URLPattern API")}}

The **`URLPattern()`** constructor returns a new {{domxref("URLPattern")}}
object representing the url pattern defined by the parameters.

{{AvailableInWorkers}}

## Syntax

```js
new URLPattern(input);
new URLPattern(input, baseURL);
```

### Parameters

- `input`
  - : The pattern that will be used for matching. This can either be a
    {{domxref("USVString")}}, or an object providing patterns for each URL part
    individually. The object members can be any of `protocol`, `username`,
    `password`, `hostname`, `port`, `pathname`, `search`, `hash`, or `baseURL`.
    Omitted parts in the object will be treated as wildcards (`*`).
- `baseURL` {{optional_inline}}
  - : A {{domxref("USVString")}} representing the base URL to use in cases where
    `input` is a relative pattern. If not specified, it defaults to `undefined`.

### Exceptions

| Exception               | Explanation                                                                                                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | Indicates one of the following: :<ul><li>The given pattern or base URL is not valid or syntactically correct.</li><li>A <code>baseURL</code> is provided, and input is an absolute pattern or a structured object.</li></ul> |

## Examples

```js
// Matching a pathname
let pattern = new URLPattern('https://example.com/books/:id')
    = new URLPattern(
        '/books/:id',
        'https://example.com',
      )
    = new URLPattern({
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/books/:id',
      })
    = new URLPattern({
        pathname: '/books/:id',
        baseURL: 'https://example.com',
      });

// Match the protocol and hostname
let pattern = new URLPattern({
    protocol: 'http{s}?',
    hostname: ':subdomain.example.com',
  });

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
