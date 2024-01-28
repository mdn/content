---
title: "HTMLIFrameElement: allowFullscreen property"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.allowFullscreen
---

{{APIRef("HTML DOM")}}

The **`allowFullscreen`** property of the {{domxref("HTMLIFrameElement")}} interface is a boolean value that reflects the `allowfullscreen` attribute of the {{HTMLElement("iframe")}} element, indicating whether to allow the iframe's contents to use {{domxref("Element.requestFullscreen", "requestFullscreen()")}}.

## Value

A boolean value.

## Examples

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
