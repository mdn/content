---
title: PerformanceContainerTiming
slug: Web/API/PerformanceContainerTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceContainerTiming
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

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

The Container Timing API gives web developers tools to measure rendering timestamps for groups of elements within a container.
It is useful for analyzing the time to display a web component as a whole, such as a UI widget made up of multiple sub elements, as these can't be represented effectively by observers that track the paint time of individual elements or the whole page.

In order to be able to observe events from a container we add the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute to that element, specifying an identifier for the container.
The element then becomes the _container root element_, or simply the "container root".
Any paints of the nested element will subsequently contribute to timing updates, but not the element itself.

You can set any HTML element as a container, but not SVG or MathML elements.
Note thought that some elements can't contain other elements, such as `<hr>` or `<img>`, so even though you cn make these containers they can't contain elements, an so can't generate timing updates.

The following HTML shows how this works.
It defines a card-style component built from an {{htmlelement("article")}} element with a number of other nested elements:

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

You can then observe the events from "cool-card" using the PerformanceObserver, in the same way as for other Performance timing APIs.

```js
Insert example. Include feature checking. Add at end.


if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  // PerformanceContainerTiming supported
} else {
  // Not supported
}


```

Note that we test if the container timing API is supported at all by checking if {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} includes `"container"`.:

<!--

- Elements tha are `display: none` don't paint.
- Container root in shadow root doesn't contribute entries.
- Roots in iframes don't contribute to ancestors.
-->

<!--

Each container reports at most one entry for each rendering frame while new areas are being painted in the visible viewport.
This allows developers to build up an understanding of when each element is rendered.
-->

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

### When are entries generated?

PerformanceContainerTiming is needed because the elements inside a container are painted

A container typically paints its descendant elements over multiple frames, with different parts completing at different times - this is why

At most one `PerformanceContainerTiming` entry is generated per container root per rendering frame.
A container has descendants that paint new areas over multiple frames generates a sequence of candidate entries rather than one final result.

Because each entry in that sequence reflects a different paint, its {{domxref("PerformanceContainerTiming.paintTime", "paintTime")}} and inherited {{domxref("PerformanceEntry.startTime", "startTime")}} change from one entry to the next — but {{domxref("PerformanceContainerTiming.firstRenderTime", "firstRenderTime")}} doesn't: it stays fixed at the time of the container's very first paint, across every entry reported for that container root.
Each entry's {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}} and {{domxref("PerformanceContainerTiming.size", "size")}} describe the container's accumulated painted region since it was registered (not just the change in the current frame).

The browser maintains this accumulated painted region as a record separate from the rendering pipeline, used solely to decide whether a paint should generate a new entry: the first time an element in the container paints, its painted area is clipped to the visual viewport and added to the region, and an entry is only generated when that addition makes the region bigger.
Changes that don't grow the region — and so don't generate an entry — include a paint that's fully clipped outside the viewport, a repaint of an area that's already in the region, and scrolling a previously off-screen (and already-painted) element into view without it repainting.
This is why `intersectionRect` and `size` only ever grow, or stay the same, from one entry to the next; they never shrink — and it's also why content that becomes visible purely through scrolling won't necessarily produce an entry of its own.
Beyond that, there's no minimum size or visibility threshold for what counts as new — even a one-pixel expansion of the painted area queues a new entry — so an application that wants to ignore insignificant updates needs to filter them out itself, for example by comparing `size` between successive entries.

### Scratchpad: table/sequence

> [!NOTE]
> Draft content for review — delete this heading, and whichever of the diagram or table below isn't kept, once we've decided how to present this.

The following sequence diagram and table both walk through the same four rendering frames for the hero container used in the examples on this page, showing when a paint grows the accumulated painted region (and so generates an entry) and when it doesn't.

![Sequence diagram showing four rendering frames for a hero container: two frames that paint new content and generate entries, a repaint that doesn't, and a final frame that paints more new content and generates another entry.](scratchpad-sequence.svg)

| Frame | What happens                                                            | Does the accumulated region grow?           | Entry generated?                       |
| ----- | ----------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------- |
| 1     | The container's `<h2>` paints for the first time.                       | Yes — first paint, clipped to the viewport. | Yes — Entry 1.                         |
| 2     | A new `<p>` is appended and paints inside the viewport.                 | Yes — new area added.                       | Yes — Entry 2, `size` increases.       |
| 3     | The same `<p>`'s text color changes (a repaint within the same bounds). | No — that area is already in the region.    | No entry.                              |
| 4     | Another `<p>` is appended and paints.                                   | Yes — new area added.                       | Yes — Entry 3, `size` increases again. |

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
