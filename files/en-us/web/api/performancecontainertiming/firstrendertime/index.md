---
title: "PerformanceContainerTiming: firstRenderTime property"
short-title: firstRenderTime
slug: Web/API/PerformanceContainerTiming/firstRenderTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.firstRenderTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`firstRenderTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the time of the first paint that contributed content to this container.

This remains fixed at the time of the container's very first paint after registration, across every entry reported for that container.
This is different from {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and {{domxref("PerformanceEntry.startTime", "startTime")}}, which reflect the paint that generated a particular entry.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

### Observing that firstRenderTime stays fixed

This example demonstrates that `firstRenderTime` stays fixed at the container's very first paint (while `startTime` and `paintTime` change with every entry).

#### HTML

First define a {{htmlelement("section")}} element that is marked as a container root with the `containertiming` attribute identified as `"hero"`, along with two buttons: one to add more content to the container, and one to reset it.

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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's {{domxref("PerformanceContainerTiming.lastPaintedElement", "lastPaintedElement")}}, and its `firstRenderTime`, {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and {{domxref("PerformanceEntry.startTime", "startTime")}}.

```js
const container = document.querySelector("section");
let count = 0;

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `lastPaintedElement: ${entry.lastPaintedElement?.outerHTML ?? "null"}`,
      );
      log(`  firstRenderTime: ${entry.firstRenderTime.toFixed(1)}`);
      log(`  startTime: ${entry.startTime.toFixed(1)}`);
      log(`  paintTime: ${entry.paintTime.toFixed(1)}`);
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
Each element should trigger a new log where the `firstRenderTime` stays the same but the other properties change value.
Then click "Reset" to restart the example.

{{EmbedLiveSample("Observing that firstRenderTime stays fixed", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.paintTime")}}
