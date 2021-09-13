---
title: FileReader.abort()
slug: Web/API/FileReader/abort
tags:
  - API
  - File API
  - FileReader
  - Files
  - Method
  - Reference
  - abort
browser-compat: api.FileReader.abort
---
{{APIRef("File API")}}

The **`abort`** method aborts the read operation. Upon return,
the {{domxref("FileReader.readyState","readyState")}} will be `DONE`.

## Syntax

```js
instanceOfFileReader.abort();
```

### Exceptions

- `DOM_FILE_ABORT_ERR`
  - : Thrown when `abort` is called while no read operation is in progress
    (that is, the state isn't `LOADING`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
