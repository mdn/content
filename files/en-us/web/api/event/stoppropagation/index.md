---
title: "Event: stopPropagation() method"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
page-type: web-api-instance-method
browser-compat: api.Event.stopPropagation
---

{{APIRef("DOM")}}

The **`stopPropagation()`** method of the {{domxref("Event")}}
interface prevents further propagation of the current event in the capturing and
bubbling phases. It does not, however, prevent any default behaviors from occurring; for
instance, clicks on links are still processed. If you want to stop those behaviors, see
the {{domxref("Event.preventDefault", "preventDefault()")}} method. It also does not
prevent propagation to other event-handlers of the current element. If you want to stop those,
see {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}.

## Syntax

```js-nolint
event.stopPropagation()
```

### Parameters

None.

### Return value

None.

## Examples

See [Event Propagation](/en-US/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation).
Also see the example at {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
