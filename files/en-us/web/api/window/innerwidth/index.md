---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
tags:
  - API
  - CSSOM View
  - HTML DOM
  - Layout
  - Property
  - Reference
  - Window
  - innerWidth
  - width
browser-compat: api.Window.innerWidth
---
{{APIRef}}

The read-only {{domxref("Window")}} property
**`innerWidth`** returns the interior width of the window in
pixels. This includes the width of the vertical scroll bar, if one is present.

More precisely, `innerWidth` returns the width of the window's
{{Glossary("visual viewport")}}. The interior height of the window—the height of the
layout viewport—can be obtained from the {{domxref("Window.innerHeight",
  "innerHeight")}} property.

## Syntax

```js
let intViewportWidth = window.innerWidth;
```

### Value

An integer value indicating the width of the window's layout viewport in pixels. This
property is read-only, and has no default value.

To change the window's width, use one of the {{domxref("Window")}} methods for resizing
windows, such as {{domxref("Window.resizeBy", "resizeBy()")}} or
{{domxref("Window.resizeTo", "resizeTo()")}}.

## Usage notes

If you need to obtain the width of the window minus the scrollbar and borders, use the
root {{HTMLElement("html")}} element's {{domxref("Element.clientWidth", "clientWidth")}}
property instead.

The `innerWidth` property is available on any window or object that behaves
like a window, such as a frame or tab.

## Example

```js
// This will return the width of the viewport
var intFrameWidth = window.innerWidth;

// This will return the width of the frame viewport within a frameset
var intFrameWidth = self.innerWidth;

// This will return the width of the viewport of the closest frameset
var intFramesetWidth = parent.innerWidth;

// This will return the width of the viewport of the outermost frameset
var intOuterFramesetWidth = top.innerWidth;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
