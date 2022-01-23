---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLBodyElement
---
{{APIRef("HTML DOM")}}

The **`HTMLBodyElement`** interface provides special properties (beyond those inherited from the regular {{ domxref("HTMLElement") }} interface) for manipulating {{HtmlElement("body")}} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of active hyperlinks.
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the description of the location of the background image resource. Note that this is not an URI, though some older version of some browsers do expect it.
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the background color for the document.
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of unvisited links.
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the foreground color of text.
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of visited links.

## Methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}, and from {{domxref("WindowEventHandlers")}}._

## Event handlers

_No specific event handlers; inherits event handlers from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}._

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
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) called whenever an object receives a {{event("message")}} event.
- {{domxref("WindowEventHandlers.onmessageerror")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) called whenever an object receives a {{event("messageerror")}} event.
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
- {{domxref("WindowEventHandlers.onrejectionhandled")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code executed when the {{event("rejectionhandled")}} event is raised, indicating that a {{jsxref("Promise")}} was rejected and the rejection has been handled.
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("resize")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("storage")}} event is raised.
- {{domxref("WindowEventHandlers.onunhandledrejection")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code executed when the {{event("unhandledrejection")}} event is raised, indicating that a {{jsxref("Promise")}} was rejected but the rejection was not handled.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("unload")}} event is raised.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("body") }}
- {{domxref("WindowEventHandlers")}}
