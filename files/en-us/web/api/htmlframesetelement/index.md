---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
tags:
  - API
  - HTML-DOM
  - HTMLFrameSetElement
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLFrameSetElement
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLFrameSetElement`** interface provides special properties (beyond those of the regular {{domxref("HTMLElement")}} interface they also inherit) for manipulating {{HTMLELEment("frameset")}} elements.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} structured as a comma-separated list specifying the width of each column inside a frameset.
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} structured as a comma-separated list specifying the height of each column inside a frameset.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}._

## Event handlers

_No specific event handler; inherits event handlers from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("afterprint")}} event is raised.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("beforeprint")}} event is raised.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("beforeunload")}} event is raised.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("hashchange")}} event is raised.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("languagechange")}} event is raised.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("message")}} event is raised.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("offline")}} event is raised.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("online")}} event is raised.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("pagehide")}} event is raised.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("pageshow")}} event is raised.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("popstate")}} event is raised.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("resize")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("storage")}} event is raised.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("unload")}} event is raised.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("frameset")}}
- The equivalent of this element outside of frames: {{domxref("HTMLBodyElement")}}.
