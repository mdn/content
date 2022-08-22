---
title: File
slug: Web/API/File
page-type: web-api-interface
tags:
  - API
  - File API
  - Interface
  - Reference
  - Web
browser-compat: api.File
---
{{APIRef("File API")}}

The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.

`File` objects are generally retrieved from a {{DOMxRef("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, or from a drag and drop operation's {{DOMxRef("DataTransfer")}} object.

A `File` object is a specific kind of {{DOMxRef("Blob")}}, and can be used in any context that a Blob can. In particular, {{DOMxRef("FileReader")}}, {{DOMxRef("URL.createObjectURL()")}}, {{DOMxRef("createImageBitmap()")}}, and {{DOMxRef("XMLHttpRequest", "", "send()")}} accept both `Blob`s and `File`s.

See [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications) for more information and examples.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("File.File", "File()")}}
  - : Returns a newly constructed `File`.

## Instance properties

- {{DOMxRef("File.prototype.lastModified")}} {{ReadOnlyInline}}
  - : Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).
- {{DOMxRef("File.prototype.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns the last modified {{JSxRef("Date")}} of the file referenced by the `File` object.
- {{DOMxRef("File.prototype.name")}} {{ReadOnlyInline}}
  - : Returns the name of the file referenced by the `File` object.
- {{DOMxRef("File.prototype.webkitRelativePath")}} {{ReadOnlyInline}}
  - : Returns the path the URL of the {{DOMxRef("File")}} is relative to.

`File` implements {{DOMxRef("Blob")}}, so it also has the following properties available to it:

- {{DOMxRef("File.prototype.size")}} {{ReadOnlyInline}}
  - : Returns the size of the file in bytes.
- {{DOMxRef("File.prototype.type")}} {{ReadOnlyInline}}
  - : Returns the [MIME](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) type of the file.

## Instance methods

_The `File` interface doesn't define any methods, but inherits methods from the {{DOMxRef("Blob")}} interface:_

- {{DOMxRef("Blob.prototype.slice()", "Blob.prototype.slice([start[, end[, contentType]]])")}}
  - : Returns a new `Blob` object containing the data in the specified range of bytes of the source `Blob`.
- {{DOMxRef("Blob.prototype.stream()")}}
  - : Transforms the `File` into a {{DOMxRef("ReadableStream")}} that can be used to read the `File` contents.
- {{DOMxRef("Blob.prototype.text()")}}
  - : Transforms the `File` into a stream and reads it to completion. It returns a promise that resolves with a string (text).
- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : Transforms the `File` into a stream and reads it to completion. It returns a promise that resolves with an {{jsxref("ArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
- [Using the DOM File API in chrome code](/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (for privileged code running in Gecko, such as Firefox add-ons)
