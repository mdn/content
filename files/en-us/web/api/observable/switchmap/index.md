---
title: "Observable: switchMap() method"
short-title: switchMap()
slug: Web/API/Observable/switchMap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.switchMap
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`switchMap()`** method of the {{domxref("Observable")}} interface allows you to execute a synchronous action whenever a source emits and, if the previous execution has not completed, cancels it.

## Syntax

```js-nolint
switchMap(mapper)
```

### Parameters

- `mapper`
  - : A callback function that transforms each value passed through the observable into a new value before mapping it to the rest of the stream. The callback is passed two arguments:
    - `value` {{optional_inline}}
      - : The current value being mapped.
    - `index` {{optional_inline}}
      - : A number representing the value's position in the stream. The first position has a value of `0`, in the same manner as an array.

### Return value

An {{domxref("Observable")}}.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
