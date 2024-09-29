---
title: "HTMLAnchorElement: port property"
short-title: port
slug: Web/API/HTMLAnchorElement/port
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.port
---

{{ApiRef("HTML DOM")}}

The **`port`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the port number of the URL. If the URL does not contain an explicit port number or the port number is the same as the protocol's default, it will be `''`.

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
