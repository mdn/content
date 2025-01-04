---
title: "HTMLIFrameElement: allowFullscreen property"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.allowFullscreen
---

{{APIRef("HTML DOM")}}

The **`allowFullscreen`** property of the {{domxref("HTMLIFrameElement")}} interface is a boolean value that reflects the `allowfullscreen` attribute of the {{HTMLElement("iframe")}} element, indicating whether to allow the iframe's contents to use {{domxref("Element.requestFullscreen", "requestFullscreen()")}}.

> [!NOTE]
> This property is considered a legacy property. Use `allow="fullscreen"` and {{domxref("HTMLIFrameElement.allow")}} instead.

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

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- {{domxref("Element.requestFullscreen()")}}
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}} Permissions Policy directive
