---
title: "PerformanceContainerTiming: intersectionRect property"
short-title: intersectionRect
slug: Web/API/PerformanceContainerTiming/intersectionRect
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.intersectionRect
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`intersectionRect`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the bounding rectangle of the container's accumulated painted region, calculated since the container root was registered.

Th region may include gaps where no painting has occurred and may omit regions that were painted while outside the viewport.
Paired with the {{domxref("PerformanceContainerTiming.size", "size")}} property, which provides the accumulated painted area, it provides a useful _indication_ of how much of a container has rendered and become visible so far.
It can also be used during debugging to confirm whether a container's content is painting inside the viewport.

## Value

A {{domxref("DOMRectReadOnly")}}.

## Description

The browser maintains a record referred to as the "accumulated painted region" that is used for tracking whether painting an element triggers a container timing performance entry (this is different and independent of the rendering pipeline).
The first time an element in a container is rendered, the browser clips the painted area to the visual viewport, and updates the "accumulated painted region" to include it.
If the operation causes the accumulated painted region to increase (i.e., a new area is painted), this causes a container timing entry to be added.

Changes that do not cause the accumulated painted region to increase do not trigger a new entry.
This includes:

- A paint that's fully clipped away
- An element that repaints an area that is already in the region
- A repaint of an element after its first paint
- Scrolling an element into view that was outside the viewport when it was first rendered

This last point means that the accumulated painted region may not precisely reflect all parts of the container, and that you will not get entries for elements in the container even though they later become visible on screen.
You may however get entries if you add an element in the container to a previously clipped area.

## Examples

### Observing that only visible paints are counted

This example demonstrates that adding content while the container is in view creates an entry, while adding an entry outside he view does not (even if you scroll it into view).
It also demonstrates that the `intersectionRect` and `size` values only ever increase.

#### HTML

The container root ({{htmlelement("section")}}, identified as `"hero"`) sits inside a scrollable `<div>` that acts as a small, fixed-size viewport for the example.
A tall spacer below the container lets you scroll the container itself out of that viewport, and back in again.

```html
<div id="wrapper">
  <section containertiming="hero">
    <h2>Hero content</h2>
  </section>
  <div id="spacer">Scrolling down moves the container out of view</div>
</div>
<button id="add">Add element</button>
<button id="scroll-out">Scroll container out of view</button>
<button id="scroll-in">Scroll container into view</button>
<button id="reset">Reset</button>
```

```css
#wrapper {
  height: 150px;
  overflow: auto;
  border: 1px solid black;
}

#spacer {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
}
```

Note that there is also hidden HTML (and code) for displaying log information.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 250px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The following code first checks if there are any `"container"` entries: if not, it logs that the feature is not supported.
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `intersectionRect` and `size`.

```js
const wrapper = document.querySelector("#wrapper");
const container = document.querySelector("section");
let count = 0;
let lastSize = 0;

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const neverDecreased = entry.size >= lastSize;
      log(
        `Entry:  size: ${entry.size}, rectWidth: ${entry.intersectionRect.width}, rectHeight: ${entry.intersectionRect.height}`,
      );
      //log(`  intersectionRect: ${JSON.stringify(entry.intersectionRect)}`);

      lastSize = entry.size;
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

We then define click event handlers for adding a new paragraph to the container, for scrolling the container out of (and back into) view, and for resetting the example.
Each handler logs the action taken, so you can see whether it was followed by a new entry.

```js
document.querySelector("#add").addEventListener("click", () => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  log(`Clicked "Add element" (paragraph ${count})`);
  container.appendChild(paragraph);
});

document.querySelector("#scroll-out").addEventListener("click", () => {
  log('Clicked "Scroll container out of view"');
  wrapper.scrollTo(0, wrapper.scrollHeight);
});

document.querySelector("#scroll-in").addEventListener("click", () => {
  log('Clicked "Scroll container into view"');
  wrapper.scrollTo(0, 0);
});

document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Result

The container starts in view, so the first click of "Add element" should be followed by a new log entry.
If you continue to add elements elements you will see that you get entries until they start being created offscreen: scrolling up does not trigger them.
Click "Reset" to restart the example and observe similar behavior if scroll the container out of view before adding the elements.

{{EmbedLiveSample("Observing that only visible paints are counted", "100%", 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.size")}}
- {{domxref("PerformanceContainerTiming.firstRenderTime")}}
