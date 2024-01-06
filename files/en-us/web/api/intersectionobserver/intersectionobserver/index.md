---
title: "IntersectionObserver: IntersectionObserver() constructor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
page-type: web-api-constructor
browser-compat: api.IntersectionObserver.IntersectionObserver
---

{{APIRef("Intersection Observer API")}}

The **`IntersectionObserver()`** constructor creates and returns a new {{domxref("IntersectionObserver")}} object.

The `rootMargin`, if specified, is checked to ensure it's syntactically correct.
If not specified, or an empty string, the default is `0px 0px 0px 0px`.

The `threshold`s, if specified, are checked to ensure that they're all in the range 0.0 and 1.0 inclusive, and the threshold list is sorted in ascending numeric order.
If the threshold list is empty, it's set to the array `[0.0]`.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameters

- `callback`

  - : A function which is called when the percentage of the target element is visible crosses a threshold.
    The callback receives as input two parameters:

    - `entries`
      - : An array of {{domxref("IntersectionObserverEntry")}} objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
    - `observer`
      - : The {{domxref("IntersectionObserver")}} for which the callback is being invoked.

- `options` {{optional_inline}}

  - : An optional object which customizes the observer.
    If `options` isn't specified, the observer uses the document's viewport as the root, with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback).
    You can provide any combination of the following options:

    - `root`
      - : An {{domxref("Element")}} or {{domxref("Document")}} object which is an ancestor of the intended target, whose bounding rectangle will be considered the viewport.
        Any part of the target not visible in the visible area of the `root` is not considered visible.
    - `rootMargin`
      - : A string which specifies a set of offsets to add to the root's {{Glossary('bounding_box')}} when calculating intersections, effectively shrinking
        or growing the root for calculation purposes.
        The syntax is approximately the same as that for the CSS {{cssxref("margin")}} property;
        see [The intersection root and root margin](/en-US/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) for more information on how the margin works and the syntax.
        The default is "0px 0px 0px 0px".
    - `threshold`
      - : Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target.
        A value of 0.0 means that even a single visible pixel counts as the target being visible.
        1.0 means that the entire target element is visible.
        See [Thresholds](/en-US/docs/Web/API/Intersection_Observer_API#thresholds) for a more in-depth description of how thresholds are used.
        The default is a threshold of 0.0.

### Return value

A new {{domxref("IntersectionObserver")}} which can be used to watch for the visibility of a target element within the specified `root` crossing through any of the
specified visibility `threshold`s.
Call its {{domxref("IntersectionObserver.observe", "observe()")}} method to begin watching for the visibility changes on a given target.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : The specified `rootMargin` is invalid.
- {{jsxref("RangeError")}}
  - : One or more of the values in `threshold` is outside the range 0.0 to 1.0.

## Examples

This example creates a new intersection observer which calls the function `myObserverCallback` every time the visible area of the element being observed changes by at least 10%.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
