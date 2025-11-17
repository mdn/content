---
title: VisualViewport
slug: Web/API/VisualViewport
page-type: web-api-interface
browser-compat: api.VisualViewport
---

{{APIRef("CSSOM view API")}}

The **`VisualViewport`** interface of the {{domxref("Visual Viewport API", "", "", "nocode")}} represents the visual viewport for a given window. For a page containing iframes, each iframe, as well as the containing page, will have a unique window object. Each window on a page will have a unique `VisualViewport` representing the properties associated with that window.

The mobile web contains two viewports, the layout viewport and the visual viewport. The layout viewport covers all the elements on a page and the visual viewport is what is actually visible on the screen. When the user pinch-zooms into the page, the visual viewport shrinks but the layout viewport is unchanged. User-interface features like the on-screen keyboard (OSK) can shrink the visual viewport without affecting the layout viewport.

What happens when a web page element needs to be visible on screen regardless of the visible portion of a web page? For example, what if you need a set of image controls to remain on screen regardless of the pinch-zoom level of the device? Current browsers vary in how they handle this. The visual viewport lets web developers solve this by positioning elements relative to what's shown on-screen.

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

## Getting visual viewport information during scrolling and zooming

Our [visual viewport](https://mdn.github.io/dom-examples/visual-viewport-api/) example provides a basic demonstration of how the different visual viewport features work, including the three event types. Load the page in supporting desktop and mobile browsers and try scrolling around the page and pinch-zooming. On `resize` and `scroll`, the information box is repositioned to keep the same position relative to the visual viewport, and the viewport and scroll information it shows is updated. Also, on `resize` and `scroll` we change the box color to indicate something is happening, changing it back on `scrollend`.

You'll find that on desktop browsers the {{domxref("Window.scrollX")}} and {{domxref("Window.scrollY")}} values are updated as the window is scrolled — the visual viewport position does not change. On mobile browsers, however, the {{domxref("VisualViewport.offsetLeft")}} and {{domxref("VisualViewport.offsetTop")}} values are generally updated — it is usually the visual viewport that changes rather than the window position.

In the example, the HTML information box is represented by a {{htmlelement("div")}} with an `id` of `output` while the CSS is hidden for the sake of brevity.

```html
<p id="instructions">
  Try scrolling around and pinch-zooming to see how the reported values change.
</p>
<div id="output">
  <p id="visual-info"></p>
  <hr />
  <p id="window-info"></p>
</div>
```

In the JavaScript, we start by getting references to the information box we'll be updating as the page is zoomed and scrolled, as well as the two paragraphs contained within it. The first one will contain reported {{domxref("VisualViewport.offsetLeft")}} and {{domxref("VisualViewport.offsetTop")}} values, while the second one will contain reported {{domxref("Window.scrollX")}} and {{domxref("Window.scrollY")}} values.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Next, we define the two key functions we'll run when the events fire:

- The `scrollUpdater()` function will be executed on `resize` and `scroll`: this function updates the position of the information box relative to the visual viewport by querying the {{domxref("VisualViewport.offsetTop")}} and {{domxref("VisualViewport.offsetLeft")}} properties and using their values to update the values of the relevant {{glossary("inset properties")}}. We also change the information box's background color to indicate that something is happening, and run the `updateText()` function to update the values shown in the box.
- The `scrollEndUpdater()` function will fire on `scrollend`: this returns the information box to its original color and runs the `updateText()` function to make sure the latest values are shown on `scrollend`.

```js
const scrollUpdater = () => {
  output.style.top = `${visualViewport.offsetTop + 10}px`;
  output.style.left = `${visualViewport.offsetLeft + 10}px`;
  output.style.background = "yellow";
  updateText();
};

const scrollendUpdater = () => {
  output.style.background = "lime";
  updateText();
};
```

The `updateText()` function sets the {{domxref("HTMLElement.innerText")}} of the first paragraph to show the current `VisualViewport.offsetLeft` and `VisualViewport.offsetTop` values, and the `HTMLElement.innerText` of the second paragraph to show the current `Window.scrollX` and `Window.scrollY` values. After defining `updateText()`, we immediately invoke it so that the information box displays correctly on page load.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

We truncated all values to two decimal places using the {{jsxref("Number.toFixed()")}} method because some browsers render subpixel values, potentially with a large number of decimal places.

Now we set event handler properties on both the visual viewport and the {{domxref("Window")}} object to run the key functions at the appropriate times on both mobile and desktop:

- We set the handlers on `window` so that the information box position and contents will update on conventional window scrolling operations, for example when you scroll the page on a desktop browser.
- We set the handlers on `visualViewport` so that the information box position and contents will update on visual viewport scrolling/zooming operations, for example when you scroll and pinch-zoom the page on a mobile browser.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

The `scrollUpdater()` function will fire on `resize` and `scroll`, while `scrollEndUpdater()` will fire on `scrollend`.

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
