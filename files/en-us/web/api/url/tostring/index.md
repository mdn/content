---
title: "URL: toString() method"
short-title: toString()
slug: Web/API/URL/toString
page-type: web-api-instance-method
browser-compat: api.URL.toString
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`toString()`** method of the {{domxref("URL")}} interface returns a
string containing the whole URL. It is effectively a read-only version
of {{domxref("URL.href")}}.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);
url.toString(); // should return the URL as a string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
