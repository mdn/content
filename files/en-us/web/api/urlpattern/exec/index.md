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
    If a relative URL, then [`baseURL`](#baseurl) must also be provided and together they must resolve to an absolute URL.
    If the input cannot be parsed, or a relative URL without a base URL is provided, the method will return `false`.
- `baseURL` {{optional_inline}}
  - : A string representing the base URL to use in cases where [`url`](#url) is a relative URL.
    If not specified, it defaults to `undefined`.
    If provided but the base URL cannot be parsed, the method will return `false`.

URL parts that are not specified in the `url`/`input` may be [inherited from a base URL](#inheritance_from_a_baseurl) in some circumstances.
Omitted parts are treated as empty strings.

### Return value

An {{jsxref("object")}} that defines the matching elements and groups, or `null` if the passed inputs do not match the pattern.

The object has the following properties:

- `inputs`

  - : An array containing the inputs passed to the `exec()` function.
    This will either contain a passed `input` object, an an absolute `url` string, or a relative `url` and a `baseURL`.

- `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, and `hash`
  - : Each URL-part property contains an object with the following properties:
    - `input`
      - : The part of the input corresponding to the current URL-part property (which must have matched the pattern).
        This might be the empty string ("").
    - `groups`
      - : An object with properties for each match group in the URL part (if any), and the corresponding matched values in the inputs.
        The group properties numbered of unnamed match groups (such as the wildcard) and named to match the group for named match groups.

### Exceptions

- {{jsxref("TypeError")}}
  - : Indicates that a `baseURL` is provided when an [`input`](#input) object is passed (it should only be passed with the `url` string).

## Description

The method is called on a {{domxref("URLPattern")}}, specifying an input url as a string with an optional base URL, or as object with properties for each URL-part.

The method returns an object containing the results of matching the URL to the pattern, or `null` if the URL does not match the pattern.
It also returns `null` if a relative `url` is passed but `baseURL` is not specified (an absolute test URL cannot be resolved).
Note that when passing an `input` object, `input.baseURL` is always optional.

### Inheritance from a BaseURL

URL-parts that are more specific than the least-specific part defined in the `url` can be inherited from `baseURL` (or from `input.baseURL` for `input`).
Intuitively this means that if the `pathname` part is specified in the input, the parts to its left in a URL may be inherited from the base URL (`protocol`, `hostname` and `port`), while the parts to its right may not (`search` and `hash`).
The `username` and `password` are never inherited from a base URL.

For more information see [Inheritance from a BaseURL](/en-US/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in the API overview.

## Examples

The examples shows how to use the `exec()` method to match a URL against a pattern.

### Matching an absolute URL

First we define the pattern to use for matching URLs.
This pattern matches against URLs that have either `http` or `https` protocol, are subdomains of `.example.com` and have a path that is `/books/` followed by any value.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Next we test the URL string `"https://store.example.com/books/123"` against this pattern, and then separately log the objects for each property.
Note that the `input` shows the input in the URL that matches the pattern.
In many cases this is the empty string (`""`) because the input URL does not specify the particular URL part (which matches because the corresponding pattern by default uses a wildcard match the URL parts it doesn't specify).

```js
let match = pattern.exec("https://store.example.com/books/123");

console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {"0": ""} }
console.log(match.password); // { input: "", groups: {"0": ""} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {"0": ""} }
console.log(match.hash); // { input: "", groups: {"0": ""} }
```

Note also how the `pathname` input `"/books/123"` matches to the pattern `/books/:id`, and `groups` includes a named property `id` that contains the matched value in the input.

### Matching a relative URL

This example uses the same pattern as before to match against a number of relative URLs and their corresponding base URLs.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

The code below matches effectively the same absolute URL as in the previous example, but split into a relative `url` string and a base URL.
The returned object differs only in the `inputs`:

```js
match = pattern.exec("/books/123", "http://store.example.com"); // returns object
console.log(match.inputs); // ['/books/123', 'https://store.example.com']
```

The two examples below both return `null`.
The first example doesn't match because the relative URL and base URL do not resolve to a valid absolute URL.
The second example doesn't match because no base URL is provided.

```js
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns null
pattern.exec("/books/123"); // returns null
```

### Matching with a URL object

This example uses the same pattern as before to match against a number of URLs defined as structured objects.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

This code tests against the same URL that was used in the previous example [Matching an absolute URL](#matching_an_absolute_url).
In this case those though it is passed as a structured object.
Since it is the same URL the only thing that changes is that the `inputs` property array will contain the object passed below.

```js
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
```

The following code also matches, but this time the `protocol` is `http`, inherited from the `baseURL`.
The object returned would be similar except for the `protocol.input`, which would be `http`, and the `inputs` array would match the passed object.

```js
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
```

The following code doesn't match because the protocol `file` is not one of the options specified in the pattern (`http` or `https`).
This returns `null`.

```js
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
