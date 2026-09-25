---
title: "PerformanceContainerTiming: rootElement property"
short-title: rootElement
slug: Web/API/PerformanceContainerTiming/rootElement
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.rootElement
---

{{APIRef("Performance API")}}

The **`rootElement`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the container root element.
This is the {{domxref("HTMLElement")}} to which the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute was applied.
It can be `null` if the entry is read after the root element has been removed from the document and garbage collected.

## Value

An {{domxref("HTMLElement")}}, or `null`.

## Examples

### Logging the root element of a container

This example demonstrates that `rootElement` always returns the same container root, however many entries are reported for it.

#### HTML

First we define a {{htmlelement("section")}} element that is marked as a container root identified as `"hero"` by its `containertiming` attribute, along with a button to reset the example.

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

The following code first checks whether the browser supports `"container"` entries: if not, it logs that the feature is not supported.
It then creates a {{domxref("PerformanceObserver")}} that logs whether each entry's `rootElement` is the same element as the {{htmlelement("section")}} in the page.

```js
const container = document.querySelector("section");

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
  window.location.reload();
});
```

#### Result

A new paragraph is added every second.
Each paragraph should trigger a new log confirming that `rootElement` still refers to the same container root.
Click the **Reset** button to restart the example.

{{EmbedLiveSample("Logging the root element of a container", "100%", 550)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.lastPaintedElement")}}
- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML attribute
