---
title: PerformanceContainerTiming
slug: Web/API/PerformanceContainerTiming
page-type: web-api-interface
browser-compat: api.PerformanceContainerTiming
---

{{APIRef("Performance API")}}

The **`PerformanceContainerTiming`** interface of the [Performance API](/en-US/docs/Web/API/Performance_API) represents a single update of the timing information for the painting of elements within a container.
A developer can observe a stream of these objects to analyze the rendering behaviour of a component built from multiple elements.

`PerformanceContainerTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface directly defines the following properties:

- {{domxref("PerformanceContainerTiming.firstRenderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time of the first paint that contributed content to this container.
- {{domxref("PerformanceContainerTiming.identifier")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of the `containertiming` attribute on the container's root element.
- {{domxref("PerformanceContainerTiming.intersectionRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} representing the bounding rectangle, within the viewport, of all the content painted in the container since it was registered as a container root.
- {{domxref("PerformanceContainerTiming.lastPaintedElement")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("HTMLElement")}} that contributed the largest newly-painted area in the frame that generated this entry, or `null` if there is none.
- {{domxref("PerformanceContainerTiming.paintTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the paint phase started.
    It is useful for comparing results across browsers.
- {{domxref("PerformanceContainerTiming.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the container's newly-painted content was actually drawn on the screen.
    The value is implementation dependent, and therefore useful primarily for comparing results from a single browser.
- {{domxref("PerformanceContainerTiming.rootElement")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("HTMLElement")}} that is the container root, or `null`.
    This is the element to which the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute was applied.
- {{domxref("PerformanceContainerTiming.size")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the cumulative area, in square CSS pixels, of all the content painted in the container since it was registered as a container root.

These inherited {{domxref("PerformanceEntry")}} properties are constrained as described:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `0` (`duration` does not apply to this interface).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the string `"container"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the empty string (`""`).
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}}.

## Instance methods

- {{domxref("PerformanceContainerTiming.toJSON()")}} {{Experimental_Inline}}
  - : Overrides the {{domxref("PerformanceEntry.toJSON()")}} method to return a JSON representation of the `PerformanceContainerTiming` object.

## Description

This interface gives web developers tools to measure rendering timestamps for groups of elements within a container.
It is useful for analyzing the time to display a web component as a whole, such as a UI widget made up of multiple sub elements, as these can't be represented effectively by observers that track the paint time of individual elements, or those than track loading of the whole page.

A container that paints its nested elements over multiple frames generates a sequence of `PerformanceContainerTiming` entries: at most one per rendering frame.

Each entry in the sequence reflects a different paint, so the {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and inherited {{domxref("PerformanceEntry.startTime", "startTime")}} change from one entry to the next ({{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} is the same across every entry reported for that container root since it was registered).
The {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}} and {{domxref("PerformanceContainerTiming.size", "size")}} describe the container's accumulated painted region since it was registered, while the {{domxref("PerformanceContainerTiming.lastPaintedElement")}} indicates the element that contributed most to the current entry.

This information allows developers to build up an understanding of when each part of the container was rendered in each frame.

### Registering a container

In order to be able to observe events from a container we add the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute to that element, specifying an identifier for the container.
The element then becomes the _container root element_, or simply the "container root".
Paints of new visible regions by the nested elements (but not the root element itself) will subsequently contribute to container timing updates.

You can set any HTML element as a container, but not SVG or MathML elements.
Note though that some elements can't contain other elements, such as `<hr>` or `<img>`.
Even though you can mark these as container roots, they can't contain elements, and hence can't generate timing updates.

The following HTML shows how a container is registered.
It defines a card-style component built from an {{htmlelement("article")}} element that contains a number of other elements:

```html
<article containertiming="cool-card">
  <header>
    <img src="avatar.jpg" alt="" />
    <span class="username">@username</span>
  </header>
  <p>Chat text.</p>
  <div containertimingignore>
    <!-- third-party "suggested for you" widget -->
  </div>
</article>
```

The `<article>` is turned into a container root identified as `"cool-card"` by its `containertiming` attribute.
Paints from its avatar image, username, and chat text all contribute to the container's timing updates.

The nested `<div>` has the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore), which prevents paints from that element and its descendants from contributing to the timing updates.
This is useful for excluding updates when part of the container isn't relevant: such as an advertisement that is displayed inside your card, but that doesn't stop it being usable.

### Observing container entries

You can observe the events from "cool-card" using a {{domxref("PerformanceObserver")}}, in the same way as for other Performance API.
Note that in this code fragment we first feature check by testing if {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} includes `"container"`, and we pass `type="container"` to {{domxref("PerformanceObserver.observe", "observe()")}} so that we only get container timing events :

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  // PerformanceContainerTiming supported
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Container "${entry.identifier}" painted ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

### When are entries generated?

At most one entry is generated for each container in each rendering frame.
Entries are generated only for updates from nested elements in the visual viewport, and only for paint operations that draw over new areas.
Entries are not generated for repaints outside of the visual viewport or over already-painted areas, or for elements excluded by `containertimingignore`.
They also aren't generated for elements that aren't painted (such as those with `display: none`), or for the container root element itself.

The browser maintains a record we refer to here as the "accumulated painted region" that is used for tracking whether painting an element triggers a container timing performance entry (this is different and independent of the rendering pipeline).
The first time an element in a container is rendered, the browser clips the painted area to the visual viewport, and updates the accumulated painted region to include it.
If the operation causes the accumulated painted region to increase (i.e., a new area is painted), this causes a container timing entry to be added.
The bounding rectangle of the region can be returned using {{domxref("PerformanceContainerTiming.intersectionRect")}} and the painted size can be returned with {{domxref("PerformanceContainerTiming.size")}}.
The `intersectionRect` is always the same or bigger than the `size` because it can include gaps between painted areas.

Changes that do not cause the accumulated painted region to increase do not trigger a new entry.
This includes:

- A paint that's fully clipped away
- An element that repaints an area that is already in the region
- A repaint of an element after its first paint
- Scrolling an element into view that was outside the viewport when it was first rendered

This last point means that the accumulated painted region may not precisely reflect all parts of the container, and that you will not get entries for elements in the container even though they later become visible on screen.
You may however get entries if you add an element in the container to a previously clipped area.

In addition, entries are not generated for content inside a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM), even if the container root itself is inside that shadow tree.
Container timing also doesn't cross frame boundaries: content inside a cross-origin {{htmlelement("iframe")}} isn't exposed to a container root in the parent frame.

### Container lifecycle

A container root is registered as soon as an element with the `containertiming` attribute is connected to the document.
Removing the attribute, or disconnecting the element from the document, deregisters the container root and discards everything it has accumulated so far.
If the attribute is later re-added (or the element is reconnected while the attribute is still present), the container root is re-registered with an empty painted region and a new {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} on the next paint.
The `containertiming` attribute should therefore be set before the element is added to the document, in order to ensure it reflects all drawing operations.

A container's painted region is also tracked in viewport coordinates: if the container root moves later, for example due to a layout change, the rectangles already accumulated for it aren't retroactively adjusted to follow it.

## Examples

### Observing container render times

In this example, two containers are marked for observation by adding the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute.
A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"container"`, and the `buffered` flag is used to access data from before observer creation.

#### HTML

First we define two elements that are marked as container roots with the `containertiming` attribute, identified as `"hero"` and `"product-list"`, respectively.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
<div containertiming="product-list">
  <p>Product list content</p>
</div>
```

Note that there is also hidden HTML (and code) for displaying log information.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `identifier`, `size`, and {{domxref("PerformanceEntry.startTime", "startTime")}}.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Container "${entry.identifier}" painted ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Result

The log below shows the `identifier`, `size`, and `startTime` reported for each of the two containers.

{{EmbedLiveSample("Observing container render times", "100%", 250)}}

### Observing how entries change as a container grows

This example logs the properties an entry for a single container that you can grow by pressing a button.

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
It then creates a {{domxref("PerformanceObserver")}} that logs a numbered line for each entry and its properties.
The `presentationTime` is implementation-dependent, so the code logs `n/a` when the browser doesn't provide a value (the property may be `null` or `0`).

```js
const container = document.querySelector("section");
let count = 0;
let entryNumber = 0;

const formatTime = (time) => (time ? time.toFixed(1) : "n/a");
const formatElement = (element) =>
  element ? `<${element.localName}>` : "null";

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const rect = entry.intersectionRect;
      log(
        `#${++entryNumber} id: ${entry.identifier}, rootElement: ${formatElement(entry.rootElement)}, firstRenderTime: ${formatTime(entry.firstRenderTime)}`,
      );
      log(`  paintTime: ${formatTime(entry.paintTime)}`);
      log(`  presentationTime: ${formatTime(entry.presentationTime)}`);
      log(`  size: ${entry.size}`);
      log(
        `  intersectionRect: ${rect.width.toFixed(1)}(w) x ${rect.height.toFixed(1)}(h)`,
      );
      log(`  lastPaintedElement: ${formatElement(entry.lastPaintedElement)}`);
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

We then define click event handlers to add a new paragraph to the container, triggering a new paint event and timing entry, and to reset the example.
The paragraphs have increasing amounts of text, so the painted area grows by a different amount each time.

```js
document.querySelector("#add").addEventListener("click", () => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}. ${"Some more text. ".repeat(count * 3)}`;
  container.appendChild(paragraph);
});

document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Result

Click "Add element" to add new paragraphs, and compare the values in each log entry.
Click "Reset" to restart the example.

{{EmbedLiveSample("Observing how entries change as a container grows", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceObserver")}}
- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML attribute
- [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) HTML attribute
- {{domxref("HTMLElement.containerTiming")}}
- {{domxref("HTMLElement.containerTimingIgnore")}}
