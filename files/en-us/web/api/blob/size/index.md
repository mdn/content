---
title: Blob.size
slug: Web/API/Blob/size
tags:
  - API
  - Blob
  - Bytes
  - File API
  - Files
  - Property
  - Reference
  - length
  - size
browser-compat: api.Blob.size
---
{{APIRef("File API")}}

The {{domxref("Blob")}} interface's **`size`** property returns
the size of the {{domxref("Blob")}} or {{domxref("File")}} in bytes.

## Syntax

```js
var sizeInBytes = blob.size
```

### Value

The number of bytes of data contained within the `Blob` (or
`Blob`-based object, such as a {{domxref("File")}}).

## Example

This example uses an {{HTMLElement("input")}} element of type `file` to ask
the user for a group of files, then iterates over those files outputting their names and
lengths in bytes.

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  console.log(files[i].name + " has a size of " + files[i].size + " Bytes");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
- [Using files
  from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
