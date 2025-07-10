---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
page-type: web-api-overview
browser-compat: api.IntersectionObserver
---

{{DefaultAPISidebar("Intersection Observer API")}}

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's {{Glossary("viewport")}}.

## Overview

Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as:

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

Implementing intersection detection in the past involved event handlers and loops calling methods like {{domxref("Element.getBoundingClientRect()")}} to build up the needed information for every element affected. Since all this code runs on the main thread, even one of these can cause performance problems. When a site is loaded with these tests, things can get downright ugly.

Consider a web page that uses infinite scrolling. It uses a vendor-provided library to manage the advertisements placed periodically throughout the page, has animated graphics here and there, and uses a custom library that draws notification boxes and the like. Each of these has its own intersection detection routines, all running on the main thread. The author of the website may not even realize this is happening, since they may know very little about the inner workings of the two libraries they are using. As the user scrolls the page, these intersection detection routines are firing constantly during the scroll handling code, resulting in an experience that leaves the user frustrated with the browser, the website, and their computer.

The Intersection Observer API lets code register a callback function that is executed whenever a particular element enters or exits an intersection with another element (or the {{Glossary("viewport")}}), or when the intersection between two elements changes by a specified amount. This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

One thing the Intersection Observer API can't do: trigger logic based on the exact number of pixels that overlap, or specifically on which ones they are. It only solves the common use case of "If they intersect by somewhere around _N_%, I need to do something."

## Concepts and usage

The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:

- A **target** element intersects either the device's viewport or a specified element. That specified element is called the **root element** or **root** for the purposes of the Intersection Observer API.
- The first time the observer is initially asked to watch a target element.

Typically, you'll want to watch for intersection changes with regard to the target element's closest scrollable ancestor, or, if the target element isn't a descendant of a scrollable element, the device's viewport. To watch for intersection relative to the device's viewport, specify `null` for the `root` option. Keep reading for a more detailed explanation about intersection observer options.

Whether you're using the viewport or some other element as the root, the API works the same way, executing a callback function you provide whenever the visibility of the target element changes so that it crosses desired amounts of intersection with the root.

The degree of intersection between the target element and its root is the **intersection ratio**. This is a representation of the percentage of the target element which is visible as a value between 0.0 and 1.0.

### Creating an intersection observer

Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

A threshold of 1.0 means that when 100% of the target is visible within the element specified by the `root` option, the callback is invoked.

#### Intersection observer options

The `options` object passed into the {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} constructor let you control the circumstances under which the observer's callback is invoked. It has the following fields:

- `root`
  - : The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
- `rootMargin`
  - : Margin around the root. A string of one to four values similar to the CSS {{cssxref("margin")}} property, e.g., `"10px 20px 30px 40px"` (top, right, bottom, left). The values can only be [absolute lengths](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) or percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Negative values will shrink the bounding box of the root element and positive values will expand it. The default value, if not specified, is `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Margin around nested {{glossary("scroll container","scroll containers")}} that takes the same values/has same default as `rootMargin`.
    The margins are applied to nested scrollable containers before computing intersections.
    Positive values grow the clipping rectangle of the container, allowing targets to intersect before they becomes visible, while negative values shrink the clipping rectangle.
- `threshold`
  - : Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array \[0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
- `delay` {{experimental_inline}}
  - : When tracking target visibility ([trackVisibility](#trackvisibility) is `true`), this can be used to set the minimum delay in milliseconds between notifications from this observer.
    Limiting the notification rate is desirable because the visibility calculation is computationally intensive.
    If tracking visibility, the value will be set to 100 for any value less than 100, and you should use the largest tolerable value.
    The value is 0 by default.
- `trackVisibility` {{experimental_inline}}
  - : A boolean indicating whether this `IntersectionObserver` is tracking changes in a target's visibility.

    When `false` the browser will report intersections when the target element scrolls into the root element's viewport.
    When `true`, the browser will additionally check that the target is actually visible, and hasn't been covered by other elements or potentially been distorted or hidden by a filter, reduced opacity, or some transform.
    The value is `false` by default as tracking visibility is computationally intensive.
    If this is set, a [`delay`](#delay) should also be set.

#### Intersection change callbacks

The callback passed to the `IntersectionObserver()` constructor receives a list of {{domxref("IntersectionObserverEntry")}} objects and the observer:

```js
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

The list of entries received by the callback includes one {{domxref("IntersectionObserverEntry")}} object for each threshold-crossing event — multiple entries can be received at a time, either from multiple targets or from a single target crossing multiple thresholds in a short amount of time. The entries are dispatched using a queue, so they should be ordered by the time they were generated, but you should preferably use {{domxref("IntersectionObserverEntry.time")}} to correctly order them. Each entry describes how much of a given element is intersecting with the root element, whether or not the element is considered to be intersecting or not, etc. The entry only contains information about that particular instant — if you want information that requires tracking over time, such as the scroll direction and speed, you may need to compute that yourself by memorizing previously received entries.

Be aware that your callback is executed on the main thread. It should operate as quickly as possible; if anything time-consuming needs to be done, use {{domxref("Window.requestIdleCallback()")}}.

The code snippet below shows a callback which keeps a counter of how many times elements transition from not intersecting the root to intersecting by at least 75%. For a threshold value of 0.0 (default) the callback is called approximately upon transition of the boolean value of {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}}. The snippet thus first checks that the transition is a positive one, then determines whether {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} is above 75%, in which case it increments the counter.

```js
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
};
```

#### Targeting an element to be observed

Once you have created the observer, you need to give it a target element to watch:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked.

Also, note that if you specified the `root` option, the target must be a descendant of the root element.

### How intersection is calculated

All areas considered by the Intersection Observer API are rectangles; elements which are irregularly shaped are considered as occupying the smallest rectangle which encloses all of the element's parts. Similarly, if the visible portion of an element is not rectangular, the element's intersection rectangle is considered to be the smallest rectangle that contains all the visible portions of the element.

It's useful to understand a bit about how the various properties provided by {{domxref("IntersectionObserverEntry")}} describe an intersection.

#### The intersection root and root margin

Before we can track the intersection of an element with a container, we need to know what that container is. That container is the **intersection root**, or **root element**. This can be either a specific element in the document which is an ancestor of the element to be observed, or `null` to use the document's viewport as the container.

The **_root intersection rectangle_** is the rectangle used to check against the target or targets. This rectangle is determined like this:

- If the intersection root is the implicit root (that is, the top-level {{domxref("Document")}}), the root intersection rectangle is the viewport's rectangle.
- If the intersection root has an overflow clip, the root intersection rectangle is the root element's content area.
- Otherwise, the root intersection rectangle is the intersection root's bounding client rectangle (as returned by calling {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} on it).

The root intersection rectangle can be adjusted further by setting the **root margin**, `rootMargin`, when creating the {{domxref("IntersectionObserver")}}. The values in `rootMargin` define offsets added to each side of the intersection root's bounding box to create the final intersection root bounds (which are disclosed in {{domxref("IntersectionObserverEntry.rootBounds")}} when the callback is executed). Positive values grow the box, while negative values shrink it.

The effect of growing the box using the root margin is to allow overflow targets to intersect with the root before they become visible.
This can be used, for example, to start loading images just before they come into view, rather than at the point they become visible.

In the example below, we have a scrollable box and an element that's initially out of view.
You can adjust the root right margin, and see that:

- If the margin is positive, the red element is considered intersecting with the root even if it's not visible, because it's intersecting with the root's margin area.
- If the margin is negative, then even when the red element starts to become visible, it's still not considered intersecting with the root because the root's bounding box is shrunk.

```html hidden
<div class="demo">
  <div id="container">
    <div id="elem"></div>
    <div id="gutter"></div>
  </div>
  <div id="marginIndicator"></div>
</div>
<div class="controls">
  <label>
    Set the right margin of the root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
  <label>
    You can also use this slider to scroll the container:
    <input id="scrollAmount" type="range" min="0" max="300" value="0" />
  </label>
  <p>Current intersection ratio: <span id="output"></span></p>
</div>
```

```css hidden
.demo {
  display: flex;
}

.controls {
  display: flex;
  flex-direction: column;
}

#container {
  position: relative;
  width: 200px;
  height: 100px;
  overflow-x: scroll;
  border: 1px solid black;
}

#marginIndicator {
  position: relative;
  height: 100px;
  background-color: blue;
  opacity: 0.5;
}

#elem {
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 200px;
}

#gutter {
  width: 500px;
  height: 100px;
}
```

```js hidden
let observer;
function createObserver() {
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        output.textContent = entry.intersectionRatio.toFixed(2);
      });
    },
    {
      threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      root: container,
      rootMargin: `0px ${margin.value}px 0px 0px`,
    },
  );
  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;

    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }
  observer.observe(elem);
}
createObserver();
margin.addEventListener("input", () => {
  createObserver();
});
scrollAmount.addEventListener("input", () => {
  container.scrollLeft = scrollAmount.value;
});
```

{{EmbedLiveSample("the intersection root and root margin", "", 200)}}

#### The intersection root and scroll margin

Consider the case where you have a root element that contains nested {{glossary("scroll container","scroll containers")}}, and you want to observe intersections with a target inside one of those scrollable containers.
Intersections with the target element start being observable, by default, when the target is visible within the area defined by the root;
in other words, when the container is scrolled into view in the root and the target is scrolled into view within the clipping rectangle of its container.

You can use a scroll margin to start observing intersections before or after the target is scrolled into view within its scroll container.
The margin is added to all nested scroll containers in the root, including the root element if it is also a scroll container, and has the effect of either growing (positive margins) or shrinking (negative margin) the clipping region used for calculating intersections.

> [!NOTE]
> You could create an intersection observer on each scroll container for which you want a scroll margin, and use the root margin property to achieve a similar effect.
> Using a scroll margin is more ergonomic, as in most cases you can have just one intersection observer for all nested targets.

In the example below, we have a scrollable box and an image carousel that is initially out of view.
An observer on the root element observes the image element targets within the carousel.
When an image element starts to intersect with the root element, the image is loaded, the intersection is logged, and the observer is removed.

Scroll down to display the carousel.
The visible images should immediately load.
If you scroll the carousel, you should observe that the images are loaded as soon as the element becomes visible.

After resetting the example you can use the provided control to change the scroll margin percentage.
If you set a positive value like 20% the clip rectangle of the scroll container will be increased by 20%, and you should observe that images are detected and loaded before they come into view.
Similarly, a negative value will mean that the intersection is detected once images are already in view.

```html hidden
<button id="reset" type="button">Reset</button>
```

```html hidden
<div id="root-container">
  <p>content before (scroll down to carousel)</p>

  <div class="flex-container">
    <div class="carousel">
      <img
        data-src="ballon-portrait.jpg"
        class="lazy-carousel-img"
        alt="Balloon portrait" />
      <img
        data-src="balloon-small.jpg"
        class="lazy-carousel-img"
        alt="balloon-small" />
      <img data-src="surfer.jpg" class="lazy-carousel-img" alt="surfer" />
      <img
        data-src="border-diamonds.png"
        class="lazy-carousel-img"
        alt="border-diamonds" />
      <img data-src="fire.png" class="lazy-carousel-img" alt="fire" />
      <img data-src="puppy-header.jpg" class="lazy-carousel-img" alt="puppy" />
      <img data-src="moon.jpg" class="lazy-carousel-img" alt="moon" />
      <img data-src="rhino.jpg" class="lazy-carousel-img" alt="rhino" />
    </div>
    <div id="margin-indicator"></div>
  </div>
  <p>content after</p>
</div>
```

```html hidden
<div class="controls">
  <label>
    Set the right margin of the scroll root:
    <input id="margin" type="number" value="0" step="5" />%
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

.controls {
  margin-top: 10px;
}

p {
  height: 50vh;
}

.flex-container {
  display: flex;
}

#margin-indicator {
  position: relative;
  height: 100px;
  width: 1px;
  background-color: red;
  opacity: 0.5;
  display: flex;
}

.carousel {
  width: 300px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  border: solid;
  /* outline: 200px solid rgba(0, 0, 0, 0.1); */
}
.carousel img {
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: block;
  width: 195px;
  height: 99px;
  min-width: 195px;
  min-height: 99px;
  margin-right: 10px;
  background-color: #eee; /* Placeholder background */
}

#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js hidden
const rootContainer = document.getElementById("root-container");
const marginIndicator = document.getElementById("margin-indicator");
const carousel = document.querySelector(".carousel");
const lazyImages = carousel.querySelectorAll(".lazy-carousel-img");
let imageObserver;

function createImageObserver() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  let observerOptions = {
    root: rootContainer,
    rootMargin: "0px", // No extra margin
    scrollMargin: `${margin.valueAsNumber}%`, // No extra margin / Can be set
    threshold: 0.01, // Trigger when 1% of the image is visible
  };

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`intersect: ${img.dataset.src}`); // Only on first intersection
        img.src = `https://mdn.github.io/shared-assets/images/examples/${img.dataset.src}`; // Load image by setting src
        img.classList.remove("lazy-carousel-img"); // Remove the class
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  }, observerOptions);

  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;
    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }

  lazyImages.forEach((image) => {
    imageObserver.observe(image); // Start observing each image
  });
}

if ("IntersectionObserver" in window) {
  createImageObserver();
  margin.addEventListener("input", () => {
    createImageObserver();
  });
} else {
  // Fallback for browsers that don't support Intersection Observer
  // Loads all images immediately if Intersection Observer is not supported.
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
    img.classList.remove("lazy-carousel-img");
  });
  console.warn(
    "Intersection Observer not supported. All carousel images loaded.",
  );
}
```

{{EmbedLiveSample("The intersection root and scroll margin","100%","500px")}}

#### Thresholds

Rather than reporting every infinitesimal change in how much a target element is visible, the Intersection Observer API uses **thresholds**. When you create an observer, you can provide one or more numeric values representing percentages of the target element which are visible. Then, the API only reports changes to visibility which cross these thresholds.

For example, if you want to be informed every time a target's visibility passes backward or forward through each 25% mark, you would specify the array \[0, 0.25, 0.5, 0.75, 1] as the list of thresholds when creating the observer.

When the callback is invoked, it receives a list of `IntersectionObserverEntry` objects, one for each observed target which has had the degree to which it intersects the root change such that the amount exposed crosses over one of the thresholds, in either direction.

You can see if the target _currently_ intersects the root by looking at the entry's {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} property; if its value is `true`, the target is at least partially intersecting the root element or document. This lets you determine whether the entry represents a transition from the elements intersecting to no longer intersecting or a transition from not intersecting to intersecting.

Note that it's possible to have a zero intersection rectangle, which can happen if the intersection is exactly along the boundary between the two or the area of {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}} is zero. This state of the target and root sharing a boundary line is not considered enough to be considered transitioning into an intersecting state.

To get a feeling for how thresholds work, try scrolling the box below around. Each colored box within it displays the percentage of itself that's visible in all four of its corners, so you can see these ratios change over time as you scroll the container. Each box has a different set of thresholds:

- The first box has a threshold for each percentage point of visibility; that is, the {{domxref("IntersectionObserver.thresholds")}} array is `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- The second box has a single threshold, at the 50% mark.
- The third box has thresholds every 10% of visibility (0%, 10%, 20%, etc.).
- The last box has thresholds each 25%.

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245 170 140);
  border: 2px solid rgb(201 126 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgb(255 255 255 / 70%);
  border: 1px solid rgb(0 0 0 / 70%);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // Scroll to the starting position

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    const box = entry.target;
    const visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

    box.querySelector(".topLeft").textContent = visiblePct;
    box.querySelector(".topRight").textContent = visiblePct;
    box.querySelector(".bottomLeft").textContent = visiblePct;
    box.querySelector(".bottomRight").textContent = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### Tracking visibility and delay

By default the observer provides notifications when the target element is scrolled into the root element's viewport.
While this is all that is needed in many situations, sometimes it is important that intersections are not reported when the target has been "visually compromised".
For example, when measuring analytics or ad impressions, it is important that target elements are not hidden or distorted, in whole or in part.

The `trackVisibility` setting tells the observer to only report intersections for targets that the browser does not consider to be visually compromised, such as by altering the opacity, or applying a filter or transform.
The algorithm is conservative, and may omit elements that are technically visible, such as those with only a slight opacity reduction.

The visibility calculation is computationally expensive and should only be used when necessary.
When tracking visibility a {{domxref("IntersectionObserver/delay","delay")}} should also be set to limit the minimum reporting period.
The recommendation is that you set the delay to the largest tolerable value (the minimum delay when tracking visibility is 100 milliseconds).

#### Clipping and the intersection rectangle

The browser computes the final intersection rectangle as follows; this is all done for you, but it can be helpful to understand these steps in order to better grasp exactly when intersections will occur.

1. The target element's bounding rectangle (that is, the smallest rectangle that fully encloses the bounding boxes of every component that makes up the element) is obtained by calling {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} on the target.
   This is the largest the intersection rectangle may be. The remaining steps will remove any portions that don't intersect.
2. Starting at the target's immediate parent block and moving outward, each containing block's clipping (if any) is applied to the intersection rectangle.
   A block's clipping is determined based on the intersection of the two blocks and the clipping mode (if any) specified by the {{cssxref("overflow")}} property. Setting `overflow` to anything but `visible` causes clipping to occur.
3. If one of the containing elements is the root of a nested browsing context (such as the document contained in an {{HTMLElement("iframe")}}), the intersection rectangle is clipped to the containing context's viewport, and recursion upward through the containers continues with the container's containing block. So if the top level of an `<iframe>` is reached, the intersection rectangle is clipped to the frame's viewport, then the frame's parent element is the next block recursed through toward the intersection root.
4. When recursion upward reaches the intersection root, the resulting rectangle is mapped to the intersection root's coordinate space.
5. The resulting rectangle is then updated by intersecting it with the [root intersection rectangle](#the_intersection_root_and_root_margin).
6. This rectangle is, finally, mapped to the coordinate space of the target's {{domxref("document")}}.

## Interfaces

- {{domxref("IntersectionObserver")}}
  - : The primary interface for the Intersection Observer API. Provides methods for creating and managing an observer which can watch any number of target elements for the same intersection configuration. Each observer can asynchronously observe changes in the intersection between one or more target elements and a shared ancestor element or with their top-level {{domxref("Document")}}'s {{Glossary('viewport')}}. The ancestor or viewport is referred to as the **root**.
- {{domxref("IntersectionObserverEntry")}}
  - : Describes the intersection between the target element and its root container at a specific moment of transition. Objects of this type can only be obtained in two ways: as an input to your `IntersectionObserver` callback, or by calling {{domxref("IntersectionObserver.takeRecords()")}}.

## A simple example

This simple example causes a target element to change its color and transparency as it becomes more or less visible. At [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), you can find a more extensive example showing how to time how long a set of elements (such as ads) are visible to the user and to react to that information by recording statistics or by updating elements.

### HTML

The HTML for this example is very short, with a primary element which is the box that we'll be targeting (with the creative ID `"box"`) and some contents within the box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

The CSS isn't terribly important for the purposes of this example; it lays out the element and establishes that the {{cssxref("background-color")}} and {{cssxref("border")}} attributes can participate in [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions), which we'll use to affect the changes to the element as it becomes more or less obscured.

```css
#box {
  background-color: rgb(40 40 190 / 100%);
  border: 4px solid rgb(20 20 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20 20 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

Finally, let's take a look at the JavaScript code that uses the Intersection Observer API to make things happen.

#### Setting up

First, we need to prepare some variables and install the observer.

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgb(40 40 190 / ratio)";
let decreasingColor = "rgb(190 40 40 / ratio)";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

The constants and variables we set up here are:

- `numSteps`
  - : A constant which indicates how many thresholds we want to have between a visibility ratio of 0.0 and 1.0.
- `prevRatio`
  - : This variable will be used to record what the visibility ratio was the last time a threshold was crossed; this will let us figure out whether the target element is becoming more or less visible.
- `increasingColor`
  - : A string defining a color we'll apply to the target element when the visibility ratio is increasing. The word "ratio" in this string will be replaced with the target's current visibility ratio, so that the element not only changes color but also becomes increasingly opaque as it becomes less obscured.
- `decreasingColor`
  - : Similarly, this is a string defining a color we'll apply when the visibility ratio is decreasing.

We call {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} to start listening for the {{domxref("Window/load_event", "load")}} event; once the page has finished loading, we get a reference to the element with the ID `"box"` using {{domxref("Document.querySelector", "querySelector()")}}, then call the `createObserver()` method we'll create in a moment to handle building and installing the intersection observer.

#### Creating the intersection observer

The `createObserver()` method is called once page load is complete to handle actually creating the new {{domxref("IntersectionObserver")}} and starting the process of observing the target element.

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

This begins by setting up an `options` object containing the settings for the observer. We want to watch for changes in visibility of the target element relative to the document's viewport, so `root` is `null`. We need no margin, so the margin offset, `rootMargin`, is specified as "0px". This causes the observer to watch for changes in the intersection between the target element's bounds and those of the viewport, without any added (or subtracted) space.

The list of visibility ratio thresholds, `threshold`, is constructed by the function `buildThresholdList()`. The threshold list is built programmatically in this example since there are a number of them and the number is intended to be adjustable.

Once `options` is ready, we create the new observer, calling the {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} constructor, specifying a function to be called when intersection crosses one of our thresholds, `handleIntersect()`, and our set of options. We then call {{domxref("IntersectionObserver.observe", "observe()")}} on the returned observer, passing into it the desired target element.

We could opt to monitor multiple elements for visibility intersection changes with respect to the viewport by calling `observer.observe()` for each of those elements, if we wanted to do so.

#### Building the array of threshold ratios

The `buildThresholdList()` function, which builds the list of thresholds, looks like this:

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

This builds the array of thresholds—each of which is a ratio between 0.0 and 1.0, by pushing the value `i/numSteps` onto the `thresholds` array for each integer `i` between 1 and `numSteps`. It also pushes 0 to include that value. The result, given the default value of `numSteps` (20), is the following list of thresholds:

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Ratio</th>
        <th>#</th>
        <th>Ratio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0.55</td>
      </tr>
    </tbody>
</table>

We could, of course, hard-code the array of thresholds into our code, and often that's what you'll end up doing. But this example leaves room for adding configuration controls to adjust the granularity, for example.

#### Handling intersection changes

When the browser detects that the target element (in our case, the one with the ID `"box"`) has been unveiled or obscured such that its visibility ratio crosses one of the thresholds in our list, it calls our handler function, `handleIntersect()`:

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

For each {{domxref("IntersectionObserverEntry")}} in the list `entries`, we look to see if the entry's {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} is going up; if it is, we set the target's {{cssxref("background-color")}} to the string in `increasingColor` (remember, it's `"rgb(40 40 190 / ratio)"`), replaces the word "ratio" with the entry's `intersectionRatio`. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the `intersectionRatio` is going down, we use the string `decreasingColor` and replace the word "ratio" in that with the `intersectionRatio` before setting the target element's `background-color`.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable `prevRatio`.

### Result

Below is the resulting content. Scroll this page up and down and notice how the appearance of the box changes as you do so.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

There's an even more extensive example at [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} and {{domxref("IntersectionObserverEntry")}}
