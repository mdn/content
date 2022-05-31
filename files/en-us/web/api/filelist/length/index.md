---
title: FileList.length
slug: Web/API/FileList/length
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.FileList.length
---
{{APIRef("File API")}}

The {{domxref("FileReader")}} **`error`** property returns the
error that occurred while reading the file.

## Value

A {{domxref("DOMError")}} containing the relevant error. In Chrome 48+/Firefox 58+ this
property returns a {{domxref("DOMException")}} because `DOMError` has been
removed from the DOM standard.

## Examples

### Printing the number of files selected

In this example we use `length` to find the number of items in the `FileList`.

#### HTML

```html
<input type="file" multiple>
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector('.output');

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  output.textContent = `You selected: ${fileList.length} file(s)`;
});
```

#### Result

{{EmbedLiveSample("Printing the name of a file")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
