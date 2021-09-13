---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
tags:
  - API
  - DOM
  - Event
  - Method
  - Propagation
  - Reference
  - actions
  - default
  - stopPropagation
browser-compat: api.Event.stopPropagation
---
{{APIRef("DOM")}}

The **`stopPropagation()`** method of the {{domxref("Event")}}
interface prevents further propagation of the current event in the capturing and
bubbling phases. It does not, however, prevent any default behaviors from occurring; for
instance, clicks on links are still processed. If you want to stop those behaviors, see
the {{domxref("Event.preventDefault", "preventDefault()")}} method.

## Syntax

```js
event.stopPropagation();
```

### Parameters

None.

### Return value

`undefined`.

## Examples

See Example 5: [Event
Propagation](/en-US/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation) in the Examples chapter for a more detailed example of this method and
event propagation in the DOM.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- See the [DOM
  specification](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) for the explanation of event flow. The [DOM Level 3 Events
  draft](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) has an illustration.
