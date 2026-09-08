---
title: PerformanceContainerTiming
slug: Web/API/PerformanceContainerTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceContainerTiming
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`PerformanceContainerTiming`** interface of the [Performance API](/en-US/docs/Web/API/Performance_API) contains rendering timing information for containers of content that a developer has annotated with the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute for observation.

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
- {{domxref("PerformanceContainerTiming.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the container's newly-painted content was actually drawn on the screen.
- {{domxref("PerformanceContainerTiming.rootElement")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("HTMLElement")}} that is the container root — the element carrying the `containertiming` attribute that this entry describes — or `null` if there is none.
- {{domxref("PerformanceContainerTiming.size")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the cumulative area, in square CSS pixels, of all the content painted in the container since it was registered as a container root.

It also extends the following {{domxref("PerformanceEntry")}} properties, qualifying and constraining them as described:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0`, as `duration` does not apply to this interface.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"container"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns the empty string.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}}.

## Instance methods

- {{domxref("PerformanceContainerTiming.toJSON()")}} {{Experimental_Inline}}
  - : Overrides the {{domxref("PerformanceEntry.toJSON()")}} method to return a JSON representation of the `PerformanceContainerTiming` object.

## Description

The Container Timing API extends the idea behind the {{domxref("PerformanceElementTiming", "Element Timing API")}} from measuring the render time of individual elements to measuring whole containers of content, such as cards, widgets, or sections that are made up of multiple elements.
As applications are increasingly built from components, developers need to measure the performance of these content blocks as a whole — for example, a "time to first tweet" metric — rather than tracking each of their individual elements separately, which is what {{domxref("PerformanceElementTiming", "Element Timing")}} and {{domxref("LargestContentfulPaint", "Largest Contentful Paint")}} are built for.
A browser-native API like this is also more efficient and reliable than a hand-rolled solution built with a {{domxref("MutationObserver")}} and manual rectangle tracking.
Because a browser generally can't know when a whole section of content has finished rendering — more content, such as an asynchronously-loaded image, could always still be on its way — container timing doesn't report one final, terminal event.
Instead, it reports a stream of candidate entries that update as the container keeps painting.

### Container roots and contribution

An element becomes a _container root_ when the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute is added to it, with a value that identifies the container.
Content painted anywhere in the container root's subtree contributes to the container's timing, including content painted inside a nested container root; that content also counts toward the ancestor containers' timing.
Descendant subtrees can be excluded from a container's timing using the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute.
A container root can also carry `containertimingignore` on itself: unlike excluding a descendant subtree, this doesn't stop the container from generating its own entries, but it does stop its contributions from propagating to any ancestor container.
Content inside a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) never contributes to container timing, regardless of `containertimingignore`.
This applies even if the container root itself is inside that shadow tree: a `containertiming` attribute added to an element inside a web component's shadow DOM still registers a container root, but since that root's own descendants are also inside the shadow tree, it never generates any entries.
Container timing also doesn't cross frame boundaries: content inside a cross-origin {{htmlelement("iframe")}} isn't exposed to a container root in the parent frame, so a parent-page container can't measure a cross-origin embed's paint timing unless the embed explicitly reports its own timing back — for example via {{domxref("Window.postMessage", "postMessage()")}}.

### Container root lifecycle

A container root is registered as soon as an element with the `containertiming` attribute is connected to the document — there's no requirement for the element itself to be visible or have a rendered size.
Removing the attribute, or disconnecting the element from the document, deregisters the container root and discards everything it has accumulated so far.
If the attribute is later re-added (or the element is reconnected while the attribute is still present), the container root is registered again from scratch, with an empty painted region and a new {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} on the next paint.
Because of this, the `containertiming` attribute should be set before the element is added to the document: adding it retroactively only captures paints that happen afterward, not any content already painted.
A container's painted region is also tracked in viewport coordinates: if the container root moves later, for example due to a layout change, the rectangles already accumulated for it aren't retroactively adjusted to follow it.

### Entries, batching, and accumulated data

At most one `PerformanceContainerTiming` entry is generated per container root per rendering frame, so a container that keeps painting new content over multiple frames generates a sequence of candidate entries rather than one final result.
Because each entry in that sequence reflects a different paint, its {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and inherited {{domxref("PerformanceEntry.startTime", "startTime")}} change from one entry to the next — but {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} doesn't: it stays fixed at the time of the container's very first paint, across every entry reported for that container root.
Each entry's {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}} and {{domxref("PerformanceContainerTiming.size", "size")}} describe the container's accumulated painted region since it was registered (not just the change in the current frame).
An entry is only generated when a paint adds genuinely new area to that accumulated region: repainting content that's already been painted — for example, a color change within the same bounds — doesn't add anything new, so it doesn't generate an entry.
This is why `intersectionRect` and `size` only ever grow, or stay the same, from one entry to the next; they never shrink.
Beyond that, there's no minimum size or visibility threshold for what counts as new — even a one-pixel expansion of the painted area queues a new entry — so an application that wants to ignore insignificant updates needs to filter them out itself, for example by comparing `size` between successive entries.
Support for container timing can be feature-detected by checking whether {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} includes `"container"`.
{{domxref("PerformanceContainerTiming.lastPaintedElement", "lastPaintedElement")}} is intended as a debugging aid for figuring out what's driving updates in a large or complex container, rather than as a performance metric in its own right — it exists so that developers aren't left depending on implementation-specific paint ordering.

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

### Observing separate paint and presentation timings

The `paintTime` and `presentationTime` properties enable you to retrieve specific timings for when the paint phase starts and when the newly-painted content is drawn on the screen.
The `paintTime` is broadly interoperable, whereas the `presentationTime` is implementation-dependent.

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
It then creates a {{domxref("PerformanceObserver")}} that logs each entry's `paintTime` and, when exposed by the browser, its `presentationTime`.

```js
const container = document.querySelector("section");
let count = 0;

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.presentationTime) {
        log(
          `paintTime: ${entry.paintTime.toFixed(1)}, presentationTime: ${entry.presentationTime.toFixed(1)}`,
        );
      } else {
        log(`paintTime: ${entry.paintTime.toFixed(1)}`);
      }
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
Each element should trigger a new log showing its `paintTime` and, where exposed, its `presentationTime`.
Then click "Reset" to restart the example.

{{EmbedLiveSample("Observing separate paint and presentation timings", "100%", 400)}}

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
