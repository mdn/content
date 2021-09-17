---
title: Document.onfullscreenerror
slug: Web/API/Document/onfullscreenerror
tags:
  - API
  - Document
  - Error
  - Event Handler
  - Full-screen
  - Fullscreen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenerror
  - screen
browser-compat: api.Document.onfullscreenerror
---
{{ApiRef("Fullscreen API")}}

The **`Document.onfullscreenerror`**
property is an event handler for the {{event("fullscreenerror")}} event that is sent
to the  document when it fails to transition into full-screen mode after a prior call
to {{domxref("Element.requestFullscreen()")}}.

## Syntax

```js
targetDocument.onfullscreenerror = fullscreenErrorHandler;
```

### Value

An event handler for the {{event("fullscreenerror")}} event.

## Example

This example attempts to call `requestFullscreen()` outside of an event
handler. Since `requestFullscreen()` can only be called in response to user
action, for security reasons, this will fail, causing the `fullscreenerror`
to be sent to the document.

```js
document.onfullscreenerror = function ( event ) {
  displayWarning("Unable to switch into full-screen mode.");
};

//....

document.documentElement.requestFullscreen();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{event("fullscreenerror")}}
- {{domxref("Document.onfullscreenchange")}}
- {{domxref("Element.onfullscreenerror")}}
