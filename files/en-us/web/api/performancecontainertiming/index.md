---
title: PerformanceContainerTiming
slug: Web/API/PerformanceContainerTiming
page-type: web-api-interface
browser-compat: api.PerformanceContainerTiming
---

{{APIRef("Performance API")}}

The **`PerformanceContainerTiming`** interface of the [Performance API](/en-US/docs/Web/API/Performance_API) represents a single update of the timing information for the painting of elements within a container.
A developer can observe a stream of these objects to analyze the rendering behavior of a component built from multiple elements.

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
  - : Returns the {{domxref("HTMLElement")}} that contributed the largest newly painted area in the frame that generated this entry, or `null` if there is none.
- {{domxref("PerformanceContainerTiming.paintTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the paint phase started.
    It is useful for comparing results across browsers.
- {{domxref("PerformanceContainerTiming.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the container's newly painted content was actually drawn on the screen.
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
It is useful for measuring when a component built from multiple nested elements, such as a UI widget, has rendered as a whole.
Observers that track the paint time of individual elements, or the loading of the whole page, can't measure this effectively.

A container that paints its nested elements over multiple frames generates a sequence of `PerformanceContainerTiming` entries: at most one per rendering frame.
The sequence ends when the user scrolls or interacts with the page (see [Reporting stops after scrolling or user input](#reporting_stops_after_scrolling_or_user_input)).

Each entry in the sequence reflects a different paint, so the {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and inherited {{domxref("PerformanceEntry.startTime", "startTime")}} change from one entry to the next.
The {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} is the same across every entry reported for that container root since it was registered.
The {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}} and {{domxref("PerformanceContainerTiming.size", "size")}} describe the container's [accumulated painted region](#when_are_entries_generated) since it was registered, while the {{domxref("PerformanceContainerTiming.lastPaintedElement", "lastPaintedElement")}} indicates the element that contributed most to the current entry.

This information allows developers to build up an understanding of when each part of the container was rendered in each frame.

### Registering a container

To observe entries from a container, we add the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute to that element, specifying an identifier for the container.
The element then becomes the _container root element_, or simply the "container root".
Paints of new visible regions by the nested elements (but not the root element itself) will subsequently contribute to container timing updates.

You can set any HTML element as a container, but not SVG or MathML elements.
Note though that some elements, such as `<hr>` and `<img>`, can't contain other elements.
You can mark these as container roots, but they won't generate timing entries.

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

The nested `<div>` has the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute, which prevents paints from that element and its descendants from contributing to the timing updates.
This is useful for excluding content that isn't essential to the container from its timing, such as an advertisement displayed inside your card: the card is usable whether or not the advertisement has painted.

Container roots can be nested.
A paint inside an inner container root contributes to the timing of the inner root and of each of its ancestor container roots.
If the inner container root also has the `containertimingignore` attribute, its paints contribute only to its own timing.

### Observing container entries

You can observe the entries from `"cool-card"` using a {{domxref("PerformanceObserver")}}, in the same way as for other Performance API entry types.
Note that in this code fragment we first feature check by testing if {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} includes `"container"`, and we pass `{ type: "container" }` to {{domxref("PerformanceObserver.observe", "observe()")}} so that we get only container timing entries:

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  // PerformanceContainerTiming supported
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(
        `Container "${entry.identifier}" total painted area ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  console.log("This feature is not supported by your browser.");
}
```

### When are entries generated?

At most one entry is generated for each container in each rendering frame.
Entries are generated only for updates from nested elements in the visual viewport, and only for paint operations that draw over new areas.
Entries are not generated for elements excluded by `containertimingignore`.
They also aren't generated for elements that aren't painted (such as those with `display: none`), or for the container root element itself.

The browser maintains a record, which we refer to here as the "accumulated painted region", to track whether painting an element should generate a container timing entry.
This record is separate from the rendering pipeline.
The first time an element in a container is rendered, the browser clips the painted area to the visual viewport, and updates the accumulated painted region to include it.
If the accumulated painted region grows (that is, a new area is painted), the browser generates a container timing entry.
The {{domxref("PerformanceContainerTiming.intersectionRect")}} property returns the bounding rectangle of the region, and {{domxref("PerformanceContainerTiming.size")}} returns its painted area.
The area of the `intersectionRect` is always greater than or equal to the `size`, because the rectangle can include gaps between painted areas.

Changes that do not cause the accumulated painted region to increase do not trigger a new entry.
This includes:

- A paint that's fully clipped away
- A paint of an area that's already in the region
- A repaint of an element after its first paint

In addition, entries are not generated for content inside a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM), even if the container root itself is inside that shadow tree.
Container timing also doesn't cross frame boundaries: content inside an {{htmlelement("iframe")}} isn't exposed to a container root in the parent frame.

No entries are generated at all after the user scrolls or interacts with the page, as described in [Reporting stops after scrolling or user input](#reporting_stops_after_scrolling_or_user_input).

### Reporting stops after scrolling or user input

Entries are reported only until the user first scrolls or interacts with the page, such as by clicking or pressing a key.
Scrolling includes scrolling any scrollable element in the page, as well as scrolling the page itself.
After that, no further entries are generated.

This is because the API is designed to measure how long it takes for content to appear as it loads.
Once the user has interacted with the page, times measured from the {{domxref("Performance.timeOrigin", "time origin")}} include time spent by the user, so they are no longer a useful measure of rendering performance.

This also means that the accumulated painted region only ever includes content that was painted inside the viewport before the user scrolled.
Content that is outside the viewport when it is painted, such as content below the fold, is never reported, even if the user later scrolls it into view.
The {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}} and {{domxref("PerformanceContainerTiming.size", "size")}} therefore indicate how much of the container rendered within the viewport, rather than how much of the whole container rendered.

### Container lifecycle

A container root is registered as soon as an element with the `containertiming` attribute is connected to the document.
Removing the attribute, or disconnecting the element from the document, deregisters the container root and discards everything it has accumulated so far.
If the attribute is later re-added (or the element is reconnected while the attribute is still present), the container root is re-registered with an empty painted region and a new {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} on the next paint.
The `containertiming` attribute should therefore be set before the element is added to the document, so that the container's entries reflect all of its paints.

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
  height: 50px;
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

The following code first checks whether the browser supports `"container"` entries: if not, it logs that the feature is not supported.
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `identifier`, `size`, and {{domxref("PerformanceEntry.startTime", "startTime")}}.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Container "${entry.identifier}" total painted area ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Result

The following log shows the `identifier`, `size`, and `startTime` reported for each of the two containers.

{{EmbedLiveSample("Observing container render times", "100%", 200)}}

### Observing how entries change as a container grows

This example logs the properties of each entry for a single container, which grows as new content is added to it on a timer.

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
It then creates a {{domxref("PerformanceObserver")}} that logs a numbered set of lines for each entry and its properties.
The `presentationTime` is implementation-dependent, so the code logs `n/a` when the browser doesn't provide a value (the property is `null`).

```js
const container = document.querySelector("section");
let entryNumber = 0;

const formatTime = (time) => (time ? time.toFixed(1) : "n/a");
const formatElement = (element) =>
  element ? `<${element.localName}>` : "null";

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const rect = entry.intersectionRect;
      log(
        [
          `#${++entryNumber} id: ${entry.identifier}, rootElement: ${formatElement(entry.rootElement)}, firstRenderTime: ${formatTime(entry.firstRenderTime)}`,
          `  paintTime: ${formatTime(entry.paintTime)}`,
          `  presentationTime: ${formatTime(entry.presentationTime)}`,
          `  size: ${entry.size}`,
          `  intersectionRect: ${rect.width.toFixed(1)}(w) x ${rect.height.toFixed(1)}(h)`,
          `  lastPaintedElement: ${formatElement(entry.lastPaintedElement)}`,
        ].join("\n"),
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
The paragraphs have increasing amounts of text, so the painted area grows by a different amount each time.

Note that we add content on a timer rather than when the user clicks a button, because no entries are reported after the user interacts with the page.

```js
const maxParagraphs = 5;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}. ${"Text. ".repeat(count * 3)}`;
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

A new paragraph is added every second: compare the values in each log entry as the container grows.
Click the **Reset** button to restart the example.

Note that if you click, press a key, or scroll inside the example, no further entries are reported until you reset it.

{{EmbedLiveSample("Observing how entries change as a container grows", "100%", 600)}}

### Observing that scrolling stops reporting

This example demonstrates that entries stop being reported for a container after the user scrolls, even though new content is still being painted into it.

#### HTML

First we define a small scrollable {{htmlelement("div")}}, a button to reset the example, and a {{htmlelement("section")}} element that is marked as a container root identified as `"hero"` by its `containertiming` attribute.

```html
<div id="scroll-box">
  <p>Scroll this box to stop reporting.</p>
  <p>Keep scrolling…</p>
  <p>…nearly there…</p>
  <p>…end of the box.</p>
</div>
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

#### CSS

The CSS gives the `<div>` a fixed height and makes its content scrollable.

```css
#scroll-box {
  width: 250px;
  height: 3rem;
  overflow: auto;
  border: 1px solid black;
}

section p {
  margin: 0;
}
```

Note that there is also hidden HTML (and code) for displaying log information.
New log entries are added at the top of the log.

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
  logElement.innerText = `${text}\n${logElement.innerText}`;
}
```

#### JavaScript

The following code first checks whether the browser supports `"container"` entries: if not, it logs that the feature is not supported.
It then creates a {{domxref("PerformanceObserver")}} that logs the `size` and `paintTime` of each entry.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Entry: size: ${entry.size}, paintTime: ${entry.paintTime.toFixed(1)}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

We then use {{domxref("Window.setInterval()", "setInterval()")}} to add a new paragraph to the container every second, stopping after ten paragraphs.
Each paragraph is logged when it is added, so you can see whether it is followed by a new entry.

```js
const maxParagraphs = 10;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  container.appendChild(paragraph);
  log(`Added paragraph ${count}`);
  if (count >= maxParagraphs) {
    clearInterval(timer);
  }
}, 1000);
```

Next we log the first time the user scrolls the scrollable `<div>`, so you can see when reporting stops.

```js
document.querySelector("#scroll-box").addEventListener(
  "scroll",
  () => {
    log("Scrolled: no further entries expected");
  },
  { once: true },
);
```

Last of all we add a click event handler to reset the example by reloading the page.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Result

At first, each added paragraph is followed by a new entry.
Scroll the box at any point: paragraphs are still added after that, but no further entries are logged.
Click the **Reset** button to restart the example.

{{EmbedLiveSample("Observing that scrolling stops reporting", "100%", 550)}}

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
