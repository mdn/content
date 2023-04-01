---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
page-type: web-api-interface
browser-compat: api.HTMLBodyElement
---

{{APIRef("HTML DOM")}}

The **`HTMLBodyElement`** interface provides special properties (beyond those inherited from the regular {{ domxref("HTMLElement") }} interface) for manipulating {{HtmlElement("body")}} elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : A string that represents the color of active hyperlinks.
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : A string that represents the description of the location of the background image resource. Note that this is not an URI, though some older version of some browsers do expect it.
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : A string that represents the background color for the document.
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : A string that represents the color of unvisited links.
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : A string that represents the foreground color of text.
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : A string that represents the color of visited links.

## Instance methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Event handlers

The {{domxref("HTMLElement")}} events are inherited.

The following {{domxref("Window")}} `onXYZ` event handler properties are also available as aliases targeting the `window` object. However, it is advised to listen to them on the `window` object directly rather than on `HTMLBodyElement`.

> **Note:** Using `addEventListener()` on `HTMLBodyElement` will not work for the `onXYZ` event handlers listed below. Listen to the events on the {{domxref("window")}} object instead.

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : Fired when the user's preferred language changes.
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : Fired when the window receives a message, for example from a call to [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) from another browsing context.
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : Fired when the window receives a message that can't be deserialized.
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : Fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : Fired when the browser has gained access to the network and the value of {{domxref("Navigator.onLine")}} switches to `true`.
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : Fired when the browser hides the current page in the process of presenting a different page from the session's history.
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : Fired when the browser displays the window's document due to navigation.
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : Fired when the active history entry changes while the user navigates the session history.
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : Fired whenever a JavaScript {{jsxref("Promise")}} is rejected and the rejection has been handled.
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : Fired when a storage area (`localStorage`) has been modified in the context of another document.
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : Fired whenever a {{jsxref("Promise")}} is rejected but the rejection was not handled.
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : Fired when the document is being unloaded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("body") }}
