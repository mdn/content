---
title: "HTMLAreaElement: port property"
short-title: port
slug: Web/API/HTMLAreaElement/port
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.port
---

{{ApiRef("HTML DOM")}}

The **`port`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing the port number of the URL. If the URL does not contain an explicit port number or the port number is the same as the protocol's default, it will be `''`.

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
