---
title: "FileReaderSync: FileReaderSync() constructor"
short-title: FileReaderSync()
slug: Web/API/FileReaderSync/FileReaderSync
page-type: web-api-constructor
browser-compat: api.FileReaderSync.FileReaderSync
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

The **`FileReaderSync()`** constructor creates a new {{domxref("FileReaderSync")}}.

## Syntax

```js-nolint
new FileReaderSync()
```

### Parameters

None.

## Examples

The following code snippet shows creation of a [`FileReaderSync`](/en-US/docs/Web/API/FileReaderSync) object using the `FileReaderSync()` constructor and subsequent usage of the object:

```js
function readFile(blob) {
  const reader = new FileReaderSync();
  postMessage(reader.readAsDataURL(blob));
}
```

> [!NOTE]
> This snippet must be used inside a {{domxref("Worker")}}, as synchronous interfaces can't be used on the main thread.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
