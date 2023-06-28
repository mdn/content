---
title: "Document: fullscreen property"
short-title: fullscreen
slug: Web/API/Document/fullscreen
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.fullscreen
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

The obsolete {{domxref("Document")}} interface's **`fullscreen`** read-only property reports whether or not the document is currently displaying content in fullscreen mode.

Although this property is read-only, it will not throw if it is modified (even in strict mode); the setter is a no-operation and it will be ignored.

> **Note:** Since this property is deprecated, you can determine if fullscreen mode is active on the document by checking to see if {{DOMxRef("Document.fullscreenElement")}} is not `null`.

## Value

A Boolean value which is `true` if the document is currently displaying an element in fullscreen mode; otherwise, the value is `false`.

## Examples

This simple function reports whether or not fullscreen mode is currently active, using the obsolete `fullscreen` property.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

This next example, on the other hand, uses the current `fullscreenElement` property to determine the same thing:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

If `fullscreenElement` isn't `null`, this returns `true`, indicating that fullscreen mode is in effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}
