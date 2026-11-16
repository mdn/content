---
title: "HTMLIFrameElement: contentDocument property"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.contentDocument
---

{{APIRef("HTML DOM")}}

The **`contentDocument`** read-only property of the {{domxref("HTMLIFrameElement")}} interface returns a [`Document`](/en-US/docs/Web/API/Document) (that is, the active document in the inline frame's nested browsing context) if the iframe and the iframe's parent document are [Same Origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy), else returns `null`.

## Example of contentDocument

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// This would turn the iframe blue.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
