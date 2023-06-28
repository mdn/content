---
title: FocusEvent
slug: Web/API/FocusEvent
page-type: web-api-interface
browser-compat: api.FocusEvent
---

{{APIRef("UI Events")}}

The **`FocusEvent`** interface represents focus-related events, including {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, and {{domxref("Element/focusout_event", "focusout")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : Creates a `FocusEvent` event with the given parameters.

## Instance properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Instance methods

_This interface has no specific methods. It inherits methods from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

## Order of events

The _UI Events_ specification states that focus events [occur in a set order](https://w3c.github.io/uievents/#events-focusevent-event-order) relative to one another, and goes on to describe the typical sequence of events that fire when the focus is shifted from element A to element B:

1. `focusout`: sent before element A loses focus.
2. `focusin`: sent before element B receives focus.
3. `blur`: sent after element A loses focus.
4. `focus`: sent after element B receives focus.

However, current browser implementations fire these four events in a different order:

1. `blur`: sent after element A loses focus.
2. `focusout`: sent after the `blur` event.
3. `focus`: sent after element B receives focus.
4. `focusin`: sent after the `focus` event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface
