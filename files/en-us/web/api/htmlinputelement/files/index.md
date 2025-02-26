---
title: "HTMLInputElement: files property"
short-title: files
slug: Web/API/HTMLInputElement/files
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.files
---

{{APIRef("File and Directory Entries API")}}

The **`HTMLInputElement.files`** property allows you to access the {{domxref("FileList")}} selected with the [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file) element.

## Value

A {{domxref("FileList")}} object listing the selected files, if any, or `null` if the **`HTMLInputElement`** is not of `type="file"`.

## Examples

The example below shows how you can access the **`HTMLInputElement.files`** property and log the name, date modified, size, and type of each file selected by the user.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

Note that **`HTMLInputElement.files`** still returns an instance of {{domxref("FileList")}} even if no files are
selected.
Therefore it's safe to iterate through it with {{JSxref("Statements/for...of", "for...of")}} without checking if any files are selected.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true even if empty

for (const file of fileInput.files) {
  console.log(file.name); // prints file name
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // prints legible date
  console.log(
    file.size < 1000 ? file.size : Math.round(file.size / 1000) + "KB",
  );
  console.log(file.type); // prints MIME type
}
```

## Specifications

{{ Specifications }}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataTransfer.files")}}
