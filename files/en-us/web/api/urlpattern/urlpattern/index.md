---
title: "URLPattern: URLPattern() constructor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
page-type: web-api-constructor
browser-compat: api.URLPattern.URLPattern
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

The **`URLPattern()`** constructor returns a new {{domxref("URLPattern")}} object representing the URLs that will be matched by this pattern.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, options)
new URLPattern(url)
new URLPattern(url, baseURL)
new URLPattern(url, baseURL, options)
```

### Parameters

- `input` {{Optional_Inline}}
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
    - `pathname` {{Optional_Inline}}
      - : A pattern that matches a URL [pathname](/en-US/docs/Web/API/URL/pathname).
    - `search` {{Optional_Inline}}
      - : A pattern that matches a URL [search](/en-US/docs/Web/API/URL/search).
    - `hash` {{Optional_Inline}}
      - : A pattern that matches a URL [hash](/en-US/docs/Web/API/URL/hash).
    - `baseURL` {{Optional_Inline}}
      - : A string that provides an absolute URL from which [undefined less-specific object properties may be inherited](#inheritance_from_a_baseurl).

- `url` {{Optional_Inline}}
  - : A string representing URL patterns to match.

    This is formatted as an absolute or relative URL but may contain markup to indicate [matching patterns](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) and escape sequences.
    If formatted as a relative URL, then [`baseURL`](#baseurl_2) must also be provided.

- `baseURL` {{Optional_Inline}}
  - : A string that provides an absolute URL from which [undefined less-specific URL-parts may be inherited](#inheritance_from_a_baseurl)
    This must be set when `url` is a relative URL, and must not be set if `input` is used (`input.baseURL` may be used to provide inherited values for an `input`, but, unlike this property, is never required).

- `options` {{Optional_Inline}}
  - : An object providing options for matching the given pattern.
    The allowed object members are:
    - `ignoreCase` {{Optional_Inline}}
      - : Enables case-insensitive matching if set to `true`.
        If omitted or set to `false`, matching will be case-sensitive.

> [!NOTE]
> All the URL parts in the `input` properties and the `url` are optional.
> If not specified in those parameters, some values may be [inherited](#inheritance_from_a_baseurl) from the `baseURL`, depending on what other URL-parts are defined.
> Omitted parts are normalized to wildcards (`*`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates one of the following:
    - The given `input`, `url` or `baseURL` is not valid or syntactically correct.
    - The given `url` is relative, but no `baseURL` is provided to form a complete absolute URL.
    - A `baseURL` is provided, and input is an absolute pattern or a structured object.

## Description

The `URLPattern` constructor can take either an "input" object or a URL string and optional baseURL.
Both forms can also take an options object argument that sets additional matching options, such as case sensitivity.

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

The input object used in the first type of constructor describes the URLs that should be matched by specifying patterns for individual URL parts: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash`, and `baseURL`.
If the `baseURL` property is provided it will be parsed as a URL and may be used to populate any other properties that are missing (see the following section [Inheritance from a base URL](#inheritance_from_a_baseurl)).
Properties that are omitted or not filled by the `baseURL` property default to the wildcard string (`*`), which match against any corresponding value in a URL.

The second type of constructor takes a URL string that may contain patterns embedded in it.
The string may specify an absolute or relative URL — if the pattern is relative, then `baseURL` must be provided as the second argument.
Note that it may be necessary to [escape some characters](#escaping_special_characters) in the URL string if it is ambiguous whether the character is separating different URL components or is part of a pattern.

### Inheritance from a BaseURL

URL-parts that are more specific than the least-specific part defined in the `url` _may_ be inherited from `baseURL` (or from `input.baseURL` for `input`).
Intuitively this means that if the `pathname` part is specified in the input, the parts to its left in a URL may be inherited from the base URL (`protocol`, `hostname` and `port`), while the parts to its right may not (`search` and `hash`).
The `username` and `password` are never inherited from the base URL.

For more information see [Inheritance from a BaseURL](/en-US/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in the API overview.

### Hostname in `url` or `baseURL` affects default port

Unlike other URL parts, the port may be implicitly set if you specify an `url` or base URL (either in the `baseURL` parameter or in the object) and don't explicitly specify a port.
In this case the port will be set to the empty string (`""`) and match the default port (`443`).

For example, these patterns all set the port pattern to `""`:

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

If you don't specify the hostname in an `url` or `baseURL`, the port will default to the wildcard string (`*`):

```js
new URLPattern({ pathname: "/foo/*" }); // Port omitted, defaults to '*'
```

#### Escaping special characters

The [pattern syntax](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) includes a number of characters that can occur naturally in URLs, such as:

- `?` indicates both an optional character or group in a pattern and the search part of a URL.
- `:` indicates the start of a named group in a pattern and a separator for username and password, or a hostname and a port.

If you're constructing a `URLPattern` using the [`url`](#url) string parameter these special characters are assumed to be part of the pattern syntax (if there is any ambiguity).
If you are using the characters to represent parts of the URL then you will need to escape them, by preceding the characters with `\\` (or avoid the problem by constructing `URLPattern` using the object syntax).

For example, the following pattern escapes the `?` character, which makes this pattern match a search URL-part of "fred"

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

Similarly, the [Match the username and password](#match_the_username_and_password) example below shows a case where the `:` separator needs to be escaped.

## Examples

### Default pattern

This code demonstrates that URL-parts that are not supplied in a URL or [inherited from a base URL](#inheritance_from_a_baseurl) default to the wildcard value.

```js
console.log(new URLPattern());
console.log(new URLPattern({}));
/*
{
  protocol: "*",
  username: "*",
  password: "*",
  hostname: "*",
  port: "*",
  pathname: "*",
  search: "*",
  hash: "*",
  hasRegExpGroups: false,
};
*/
```

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
  // More-specific URL parts are discarded
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
  "https://myusername\\:mypassword@example.com/some/path",
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
// protocol: https
// username: *
// password: *
// hostname: example.com
// port:
// pathname: /some/path
// search: *
// hash: *
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
