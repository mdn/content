---
title: "Window: frameElement property"
short-title: frameElement
slug: Web/API/Window/frameElement
page-type: web-api-instance-property
browser-compat: api.Window.frameElement
---

{{ApiRef}}

The **`Window.frameElement`** property
returns the element (such as {{HTMLElement("iframe")}} or {{HTMLElement("object")}})
in which the window is embedded.

> [!NOTE]
> Despite this property's name, it works for documents embedded
> within any embedding point, including {{HTMLElement("object")}},
> {{HTMLElement("iframe")}}, or {{HTMLElement("embed")}}.

## Value

The element which the window is embedded into. If the window isn't embedded into
another document, or if the document into which it's embedded has a different
{{glossary("origin")}}, the value is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) instead.

## Examples

```js
const frameEl = window.frameElement;
// If we're embedded, change the containing element's URL to 'https://mozilla.org/'
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.frames")}} returns an array-like object, listing the direct
  sub-frames of the current window.
- {{domxref("window.parent")}} returns the parent window, which is the window
  containing the `frameElement` of the child window.
