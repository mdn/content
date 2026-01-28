---
title: "Observable: catch() method"
short-title: catch()
slug: Web/API/Observable/catch
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.catch
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`catch()`** method of the {{domxref("Observable")}} interface fires an error callback if the previous pipeline stages throw an exception.

## Syntax

```js-nolint
catch(callback)
```

### Parameters

- `callback`
  - : A callback function that is run if the previous pipeline stages throw an exception.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `catch()` example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
