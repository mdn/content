---
title: "IntersectionObserver: scrollMargin property"
short-title: scrollMargin
slug: Web/API/IntersectionObserver/scrollMargin
page-type: web-api-instance-property
browser-compat: api.IntersectionObserver.scrollMargin
---

{{APIRef("Intersection Observer API")}}

The **`scrollMargin`** read-only property of the {{domxref("IntersectionObserver")}} interface adds a margin to all nested {{glossary("scroll container","scroll containers")}} within the root element, including the root element if it is a scroll container.

This grows or shrinks the clipping rectangle of the scrollable containers before calculating intersections.
This lets you, for example, adjust the bounds of the scroll container so that the target element is considered visible even if its pixels are not yet displayed in the container's viewport, or to treat the target as partially hidden if an edge is too close to the edge of the container's bounding box.

Note that if the root element is also a scrollable container, then the `scrollMargin` and {{domxref("IntersectionObserver/rootMargin","rootMargin")}} are combined to determine the effective bounding rectangle used for calculating intersections with the target.

For more information see [The intersection root and root margin](/en-US/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_scroll_margin) in the API overview.

## Value

A string, formatted similarly to the CSS {{cssxref("margin")}} property's value.

The specified margin defines offsets for one or more sides of a scroll container clipping rectangle.
If `scrollMargin` isn't specified when the object was instantiated, it defaults to the string `"0px 0px 0px 0px"`.

## Example

### Carousel with scroll margin

This example defines a scrollable box (the root element), which contains an image carousel that is initially out of view.
An observer on the root element observes the image element targets within the carousel.
When an image element starts to intersect with the root element, the image is loaded, the intersection is logged, and the observer is removed.

The example allows you to modify the `scrollMargin` in order to see how this changes when targets within the carousel scrollable container start to intersect.

#### HTML

```html hidden
<button id="reset" type="button">Reset</button>
```

The code below defines the `root-container` {{htmlelement("div")}} element, which we will use as the root element of the intersection observer.
This in turn contains a {{htmlelement("p")}} element that is used to push the other elements out of view "by default", a `carousel` `<div>` , and a `margin-indicator` (used to indicate the size of the margin applied to scrollable elements within the root element).

The {{htmlelement("img")}} elements within the carousel have a `data-src` attribute that contains a file name.
In our observer code, we will use this attribute to set the `img.src` when each image starts to intersect with the root element, which will load the image.

```html
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

```html
<div class="controls">
  <label>
    Set the right margin of the scroll root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

```css
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
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

.controls {
  margin-top: 10px;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

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

The first part of the code defines the function `createImageObserver()` that we use to create `IntersectionObserver` objects and assign to the `imageObserver` variable.
We use a function because observer options can't be changed after construction, and we want to be able to demonstrate the effects of different `scrollMargin` values.

The `IntersectionObserver` is created with no `rootMargin`, a near-zero `threshold`, and a `scrollMargin` that takes its value from the `margin` input, and that will be applied to all sides of the scroll container.

The callback is called for all observed targets.
For intersecting targets it sets the `img.src` to the name of the image to be loaded (from the `img.dataset.src`), logs the intersection, and then stops observing the image.

The code at the end of the function calls {{domxref("IntersectionObserver.observe()")}} on each image to start the observer.

```js
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
    scrollMargin: `${margin.valueAsNumber}px`, // No extra margin / Can be set
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
```

The following code creates the observer using `createImageObserver()` on start and whenever the `margin` input value is changed.
If the `IntersectionObserver` interface isn't supported, it loads all the images immediately.

```js
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

#### Results

Scroll down to display the carousel.
The visible images should immediately load.
If you scroll the carousel right, you should observe that the images are loaded as soon as the element becomes visible.

You can use the provided control to change the scroll margin percentage (after resetting the example)
If you set a positive value like 20px the clip rectangle of the scroll container will be increased by 20px, and you should observe that images are detected and loaded before they come into view.
Similarly, a negative value will mean that the intersection is detected once images are already in view.

{{EmbedLiveSample("Carousel with scroll margin","100%","500px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
