---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.HTMLFrameSetElement
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLFrameSetElement`** interface provides special properties (beyond those of the regular {{domxref("HTMLElement")}} interface they also inherit) for manipulating {{HTMLElement("frameset")}} elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : A string structured as a comma-separated list specifying the width of each column inside a frameset.
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : A string structured as a comma-separated list specifying the height of each column inside a frameset.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Event handlers

The {{domxref("HTMLElement")}} events are inherited.

The following {{domxref("Window")}} `onXYZ` event handler properties are also available as aliases targeting the `window` object. However, it is advised to listen to them on the `window` object directly rather than on `HTMLFrameSetElement`.

> [!NOTE]
> Using `addEventListener()` on `HTMLFrameSetElement` will not work for the `onXYZ` event handlers listed below. Listen to the events on the {{domxref("window")}} object instead.

- {{domxref("window.afterprint_event", "HTMLFrameSetElement.onafterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("window.beforeprint_event", "HTMLFrameSetElement.onbeforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.
- {{domxref("window.beforeunload_event", "HTMLFrameSetElement.onbeforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("window.gamepadconnected_event", "HTMLFrameSetElement.ongamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("window.gamepaddisconnected_event", "HTMLFrameSetElement.ongamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.
- {{domxref("window.hashchange_event", "HTMLFrameSetElement.onhashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("window.languagechange_event", "HTMLFrameSetElement.onlanguagechange")}}
  - : Fired when the user's preferred language changes.
- {{domxref("window.message_event", "HTMLFrameSetElement.onmessage")}}
  - : Fired when the window receives a message, for example from a call to [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) from another browsing context.
- {{domxref("window.messageerror_event", "HTMLFrameSetElement.onmessageerror")}}
  - : Fired when the window receives a message that can't be deserialized.
- {{domxref("window.offline_event", "HTMLFrameSetElement.onoffline")}}
  - : Fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.
- {{domxref("window.online_event", "HTMLFrameSetElement.ononline")}}
  - : Fired when the browser has gained access to the network and the value of {{domxref("Navigator.onLine")}} switches to `true`.
- {{domxref("window.pagehide_event", "HTMLFrameSetElement.onpagehide")}}
  - : Fired when the browser hides the current page in the process of presenting a different page from the session's history.
- {{domxref("window.pageshow_event", "HTMLFrameSetElement.onpageshow")}}
  - : Fired when the browser displays the window's document due to navigation.
- {{domxref("window.popstate_event", "HTMLFrameSetElement.onpopstate")}}
  - : Fired when the active history entry changes while the user navigates the session history.
- {{domxref("window.rejectionhandled_event", "HTMLFrameSetElement.onrejectionhandled")}}
  - : Fired whenever a JavaScript {{jsxref("Promise")}} is rejected and the rejection has been handled.
- {{domxref("window.storage_event", "HTMLFrameSetElement.onstorage")}}
  - : Fired when a storage area (`localStorage`) has been modified in the context of another document.
- {{domxref("window.unhandledrejection_event", "HTMLFrameSetElement.onunhandledrejection")}}
  - : Fired whenever a {{jsxref("Promise")}} is rejected but the rejection was not handled.
- {{domxref("window.unload_event", "HTMLFrameSetElement.onunload")}}
  - : Fired when the document is being unloaded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("frameset")}}
- The equivalent of this element outside of frames: `HTMLFrameSetElement`.
