---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
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
var URLSearchParams = new URLSearchParams(init);
```

### Parameters

_`init`_ {{optional_inline}}

One of:

- A {{domxref("USVString")}}, which will be parsed from
  `application/x-www-form-urlencoded` format. A leading `'?'`
  character is ignored.
- A literal sequence of name-value string pairs, or any object — such as a {{domxref("FormData")}} object — with an [iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators) that produces a sequence of string pairs. Note that that {{domxref("File")}} entries will be serialized as `[object File]` rather than as their filename (as they would in an `application/x-www-form`-urlencoded form).
- A record of {{domxref("USVString")}} keys and {{domxref("USVString")}} values.

### Return value

A {{domxref("URLSearchParams")}} object instance.

## Examples

The following example shows how to create a {{domxref("URLSearchParams")}} object from
a URL string.

```js
// Retrieve params via url.search, passed into ctor
var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams(url.search);

// Pass in a string literal
var params2 = new URLSearchParams("foo=1&bar=2");
var params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
var params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// Pass in a record
var params4 = new URLSearchParams({"foo": "1", "bar": "2"});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
