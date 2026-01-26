---
title: "ClipboardChangeEvent: changeId property"
short-title: changeId
slug: Web/API/ClipboardChangeEvent/changeId
page-type: web-api-instance-property
browser-compat: api.ClipboardChangeEvent.changeId
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

The **`changeId`** read-only property of the {{domxref("ClipboardChangeEvent")}} interface returns an integer representing a unique identifier for this specific clipboard change operation.

The identifier is consistent across all windows and tabs with the same storage key for the same clipboard change, enabling applications to deduplicate events when multiple windows receive the same clipboard change notification.

The changeId is a

## Value

An integer. A cryptographically derived 128-bit integer that, after something is written to the clipboard, is guaranteed to yield a different value than it did before the write operation.

## Examples

In this example, when the contents of the clipboard change, the event listener uses the `ClipboardChangeEvent.changeId` property to logs to the console the unique ID representing the clipboard change operation that fired the event.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  console.log(event.changeId);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ClipboardChangeEvent.types")}}
- {{domxref("ClipboardChangeEvent")}}
- {{domxref("ClipboardEvent")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
