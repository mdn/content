---
title: CustomEvent
slug: Web/API/CustomEvent
page-type: web-api-interface
browser-compat: api.CustomEvent
---

{{APIRef("DOM")}}

The **`CustomEvent`** interface represents events initialized by an application for any purpose.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructor

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : Creates a new `CustomEvent`.

## Instance properties

_This interface inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : Returns any data passed when initializing the event.

## Instance methods

_This interface inherits methods from its parent, {{domxref("Event")}}._

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : Initializes a `CustomEvent` object. If the event has already been dispatched, this method does nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.postMessage()")}}
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
