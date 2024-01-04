---
title: Clipboard API
slug: Web/API/Clipboard_API
page-type: web-api-overview
browser-compat:
  - api.Clipboard
  - api.ClipboardEvent
  - api.ClipboardItem
---

{{DefaultAPISidebar("Clipboard API")}}

The **Clipboard API** provides the ability to respond to clipboard commands (cut, copy, and paste), as well as to asynchronously read from and write to the system clipboard.

> **Note:** Use this API in preference to the deprecated {{domxref("document.execCommand()")}} method for accessing the clipboard.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Concepts and usage

The _system clipboard_ is a data buffer belonging to the operating system hosting the browser, which is used for short-term data storage and/or data transfers between documents or applications.
It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer), sometimes called the _paste buffer_, that can be accessed from most or all programs within the environment via defined programming interfaces.

The Clipboard API allows users to programmatically read and write text and other kinds of data to and from the system clipboard in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts), provided the user has recently interacted with the page ([transient user activation](/en-US/docs/Web/Security/User_activation) is required).
Browsers may place additional restrictions over use of the methods to access the clipboard, such as requiring user approval to read or write cross-origin content, or at all!

Events are fired as the result of {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} operations modifying the clipboard.
The events have a default action, for example the `copy` action copies the current selection to the system clipboard by default.
The default action can be overriden by the event handler — see each of the events for more information.

> **Note:** In addition to transient activation, Chromium also requires `clipboard-read` and `clipboard-write` permissions, which are not supported (and will never be supported) by Firefox or Safari.
> Both `clipboard-read` and `clipboard-write` have been removed from the [Permissions API](/en-US/docs/Web/API/Permissions_API) specification, but are still referenced in the Clipboard API specification.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Provides an interface for reading and writing text and data to or from the system clipboard.
    The specification refers to this as the 'Async Clipboard API'.
- {{domxref("ClipboardEvent")}}
  - : Represents events providing information related to modification of the clipboard, that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events.
    The specification refers to this as the 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Represents a single item format, used when reading or writing data.

### Extensions to other interfaces

The Clipboard API extends the following APIs, adding the listed features.

- {{domxref("Navigator.clipboard")}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns a {{domxref("Clipboard")}} object that provides read and write access to the system clipboard.
- [`Element: copy`](/en-US/docs/Web/API/Element/copy_event) event
  - : An event fired whenever the user initiates a copy action.
- [`Element: cut`](/en-US/docs/Web/API/Element/cut_event) event
  - : An event fired whenever the user initiates a cut action.
- [`Element: paste`](/en-US/docs/Web/API/Element/cut_event) event
  - : An event fired whenever the user initiates a paste action.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Examples

### Accessing the clipboard

The system clipboard is accessed through the {{domxref("Navigator.clipboard")}} global.

This snippet fetches the text from the clipboard and appends it to the first element found with the class `editor`.
Since {{domxref("Clipboard.readText", "readText()")}} (and {{domxref("Clipboard.read", "read()")}}, for that matter) returns an empty string if the clipboard isn't text, this code is safe.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
