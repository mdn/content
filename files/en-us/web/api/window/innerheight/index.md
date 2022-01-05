---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
tags:
  - API
  - CSSOM
  - CSSOM View
  - HTML DOM
  - NeedsInteractiveExample
  - Property
  - Reference
  - View
  - Window
  - height
  - innerHeight
browser-compat: api.Window.innerHeight
---
{{APIRef}}

The read-only **`innerHeight`** property of the
{{domxref("Window")}} interface returns the interior height of the window in pixels,
including the height of the horizontal scroll bar, if present.

The value of `innerHeight` is taken from the height of the window's
{{Glossary("layout viewport")}}. The width can be obtained using the
{{domxref("Window.innerWidth", "innerWidth")}} property.

## Syntax

```js
let intViewportHeight = window.innerHeight;
```

### Value

An integer value indicating the window's layout viewport height in pixels. The property
is read only and has no default value.

To change the width of the window, call one of its resize methods, such as
{{domxref("Window.resizeTo", "resizeTo()")}} or {{domxref("Window.resizeBy",
  "resizeBy()")}}.

## Usage notes

To obtain the height of the window minus its horizontal scroll bar and any borders, use
the root {{HTMLElement("html")}} element's {{domxref("Element.clientHeight",
  "clientHeight")}} property instead.

Both `innerHeight` and `innerWidth` are available on any window
or any object that behaves like a window, such as a tab or frame.

## Example

### Assuming a frameset

```js
var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// will return the height of the frame viewport within the frameset

var intFramesetHeight = parent.innerHeight;
// will return the height of the viewport of the closest frameset

var intOuterFramesetHeight = top.innerHeight;
// will return the height of the viewport of the outermost frameset
```

{{todo("link to an interactive demo here")}}

To change the size of a window, see {{domxref("window.resizeBy()")}} and
{{domxref("window.resizeTo()")}}.

To get the outer height of a window, i.e. the height of the whole browser window, see
{{domxref("window.outerHeight")}}.

### Graphical example

The following figure shows the difference between `outerHeight` and
`innerHeight`.

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
