---
title: Clipboard API
slug: Web/API/Clipboard_API
page-type: web-api-overview
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
browser-compat:
  - api.Clipboard
  - api.ClipboardEvent
  - api.ClipboardItem
---
{{DefaultAPISidebar("Clipboard API")}}

The **Clipboard API** provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

This API is designed to supersede accessing the clipboard using {{domxref("document.execCommand()")}}.

> **Note:** The **clipboard** is a data buffer that is used for short-term, data storage and/or data transfers, this can be between documents or applications
> It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer), sometimes called the paste buffer, that can be accessed from most or all programs within the environment via defined [programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface).
>
> A typical application accesses clipboard functionality by mapping [user input](https://en.wikipedia.org/wiki/User_input) such as [keybindings](https://en.wikipedia.org/wiki/Keybinding), [menu selections](<https://en.wikipedia.org/wiki/Menu_(computing)>), etc. to these interfaces.

## Accessing the clipboard

Instead of creating a `Clipboard` object through instantiation, you access the system clipboard through the {{domxref("Navigator.clipboard")}} global:

```js
navigator.clipboard.readText().then(
  (clipText) => document.querySelector(".editor").innerText += clipText);
```

This snippet fetches the text from the clipboard and appends it to the first element found with the class `editor`. Since {{domxref("Clipboard.readText", "readText()")}} (and {{domxref("Clipboard.read", "read()")}}, for that matter) returns an empty string if the clipboard isn't text, this code is safe.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Provides an interface for reading and writing text and data to or from the system clipboard. The specification refers to this as the 'Async Clipboard API'.
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : Represents events providing information related to modification of the clipboard, that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events. The specification refers to this as the 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Represents a single item format, used when reading or writing data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
