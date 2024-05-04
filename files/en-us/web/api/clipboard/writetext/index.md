---
title: "Clipboard: writeText() method"
short-title: writeText()
slug: Web/API/Clipboard/writeText
page-type: web-api-instance-method
browser-compat: api.Clipboard.writeText
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`writeText()`** method of the {{domxref("Clipboard")}} interface writes the specified text to the system clipboard, returning a {{jsxref("Promise")}} that is resolved once the system clipboard has been updated.

## Syntax

```js-nolint
writeText(newClipText)
```

### Parameters

- `newClipText`
  - : The string to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} that is resolved once the clipboard's contents have been updated.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if writing to the clipboard is not allowed.

## Security considerations

Writing to the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

This example sets the clipboard's contents to the string "\<empty clipboard>".

```js
button.addEventListener("click", () => writeClipboardText("<empty clipboard>"));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
