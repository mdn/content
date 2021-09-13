---
title: clearInterval()
slug: Web/API/clearInterval
tags:
  - API
  - HTML DOM
  - JavaScript timers
  - Method
  - Reference
  - clearInterval
browser-compat: api.clearInterval
---
{{APIRef("HTML DOM")}}

The global **`clearInterval()`** method cancels a timed, repeating action which
was previously established by a call to {{domxref("setInterval", "setInterval()")}}.

## Syntax

```js
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

{{jsxref("undefined")}}

## Example

See the [`setInterval()`
examples](/en-US/docs/Web/API/setInterval#Examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript timers](/en-US/docs/JavaScript/Timers)
- {{domxref("setTimeout")}}
- {{domxref("setInterval")}}
- {{domxref("clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
- [_Daemons_ management](/en-US/docs/JavaScript/Timers/Daemons)
