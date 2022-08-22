---
title: IdleDeadline
slug: Web/API/IdleDeadline
page-type: web-api-interface
tags:
  - API
  - Background Tasks API
  - IdleDeadline
  - Interface
  - Reference
  - requestIdleCallback
browser-compat: api.IdleDeadline
---
{{APIRef("Background Tasks")}}

The `IdleDeadline` interface is used as the data type of the input parameter to idle callbacks established by calling {{domxref("Window.requestIdleCallback()")}}. It offers a method, {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}}, which lets you determine how much longer the user agent estimates it will remain idle and a property, {{domxref("IdleDeadline.didTimeout", "didTimeout")}}, which lets you determine if your callback is executing because its timeout duration expired.

To learn more about how request callbacks work, see [Collaborative Scheduling of Background Tasks](/en-US/docs/Web/API/Background_Tasks_API).

## Properties

- {{domxref("IdleDeadline.didTimeout")}} {{ReadOnlyInline}}
  - : A Boolean whose value is `true` if the callback is being executed because the timeout specified when the idle callback was installed has expired.

## Methods

- {{domxref("IdleDeadline.timeRemaining()")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}}, which is a floating-point value providing an estimate of the number of milliseconds remaining in the current idle period. If the idle period is over, the value is 0. Your callback can call this repeatedly to see if there's enough time left to do more work before returning.

## Example

See our [complete example](/en-US/docs/Web/API/Background_Tasks_API#example) in the article [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API)
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
