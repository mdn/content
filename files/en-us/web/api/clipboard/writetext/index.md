---
title: "Clipboard: writeText() method"
short-title: writeText()
slug: Web/API/Clipboard/writeText
page-type: web-api-instance-method
browser-compat: api.Clipboard.writeText
---

{{APIRef("Clipboard API")}}

The {{domxref("Clipboard")}} interface's **`writeText()`**
property writes the specified text string to the system clipboard. Text may be read back
using either {{domxref("Clipboard.read", "read()")}} or {{domxref("Clipboard.readText",
  "readText()")}}.

## Syntax

```js-nolint
writeText(newClipText)
```

### Parameters

- `newClipText`
  - : The string to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved once the clipboard's contents have been
updated. The promise is rejected if the caller does not have permission to write to the
clipboard.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

The `"clipboard-write"` permission of the [Permissions API](/en-US/docs/Web/API/Permissions_API) is granted automatically to pages when they are in the active tab.

## Examples

This example sets the clipboard's contents to the string "\<empty clipboard>".

```js
navigator.clipboard.writeText("<empty clipboard>").then(
  () => {
    /* clipboard successfully set */
  },
  () => {
    /* clipboard write failed */
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
