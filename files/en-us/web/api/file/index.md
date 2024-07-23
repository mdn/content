---
title: File
slug: Web/API/File
page-type: web-api-interface
browser-compat: api.File
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.

`File` objects are generally retrieved from a {{DOMxRef("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, or from a drag and drop operation's {{DOMxRef("DataTransfer")}} object.

A `File` object is a specific kind of {{DOMxRef("Blob")}}, and can be used in any context that a Blob can. In particular, {{DOMxRef("FileReader")}}, {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, {{DOMxRef("createImageBitmap()")}}, the [`body`](/en-US/docs/Web/API/RequestInit#body) option to {{domxref("fetch()")}}, and {{DOMxRef("XMLHttpRequest.send()")}} accept both `Blob`s and `File`s.

See [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications) for more information and examples.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("File.File", "File()")}}
  - : Returns a newly constructed `File`.

## Instance properties

_The `File` interface also inherits properties from the {{DOMxRef("Blob")}} interface._

- {{DOMxRef("File.lastModified")}} {{ReadOnlyInline}}
  - : Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns the last modified {{JSxRef("Date")}} of the file referenced by the `File` object.
- {{DOMxRef("File.name")}} {{ReadOnlyInline}}
  - : Returns the name of the file referenced by the `File` object.
- {{DOMxRef("File.webkitRelativePath")}} {{ReadOnlyInline}}
  - : Returns the path the URL of the `File` is relative to.

## Instance methods

_The `File` interface also inherits methods from the {{DOMxRef("Blob")}} interface._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
