---
title: Using the Viewport segments API
slug: Web/API/Viewport_segments_API/Using
page-type: guide
---

{{DefaultAPISidebar("Viewport segments API")}}

This article explains how to use the [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API) to create responsive designs optimized for different viewport segment sizes and arrangements.

## The problem with foldable devices

Foldable devices come in a variety of sizes (smartphones, tablets, and laptops) and forms: some have an actual folding screen, whereas some have separate screens with a physical hinge in the middle. And it is possible to use them in different orientations, for example landscape with two screens side-by-side, and portrait with two screens top-to-bottom.

Whatever the case, foldable device displays are intended to act as different segments of the same display surface. This presents some unique challenges. You can optimize your layout for the display as a single entity, but how can you ensure that design elements fit snugly on the different segments and are not cut into two pieces? And how can you prevent content from being hidden by the physical fold/join?

With traditional CSS and JavaScript, it is difficult to know whether a user's device screen has a fold or join, what size the different segments are and whether they are the same size, and what orientation they are in (side-by-side or top-to-bottom).

The viewport segments API provides features to overcome the challenges described above. We'll introduce you to them in the following sections, then walk through a complete example to show them in action.

## Viewport segment media features

[Media queries](/en-US/docs/Web/CSS/CSS_media_queries) are available to test whether a device has a certain number of viewport segments laid out horizontally or vertically. These look like so:

```css
/* Segments are laid out horizontally. */
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  /* ... */
}

/* Segments are laid out vertically. */
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  /* ... */
}
```

The {{cssxref("@media/horizontal-viewport-segments")}} media feature detects whether the device has a specified number of viewport segments laid out horizontally, whereas the {{cssxref("@media/vertical-viewport-segments")}} media feature detects whether the device has a specified number of viewport segments laid out vertically.

> [!NOTE]
> Current implementations do not support more than two foldable screens.

## Viewport segment environment variables

The media queries introduced previously are useful on their own, but to be able to fit a layout precisely to the available viewport segments, you need to be able to access their dimensions and placement inside the overall viewport. This is where [viewport segment environment variables](/en-US/docs/Web/CSS/env#viewport-segment-width) come in — they allow you to access a segment's width and height, and the offset positions of its top, right, bottom, and left edges:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

When one of these variables is accessed, the {{cssxref("env()")}} function has to be passed the name of the variable plus two extra arguments, which indicate the segment to return the value for. For example:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

The values are both integers of `0` or greater. The first value represents the horizontal index value of the segment, and the second value represents the vertical index value of the segment:

![Two device segment layouts; in a horizontal layout, 0 0 is the first segment and 1 0 is the second segment. In a vertical layout, the indices are 0 0 and 0 1](env-var-indices.png)

- In a horizontal side-by-side layout, the left segment is represented by `0 0`, and the right segment is represented by `1 0`.
- In a vertical top to bottom layout, the top segment is represented by `0 0`, and the bottom segment is represented by `0 1`.

In a layout, you can use these variables to set your containers to fit neatly into the available segments. For example:

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Here, we are setting the outer wrapper to have a horizontal flexbox layout when the viewport segments are laid out horizontally. We then set the left container to have a width equal to the left segment width, and the right container to have a width equal to the right segment width. To calculate how much width the fold takes up in between the two, we subtract the left edge offset of the right container from the right edge offset of the left container.

## Accessing segment information in JavaScript

It is also useful to access segment information in JavaScript. This is done using the {{domxref("Viewport.segments", "window.viewport.segments")}} property, which returns an array of {{domxref("DOMRect")}} objects providing access to each segment's `x` and `y` coordinates inside the overall viewport, and their `width` and `height`.

For example, this snippet will loop through each segment in the viewport, and log a string to the console detailing the index number, width, and height.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Example walkthrough

Let's look at these features in action in a real example. You can see our example running live at [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) (see the full [source code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api) also). If possible, you should view this on a foldable device. Current browser developer tools enable emulating foldable devices, but don't include emulation of the different physical segments.

We'll run through the source code in the following sections.

### HTML structure

The markup features a wrapper {{htmlelement("div")}} containing two {{htmlelement("section")}} elements representing a basic list view and detail view, and a fold `<div>` representing the fold between the two segments on a foldable device.

```html
<div class="wrapper">
  <section class="list-view">
    <!-- ... -->
  </section>
  <div class="fold"></div>
  <section class="detail-view">
    <!-- ... -->
  </section>
</div>
```

### Selectively applying layouts for different segment orientations

In our CSS, we use a combination of media queries and environment variables to create responsive layouts that will fit comfortably into the available segments.

First of all, we use {{cssxref("@media/orientation", "orientation")}} media query tests to set an appropriate flexbox layout for the wrapper `<div>` children in each eventuality — a `row` for `landscape` viewports, and a `column` for `portrait` viewports. Note how we've also set the fold `<div>` to a thin strip in these cases to act as a divider between the two content containers — `20px` wide in the `landscape` layout, and `20px` high in the `portrait` layout.

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (orientation: landscape) {
  .wrapper {
    flex-direction: row;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 100%;
    width: 20px;
  }
}

@media (orientation: portrait) {
  .wrapper {
    flex-direction: column;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 20px;
  }
}
```

Next, we use a {{cssxref("@media/horizontal-viewport-segments")}} media query to handle the case of foldable devices where the segments are side-by-side. We set the left container to have a width equal to the left segment width (`env(viewport-segment-width 0 0)`), and the right container to have a width equal to the right segment width (`env(viewport-segment-width 1 0)`). To calculate how much width the fold takes up in between the two, we subtract the left edge offset of the right container from the right edge offset of the left container (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Finally, we use a {{cssxref("@media/vertical-viewport-segments")}} media query to handle the case of foldable devices where the segments are top-to-bottom. This uses the same approach as the previous code snippet, except that we are setting heights rather than widths, and using height/top/bottom environment variables to return the required values.

```css
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

### Reporting the segment size using JavaScript

We also report the dimensions of each segment, changing the values as the screen is resized, or the [device posture](/en-US/docs/Web/API/Device_Posture_API) or orientation changes.

First of all, we grab references to the wrapper `<div>` and its two `<section>` element children (these are the two containers we've placed inside the two segments using our CSS).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Next, we define a function called `addSegmentOutput()`, which takes a `segments` array, an index number, and an element reference as arguments. It appends an output `<div>` to the given element containing the viewport segment number of that element and the segment's dimensions.

```js
function addSegmentOutput(segments, i, elem) {
  const segment = segments[i];

  const divElem = document.createElement("div");
  divElem.className = "segment-output";

  elem.appendChild(divElem);

  divElem.innerHTML = `<h2>Viewport segment ${i + 1}</h2>
  <p>${segment.width}px x ${segment.height}px</p>`;
}
```

Next, we define another function called `reportSegments()` — this starts by removing all previous segment output `<div>` elements, so that you don't end up with a DOM full of `<div>`s, then it returns an array of the device's segments using {{domxref("Viewport.segments", "window.viewport.segments")}}. We then check the number of segments present:

- If only one is present, we run `addSegmentOutput()` once to add a segment output `<div>` just to the wrapper `<div>` — this will report the dimensions of the entire viewport.
- If two are present, we run `addSegmentOutput()` twice to add a segment output `<div>` to each of the `<section>` elements — these will report the dimensions of the segment the element is within, in each case.

```js
function reportSegments() {
  // Remove all previous segment output elements before adding more
  document.querySelectorAll(".segment-output").forEach((elem) => elem.remove());

  const segments = window.viewport.segments;

  if (segments.length === 1) {
    addSegmentOutput(segments, 0, wrapperElem);
  } else {
    addSegmentOutput(segments, 0, listViewElem);
    addSegmentOutput(segments, 1, detailViewElem);
  }
}
```

Finally, we run the `reportSegments()` function in a few different contexts:

- We run it once in the global scope so that the segment reports are added to the page as soon as the page loads.
- We then include it in two event listeners:
  - [`resize`](/en-US/docs/Web/API/Window/resize_event), to update the segment reports when the window is resized (which includes orientation changes).
  - `DevicePosture` [`change`](/en-US/docs/Web/API/DevicePosture/change_event), to update the segment reports when the device posture changes.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## See also

- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
