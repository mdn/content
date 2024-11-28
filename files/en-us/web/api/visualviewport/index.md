---
title: VisualViewport
slug: Web/API/VisualViewport
page-type: web-api-interface
browser-compat: api.VisualViewport
---

{{APIRef("Visual Viewport")}}

The **`VisualViewport`** interface of the {{domxref("Visual Viewport API", "", "", "nocode")}} represents the visual viewport for a given window. For a page containing iframes, each iframe, as well as the containing page, will have a unique window object. Each window on a page will have a unique `VisualViewport` representing the properties associated with that window.

You can get a window's visual viewport using {{domxref("Window.visualViewport")}}.

> [!NOTE]
> Only the top-level window has a visual viewport that's distinct from the layout viewport. Therefore, it's generally only the `VisualViewport` object of the top-level window that's useful. For an {{htmlelement("iframe")}}, visual viewport metrics like {{domxref("VisualViewport.width")}} always correspond to layout viewport metrics like {{domxref("Element.clientWidth", "document.documentElement.clientWidth")}}.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("VisualViewport.offsetLeft")}} {{ReadOnlyInline}}
  - : Returns the offset of the left edge of the visual viewport from the left edge of the layout viewport in CSS pixels.
- {{domxref("VisualViewport.offsetTop")}} {{ReadOnlyInline}}
  - : Returns the offset of the top edge of the visual viewport from the top edge of the layout viewport in CSS pixels.
- {{domxref("VisualViewport.pageLeft")}} {{ReadOnlyInline}}
  - : Returns the x coordinate of the visual viewport relative to the initial containing block origin of the top edge in CSS pixels.
- {{domxref("VisualViewport.pageTop")}} {{ReadOnlyInline}}
  - : Returns the y coordinate of the visual viewport relative to the initial containing block origin of the top edge in CSS pixels.
- {{domxref("VisualViewport.width")}} {{ReadOnlyInline}}
  - : Returns the width of the visual viewport in CSS pixels.
- {{domxref("VisualViewport.height")}} {{ReadOnlyInline}}
  - : Returns the height of the visual viewport in CSS pixels.
- {{domxref("VisualViewport.scale")}} {{ReadOnlyInline}}
  - : Returns the pinch-zoom scaling factor applied to the visual viewport.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("EventTarget")}}._

## Events

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the relevant `oneventname` property of this interface.

- {{domxref("VisualViewport/resize_event", "resize")}}
  - : Fired when the visual viewport is resized.
    Also available via the `onresize` property.
- {{domxref("VisualViewport/scroll_event", "scroll")}}
  - : Fired when the visual viewport is scrolled.
    Also available via the `onscroll` property.
- {{domxref("VisualViewport/scrollend_event", "scrollend")}}
  - : Fired when a scrolling operation on the visual viewport ends.
    Also available via the `onscrollend` property.

## Examples

### Hiding an overlaid box on zoom

This example, taken from the [Visual Viewport README](https://github.com/WICG/visual-viewport), shows how to write a bit of code that will hide an overlaid box (which might contain an advert, say) when the user zooms in. This is a nice way to improve the user experience when zooming in on pages. A [live sample](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) is also available.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulating position: device-fixed

This example, also taken from the [Visual Viewport README](https://github.com/WICG/visual-viewport), shows how to use this API to simulate `position: device-fixed`, which fixes elements to the visual viewport. A [live sample](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) is also available.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;
function viewportHandler() {
  const layoutViewport = document.getElementById("layoutViewport");

  // Since the bar is position: fixed we need to offset it by the visual
  // viewport's offset from the layout viewport origin.
  const offsetLeft = viewport.offsetLeft;
  const offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;

  // You could also do this by setting style.left and style.top if you
  // use width: 100% instead.
  bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${
    1 / viewport.scale
  })`;
}
window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

> [!NOTE]
> This technique should be used with care; emulating `position: device-fixed` in this way can result in the fixed element flickering during scrolling.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — useful explanation of web viewports concepts, including the difference between visual viewport and layout viewport.
