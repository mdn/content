---
title: "URLPattern: URLPattern() constructor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
page-type: web-api-constructor
browser-compat: api.URLPattern.URLPattern
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

The **`URLPattern()`** constructor returns a new {{domxref("URLPattern")}} object representing the url pattern defined by the parameters.

## Syntax

```js-nolint
new URLPattern(patternObject)
new URLPattern(patternObject, options)
new URLPattern(patternString)
new URLPattern(patternString, baseURL)
new URLPattern(patternString, baseURL, options)
```

### Parameters

- `patternObject` {{Optional_Inline}}

  - : An object that has separate properties for defining the [patterns](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match each part of a URL.

    The object members can be any (or none) of:

    - `protocol` {{Optional_Inline}}
      - : A pattern that matches a URL [protocol](/en-US/docs/Web/API/URL/protocol), such as `http`, `https`, or `"http{s}?"` (to match both https and http).
    - `username` {{Optional_Inline}}
      - : A pattern that matches a URL [username](/en-US/docs/Web/API/URL/username).
    - `password` {{Optional_Inline}}
      - : A pattern that matches a URL [password](/en-US/docs/Web/API/URL/password).
    - `hostname` {{Optional_Inline}}
      - : A pattern that matches a URL [hostname](/en-US/docs/Web/API/URL/hostname).
    - `port` {{Optional_Inline}}
      - : A pattern that matches a URL [port](/en-US/docs/Web/API/URL/port).
        Note that if this is not specified it defaults to `""`, which matches the default port (443).
    - `pathname` {{Optional_Inline}}
      - : A pattern that matches a URL [pathname](/en-US/docs/Web/API/URL/pathname).
    - `search` {{Optional_Inline}}
      - : A pattern that matches a URL [search](/en-US/docs/Web/API/URL/search).
    - `hash` {{Optional_Inline}}
      - : A pattern that matches a URL [hash](/en-US/docs/Web/API/URL/hash).
    - `baseURL` {{Optional_Inline}}
      - : A string that provides an absolute URL from which [undefined less-specific object properties may be inherited](#inheritance_from_a_baseurl).

- `patternString` {{Optional_Inline}}
  - : A string representing URL patterns to match.
    This is formatted as an absolute or relative URL but may contain markup to indicate matching patterns and escape sequences.
    If formatted as a relative URL, then [`baseURL`](#baseurl_2) must also be provided.
- `baseURL` {{Optional_Inline}}

  - : A string that provides an absolute URL from which [undefined less-specific URL-parts may be inherited](#inheritance_from_a_baseurl)
    This must be set when `patternString` is a relative URL, and must not be set if `patternObject` is used (`patternObject.baseURL` may be used to provide inherited values for a `patternObject`, but, unlike this property, is never required).

- `options` {{Optional_Inline}}
  - : An object providing options for matching the given pattern.
    The allowed object members are:
    - `ignoreCase` {{Optional_Inline}}
      - : Enables case-insensitive matching if set to `true`.
        If omitted or set to `false`, matching will be case-sensitive.

> [!NOTE]
> All the URL parts in the `patternObject` properties and the `patternString` are optional.
> If not specified in those parameters, some values may be [inherited](#inheritance_from_a_baseurl) from the `baseURL`, depending on what other URL-parts are defined.
> Omitted parts are normalized to wildcards (`*`), except for the `port`, which is normalized to the empty string/default port.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates one of the following:
    - The given `patternObject`, `patternString` or `baseURL` is not valid or syntactically correct.
    - The given `patternString` is relative, but no `baseURL` is provided to form a complete absolute URL.
    - A `baseURL` is provided, and input is an absolute pattern or a structured object.

## Description

The `URLPattern` constructor can take either a pattern object, or a pattern string and optional baseURL.
Both forms can also take an options object argument that specifies additional matching options, such as case sensitivity.

```js
new URLPattern(patternObject);
new URLPattern(patternString, baseURL);
```

The pattern object used in the first type of constructor describes the URLs that should be matched by specifying patterns for individual URL parts: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash`, and `baseURL`.
If the `baseURL` property is provided it will be parsed as a URL and may be used to populate any other properties that are missing (see the following section [Inheritance from a base URL](#inheritance_from_a_baseurl)).
If the `baseURL` property is missing, then any other missing properties default to the pattern `*` wildcard, which match against any URL.

The second type of constructor takes a URL string that contains patterns embedded in it.
The string may specify an absolute or relative URL: if the pattern is relative, then `baseURL` must be provided as the second argument.
Note that it may be necessary to escape some characters in the URL string if it is ambiguous whether the character is separating different URL components or is part of a pattern.
For example, you must write `about\\:blank` to indicate that the `:` is the protocol suffix and not the start of a `:blank` named group pattern.

### Inheritance from a BaseURL

If a base URL is defined, either in `baseURL` when specifying a relative `patternString` or `patternObject.baseURL` when passing a `patternObject`, patterns for URL-parts _may_ be inherited from the base URL.

The `username` and `password` are never inherited from the base URL when creating an `URLPattern`.
Unless they are explicitly defined they will be normalized to the wildcard value (`"*"`).

In addition, the `URLPattern` will not inherit URL parts from the base URL that are "more specific" than the least-specific part defined in the pattern, where the following lists indicate the order of specificity:

- `protocol` (most specific), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

What this means, for example, is that if the original pattern includes the `protocol` then nothing will be inherited from the base URL.
However if only the `pathname` part is specified in the original pattern, the `protocol`, `hostname` and `port` may be in inherited from the base URL, but the `search` and `hash` will not.

### Protocol wildcard affects default port

Just like the other URL parts, the port can be set explicitly and will inherit from the base URL.
However if omitted it will default to the empty string (default port `443`), rather than the wildcard value.

If you set the wildcard value explicitly on the _protocol_ using the `patternString`, the behaviour is different than if you explicitly set the wildcard on the port:

- `"https://example.com:*"` sets the port to the wildcard string ("matches any port").
- `"https://example.com*"` set the port to the empty string `""` ("matches the default port (443)").

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

// or
let pattern5 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com/some/path/?search=3#param=1",
  //More-specific URL parts are discarded
});
```

### Match the protocol and hostname

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Match the username and password

This sets the username and password URL parts using the pattern string.
Note how the `:` separator needs to be escaped when using the pattern string.
Without this the username pattern would be `myusername:mypassword`.

```js
const pattern = new URLPattern(
  "https://myusername\\:mypassword@example.com/some/path"
);

console.log(pattern.username); // "myusername"
console.log(pattern.password); // "mypassword"
```

For this reason it is often more natural (and safer) to use the object syntax.

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

### Inheritance from the base URL

This provides a real world example of inheritance.
The `pathname` is explicitly specified. The values that are less specific than the pathname, such as the protocol and hostname are inherited.
The more specific values are ignored, and default to their default values (such as `"*"` for the search and hash, and `""` for the port).

```js
const pattern = new URLPattern({
  pathname: "/some/path",
  baseURL: "https://myuser:mypass@example.com/mypath?search=1&p=3#fred",
});

console.log(pattern);
//protocol: https
//username: *
//password: *
//hostname: example.com
//port:
//pathname: /some/path
//search: *
//hash: *
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
