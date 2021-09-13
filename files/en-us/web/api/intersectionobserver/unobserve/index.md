---
title: IntersectionObserver.unobserve()
slug: Web/API/IntersectionObserver/unobserve
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - Reference
  - unobserve
browser-compat: api.IntersectionObserver.unobserve
---
{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserver")}} method
**`unobserve()`** instructs the
`IntersectionObserver` to stop observing the specified target
element.

## Syntax

```js
IntersectionObserver.unobserve(target);
```

### Parameters

- `target`
  - : The {{domxref("Element")}} to cease observing. If the specified element isn't being
    observed, this method does nothing and no exception is thrown.

### Return value

`undefined`.

## Example

This snippet shows an observer being created, an element being observed, and then being
unobserved.

```js
var observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

/* ... */

observer.unobserve(document.getElementById("elementToObserve"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Intersection Observer
  API](/en-US/docs/Web/API/Intersection_Observer_API)
- {{domxref("IntersectionObserver.observe()")}}
