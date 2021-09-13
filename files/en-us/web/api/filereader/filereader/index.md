---
title: FileReader()
slug: Web/API/FileReader/FileReader
tags:
  - API
  - Constructor
  - FileReader
  - Reference
browser-compat: api.FileReader.FileReader
---
The **`FileReader()`** constructor creates a new FileReader.

For details about how to use `FileReader`, see [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications).

## Syntax

```js
const reader = new FileReader();
```

### Parameters

None.

## Example

The following code snippet shows creation of a [`FileReader`](/en-US/docs/Web/API/FileReader) object using the `FileReader()` constructor and subsequent usage of the object:

```js
function printFile(file) {
  const reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
