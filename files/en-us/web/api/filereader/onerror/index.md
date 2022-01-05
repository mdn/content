---
title: FileReader.onerror
slug: Web/API/FileReader/onerror
browser-compat: api.FileReader.onerror
---
The [FileReader](/en-US/docs/Web/API/FileReader) onerror handler receives an Event object, not an Error object, as a parameter, but an error can be accessed from the FileReader object, as [`instanceOfFileReader.error`](/en-US/docs/Web/API/FileReader/error)

```js
// Callback from a <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onerror = function(event) {
    alert("Failed to read file!\n\n" + reader.error);
  };

  reader.readAsText(file);
}
```

## Browser compatibility

{{Compat}}
