---
title: "Clipboard: write() method"
short-title: write()
slug: Web/API/Clipboard/write
page-type: web-api-instance-method
browser-compat: api.Clipboard.write
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`write()`** method of the {{domxref("Clipboard")}} interface writes arbitrary data to the clipboard, such as images, fulfilling the returned {{jsxref("Promise")}} on completion.
This can be used to implement cut and copy functionality.

The method can in theory write arbitrary data (unlike {{domxref("Clipboard.writeText", "writeText()")}}, which can only write text).
Browsers commonly support writing text, HTML, and PNG image data — see [browser compatibility](#browser_compatibility) for more information.

## Syntax

```js-nolint
write(data)
```

### Parameters

- `data`
  - : An array of {{domxref("ClipboardItem")}} objects containing data to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved when the data has been written to the clipboard.
The promise is rejected if the clipboard is unable to write the data.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if writing to the clipboard is not allowed.

## Security considerations

Writing to the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

This example function replaces the current contents of the clipboard with a specified string.

```js
function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
    },
    () => {
      /* failure */
    },
  );
}
```

The code begins by creating a new a {{domxref("Blob")}} object.
This object is required to construct a {{domxref("ClipboardItem")}} object which is sent to the clipboard. The {{domxref("Blob")}} constructor takes in the content we want to copy and its type.
This {{domxref("Blob")}} object can be derived from many sources; for example, a [canvas](/en-US/docs/Web/API/HTMLCanvasElement).

Next, we create a new {{domxref("ClipboardItem")}} object into which the blob will be placed for sending to the clipboard.
The key of the object passed to the {{domxref("ClipboardItem")}} constructor indicates the content type, the value indicates the content.
Then `write()` is called, specifying both a fulfillment function and an error function.

### Example of copying canvas contents to the clipboard

```js
function copyCanvasContentsToClipboard(canvas, onDone, onError) {
  canvas.toBlob((blob) => {
    let data = [new ClipboardItem({ [blob.type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        onDone();
      },
      (err) => {
        onError(err);
      },
    );
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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
