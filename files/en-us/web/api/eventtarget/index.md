---
title: EventTarget
slug: Web/API/EventTarget
page-type: web-api-interface
tags:
  - Interface
  - Reference
browser-compat: api.EventTarget
---
{{ApiRef("DOM")}}

The **`EventTarget`** interface is implemented by objects that can receive events and may have listeners for them.
 In other words, any target of events implements the three methods associated with this interface.

{{domxref("Element")}}, and its children, as well as {{domxref("Document")}} and {{domxref("Window")}}, are the most common event targets,
but other objects can be event targets, too.
For example {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, and {{domxref("AudioContext")}} are also event targets.

Many event targets (including elements, documents, and windows) also support setting [event handlers](/en-US/docs/Web/Events/Event_handlers) via `onevent` properties and attributes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("EventTarget.EventTarget()", "EventTarget()")}}
  - : Creates a new `EventTarget` object instance.

## Methods

- {{domxref("EventTarget.addEventListener()")}}
  - : Registers an event handler of a specific event type on the `EventTarget`.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Removes an event listener from the `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this `EventTarget`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Event reference](/en-US/docs/Web/Events) – the events available in the platform.
- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}} interface
