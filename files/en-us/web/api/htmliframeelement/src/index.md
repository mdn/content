---
title: HTMLIFrameElement.src
slug: Web/API/HTMLIFrameElement/src
browser-compat: api.HTMLIFrameElement.src
---
{{APIRef}}

The **`HTMLIFrameElement.src`**
property reflects the HTML {{htmlattrxref("referrerpolicy","src")}} attribute of the
{{HTMLElement("iframe")}} element defining which referrer is sent when fetching the
resource.

## Syntax

```js
refStr = iframeElt.src;
iframeElt.src= refStr;
```

## Example

```js
var iframe = document.createElement("iframe");
iframe.src = "/";
var body = document.getElementsByTagName("body")[0];
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
