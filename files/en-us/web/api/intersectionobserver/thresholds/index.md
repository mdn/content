---
title: IntersectionObserver.thresholds
slug: Web/API/IntersectionObserver/thresholds
page-type: web-api-instance-property
tags:
  - API
  - Draft
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - NeedsExample
  - Property
  - Reference
browser-compat: api.IntersectionObserver.thresholds
---
{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserver")}} interface's read-only
**`thresholds`** property returns the list of intersection
thresholds that was specified when the observer was instantiated with
{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}. If
only one threshold ratio was provided when instantiating the object, this will be an
array containing that single value.

See {{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API", "Thresholds")}} to
learn how thresholds work.

## Value

An array of intersection thresholds, originally specified using the
`threshold` property when instantiating the observer. If only one observer
was specified, without being in an array, this value is a one-entry array containing
that threshold. Regardless of the order your original `threshold` array was
in, this one is always sorted in numerically increasing order.

If no `threshold` option was included when
`IntersectionObserver()` was used to instantiate the observer, the value of
`thresholds` is `[0]`.

> **Note:** Although the `options` object you can specify when creating an
> {{domxref("IntersectionObserver")}} has a field named
> {{domxref("IntersectionObserver.threshold", "threshold")}}, this property is called
> `thresholds`. Confusing? Yes. If you accidentally use
> `thresholds` as the name of the field in your `options`, the
> `thresholds` array will wind up being `[0.0]`, which is likely
> not what you expect. Debugging chaos may ensue.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
