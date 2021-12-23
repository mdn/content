---
title: FileReader.onload
slug: Web/API/FileReader/onload
tags:
  - Event Handler
  - File
  - FileReader
  - Property
  - Reference
browser-compat: api.FileReader.onload
---
{{APIRef}}

The **`FileReader.onload`** property contains an event handler executed when the {{domxref('FileReader.load_event')}} event is fired, when content read with [readAsArrayBuffer](/en-US/docs/Web/API/FileReader/readAsArrayBuffer), [readAsBinaryString](/en-US/docs/Web/API/FileReader/readAsBinaryString), [readAsDataURL](/en-US/docs/Web/API/FileReader/readAsDataURL) or [readAsText](/en-US/docs/Web/API/FileReader/readAsText) is available.

## Example

```js
// Callback from a <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    // The file's text will be printed here
    console.log(e.target.result)
  };

  reader.readAsText(file);
}
```

## Browser compatibility

{{Compat}}
