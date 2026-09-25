---
title: "PerformanceContainerTiming: lastPaintedElement property"
short-title: lastPaintedElement
slug: Web/API/PerformanceContainerTiming/lastPaintedElement
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.lastPaintedElement
---

{{APIRef("Performance API")}}

The **`lastPaintedElement`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the element that contributed the largest newly-painted area in the frame that generated this entry.

This might be used during debugging to identify which specific piece of content is causing a large or complex container to keep generating entries.

## Value

An {{domxref("HTMLElement")}}, or `null` if there is none.

## Examples

### Logging the last painted element of a container

This example demonstrates how `lastPaintedElement` identifies the element responsible for the largest newly-painted area in each frame.

#### HTML

First we define a {{htmlelement("section")}} element that is marked as a container root with the `containertiming` attribute identified as `"hero"`, along with a button to reset the example.

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
  height: 250px;
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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `lastPaintedElement`.

```js
const container = document.querySelector("section");

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
Each paragraph should trigger a new log showing that the newly-added paragraph is the `lastPaintedElement` for that entry.
Click "Reset" to restart the example.

{{EmbedLiveSample("Logging the last painted element of a container", "100%", 550)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.rootElement")}}
