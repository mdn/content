---
title: clearInterval() global function
short-title: clearInterval()
slug: Web/API/clearInterval
page-type: web-api-global-function
browser-compat: api.clearInterval
---

{{APIRef("HTML DOM")}}

The global **`clearInterval()`** method cancels a timed, repeating action which
was previously established by a call to {{domxref("setInterval", "setInterval()")}}.
If the parameter provided does not identify a previously established action,
this method does nothing.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameters

- `intervalID`
  - : The identifier of the repeated action you want to cancel. This ID was returned by
    the corresponding call to `setInterval()`.

It's worth noting that the pool of IDs used by
{{domxref("setInterval", "setInterval()")}} and
{{domxref("setTimeout", "setTimeout()")}} are shared, which
means you can technically use `clearInterval()` and
{{domxref("clearTimeout", "clearTimeout()")}} interchangeably.
However, for clarity, you should avoid doing so.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See the [`setInterval()` examples](/en-US/docs/Web/API/setInterval#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("setTimeout")}}
- {{domxref("setInterval")}}
- {{domxref("clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
