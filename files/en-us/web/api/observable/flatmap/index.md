---
title: "Observable: flatMap() method"
short-title: flatMap()
slug: Web/API/Observable/flatMap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.flatMap
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`flatMap()`** method of the {{domxref("Observable")}} interface creates an inner observable stream that is returned and becomes mapped to the outer observable stream. This enables, for example, the chaining of multiple event types.

## Syntax

```js-nolint
flatMap(mapper)
```

### Parameters

- `mapper`
  - : A callback function that transforms each value passed through the observable into a new value before mapping it to the rest of the stream. The callback is passed two arguments:
    - `value`
      - : The current value being mapped.
    - `index`
      - : A number representing the value's position in the stream. The first position has a value of `0`, in the same manner as an array.

### Return value

An {{domxref("Observable")}}.

## Examples

For a `flatMap()` example, see our [Canvas drawing example](/en-US/docs/Web/API/Observable_API/Using#canvas_drawing_example).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
