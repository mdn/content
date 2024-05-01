---
title: "IdleDeadline: timeRemaining() method"
short-title: timeRemaining()
slug: Web/API/IdleDeadline/timeRemaining
page-type: web-api-instance-method
browser-compat: api.IdleDeadline.timeRemaining
---

{{APIRef("Background Tasks")}}

The **`timeRemaining()`** method
on the {{domxref("IdleDeadline")}} interface returns the estimated number of
milliseconds remaining in the current idle period. The callback can call this method at
any time to determine how much time it can continue to work before it must return. For
example, if the callback finishes a task and has another one to begin, it can call
`timeRemaining()` to see if there's enough time to complete the next task. If
there isn't, the callback can just return immediately, or look for other work to do with
the remaining time.

By the time `timeRemaining()` reaches 0, it is suggested that the callback
should return control to the user agent's event loop.

## Syntax

```js-nolint
timeRemaining()
```

### Parameters

None.

### Return value

A {{domxref("DOMHighResTimeStamp")}} value (which is a floating-point number)
representing the number of milliseconds the user agent estimates are left in the current
idle period. The value is ideally accurate to within about 5 microseconds.

If the {{domxref("IdleDeadline")}} object's {{domxref("IdleDeadline.didTimeout", "didTimeout")}}
property is true, this method returns zero.

## Examples

See our [complete example](/en-US/docs/Web/API/Background_Tasks_API#example)
in the article [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Collaborative Scheduling of Background Tasks](/en-US/docs/Web/API/Background_Tasks_API)
- {{domxref("IdleDeadline")}}
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
