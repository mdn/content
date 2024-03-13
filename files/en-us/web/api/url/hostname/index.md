---
title: "URL: hostname property"
short-title: hostname
slug: Web/API/URL/hostname
page-type: web-api-instance-property
browser-compat: api.URL.hostname
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`hostname`** property of the {{domxref("URL")}} interface
is a string containing the {{glossary("domain name")}} of the URL.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
