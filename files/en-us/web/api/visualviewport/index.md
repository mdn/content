---
title: VisualViewport
slug: Web/API/VisualViewport
page-type: web-api-interface
browser-compat: api.VisualViewport
---

{{APIRef("Visual Viewport")}}

The **`VisualViewport`** interface of the [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API) represents the visual viewport for a given window. For a page containing iframes, each iframe, as well as the containing page, will have a unique window object. Each window on a page will have a unique `VisualViewport` representing the properties associated with that window.

You can get a window's visual viewport using {{domxref("Window.visualViewport")}}.

> **Note:** Only the top-level window has a visual viewport that's distinct from the layout viewport. Therefore, it's generally only the `VisualViewport` object of the top-level window that's useful. For an {{htmlelement("iframe")}}, visual viewport metrics like {{domxref("VisualViewport.width")}} always correspond to layout viewport metrics like {{domxref("Element.clientWidth", "document.documentElement.clientWidth")}}.

{{InheritanceDiagram}}

## Instance properties

_`VisualViewport` also inherits properties from its parent, {{domxref("EventTarget")}}._

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

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the relevant `oneventname` property of this interface.

- [`resize`](/en-US/docs/Web/API/VisualViewport/resize_event)
  - : Fired when the visual viewport is resized.
    Also available via the `onresize` property.
- [`scroll`](/en-US/docs/Web/API/VisualViewport/scroll_event)
  - : Fired when the visual viewport is scrolled.
    Also available via the `onscroll` property.

## Examples

### Hiding an overlaid box on zoom

This example, taken from the [Visual Viewport README](https://github.com/WICG/visual-viewport), shows how to write a simple bit of code that will hide an overlaid box (which might contain an advert, say) when the user zooms in. This is a nice way to improve the user experience when zooming in on pages. A [live sample](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) is also available.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulating position: device-fixed

This example, also taken from the [Visual Viewport README](https://github.com/WICG/visual-viewport), shows how to use this API to simulate `position: device-fixed`, which fixes elements to the visual viewport. A [live sample](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) is also available.

```js
const bottomBar = document.getElementById("bottombar");
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

> **Note:** This technique should be used with care; emulating `position: device-fixed` in this way can result in the fixed element flickering during scrolling.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — useful explanation of web viewports concepts, including the difference between visual viewport and layout viewport.
