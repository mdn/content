---
title: "PerformanceContainerTiming: firstRenderTime property"
short-title: firstRenderTime
slug: Web/API/PerformanceContainerTiming/firstRenderTime
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.firstRenderTime
---

{{APIRef("Performance API")}}

The **`firstRenderTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the time at which the rendering update ended for the first paint that contributed content to this container.

This remains fixed at the time of the container's very first paint after registration, across every entry reported for that container.
This differs from {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and {{domxref("PerformanceEntry.startTime", "startTime")}}, which reflect the paint that generated a particular entry.

## Value

A {{domxref("DOMHighResTimeStamp")}} measured relative to the {{domxref("Performance.timeOrigin", "time origin")}}.

## Examples

### Observing that firstRenderTime stays fixed

This example demonstrates that `firstRenderTime` stays fixed at the container's very first paint (while `startTime` and `paintTime` change with every entry).

#### HTML

First define a {{htmlelement("section")}} element that is marked as a container root with the `containertiming` attribute identified as `"hero"`, along with a button to reset the example.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Note that there is also hidden HTML (and code) for displaying log information.
New log entries are added at the top of the log.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${text}\n${logElement.innerText}`;
}
```

#### JavaScript

The following code first checks if there are any `"container"` entries: if not, it logs that the feature is not supported.
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's {{domxref("PerformanceContainerTiming.lastPaintedElement", "lastPaintedElement")}}, and its `firstRenderTime`, {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and {{domxref("PerformanceEntry.startTime", "startTime")}}.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `lstPntdElmnt: ${entry.lastPaintedElement?.outerHTML ?? "null"}` +
          ` firstRenderTime: ${entry.firstRenderTime.toFixed(1)}` +
          ` startTime: ${entry.startTime.toFixed(1)}` +
          ` paintTime: ${entry.paintTime.toFixed(1)}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

We then use {{domxref("Window.setInterval()", "setInterval()")}} to add a new paragraph to the container every second, stopping after five paragraphs.
Each paragraph triggers a new paint and timing entry.
Note that we add content on a timer rather than when the user clicks a button, because no entries are reported after the user interacts with the page (see [Reporting stops after scrolling or user input](/en-US/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

```js
const maxParagraphs = 5;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  container.appendChild(paragraph);
  if (count >= maxParagraphs) {
    clearInterval(timer);
  }
}, 1000);
```

Last of all we add a click event handler to reset the example by reloading the page.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Result

A new paragraph is added every second.
Each paragraph should trigger a new log where the `firstRenderTime` stays the same but the other properties change value.
Click "Reset" to restart the example.

{{EmbedLiveSample("Observing that firstRenderTime stays fixed", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.paintTime")}}
