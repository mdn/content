---
title: "URL: username property"
short-title: username
slug: Web/API/URL/username
page-type: web-api-instance-property
browser-compat: api.URL.username
---

{{ApiRef("URL API")}}

The **`username`** property of the {{domxref("URL")}} interface
is a string containing the username specified before the domain name.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
