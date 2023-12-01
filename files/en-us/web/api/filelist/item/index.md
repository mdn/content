---
title: "FileList: item() method"
short-title: item()
slug: Web/API/FileList/item
page-type: web-api-instance-method
browser-compat: api.FileList.item
---

{{APIRef("File API")}}

The **`item()`** method of the {{domxref("FileList")}} API returns a {{domxref("File")}} object representing the file at the specified index in the file list.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : The zero-based index of the file to retrieve from the list.

### Return value

A [`File`](/en-US/docs/Web/API/File) object representing the requested file.

## Examples

### Printing the name of a file

In this example, we use `item()` to select the first item in the `FileList`.

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  if (fileList.length > 0) {
    const file = fileList.item(0);
    output.textContent = `You selected: ${file.name}`;
  }
});
```

#### Result

{{EmbedLiveSample("Printing the name of a file")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
