---
title: "FileReader: readAsText() method"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
page-type: web-api-instance-method
browser-compat: api.FileReader.readAsText
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`readAsText()`** method of the {{domxref("FileReader")}} interface is used to read the contents of the specified {{domxref("Blob")}} or {{domxref("File")}}.
When the read operation is complete, the {{domxref("FileReader.readyState","readyState")}} property is changed to `DONE`,
the {{domxref("FileReader/loadend_event", "loadend")}} event is triggered, and the {{domxref("FileReader.result","result")}} property contains the contents of the file as a text string.

> [!NOTE]
> The {{domxref("Blob.text()")}} method is a newer promise-based API to read a file as text.

> [!NOTE]
> This method loads the entire file's content into memory and is not suitable for large files. Prefer {{domxref("FileReader.readAsArrayBuffer", "readAsArrayBuffer()")}} for large files.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.
- `encoding` {{optional_inline}}
  - : A string specifying the encoding to use for the returned data. By default, UTF-8 is assumed if this parameter is not specified.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<p class="content"></p>
```

### JavaScript

```js
function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsText(file);
  }
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
