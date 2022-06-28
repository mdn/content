---
title: Document.fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
page-type: web-api-instance-property
tags:
  - API
  - Document
  - Fullscreen
  - Fullscreen API
  - Property
  - Read-only
  - Reference
  - fullscreen
  - fullscreenEnabled
  - screen
browser-compat: api.Document.fullscreenEnabled
---
{{APIRef("Fullscreen API")}}

The read-only **`fullscreenEnabled`**
property on the {{domxref("Document")}} interface indicates whether or not fullscreen
mode is available.

fullscreen mode is available only for a page that has no
windowed plug-ins in any of its documents, and if all {{HTMLElement("iframe")}} elements
which contain the document have their {{HTMLAttrXRef("allowfullscreen", "iframe")}}
attribute set.

Although this property is read-only, it will not throw if it is modified (even in
strict mode); the setter is a no-operation and it will be ignored.

## Value

A boolean value which is `true` if the document and the
elements within can be placed into fullscreen mode by calling
{{domxref("Element.requestFullscreen()")}}. If fullscreen mode isn't available, this
value is `false`.

## Examples

In this example, before attempting to request fullscreen mode for a
{{htmlElement("video")}} element, the value of `fullscreenEnabled` is
checked, in order to avoid making the attempt when not available.

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log('Your browser cannot use fullscreen right now');
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenElement")}}
- {{cssxref(":fullscreen") }} and {{cssxref("::backdrop")}}
- The {{HTMLElement("iframe")}} {{HTMLAttrXRef("allowfullscreen", "iframe")}}
  attribute
