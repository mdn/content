---
title: File.webkitRelativePath
slug: Web/API/File/webkitRelativePath
tags:
  - File
  - File API
  - File System API
  - File and Directory Entries API
  - Non-standard
  - Property
  - Read-only
  - Reference
  - Web
  - webkitRelativePath
browser-compat: api.File.webkitRelativePath
---
{{APIRef("File API")}}{{non-standard_header}}

The **`File.webkitRelativePath`** is a read-only property that
contains a {{domxref("USVString")}} which specifies the file's path relative to the
directory selected by the user in an {{HTMLElement("input")}} element with its
{{htmlattrxref("webkitdirectory", "input")}} attribute set.

## Syntax

```js
relativePath = File.webkitRelativePath
```

### Value

A {{domxref("USVString")}} containing the path of the file relative to the ancestor
directory the user selected.

## Example

In this example, a directory picker is presented which lets the user choose one or more
directories. When the {{event("change")}} event occurs, a list of all files contained
within the selected directory hierarchies is generated and displayed.

### HTML content

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript content

```js
document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
```

### Result

{{ EmbedLiveSample('Example') }}

## Specifications

{{Specifications}}

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
