---
title: CustomEvent
slug: Web/API/CustomEvent
page-type: web-api-interface
browser-compat: api.CustomEvent
---

{{APIRef("DOM")}}

The **`CustomEvent`** interface represents events initialized by an application for any purpose.

> **Note:** If used to attempt to communicate between a web extension content script and a web page script, a non-string `detail` property throws with "Permission denied to access property" in Firefox. To avoid this issue clone the object. See [Share objects with page scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) for more information.

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
