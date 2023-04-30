---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ToggleEvent
---

{{APIRef("UI Events")}}{{SeeCompatTable}}

The **`ToggleEvent`** interface represents an event notifying the user of an element whose state toggles between being open or closed.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}} {{Experimental_Inline}}
  - : Creates an `ToggleEvent` object.

## Instance properties

_This interface inherits properties from its parents, {{DOMxRef("UIEvent")}} and {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns either `open` or `closed`, depending on which state the element is transitioning from.
- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns either `open` or `closed`, depending on which state the element is transitioning to.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`beforetoggle` event](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle` event](/en-US/docs/Web/API/HTMLElement/toggle_event)
- The [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute
