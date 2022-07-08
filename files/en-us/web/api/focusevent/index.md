---
title: FocusEvent
slug: Web/API/FocusEvent
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Events
  - Event
  - Reference
browser-compat: api.FocusEvent
---
{{APIRef("UI Events")}}

The **`FocusEvent`** interface represents focus-related events, including {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, and {{domxref("Element/focusout_event", "focusout")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : Creates a `FocusEvent` event with the given parameters.

## Properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Methods

_This interface has no specific methods. It inherits methods from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface
