---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
page-type: web-api-interface
tags:
  - API
  - GlobalEventHandlers
  - HTML DOM
  - Mixin
  - Reference
  - events
browser-compat: api.GlobalEventHandlers
---
{{ApiRef("HTML DOM")}}

The **`GlobalEventHandlers`** mixin describes the event handlers common to several interfaces like {{domxref("HTMLElement")}}, {{domxref("Document")}}, or {{domxref("Window")}}. Each of these interfaces can, of course, add more event handlers in addition to the ones listed below.

> **Note:** `GlobalEventHandlers` is a mixin and not an interface; you can't actually create an object of type `GlobalEventHandlers`.

## Properties

_This interface doesn't include any properties except for the event handlers listed below._

### Event handlers

These event handlers are defined on the {{domxref("GlobalEventHandlers")}} mixin, and implemented by {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}, as well as by {{domxref("WorkerGlobalScope")}} for Web Workers.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/abort_event", "abort")}} event is raised.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Element/contextmenu_event", "contextmenu")}} event is raised.
- {{domxref("GlobalEventHandlers.onformdata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) for processing {{domxref("HTMLFormElement/formdata_event", "formdata")}} events, fired after the entry list representing the form's data is constructed.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/progress_event", "progress")}} event is raised.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/ratechange_event", "ratechange")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/seeked_event", "seeked")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("seeking")}} event is raised.
- {{domxref("GlobalEventHandlers.onshow")}} {{Deprecated_Inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("show")}} event is raised.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/stalled_event", "stalled")}} event is raised.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/suspend_event", "suspend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}} event is raised.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/volumechange_event", "volumechange")}} event is raised.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement.waiting_event", "waiting")}} event is raised.

## Methods

_This interface defines no methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element")}}
- [event handler](/en-US/docs/Web/Events/Event_handlers)
- {{domxref("Event")}}
