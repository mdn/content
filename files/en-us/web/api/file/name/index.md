---
title: "File: name property"
short-title: name
slug: Web/API/File/name
page-type: web-api-instance-property
browser-compat: api.File.name
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`name`** read-only property of the {{domxref("File")}} interface returns the name of the file represented by a {{domxref("File")}} object. For security
reasons, the path is excluded from this property.

## Value

A string, containing the name of the file without path, such as "My Resume.rtf".

## Examples

### HTML

```html
<input type="file" id="file-picker" multiple />
<div>
  <p>List of selected files:</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    const li = document.createElement("li");
    li.textContent = file.name;
    output.appendChild(li);
  }
});
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
