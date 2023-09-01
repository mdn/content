---
title: "IntersectionObserver: observe() method"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
page-type: web-api-instance-method
browser-compat: api.IntersectionObserver.observe
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserver")}} method
**`observe()`** adds an element to the set of target elements
being watched by the `IntersectionObserver`. One observer has one set of
thresholds and one root, but can watch multiple target elements for visibility changes
in keeping with those.

To stop observing the element, call
{{domxref("IntersectionObserver.unobserve()")}}.

When the visibility of the specified element crosses over one of the observer's
visibility thresholds (as listed in {{domxref("IntersectionObserver.thresholds")}}), the
observer's callback is executed with an array of
{{domxref("IntersectionObserverEntry")}} objects representing the intersection changes
which occurred. Note that this design allows multiple elements' intersection changes to
be processed by a single call to the callback.

> **Note:** the observer [callback](/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) will always fire the first render cycle after `observe()` is called, even if the observed element has not yet moved with respect to the viewport.
> This means that, for example, an element that is outside the viewport when `observe()` is called on it will result in the callback being immediately called with at least one [entry](/en-US/docs/Web/API/IntersectionObserverEntry) with [`intersecting`](/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting) set to `false`.
> An element inside the viewport will result in the callback being immediately called with at least one entry with `intersecting` set to `true`.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameters

- `targetElement`
  - : An {{domxref("element")}} whose visibility within the root is to be monitored. This
    element must be a descendant of the root element (or contained within the current
    document, if the root is the document's viewport).

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Register IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add("active");
    } else {
      // Remove 'active' class otherwise
      entry.target.classList.remove("active");
    }
  });
});

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IntersectionObserver.unobserve()")}}
