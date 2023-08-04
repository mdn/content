---
title: "HTMLIFrameElement: src property"
short-title: src
slug: Web/API/HTMLIFrameElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.src
---

{{APIRef}}

The **`HTMLIFrameElement.src`**
property reflects the HTML [`referrerpolicy`](/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy) attribute of the
{{HTMLElement("iframe")}} element defining which referrer is sent when fetching the
resource.

## Syntax

```js-nolint
refStr = iframeElt.src
iframeElt.src= refStr
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
