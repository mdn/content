---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
page-type: web-api-instance-method
tags:
  - API
  - File API
  - Files
  - Method
  - Reference
browser-compat: api.FileReader.readAsText
---
{{APIRef("File API")}}

The **`readAsText()`** method is used to read the contents of the specified {{domxref("Blob")}} or {{domxref("File")}}.
When the read operation is complete, the {{domxref("FileReader.readyState","readyState")}} is changed to `DONE`,
the {{domxref("FileReader/loadend_event", "loadend")}} event is triggered, and the {{domxref("FileReader.result","result")}} property contains the contents of the file as a text string.

> **Note:** The {{domxref("Blob.text()")}} method is a newer promise-based API to read a file as text.

## Syntax

```js
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
<input type="file" onchange="previewFile()"><br>
<p class="content"></p>
```

### JavaScript

```js
function previewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // this will then display a text file
    content.innerText = reader.result;
  }, false);

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
