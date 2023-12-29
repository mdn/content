---
title: "Clipboard: readText() method"
short-title: readText()
slug: Web/API/Clipboard/readText
page-type: web-api-instance-method
browser-compat: api.Clipboard.readText
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`readText()`** method of the {{domxref("Clipboard")}} interface returns a {{jsxref("Promise")}} which fulfils with a copy of the textual contents of the system clipboard.

> **Note:** To read non-text contents from the clipboard, use the {{domxref("Clipboard.read", "read()")}} method instead.
> You can write text to the clipboard using {{domxref("Clipboard.writeText", "writeText()")}}.

## Syntax

```js-nolint
readText()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a string containing the textual contents of the clipboard.

Returns an empty string if the clipboard is empty, does not contain text, or does not include a textual representation among the objects representing the clipboard's contents.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the access to read the clipboard is not allowed.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the clipboard indicates that it contains data that can be represented as a text but is unable to provide a textual representation.

## Security considerations

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

## Examples

This example retrieves the textual contents of the clipboard and inserts the returned text into an element's contents.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
