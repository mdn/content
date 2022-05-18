---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
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
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("animationcancel")}} event is sent, indicating that a running [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has been canceled.
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("animationend")}} event is sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has stopped playing.
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("animationiteration")}} event has been sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has begun playing a new iteration of the animation sequence.
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("animationstart")}} event is sent, indicating that a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) has started playing.
- {{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("auxclick")}} event is sent, indicating that a non-primary button has been pressed on an input device (e.g. a middle mouse button).
- {{domxref("GlobalEventHandlers.onblur")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("blur")}} event is raised.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("error")}} event is raised.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("focus")}} event is raised.
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("cancel")}} event is raised.
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("canplay")}} event is raised.
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("canplaythrough")}} event is raised.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("change")}} event is raised.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("click")}} event is raised.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("close")}} event is raised.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("contextmenu")}} event is raised.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dblclick")}} event is raised.
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("drag")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dragend")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dragenter")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dragleave")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dragover")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("dragstart")}} event is raised.
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("drop")}} event is raised.
- {{domxref("GlobalEventHandlers.ondurationchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("durationchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onemptied")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("emptied")}} event is raised.
- {{domxref("GlobalEventHandlers.onended")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("ended")}} event is raised.
- {{domxref("GlobalEventHandlers.onformdata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) for processing {{domxref("HTMLFormElement/formdata_event", "formdata")}} events, fired after the entry list representing the form's data is constructed.
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}} event type is raised.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("input")}} event is raised.
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("invalid")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("keydown")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("keypress")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("keyup")}} event is raised.
- {{domxref("GlobalEventHandlers.onload")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Window/load_event", "load")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("loadeddata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("loadedmetadata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("loadend")}} event is raised (when progress has stopped on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("loadstart")}} event is raised (when progress has begun on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}} event type is raised.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mousedown")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseenter")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mouseenter")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseleave")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mouseleave")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mousemove")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mouseout")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mouseover")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mouseup")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("mousewheel")}} event is raised. Deprecated. Use `onwheel` instead.
- {{ domxref("GlobalEventHandlers.onwheel") }}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("wheel")}} event is raised.
- {{domxref("GlobalEventHandlers.onpause")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("pause")}} event is raised.
- {{domxref("GlobalEventHandlers.onplay")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("play")}} event is raised.
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("playing")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerdown")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointermove")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointermove_event", "pointermove")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerup")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerup_event", "pointerup")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointercancel")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerover")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerover_event", "pointerover")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerout")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerout_event", "pointerout")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerenter")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerleave")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("pointerlockchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("pointerlockerror")}} event is raised.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("progress")}} event is raised.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("ratechange")}} event is raised.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("reset")}} event is raised.
- {{domxref("GlobalEventHandlers.onresize")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("resize")}} event is raised.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("scroll")}} event is raised.
- {{domxref("GlobalEventHandlers.onsecuritypolicyviolation")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the [`securitypolicyviolation`](/en-US/docs/Web/API/Element/securitypolicyviolation_event) event is raised after a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) violation.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("seeked")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("seeking")}} event is raised.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("select")}} event is raised.
- {{domxref("GlobalEventHandlers.onselectstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Document/selectstart_event", "selectstart")}} event is raised, i.e. when the user starts to make a new text selection on a web page.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the `selectionchange` event is raised, i.e. when the text selected on a web page changes.
- {{domxref("GlobalEventHandlers.onshow")}} {{Deprecated_Inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("show")}} event is raised.
- {{domxref("GlobalEventHandlers.onslotchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("slotchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("stalled")}} event is raised.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("submit")}} event is raised.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("suspend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("timeupdate")}} event is raised.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("volumechange")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("touchcancel")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("touchend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("touchmove")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Element/touchstart_event", "touchstart")}} event is raised.
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{event("transitioncancel")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has been cancelled.
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{event("transitionend")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has finished playing.
- {{domxref("GlobalEventHandlers.ontransitionrun")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{event("transitionrun")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) is running, though not necessarily started.
- {{domxref("GlobalEventHandlers.ontransitionstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{event("transitionstart")}} event is sent, indicating that a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has started transitioning.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("waiting")}} event is raised.

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
