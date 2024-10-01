---
title: "Location: port property"
short-title: port
slug: Web/API/Location/port
page-type: web-api-instance-property
browser-compat: api.Location.port
---

{{ApiRef("Location")}}

The **`port`** property of the {{domxref("Location")}} interface is a string containing the port number of the URL, or the empty string if the port is the default for the protocol.

> [!NOTE]
> If the {{domxref("Location")}} object refers to a URL that doesn't contain an explicit port number (e.g., `https://localhost`) or contains a port number that's the default port number corresponding to the protocol part of the URL (e.g., `https://localhost:443`), then the `port` property will be the empty string: `''`.

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
