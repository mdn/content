---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
page-type: web-api-interface
browser-compat: api.BeforeUnloadEvent
---

{{APIRef}}

The **`BeforeUnloadEvent`** interface represents the event object for the {{domxref("Window/beforeunload_event", "beforeunload")}} event, which is fired when the current window, contained document, and associated resources are about to be unloaded.

See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference for detailed guidance on using this event.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} {{Deprecated_Inline}}
  - : When set to a [truthy](/en-US/docs/Glossary/Truthy) value, triggers a browser-controlled confirmation dialog asking users to confirm if they want to leave the page when they try to close or reload it. This is a legacy feature, and best practice is to trigger the dialog by invoking `event.preventDefault()`, while also setting `returnValue` to support legacy cases.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/beforeunload_event", "beforeunload")}} event
