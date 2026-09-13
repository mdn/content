---
title: "PerformanceContainerTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceContainerTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceContainerTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceContainerTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceContainerTiming")}} object.

The JSON doesn't contain the {{domxref("PerformanceContainerTiming.lastPaintedElement", "lastPaintedElement")}} or {{domxref("PerformanceContainerTiming.rootElement", "rootElement")}} properties, because they are of type {{domxref("HTMLElement")}}, which doesn't provide a `toJSON()` operation.

## Examples

### Using the toJSON method

This example demonstrates how the `toJSON()` method is used.

#### HTML

First we define a {{htmlelement("section")}} element that is marked as a container root with the `containertiming` attribute identified as `"hero"`.
The section contains two other elements that will be drawn, resulting in a container performance entry.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
  <p>The parent element of this paragraph is a container root.</p>
</section>
```

Note that there is also hidden HTML (and code) for displaying log information.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 350px;
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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry, calling the `toJSON()` method directly to get the JSON object.
The observer is then started, filtering only for entries of type `"container"`.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(JSON.stringify(entry.toJSON(), null, 2));
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Result

The JSON output is displayed below in the log, after the elements.

{{EmbedLiveSample("Using the toJSON method", "100%", 500)}}

Note that in this case only one entry is logged, even though the container root has two child elements.
The browser emits at most one `PerformanceContainerTiming` entry for every container root on each rendering frame (aggregating every element that paints during that frame).
In this case elements paint in the container's first frame and are logged as one entry.

The entry should look something like this:

```json
{
  "name": "",
  "entryType": "container",
  "startTime": 77,
  "duration": 0,
  "identifier": "hero",
  "intersectionRect": {
    "x": 0,
    "y": 19.916666666666668,
    "width": 359.7,
    "height": 66.71666666666667,
    "top": 19.916666666666668,
    "right": 359.7,
    "bottom": 86.63333333333334,
    "left": 0
  },
  "size": 10519,
  "firstRenderTime": 77,
  "paintTime": 77,
  "presentationTime": null
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
