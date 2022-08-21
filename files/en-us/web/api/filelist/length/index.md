---
title: FileList.length
slug: Web/API/FileList/length
page-type: web-api-instance-property
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.FileList.length
---
{{APIRef("File API")}}

The read-only {{domxref("FileList")}} **`length`** property returns the number of files in the `FileList`.

## Value

A number indicating the number of files in the list.

## Examples

### Printing the number of files selected

In this example, we use `length` to find the number of items in the `FileList`.

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
  output.textContent = `You've selected: ${fileList.length} file(s)`;
});
```

#### Result

{{EmbedLiveSample("Printing the number of files selected")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
