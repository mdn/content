---
title: "PerformanceContainerTiming: lastPaintedElement property"
short-title: lastPaintedElement
slug: Web/API/PerformanceContainerTiming/lastPaintedElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.lastPaintedElement
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`lastPaintedElement`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the element that contributed the largest newly-painted area in the frame that generated this entry.

This might be used during debugging to identify which specific piece of content is causing a large or complex container to keep generating entries.

## Value

An {{domxref("HTMLElement")}}, or `null` if there is none.

## Examples

### Logging the last painted element of a container

This example demonstrates how `lastPaintedElement` identifies the element responsible for the largest newly-painted area in each frame.

#### HTML

First we define a {{htmlelement("section")}} element that is marked as a container root with the `containertiming` attribute identified as `"hero"`, along with two buttons: one to add more content to the container, and one to reset it.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
<button id="add">Add element</button>
<button id="reset">Reset</button>
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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `lastPaintedElement`.

```js
const container = document.querySelector("section");
let count = 0;

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `lastPaintedElement: ${entry.lastPaintedElement?.outerHTML ?? "null"}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

We then define click event handlers to add a new paragraph to the container, triggering a new paint event and timing entry, and to reset the example.

```js
document.querySelector("#add").addEventListener("click", () => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  container.appendChild(paragraph);
});

document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Result

Click "Add element" to add new elements.
Each element should trigger a new log showing that the newly-added paragraph is the `lastPaintedElement` for that entry.
Then click "Reset" to restart the example.

{{EmbedLiveSample("Logging the last painted element of a container", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.rootElement")}}
