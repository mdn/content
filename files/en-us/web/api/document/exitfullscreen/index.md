---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
tags:
  - API
  - DOM
  - Document
  - Full
  - Full-screen
  - Fullscreen API
  - Method
  - Reference
  - exitFullscreen
  - fullscreen
  - screen
browser-compat: api.Document.exitFullscreen
---
{{ApiRef("Fullscreen API")}}

The {{domxref("Document")}} method
**`exitFullscreen()`** requests that the element on this
document which is currently being presented in full-screen mode be taken out of
full-screen mode, restoring the previous state of the screen. This usually
reverses the effects of a previous call to {{domxref("Element.requestFullscreen()")}}.

## Syntax

```js
exitPromise = document.exitFullscreen();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which is resolved once the {{Glossary("user agent")}} has
finished exiting full-screen mode. If an error occurs while attempting to exit
full-screen mode, the `catch()` handler for the promise is called.

## Example

This example causes the current document to toggle in and out of a full-screen
presentation whenever the mouse button is clicked within it.

```js
document.onclick = function (event) {
  if (document.fullscreenElement) {
    document.exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err))
  } else {
    document.documentElement.requestFullscreen();
  }
}
```

> **Note:** For a more complete example, see the
> {{SectionOnPage("/en-US/docs/Web/API/Element/requestFullScreen", "Example")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }} and {{cssxref("::backdrop")}}
- The {{HTMLElement("iframe")}} {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
  attribute
