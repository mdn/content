---
title: "HTMLAreaElement: port property"
short-title: port
slug: Web/API/HTMLAreaElement/port
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.port
---

{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.port`** property is a
string containing the port number of the URL. If the URL does not
contain an explicit port number, it will be set to `''`.

## Value

A string.

## Examples

### Getting the port from an area link

```js
// An <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // returns '443'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
