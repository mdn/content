---
title: Visual Viewport API
slug: Web/API/Visual_Viewport_API
page-type: web-api-overview
browser-compat:
  - api.VisualViewport
  - api.Window.visualViewport
spec-urls: https://drafts.csswg.org/cssom-view/#visualViewport
---

{{DefaultAPISidebar("Visual Viewport")}}

The **Visual Viewport API** provides an explicit mechanism for querying and modifying the properties of the window's {{Glossary("visual viewport")}}. The visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.

## Concepts and usage

The mobile web contains two viewports, the layout viewport and the visual viewport. The layout viewport covers all the elements on a page and the visual viewport is what is actually visible on the screen. When the user pinch-zooms into the page, the visual viewport shrinks but the layout viewport is unchanged. User-interface features like the on-screen keyboard (OSK) can shrink the visual viewport without affecting the layout viewport.

What happens when a web page element needs to be visible on screen regardless of the visible portion of a web page? For example, what if you need a set of image controls to remain on screen regardless of the pinch-zoom level of the device? Current browsers vary in how they handle this. The visual viewport lets web developers solve this by positioning elements relative to what's shown on-screen.

To access a window's visual viewport, you can obtain a {{domxref("VisualViewport")}} object from the {{domxref("window.visualViewport")}} property. The object includes a set of properties describing the viewport. It also adds three events, {{domxref("VisualViewport/resize_event", "resize")}}, {{domxref("VisualViewport/scroll_event", "scroll")}}, and {{domxref("VisualViewport/scrollend_event", "scrollend")}}, which fire when the visual viewport is resized, scrolls, and finishes a scrolling action, respectively.

The first two events allow you to position elements relative to the visual viewport as it is scrolled or zoomed, which would normally be anchored to the layout viewport. The `scrollend` event allows you to update an element when a scrolling action is completed. For example, you can use these events to keep an element fixed to the visual viewport as it is pinch-zoomed and scrolled, and update it when scrolling ends.

## Interfaces

- {{DOMxRef("VisualViewport")}}
  - : Represents the visual viewport for a given window. A window's `VisualViewport` object provides information about the viewport's position and size, and receives the {{domxref("VisualViewport.resize_event", "resize")}}, {{domxref("VisualViewport.scroll_event", "scroll")}} and {{domxref("VisualViewport.scrollend_event", "scrollend")}} events.

### Extensions to other interfaces

- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : A read-only reference to the window's {{domxref("VisualViewport")}} object. If this property doesn't exist, the API is unsupported.

## Examples

Our [Visual Viewport API](https://mdn.github.io/dom-examples/visual-viewport-api/) example provides a basic demonstration of how the different visual viewport features work, including the three event types. Load the page in supporting desktop and mobile browsers and try scrolling around the page and pinch-zooming. On `resize` and `scroll`, the information box is repositioned to keep the same position relative to the visual viewport, and the viewport and scroll information it shows is updated. Also, on `resize` and `scroll` we change the box color to indicate something is happening, changing it back on `scrollend`.

You'll find that on desktop browsers the {{domxref("Window.scrollX")}} and {{domxref("Window.scrollY")}} values are updated as the window is scrolled — the visual viewport position does not change. On mobile browsers however, the {{domxref("VisualViewport.offsetLeft")}} and {{domxref("VisualViewport.offsetTop")}} values are generally updated — it is usually the visual viewport that changes rather than the window position.

The example HTML can be seen below. The information box is represented by a {{htmlelement("div")}} with an `id` of `output`.

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

We won't explain the example's CSS for the sake of brevity — it is not important for understanding the demo. You can check it out at the example link above.

In the JavaScript, we start by getting references to the information box we'll be updating as the page is zoomed and scrolled, as well as the two paragraphs contained within it. The first one will contain reported {{domxref("VisualViewport.offsetLeft")}} and {{domxref("VisualViewport.offsetTop")}} values, while the second one will contain reported {{domxref("Window.scrollX")}} and {{domxref("Window.scrollY")}} values.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Next, we define the two key functions we'll run when the events fire:

- `scrollUpdater()` will fire on `resize` and `scroll`: this function updates the position of the information box relative to the visual viewport by querying the {{domxref("VisualViewport.offsetTop")}} and {{domxref("VisualViewport.offsetLeft")}} properties and using their values to update the values of the relevant {{glossary("inset properties")}}. We also change the information box's background color to indicate that something is happening, and run the `updateText()` function to update the values shown in the box.
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

The `updateText()` function looks like so — it sets the {{domxref("HTMLElement.innerText")}} of the first paragraph to show the current `VisualViewport.offsetLeft` and `VisualViewport.offsetTop` values, and the `HTMLElement.innerText` of the second paragraph to show the current `Window.scrollX` and `Window.scrollY` values. After defining `updateText()`, we immediately invoke it so that the information box displays correctly on page load.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

> [!NOTE]
> We truncate all values to two decimal places using the {{jsxref("Number.toFixed()")}} method because some browsers display them as a subpixel value, potentially with a large number of decimal places.

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

`scrollUpdater()` will fire on `resize` and `scroll`, while `scrollEndUpdater()` will fire on `scrollend`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
