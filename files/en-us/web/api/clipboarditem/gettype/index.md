---
title: "ClipboardItem: getType() method"
short-title: getType()
slug: Web/API/ClipboardItem/getType
page-type: web-api-instance-method
browser-compat: api.ClipboardItem.getType
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`getType()`** method of the {{domxref("ClipboardItem")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}} of the requested {{Glossary("MIME type")}} or an error if the MIME type is not found.

## Syntax

```js-nolint
getType(type)
```

### Parameters

- `type`
  - : A valid {{Glossary("MIME type")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}} object.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : The `type` does not match a known {{Glossary("MIME type")}}.
- {{jsxref("TypeError")}}
  - : No parameter is specified or the `type` is not that of the {{domxref("ClipboardItem")}}.

## Examples

In the following example, we're returning all items on the clipboard via the {{domxref("clipboard.read()")}} method. For each one, we pass the {{domxref("ClipboardItem.types")}} property to the `getType()` method, which returns the corresponding `Blob` object.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
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
