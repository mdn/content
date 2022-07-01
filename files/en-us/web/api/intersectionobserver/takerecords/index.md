---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
page-type: web-api-instance-method
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - NeedsExample
  - Reference
  - takeRecords
browser-compat: api.IntersectionObserver.takeRecords
---
{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserver")}} method
**`takeRecords()`** returns an array of
{{domxref("IntersectionObserverEntry")}} objects, one for each targeted element which
has experienced an intersection change since the last time the intersections were
checked, either explicitly through a call to this method or implicitly by an automatic
call to the observer's callback.

> **Note:** If you use the callback to monitor these changes, you don't
> need to call this method. Calling this method clears the pending intersection list, so
> the callback will not be run.

## Syntax

```js
takeRecords()
```

### Parameters

None.

### Return value

An array of {{domxref("IntersectionObserverEntry")}} objects, one for each target
element whose intersection with the root has changed since the last time the
intersections were checked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API)
