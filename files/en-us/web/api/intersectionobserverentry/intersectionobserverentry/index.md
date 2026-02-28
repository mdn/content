---
title: "IntersectionObserverEntry: IntersectionObserverEntry() constructor"
short-title: IntersectionObserverEntry()
slug: Web/API/IntersectionObserverEntry/IntersectionObserverEntry
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.IntersectionObserverEntry.IntersectionObserverEntry
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The **`IntersectionObserverEntry()`** constructor creates and returns a new {{domxref("IntersectionObserverEntry")}} object.

> [!NOTE]
> In typical usage, you don't need to call this constructor yourself. `IntersectionObserverEntry` objects are created automatically by the browser and delivered to the {{domxref("IntersectionObserver")}} callback when an intersection is observed, or returned by {{domxref("IntersectionObserver.takeRecords()")}}.

## Syntax

```js-nolint
new IntersectionObserverEntry(intersectionObserverEntryInit)
```

### Parameters

- `intersectionObserverEntryInit`
  - : An object with the following properties, all of which are required:
    - `boundingClientRect`
      - : An object specifying the location and dimensions of the target element's bounding rectangle, with `x`, `y`, `width`, and `height` properties. This corresponds to the rectangle returned by {{domxref("Element.getBoundingClientRect()")}}.
    - `intersectionRatio`
      - : A number representing the ratio of the `intersectionRect` area to the `boundingClientRect` area. If the `boundingClientRect` area is zero, this is 1 if `isIntersecting` is `true`, and 0 if not.
    - `intersectionRect`
      - : An object specifying the location and dimensions of the target's visible area within the root's intersection rectangle, with `x`, `y`, `width`, and `height` properties.
    - `isIntersecting`
      - : A boolean value which is `true` if the target element intersects with the intersection observer's root, or `false` otherwise.
    - `isVisible`
      - : A boolean value which is `true` if the target element has been determined to be fully visible and unoccluded, with no visual effects that would alter its display on screen. A value of `false` means either that the target has compromised visibility, or that this determination could not be made.
    - `rootBounds`
      - : An object specifying the location and dimensions of the root's intersection rectangle, with `x`, `y`, `width`, and `height` properties, or `null`.
    - `target`
      - : The {{domxref("Element")}} whose intersection with the root changed.
    - `time`
      - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the intersection was recorded, relative to the `IntersectionObserver`'s [time origin](/en-US/docs/Web/API/Performance/timeOrigin).

### Return value

A new {{domxref("IntersectionObserverEntry")}} object whose properties are initialized to the values specified in `intersectionObserverEntryInit`.

## Examples

### Creating an IntersectionObserverEntry

This example creates a basic `IntersectionObserverEntry` describing a fully visible element. While you can construct an entry manually like this, in practice these objects are created by the browser and passed to your {{domxref("IntersectionObserver")}} callback automatically.

```js
const entry = new IntersectionObserverEntry({
  time: performance.now(),
  rootBounds: { x: 0, y: 0, width: 1024, height: 768 },
  boundingClientRect: { x: 10, y: 20, width: 200, height: 100 },
  intersectionRect: { x: 10, y: 20, width: 200, height: 100 },
  isIntersecting: true,
  isVisible: false,
  intersectionRatio: 1.0,
  target: document.body,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IntersectionObserverEntry")}}
- {{domxref("IntersectionObserver")}}
- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API)
