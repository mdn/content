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
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{domxref("HTMLElement/animationcancel_event", "animationcancel")}} event is sent, indicating that a running [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has been canceled.
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{domxref("HTMLElement/animationend_event", "animationend")}} event is sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has stopped playing.
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{domxref("HTMLElement/animationiteration_event", "animationiteration")}} event has been sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has begun playing a new iteration of the animation sequence.
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{domxref("HTMLElement/animationstart_event", "animationstart")}} event is sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has started playing.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the `error` event is raised.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Element/contextmenu_event", "contextmenu")}} event is raised.
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/drag_event", "drag")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/dragend_event", "dragend")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/dragleave_event", "dragleave")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/dragover_event", "dragover")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event is raised.
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/drop_event", "drop")}} event is raised.
- {{domxref("GlobalEventHandlers.onformdata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) for processing {{domxref("HTMLFormElement/formdata_event", "formdata")}} events, fired after the entry list representing the form's data is constructed.
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}} event type is raised.
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLInputElement/invalid_event", "invalid")}} event is raised.
- {{domxref("GlobalEventHandlers.onload")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Window/load_event", "load")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/loadend_event", "loadend")}} event is raised (when progress has stopped on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/loadstart_event", "loadstart")}} event is raised (when progress has begun on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}} event type is raised.
- {{ domxref("GlobalEventHandlers.onwheel") }}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("wheel")}} event is raised.
- {{domxref("GlobalEventHandlers.onpause")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/pause_event", "pause")}} event is raised.
- {{domxref("GlobalEventHandlers.onplay")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/play_event", "play")}} event is raised.
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/playing_event", "playing")}} event is raised.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/progress_event", "progress")}} event is raised.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/ratechange_event", "ratechange")}} event is raised.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Element/scroll_event", "scroll")}} event is raised.
- {{domxref("GlobalEventHandlers.onsecuritypolicyviolation")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the [`securitypolicyviolation`](/en-US/docs/Web/API/Element/securitypolicyviolation_event) event is raised after a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) violation.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/seeked_event", "seeked")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("seeking")}} event is raised.
- {{domxref("GlobalEventHandlers.onshow")}} {{Deprecated_Inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Element/show_event", "show")}} event is raised.
- {{domxref("GlobalEventHandlers.onslotchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/stalled_event", "stalled")}} event is raised.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/suspend_event", "suspend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}} event is raised.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLMediaElement/volumechange_event", "volumechange")}} event is raised.
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has been cancelled.
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{domxref("HTMLElement/transitionend_event", "transitionend")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has finished playing.
- {{domxref("GlobalEventHandlers.ontransitionrun")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) is running, though not necessarily started.
- {{domxref("GlobalEventHandlers.ontransitionstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has started transitioning.
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
