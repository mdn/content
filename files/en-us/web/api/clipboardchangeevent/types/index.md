---
title: "ClipboardChangeEvent: types property"
short-title: types
slug: Web/API/ClipboardChangeEvent/types
page-type: web-api-instance-property
browser-compat: api.ClipboardChangeEvent.types
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

The **`types`** read-only property of the {{domxref("ClipboardChangeEvent")}} interface returns an array of strings representing the mandatory {{glossary("MIME type","MIME types")}} available on the system clipboard when the `ClipboardChangeEvent` event was fired. Optional types and custom formats are not included to limit {{glossary("fingerprinting")}}.

## Value

An array of strings.

## Examples

In this example, when the contents of the clipboard change, the event listener logs to the console every string representing a [mime type](/en-US/docs/Web/HTTP/Guides/MIME_types) that is available in the array returned by the `ClipboardChangeEvent.types` property.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  event.types.forEach((value) => {
    console.log(value);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ClipboardChangeEvent.changeId")}}
- {{domxref("ClipboardChangeEvent")}}
- {{domxref("ClipboardEvent")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
