---
title: "location: hostname property"
short-title: hostname
slug: Web/API/Location/hostname
page-type: web-api-instance-property
browser-compat: api.Location.hostname
---

{{ApiRef("URL API")}}

The **`hostname`** property of the {{domxref("Location")}}
interface is a string containing the domain of the URL.

## Value

A string.

## Examples

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/en-US/docs/Location.hostname";

console.log(anchor.hostname); // developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
