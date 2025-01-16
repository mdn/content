---
title: "URLSearchParams: append() method"
short-title: append()
slug: Web/API/URLSearchParams/append
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.append
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`append()`** method of the {{domxref("URLSearchParams")}}
interface appends a specified key/value pair as a new search parameter.

As shown in the example below, if the same key is appended multiple times it will
appear in the parameter string multiple times for each value.

As shown in the second example below, both `name` and `value` will be automatically
encoded to be URL safe.

## Syntax

```js-nolint
append(name, value)
```

### Parameters

- `name`
  - : The name of the parameter to append.
- `value`
  - : The value of the parameter to append.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
//Example: Adding the same param multiple times

let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

//Add a second foo parameter.
params.append("foo", 4);
//Query string is now: 'foo=1&bar=2&foo=4'
```

```js
//Example: Demostrating the encoding behavior

const params = new URLSearchParams();

params.append('needsEncoding$%&$#@++++++','needsEncoding$#&*@#()+++++' )
params.toString();
//"needsEncoding%24%25%26%24%23%40%2B%2B%2B%2B%2B%2B=needsEncoding%24%23%26*%40%23%28%29%2B%2B%2B%2B%2B" 

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("URL")}}
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
