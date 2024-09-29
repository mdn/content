---
title: "Location: port property"
short-title: port
slug: Web/API/Location/port
page-type: web-api-instance-property
browser-compat: api.Location.port
---

{{ApiRef("Location")}}

The **`port`** property of the {{domxref("Location")}} interface is a string containing the port number of the URL. If the URL does not contain an explicit port number or the port number is the same as the protocol's default, it will be `''`.

## Value

A string.

## Examples

```js
// Assume current page is at https://developer.mozilla.org/en-US/docs/Location/port
const result = location.port; // Returns:''
```

```js
// Assume another page is at https://developer.mozilla.org:8888/en-US/docs/Location/port
const result = location.port; // Returns:'8888'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
