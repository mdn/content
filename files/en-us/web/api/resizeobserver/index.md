---
title: ResizeObserver
slug: Web/API/ResizeObserver
page-type: web-api-interface
tags:
  - API
  - Bounding Box
  - Interface
  - Reference
  - Resize Observer API
  - ResizeObserver
  - content box
  - observers
browser-compat: api.ResizeObserver
---
{{APIRef("Resize Observer API")}}

The **`ResizeObserver`** interface reports changes to the dimensions of an {{domxref('Element')}}'s content or border box, or the bounding box of an {{domxref('SVGElement')}}.

> **Note:** The content box is the box in which content can be placed, meaning the border box minus the padding and border width. The border box encompasses the content, padding, and border. See [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) for further explanation.

`ResizeObserver` avoids infinite callback loops and cyclic dependencies that are often created when resizing via a callback function. It does this by only processing elements deeper in the DOM in subsequent frames. Implementations should, if they follow the specification, invoke resize events before paint and after layout.

## Constructor

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : Creates and returns a new `ResizeObserver` object.

## Properties

None.

## Methods

- {{domxref('ResizeObserver.disconnect()')}}
  - : Unobserves all observed {{domxref('Element')}} targets of a particular observer.
- {{domxref('ResizeObserver.observe()')}}
  - : Initiates the observing of a specified {{domxref('Element')}}.
- {{domxref('ResizeObserver.unobserve()')}}
  - : Ends the observing of a specified {{domxref('Element')}}.

## Examples

In the [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) example, we use the resize observer to change the {{cssxref("font-size")}} of a header and paragraph as a slider's value is changed causing the containing `<div>` to change width. This shows that you can respond to changes in an element's size, even if they have nothing to do with the viewport.

We also provide a checkbox to turn the observer off and on. If it is turned off, the text will not change in response to the `<div>`'s width changing.

The JavaScript looks like so:

```js
const h1Elem = document.querySelector('h1');
const pElem = document.querySelector('p');
const divElem = document.querySelector('body > div');
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = '600px';

slider.addEventListener('input', () => {
  divElem.style.width = `${slider.value}px`;
})

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;

      h1Elem.style.fontSize = `${Math.max(1.5, contentBoxSize.inlineSize / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, contentBoxSize.inlineSize / 600)}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentRect.width / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }

  console.log('Size changed');
});

resizeObserver.observe(divElem);

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}} (part of the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API))
