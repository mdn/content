---
title: HTMLInputElement.files
slug: Web/API/HTMLInputElement/files
page-type: web-api-instance-property
tags:
  - API
  - Files
  - HTML DOM
  - HTMLInputElement
  - Property
  - NeedsCompatTable
  - Reference
browser-compat: api.HTMLInputElement.files
---
{{APIRef("File and Directory Entries API")}}

The **`HTMLInputElement.files`** is a property that allows you to access the {{domxref("FileList")}} selected with the [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file) element.

## Value

An instance of {{domxref("FileList")}} or `null` if the **`HTMLInputElement`** is not of `type="file"`.

## Examples

The example below shows how you can access the **`HTMLInputElement.files`** property and log the files' name selected by the user.

### HTML

```html
<input id="files" type="file" multiple>
```

### JavaScript

Note that **`HTMLInputElement.files`** still returns an instance of {{domxref("FileList")}} even if no files are
selected.
Therefore it's safe to iterate through it with {{JSxref("Statements/for...of", "for...of")}} without checking if any files are selected.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true

for (const file of fileInput.files) {
  console.log(file.name); // prints file name
}
```

## Specifications

{{ Specifications }}

## Browser compatibility

{{ Compat }}
