---
title: "URLSearchParams: delete() method"
short-title: delete()
slug: Web/API/URLSearchParams/delete
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.delete
---

{{ApiRef("URL API")}}

The **`delete()`** method of the {{domxref("URLSearchParams")}} interface deletes specified parameters and their associated value(s) from the list of all search parameters.

A parameter name and optional value are used to match parameters.
If only a parameter name is specified, then all search parameters that match the name are deleted, along with their associated values.
If both a parameter name and value are specified, then all search parameters that match both the parameter name and value are deleted.

{{AvailableInWorkers}}

## Syntax

```js-nolint
delete(name)
delete(name, value)
```

### Parameters

- `name`
  - : The name of the parameters to be deleted.
- `value` {{optional_inline}}
  - : The value that parameters must match, along with the given name, to be deleted.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Delete all parameters with specified name

This example shows how to delete all query parameters (and values) that have a particular name.

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
log(`Query string (before):\t ${params}`);
params.delete("foo");
log(`Query string (after):\t ${params}`);
```

The log below shows that all parameters that have the name of `foo` are deleted.

{{EmbedLiveSample('Delete all parameters with specified name', '100%', '50')}}

### Delete parameters with specified name and value

This example shows how to delete query parameters that match a particular name and value.

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
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
log(`Query string (before):\t ${params}`);
params.delete("foo", "1");
log(`Query string (after):\t ${params}`);
```

All parameters that match both the parameter `name` and `value` should be deleted (there is no reason to specify two parameters with the same name and value as shown above).

{{EmbedLiveSample('Delete parameters with specified name and value', '100%', '50')}}

If your browser supports the `value` option, the "after" string should be `bar=2&foo=3`.
Otherwise the result will be the same as in the previous example (`bar=2`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
