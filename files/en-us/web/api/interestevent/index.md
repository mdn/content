---
title: InterestEvent
slug: Web/API/InterestEvent
page-type: web-api-interface
browser-compat: api.InterestEvent
---

{{APIRef("Popover API")}}

The **`InterestEvent`** interface represents an event that fires when interest is shown or lost on an [interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers).

This is the event object for the {{domxref("HTMLElement.interest_event", "interest")}} and {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} events, which fire on interest invoker target elements when interest is shown or lost, respectively.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("InterestEvent.InterestEvent", "InterestEvent()")}}
  - : Creates an `InterestEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{DOMxRef("InterestEvent.source")}} {{ReadOnlyInline}}
  - : An {{domxref("Element")}} object instance representing the interest invoker element that interest was shown or lost on to fire the event.

## Examples

See the [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers) guide and the {{domxref("HTMLElement.interest_event", "interest")}} event reference page for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers)
