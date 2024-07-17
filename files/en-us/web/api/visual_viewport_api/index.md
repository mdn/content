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

Our [Visual viewport events](https://visual-viewport-events.glitch.me/) example provides a basic demonstration of how the different visual viewport features work, including the three event types. Load the page in a supporting mobile browser and try pinch-zooming and panning around the boxes. On `resize` and `scroll`, the "Total" box is repositioned to keep the same position relative to the visual viewport. On `scrollend`, it updates to show which boxes are in view, and the sum of their numbers. A more complex application could use these techniques to scroll around map tiles and display relevant information for each one shown on the screen.

The HTML and CSS for this example is fairly basic, and we won't explain it here for brevity. You can check it out at the example link above.

In the JavaScript, we start by getting a reference to the `total` box we'll be updating as the page is zoomed and scrolled, and we also define an empty array called `visibleBoxes` that we'll use to store references to which boxes can be seen in the visual viewport when a scroll action finishes.

```js
const total = document.getElementById("total");
let visibleBoxes = [];
```

Next, we define the two key functions we'll run when the events fire. `scrollUpdater()` will fire on `resize` and `scroll`: this function updates the position of the `total` box relative to the visual viewport by querying the {{domxref("VisualViewport.offsetTop")}} and {{domxref("VisualViewport.offsetLeft")}} properties and using their values to update the values of the relevant {{glossary("inset properties")}}. We also change the `total` box's background color to indicate that something is happening.

The `scrollEndUpdater()` function will fire on `scrollend`: this returns the `note` box to its original color and invokes other functions — `updateVisibleBoxes()` to detect which boxes are currently showing in the visual viewport and `updateSum()` to display their numbers and the sum total inside `total`.

```js
const scrollUpdater = () => {
  total.style.top = `${visualViewport.offsetTop + 10}px`;
  total.style.left = `${visualViewport.offsetLeft + 10}px`;
  total.style.background = "yellow";
};

const scrollendUpdater = () => {
  total.style.background = "lime";
  updateVisibleBoxes();
  updateSum();
};
```

The next two functions are:

- `isVisible()`: This takes a DOM element as input and calculates its left, top, right, and bottom edge positions. It then calculates the lower and upper horizontal and vertical bounds inside which the box will be visible inside the visual viewport. The function then tests to see if the box is within those bounds, horizontally and vertically, calculating a `true`/`false` value for each. Both have to be `true` for the function return value to be `true`.
- `updateVisibleBoxes()`: This gets a reference to all the grid boxes, and for each one, runs `isVisible()` to check whether the box is visible. It pushes the visible boxes to the `visibleBoxes` array after emptying it.

```js
function IsVisible(box) {
  const x = box.offsetLeft,
    y = box.offsetTop;
  const right = x + box.offsetWidth,
    bottom = y + box.offsetHeight;

  const horLowerBound = window.scrollX + visualViewport.offsetLeft;
  const horUpperBound =
    window.scrollX + visualViewport.offsetLeft + visualViewport.width;
  let hor =
    (x > horLowerBound && x < horUpperBound) ||
    (right > horLowerBound && right < horUpperBound);

  const verLowerBound = window.scrollY + visualViewport.offsetTop;
  const verUpperBound =
    window.scrollY + visualViewport.offsetTop + visualViewport.height;
  let ver =
    (y > verLowerBound && y < verUpperBound) ||
    (bottom > verLowerBound && bottom < verUpperBound);

  return hor && ver;
}

function updateVisibleBoxes() {
  const boxes = document.querySelectorAll(".gridbox");
  visibleBoxes = [];

  for (const box of boxes) {
    if (IsVisible(box)) {
      visibleBoxes.push(box);
    }
  }
}
```

Next, the `updateSum()` function calculates the total of the visible box's numbers and stores each individual number in an array. It uses these to update the text displayed in the `total` box.

```js
function updateSum() {
  let sumTotal = 0;
  let summands = [];

  for (const box of visibleBoxes) {
    console.log(`${box.id} is visible`);

    const n = parseInt(box.innerText);

    sumTotal += n;
    summands.push(n);
  }

  total.innerText = `Total: ${summands.join(" + ")} = ${sumTotal}`;
}
```

Now we set event handler properties of both the visual viewport and the {{domxref("Window")}} object to run the key functions at the appropriate times on both mobile and desktop: `scrollUpdater()` will fire on `resize` and `scroll`, while `scrollEndUpdater()` will fire on `scrollend`.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

Finally, we run the `scrollUpdater()` and `scrollEndUpdater()` functions so that the `total` box will show the results of the initial page state when it first loads.

```js
updateVisibleBoxes();
updateSum();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
