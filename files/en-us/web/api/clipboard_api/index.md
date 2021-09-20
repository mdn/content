---
title: Clipboard API
slug: Web/API/Clipboard_API
tags:
  - API
  - Async Clipboard API
  - Clipboard
  - Clipboard API
  - Clipboard Event API
  - ClipboardEvent
  - ClipboardItem
  - Cut
  - Landing
  - Reference
  - copy
  - paste
---
{{DefaultAPISidebar("Clipboard API")}}

The **Clipboard API** provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. Access to the contents of the clipboard is gated behind the [Permissions API](/en-US/docs/Web/API/Permissions_API): The `clipboard-write` permission is granted automatically to pages when they are in the active tab. The `clipboard-read` permission must be requested, which you can do by trying to read data from the clipboard.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

This API is designed to supersede accessing the clipboard using {{domxref("document.execCommand()")}}.

## Accessing the clipboard

Instead of creating a `Clipboard` object through instantiation, you access the system clipboard through the {{domxref("Navigator.clipboard")}} global:

```js
navigator.clipboard.readText().then(
  clipText => document.querySelector(".editor").innerText += clipText);
```

This snippet fetches the text from the clipboard and appends it to the first element found with the class `editor`. Since {{domxref("Clipboard.readText", "readText()")}} (and {{domxref("Clipboard.read", "read()")}}, for that matter) returns an empty string if the clipboard isn't text, this code is safe.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Provides an interface for reading and writing text and data to or from the system clipboard. The specification refers to this as the 'Async Clipboard API.'
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : Represents events providing information related to modification of the clipboard, that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events. The specification refers to this as the 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Represents a single item format, used when reading or writing data.

## Specifications

{{Specifications("api.Clipboard")}}

## Browser compatibility

### Clipboard

{{Compat("api.Clipboard")}}

### ClipboardEvent

{{Compat("api.ClipboardEvent")}}

### ClipboardItem

{{Compat("api.ClipboardItem")}}

## See also

- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/image-support-for-async-clipboard/)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Using the Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API)
