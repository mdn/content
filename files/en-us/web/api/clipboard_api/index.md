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

> [!NOTE]
> Use this API in preference to the deprecated {{domxref("document.execCommand()")}} method for accessing the clipboard.

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Concepts and usage

The _system clipboard_ is a data buffer belonging to the operating system hosting the browser, which is used for short-term data storage and/or data transfers between documents or applications.
It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer), sometimes called the _paste buffer_, that can be accessed from most or all programs within the environment via defined programming interfaces.

The Clipboard API allows users to programmatically read and write text and other kinds of data to and from the system clipboard in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts), provided the user has met the criteria outlined in the [Security considerations](#security_considerations).

Events are fired as the result of {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} operations modifying the clipboard.
The events have a default action, for example the `copy` action copies the current selection to the system clipboard by default.
The default action can be overridden by the event handler — see each of the events for more information.

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
- `Element` [`copy`](/en-US/docs/Web/API/Element/copy_event) event
  - : An event fired whenever the user initiates a copy action.
- `Element` [`cut`](/en-US/docs/Web/API/Element/cut_event) event
  - : An event fired whenever the user initiates a cut action.
- `Element` [`paste`](/en-US/docs/Web/API/Element/paste_event) event
  - : An event fired whenever the user initiates a paste action.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Security considerations

The Clipboard API allows users to programmatically read and write text and other kinds of data to and from the system clipboard in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts).

The specification requires that a user has recently interacted with the page in order to read from the clipboard ([transient user activation](/en-US/docs/Web/Security/User_activation) is required).
If the read operation is caused by user interaction with a browser or OS "paste element" (such as a context menu), the browser is expected to prompt the user for acknowledgement.
For writing to the clipboard the specification expects that the page has been granted the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-write` permission, and the browser may also require [transient user activation](/en-US/docs/Web/Security/User_activation).
Browsers may place additional restrictions over use of the methods to access the clipboard.

Browser implementations have diverged from the specification.
The differences are captured in the [Browser compatibility](#browser_compatibility) section and the current state is summarized below:

Chromium browsers:

- Reading requires the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-read` permission be granted.
  Transient activation is not required.
- Writing requires either the `clipboard-read` permission or transient activation.
  If the permission is granted, it persists, and further transient activation is not required.
- The HTTP [Permissions-Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) permissions `clipboard-read` and `clipboard-write` must be allowed for {{HTMLElement("iframe")}} elements that access the clipboard.
- No persistent paste-prompt is displayed when a read operation is caused by a browser or OS "paste element".

Firefox & Safari:

- Reading and writing require transient activation.
- The paste-prompt is suppressed if reading same-origin clipboard content, but not cross-origin content.
- The `clipboard-read` and `clipboard-write` permissions are not supported (and not planned to be supported) by Firefox or Safari.

Firefox [Web Extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Reading text is only available for extensions with the Web Extension [`clipboardRead`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) permission.
  With this permission the extension does not require transient activation or a paste prompt.
- Writing text is available in secure context and with transient activation.
  With the Web Extension [`clipboardWrite`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) permission transient activation is not required.

## Examples

### Accessing the clipboard

The system clipboard is accessed through the {{domxref("Navigator.clipboard")}} global.

This snippet fetches the text from the clipboard and appends it to the first element found with the class `editor`.
Since {{domxref("Clipboard.readText", "readText()")}} returns an empty string if the clipboard isn't text, this code is safe.

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
