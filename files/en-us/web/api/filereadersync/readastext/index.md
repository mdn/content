---
title: FileReaderSync.readAsText()
slug: Web/API/FileReaderSync/readAsText
browser-compat: api.FileReaderSync.readAsText
---
{{APIRef("File API")}}

The `readAsText()` method of the {{DOMxRef("FileReaderSync")}} interface allows to read {{DOMxRef("File")}} or {{DOMxRef("Blob")}} objects in a synchronous way into an {{DOMxRef("DOMString")}}. This interface is [only available](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [workers](/en-US/docs/Web/API/Worker) as it enables synchronous I/O that could potentially block.

## Syntax

    readAsText(File);
    readAsText(Blob);
    readAsText(File, encoding);
    readAsText(Blob, encoding);

### Parameters

- `blob`
  - : The DOM {{DOMxRef("File")}} or {{DOMxRef("Blob")}} to read.
- `encoding`
  - : The optional parameter specifies encoding to be used (e.g., iso-8859-1 or UTF-8). If not present, the method will apply a detection algorithm for it.

### Return value

An {{DOMxRef("DOMString")}} representing the input data.

## Exceptions

The following exceptions can be raised by this method:

- `NotFoundError`
  - : is raised when the resource represented by the DOM {{DOMxRef("File")}} or {{DOMxRef("Blob")}} cannot be found, e.g. because it has been erased.
- `SecurityError`

  - : is raised when one of the following problematic situation is detected:

    - the resource has been modified by a third party;
    - too many read are performed simultaneously;
    - the file pointed by the resource is unsafe for a use from the Web (like it is a system file).

- `NotReadableError`
  - : is raised when the resource cannot be read due to a permission problem, like a concurrent lock.
- `EncodingError`
  - : is raised when the resource is a data URL and exceed the limit length defined by each browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File API](/en-US/docs/API/File_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("BlobBuilder")}}, {{ domxref("Blob") }}
