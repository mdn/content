---
title: "PerformanceContainerTiming: rootElement property"
short-title: rootElement
slug: Web/API/PerformanceContainerTiming/rootElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.rootElement
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`rootElement`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the container root — the element carrying the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute that this entry describes.

## Value

An {{domxref("HTMLElement")}}, or `null` if there is none.

## Examples

### Logging the root element of a container

This example demonstrates that `rootElement` always returns the same container root, however many entries are reported for it.

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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `rootElement`, and whether it's the same element as the {{htmlelement("section")}} in the page.

```js
const container = document.querySelector("section");
let count = 0;

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(`rootElement is container: ${entry.rootElement === container}`);
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
Each element should trigger a new log confirming that `rootElement` still refers to the same container root.
Then click "Reset" to restart the example.

{{EmbedLiveSample("Logging the root element of a container", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.lastPaintedElement")}}
- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML attribute
