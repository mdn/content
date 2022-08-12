---
title: Document.fullscreenElement
slug: Web/API/Document/fullscreenElement
page-type: web-api-instance-property
tags:
  - API
  - Document
  - Fullscreen
  - Fullscreen API
  - Graphics
  - Property
  - Read-only
  - Reference
  - fullscreenElement
  - screen
browser-compat: api.Document.fullscreenElement
---
{{ApiRef("Fullscreen API")}}

The
**`Document.fullscreenElement`** read-only
property returns the {{ domxref("Element") }} that is currently being presented in
fullscreen mode in this document, or `null` if fullscreen mode is not
currently in use.

Although this property is read-only, it will not throw if it is modified (even in
strict mode); the setter is a no-operation and it will be ignored.

## Value

The {{domxref("Element")}} object that's currently in fullscreen mode; if fullscreen
mode isn't currently in use by the `document`>, the returned
value is `null`.

## Examples

This example presents a function, `isVideoInFullscreen()`, which looks at
the value returned by `fullscreenElement`; if the document is in fullscreen
mode (`fullscreenElement` isn't `null`) and the fullscreen
element's {{domxref("Node.nodeName", "nodeName")}} is `VIDEO`, indicating a
{{HTMLElement("video")}} element, the function returns `true`, indicating
that the video is in fullscreen mode.

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement?.nodeName === 'VIDEO') {
    return true;
  }
  return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ cssxref(":fullscreen") }} and {{cssxref("::backdrop")}}
- The {{HTMLElement("iframe")}} {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
  attribute
