---
title: "ScreenOrientation: unlock() method"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
page-type: web-api-instance-method
browser-compat: api.ScreenOrientation.unlock
---

{{APIRef("Screen Orientation")}}

The **`unlock()`** method of the
{{domxref("ScreenOrientation")}} interface unlocks the orientation of the containing
document from its default orientation.

## Syntax

```js-nolint
unlock()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

The promise may be rejected with the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown if the document is not fully active.

- `SecurityError` {{domxref("DOMException")}}

  - : Thrown if the document's visibility state is hidden or if the document is forbidden to use the feature (for example, by omitting the keyword `allow-orientation-lock` of the `sandbox` attribute of the `iframe` element).

- `AbortError` {{domxref("DOMException")}}

  - : Thrown if there is any other `lock()` method invoking.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
