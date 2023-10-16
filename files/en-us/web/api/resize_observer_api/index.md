---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
page-type: web-api-overview
browser-compat: api.ResizeObserver
---

{{DefaultAPISidebar("Resize Observer API")}}

The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications being delivered to the observer each time the size changes.

## Concepts and usage

There are a whole raft of use cases for responsive design techniques (and others besides) that respond to changes in an element's size, but previously their implementations have often been hacky and/or brittle.

For example, [media queries](/en-US/docs/Web/CSS/CSS_media_queries) / {{domxref("window.matchMedia")}} are great for updating layouts at specific points when the viewport changes sizes, but what if you want to change layout in response to a specific element's size changing, which isn't the outer container?

To achieve this, a limited solution would be to listen to changes to a suitable event that hints at the element you are interested in changing size (e.g. the window [resize event](/en-US/docs/Web/API/Window/resize_event)), then figure out what the new dimensions or other features of the element after a resize using {{domxref("Element.getBoundingClientRect")}} or {{domxref("Window.getComputedStyle")}}, for example.

Such a solution tends to only work for limited use cases, be bad for performance (continually calling the above methods would result in a big performance hit), and often won't work when the browser window size is not changed.

The Resize Observer API provides a solution to exactly these kinds of problems, and more besides, allowing you to easily observe and respond to changes in the size of an element's content or border box in a performant way. It provides a JavaScript solution to the often-discussed lack of [element queries](https://www.xanthir.com/b4PR0) in the web platform.

Usage is simple, and pretty much the same as other observers, such as [Performance Observer](/en-US/docs/Web/API/PerformanceObserver) or [Intersection Observer](/en-US/docs/Web/API/Intersection_Observer_API) — you create a new {{domxref("ResizeObserver")}} object using the [`ResizeObserver()`](/en-US/docs/Web/API/ResizeObserver/ResizeObserver) constructor, then use {{domxref("ResizeObserver.observe()")}} to make it look for changes to a specific element's size. A callback function set up inside the constructor then runs every time the size changes, providing access to the new dimensions and allowing you to do anything you like in response to those changes.

## Interfaces

- {{domxref("ResizeObserver")}}
  - : Provides the ability to register new observers and to start and stop observing elements.
- {{domxref("ResizeObserverEntry")}}
  - : Describes a single element which has been resized, identifying the element and its new size.

## Examples

You find a couple of simple examples on our GitHub repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): A simple example with a green box, sized as a percentage of the viewport size. When the viewport size is changed, the box's rounded corners change in proportion to the size of the box. We could just implement this using {{cssxref("border-radius")}} with a percentage, but that quickly leads to ugly-looking elliptical corners, whereas the above solution gives you nice round corners that scale with the box size.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Here we use the resize observer to change the {{cssxref("font-size")}} of a header and paragraph as a slider's value is changed causing the containing `<div>` to change width. This shows that you can respond to changes in an element's size, even if they have nothing to do with the viewport.

The code will usually follow this kind of pattern (taken from resize-observer-border-radius.html):

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ResizeObserver: It's Like document.onresize for Elements](https://web.dev/resize-observer/)
