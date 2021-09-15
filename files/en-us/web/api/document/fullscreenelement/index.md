---
title: Document.fullscreenElement
slug: Web/API/Document/fullscreenElement
tags:
  - API
  - Document
  - Full-screen
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
full-screen mode in this document, or `null` if full-screen mode is not
currently in use.

Although this property is read-only, it will not throw if it is modified (even in
strict mode); the setter is a no-operation and it will be ignored.

## Syntax

```js
document.fullscreenElement
```

### Return value

The {{domxref("Element")}} object that's currently in full-screen mode; if full-screen
mode isn't currently in use by the `document`>, the returned
value is `null`.

## Example

This example presents a function, `isVideoInFullscreen()`, which looks at
the value returned by `fullscreenElement`; if the document is in full-screen
mode (`fullscreenElement` isn't `null`) and the full-screen
element's {{domxref("Node.nodeName", "nodeName")}} is `VIDEO`, indicating a
{{HTMLElement("video")}} element, the function returns `true`, indicating
that the video is in full-screen mode.

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement && document.fullscreenElement.nodeName == 'VIDEO') {
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
