---
title: "HTMLAnchorElement: port property"
short-title: port
slug: Web/API/HTMLAnchorElement/port
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.port
---

{{ApiRef("HTML DOM")}}

The **`port`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the port number of the URL, or the empty string if the port is the default for the protocol.

> [!NOTE]
> If the {{domxref("HTMLAnchorElement")}} object refers to a URL that doesn't contain an explicit port number (e.g., `https://localhost`) or contains a port number that's the default port number corresponding to the protocol part of the URL (e.g., `https://localhost:443`), then the `port` property will be the empty string: `''`.

## Value

A string.

## Examples

### Getting the port from an anchor link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // returns ''
```

```js
// Another <a id="myAnchor" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // Returns:'8888'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
