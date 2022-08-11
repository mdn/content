---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.URLSearchParams
---
{{ApiRef("URL API")}}

The **`URLSearchParams()`** constructor creates and returns a
new {{domxref("URLSearchParams")}} object.

{{availableinworkers}}

## Syntax

```js
new URLSearchParams()
new URLSearchParams(init)
```

### Parameters

- `init` {{optional_inline}}
  - : One of:
    - A string, which will be parsed from `application/x-www-form-urlencoded` format. A leading `'?'` character is ignored.
    - A literal sequence of name-value string pairs, or any object — such as a {{domxref("FormData")}} object — with an [iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators) that produces a sequence of string pairs. Note that {{domxref("File")}} entries will be serialized as `[object File]` rather than as their filename (as they would in an `application/x-www-form-urlencoded` form).
    - A record of string keys and string values. Note that nesting is not supported.

### Return value

A {{domxref("URLSearchParams")}} object instance.

## Examples

The following example shows how to create a {{domxref("URLSearchParams")}} object from
various inputs.

```js
// Retrieve params via url.search, passed into ctor
const url = new URL('https://example.com?foo=1&bar=2');
const params = new URLSearchParams(url.search);

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// Pass in a record
const params4 = new URLSearchParams({"foo": "1", "bar": "2"});
```

This example shows how to build a new URL with an object of search parameters from an existing URL that has search parameters.

```js
const url = new URL('https://example.com/?a=hello&b=world');

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
    c: 'a',
    d: new String(2),
    e: false.toString(),
}

const new_params = new URLSearchParams([
    ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
    ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// Here it is as a function that accepts (URL, Record<string, string>)
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ])}`
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
