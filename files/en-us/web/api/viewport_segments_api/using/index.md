---
title: Using the Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
page-type: guide
---

{{DefaultAPISidebar("Viewport segments API")}}

This article explains how to use the [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API) to create responsive designs optimized for different viewport segment sizes and arrangements.

## The problem with foldable devices

Foldable devices include smartphones, tablets, and laptops. Some fold inward, with the display folding into the interior of the device, and some fold outward, with the display wrapping around the device. Foldable devices come in a variety of forms: some have an actual folding screen, whereas some have separate screens with a physical hinge in the middle. They may be used in landscape orientation, with two screens side-by-side, and portrait orientation, with a top and a bottom screen.

Whatever the case, foldable device displays are intended to act as different segments of the same display surface. While one person's foldable device may appear seemless and be used fully flat, similar to a single-segmented viewport, another may have an apparent seam be used at an angle that is less than a fully open, flat screen. This presents some unique challenges. You can optimize your layout for the display as a single entity, but how can you ensure that design elements fit snugly on the different segments and are not cut into two pieces? And how can you prevent content from being hidden by the physical fold/join?

The viewport segments API provides features that allow you to detect (in CSS and JavaScript) whether the user's device screen has a fold or join, what size the different segments are, whether they are the same size, and what orientation they are in (side-by-side or top-to-bottom). We'll introduce you to these features in the following sections, then walk through a complete example to show them in action.

## Viewport segment media features

Two [media query](/en-US/docs/Web/CSS/CSS_media_queries) features are available that enable testing whether a device has a specific number of viewport segments laid out horizontally or vertically. These look like so:

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

## Viewport segment environment variables

To be fit a layout precisely into the available viewport segments, the [viewport segment environment variables](/en-US/docs/Web/CSS/env#viewport-segment-width) provide access to each segments dimensions and placement inside the overall viewport. The browser provides [environment variables] enabling access to each segment's width and height and the offset positions of its top, right, bottom, and left edges:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

The {{cssxref("env()")}} function is used to access these variables, with the name of the variable and two integers representing the indices of the segment to return the value for. For example:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

The indices are both integers of `0` or greater. The first value represents the horizontal index value of the segment, and the second value represents the vertical index value of the segment:

![Two device segment layouts; in a horizontal layout, 0 0 is the first segment and 1 0 is the second segment. In a vertical layout, the indices are 0 0 and 0 1](env-var-indices.png)

- In a horizontal side-by-side layout, the left segment is represented by `0 0`, and the right segment is represented by `1 0`.
- In a vertical top to bottom layout, the top segment is represented by `0 0`, and the bottom segment is represented by `0 1`.

In a layout, you can use these variables to set your containers to fit neatly into the available segments. For example:

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template: "left fold right";
    grid-columns: env(viewport-segment-width 0 0)
      env(viewport-segment-width 1 0);
  }
  .firstSection {
    grid-area: left;
  }
  .secondSection {
    grid-area: right;
  }
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template:
      "top"
      "bottom";
    grid-rows: env(viewport-segment-height 0 1) env(viewport-segment-width 0 0);
  }
  .firstSection {
    grid-area: top;
  }
  .secondSection {
    grid-area: bottom;
  }
}
```

Here, we are setting the outer wrapper to be either a horizontal or vertical grid layout, based on whether the viewport segments are laid out horizontally or vertically. We then set the left and top cells to be the first segments, and place the second section in the right or bottom grid cells.

We could add an empty middle "fold" cell to stop content being obscured by the fold. We could calculate its thickness by subtracting the combined widths or heights of the two sides from the full viewport size, or set the middle cell to `1fr`.

```css
@media (horizontal-viewport-segments: 2) {
   .wrapper {
     grid-template: "left fold right";
     grid-columns:
        env(viewport-segment-width 0 0)
        calc(100vw - (env(viewport-segment-width 0 0) + env(viewport-segment-width 1 0))
        env(viewport-segment-width 1 0);
   }
}

@media (vertical-viewport-segments: 2) {
   .wrapper {
     grid-template:
      "top"
      "fold"
      "bottom";
     grid-rows: env(viewport-segment-height 0 1) 1fr env(viewport-segment-width 0 0);

   }
}
```

## Accessing segment information in JavaScript

You can access segment information in JavaScript using the {{domxref("Viewport.segments", "window.viewport.segments")}} property, which returns an array of {{domxref("DOMRect")}} objects providing access to each segment's `x` and `y` coordinates inside the overall viewport, and their `width` and `height`.

For example, this snippet will loop through each segment in the viewport and log a string to the console detailing the index number, width, and height.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## A complete example

Let's look at the Viewport Segment API features in action in a real example. You can see our example running live at [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) (see the full [source code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api) also). If possible, view the demo on a real foldable device. Browser developer tools that enable visually emulating the multiple segments of foldable devices generally don't include emulation of the physical segmentation.

> [!NOTE]
> This example is adapted from [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) by Alexis Menard and Thomas Steiner, originally published on `developer.chrome.com` in 2024 under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

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

Next, we use a {{cssxref("@media/horizontal-viewport-segments")}} media query to handle the case of foldable devices where the segments are side-by-side.

We set the outer wrapper to have a horizontal flexbox layout when the viewport segments are laid out horizontally. We set the left container to have a width equal to the left segment width (`env(viewport-segment-width 0 0)`), and the right container to have a width equal to the right segment width (`env(viewport-segment-width 1 0)`). To calculate how much width the fold takes up in between the two, we subtract the left edge offset of the right container from the right edge offset of the left container (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

First of all, we grab references to the wrapper `<div>` and its two `<section>` element children (these are the two containers we've placed inside the two segments with CSS).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Next, we define an `addSegmentOutput()` function which takes a `segments` array, an index number, and an element reference as arguments. This function appends a segment output `<div>` to the referenced element. The output includes a heading with the index number of viewport segment and the dimensions of that segment.

```js
function addSegmentOutput(segments, i, elem) {
  const segment = segments[i];

  const divElem = document.createElement("div");
  divElem.className = "segment-output";

  elem.appendChild(divElem);

  divElem.innerHTML = `<h2>Viewport segment ${i}</h2>
  <p>${segment.width}px x ${segment.height}px</p>`;
}
```

Next, we define a `reportSegments()` function which removes any previously appended segment output `<div>` elements, clearing the `<div>`, then it calls the previously defined `addSegmentOutput()` function based on the array of the device's segments retrieved using {{domxref("Viewport.segments", "window.viewport.segments")}}. We check the number of segments present:

- If only one segment is present, we run `addSegmentOutput()` once, adding a segment output `<div>` to the wrapper `<div>`. This will report the dimensions of the entire viewport.
- If two segments are present, we run `addSegmentOutput()` twice, adding a segment output `<div>` to each of the `<section>` elements. These will report the dimensions of each segment output `<div>`'s segment parent.

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

Finally, we call the `reportSegments()` function and add event listeners to run it in a couple of different contexts:

- We run it once in the global scope so that the segment reports are added to the page as soon as the page loads.
- We run it based on the [`resize`](/en-US/docs/Web/API/Window/resize_event) event to update the segment reports when the window is resized (which includes orientation changes).
  - We run it based on the `DevicePosture`'s [`change`](/en-US/docs/Web/API/DevicePosture/change_event) event, to update the segment reports when the device posture changes.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## See also

- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
