---
title: "File: webkitRelativePath property"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
page-type: web-api-instance-property
browser-compat: api.File.webkitRelativePath
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

The **`webkitRelativePath`** read-only property of the {{domxref("File")}} interface
contains a string which specifies the file's path relative to the
directory selected by the user in an {{HTMLElement("input")}} element with its
[`webkitdirectory`](/en-US/docs/Web/HTML/Element/input#webkitdirectory) attribute set.

## Value

A string containing the path of the file relative to the ancestor
directory the user selected.

## Example

In this example, a directory picker is presented which lets the user choose one or more
directories. When the {{domxref("HTMLElement/change_event", "change")}} event occurs, a list of all files contained
within the selected directory hierarchies is generated and displayed.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;

  for (const file of files) {
    output.textContent += `${file.webkitRelativePath}\n`;
  }
});
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
