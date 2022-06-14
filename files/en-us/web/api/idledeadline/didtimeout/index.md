---
title: IdleDeadline.didTimeout
slug: Web/API/IdleDeadline/didTimeout
page-type: web-api-instance-property
tags:
  - API
  - Background Tasks
  - HTML DOM
  - IdleDeadline
  - NeedsExample
  - Property
  - Reference
  - Window
  - didTimeout
  - requestIdleCallback
browser-compat: api.IdleDeadline.didTimeout
---
{{APIRef("Background Tasks")}}

The read-only **`didTimeout`** property on the
**{{domxref("IdleDeadline")}}** interface is a Boolean value which
indicates whether or not the idle callback is being invoked because the timeout interval
specified when {{domxref("Window.requestIdleCallback()")}} was called has expired.

If `didTimeout` is `true`, the `IdleDeadline` object's
{{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} method will return
approximately 0.

Idle callbacks support the concept of a timeout in order to ensure that whatever task
they're meant to perform actually happens, even if the user agent never has enough idle
time available. Your callback will typically check the value of `didTimeout`
if it needs to perform an action even if the browser is too busy to grant you the time;
you should react by performing the needed task or, ideally, a minimal amount of work
that can be done to keep things moving along, then schedule a new callback to try again
to get the rest of the work done.

## Value

A Boolean which is `true` if the callback is running due to the callback's
timeout period elapsing or `false` if the callback is running because the
user agent is idle and is offering time to the callback.

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
