---
title: "location: port property"
short-title: port
slug: Web/API/Location/port
page-type: web-api-instance-property
browser-compat: api.Location.port
---

{{ApiRef("Location")}}

The **`port`** property of the {{domxref("Location")}}
interface is a string containing the port number of the URL. If the
URL does not contain an explicit port number, it will be set to `''`.

## Value

A string.

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/Location.port"> element be in the document
const anchor = document.getElementByID("myAnchor");
const result = anchor.port; // Returns:'443'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
