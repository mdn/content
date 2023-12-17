---
title: "HTMLIFrameElement: src property"
short-title: src
slug: Web/API/HTMLIFrameElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.src
---

{{APIRef}}

The **`HTMLIFrameElement.src`**
A string that reflects the [`src`](/en-US/docs/Web/HTML/Element/iframe#src) HTML attribute, containing the address of the content to be embedded.

Note that programmatically removing an `<iframe>`'s src attribute (e.g. via {{domxref("Element.removeAttribute()")}}) causes `about:blank` to be loaded in the frame.

## Syntax

```js-nolint
src = iframeElt.src
iframeElt.src= src
```

## Example

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
const body = document.querySelector("body");
body.appendChild(iframe); // Fetch the image using the complete URL as the referrer
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLAnchorElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}.
