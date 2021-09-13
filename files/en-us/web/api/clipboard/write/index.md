---
title: Clipboard.write()
slug: Web/API/Clipboard/write
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Method
  - Pasteboard
  - Reference
  - Scrap
  - copy
  - paste
  - write
browser-compat: api.Clipboard.write
---
{{APIRef("Clipboard API")}}

The {{domxref("Clipboard")}} method
**`write()`** writes arbitrary data, such as images, to the
clipboard. This can be used to implement cut and copy functionality.

The `"clipboard-write"` permission of the [Permissions API](/en-US/docs/Web/API/Permissions_API), is granted
automatically to pages when they are in the active tab.

> **Note:** Browser support for the asynchronous clipboard APIs is still
> in the process of being implemented. Be sure to check the {{anch("Browser
    compatibility", "compatibility table")}} as well as
> {{SectionOnPage("/en-US/docs/Web/API/Clipboard", "Clipboard availability")}} for more
> information.

## Syntax

```js
var promise = navigator.clipboard.write(data)
```

### Parameters

- `data`
  - : An array of {{domxref("ClipboardItem")}} objects containing data to be written to
    the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved when the data has been written to the
clipboard. The promise is rejected if the clipboard is unable to complete the clipboard
access.

## Example

This example function replaces the current contents of the clipboard with a specified
string.

```js
function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
        },
        function () {
        /* failure */
        }
    );
}
```

The code begins by creating a new a {{domxref("Blob")}} object. This object is
required to construct a {{domxref("ClipboardItem")}} object which is sent to the
clipboard. The {{domxref("Blob")}} constructor takes in the content we want to copy
and its type. This {{domxref("Blob")}} object can be derived from many sources e.g. a {{domxref("Canvas")}}.

Next, we create a new {{domxref("ClipboardItem")}} object into which the blob will be placed for sending to the clipboard.
The key of the object passed to the {{domxref("ClipboardItem")}} constructor indicates the content type, the value indicates the content. Then `write()` is called, specifying both a fulfillment function
and an error function.

### Example of copying canvas contents to the clipboard

```js
function copyCanvasContentsToClipboard(canvas, onDone, onError) {
  canvas.toBlob(function (blob) {
    let data = [new ClipboardItem({ [blob.type]: blob })];

    navigator.clipboard.write(data).then(function () {
      onDone();
    }, function (err) {
      onError(err);
    })
  });
}
```

> **Note:** You can only pass in one clipboard item at a time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on
  Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async
  Clipboard article](https://web.dev/image-support-for-async-clipboard/)
