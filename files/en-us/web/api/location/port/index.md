---
title: "Location: port property"
short-title: port
slug: Web/API/Location/port
page-type: web-api-instance-property
browser-compat: api.Location.port
---

{{ApiRef("Location")}}

The **`port`** property of the {{domxref("Location")}} interface is a string containing the port number of the location's URL. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the port of the URL. If the URL has no {{domxref("Location.host", "host")}} or its scheme is `file:`, then setting this property has no effect. It also silently ignores invalid port numbers.

See {{domxref("URL.port")}} for more information.

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
