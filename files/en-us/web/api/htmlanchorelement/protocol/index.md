---
title: "HTMLAnchorElement: protocol property"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.protocol
---

{{ApiRef("HTML DOM")}}

The
**`HTMLAnchorElement.protocol`**
property is a string representing the protocol scheme of the URL,
including the final `':'`.

## Value

A string.

## Examples

### Getting the protocol of an anchor link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
