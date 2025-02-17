---
title: "HTMLAreaElement: port property"
short-title: port
slug: Web/API/HTMLAreaElement/port
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.port
---

{{ApiRef("HTML DOM")}}

The **`port`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing the port number of the `<area>` element's `href`. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the port of the URL. If the URL has no {{domxref("HTMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. It also silently ignores invalid port numbers.

See {{domxref("URL.port")}} for more information.

## Value

A string.

## Examples

### Getting the port from an area link

```js
// An <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns ''
```

```js
// Another <area id="myArea" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns:'8888'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
