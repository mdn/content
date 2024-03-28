---
title: "URLSearchParams: has() method"
short-title: has()
slug: Web/API/URLSearchParams/has
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.has
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`has()`** method of the {{domxref("URLSearchParams")}} interface returns a boolean value that indicates whether the specified parameter is in the search parameters.

A parameter name and optional value are used to match parameters.
If only a parameter name is specified, then the method will return `true` if any parameters in the query string match the name, and `false` otherwise.
If both a parameter name and value are specified, then the method will return `true` if a parameter matches both the name and value.

## Syntax

```js-nolint
has(name)
has(name, value)
```

### Parameters

- `name`
  - : The name of the parameter to match.
- `value`
  - : The value of the parameter, along with the given name, to match.

### Return value

A boolean value.

## Examples

### Check for parameter with specified name

This example shows how to check if the query string has any parameters with a particular name.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if the parameter is in the query string
log(`bar?:\t${params.has("bar")}`);
log(`bark?:\t${params.has("bark")}`);
log(`foo?:\t${params.has("foo")}`);
```

The log below shows whether the parameters `bar`, `bark`, and `foo`, are present in the query string.

{{EmbedLiveSample('Check for parameter with specified name', '100%', '80')}}

### Check for parameter with specified name and value

This example shows how to check whether the query string has a parameter that matches both a particular name and value.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if a parameter with the matching name and value is in the query string
log(`bar=1?:\t${params.has("bar", "1")}`);
log(`bar=2?:\t${params.has("bar", "2")}`);
log(`foo=4?:\t${params.has("foo", "4")}`);
```

Only the second value above should be `true`, as only the parameter name `bar` with value `2` is matched.

{{EmbedLiveSample('Check for parameter with specified name and value', '100%', '80')}}

If your browser does not support the `value` option the method will match on the name, and all the results should be `true`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
