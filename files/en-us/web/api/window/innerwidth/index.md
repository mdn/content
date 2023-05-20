---
title: "Window: innerWidth property"
short-title: innerWidth
slug: Web/API/Window/innerWidth
page-type: web-api-instance-property
browser-compat: api.Window.innerWidth
---

{{APIRef}}

The read-only {{domxref("Window")}} property
**`innerWidth`** returns the interior width of the window in
pixels. This includes the width of the vertical scroll bar, if one is present.

More precisely, `innerWidth` returns the width of the window's
{{Glossary("layout viewport")}}. The interior height of the window—the height of the
layout viewport—can be obtained from the {{domxref("Window.innerHeight",
  "innerHeight")}} property.

## Value

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

## Examples

```js
// This will log the width of the viewport
console.log(window.innerWidth);

// This will log the width of the frame viewport within a frameset
console.log(self.innerWidth);

// This will log the width of the viewport of the closest frameset
console.log(parent.innerWidth);

// This will log the width of the viewport of the outermost frameset
console.log(top.innerWidth);
```

## Demo

### HTML

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### Result

{{EmbedLiveSample('Demo')}}

You can also {{LiveSampleLink('Demo', 'view the results of the demo code in a separate page')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
