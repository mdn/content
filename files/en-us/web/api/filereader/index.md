---
title: FileReader
slug: Web/API/FileReader
page-type: web-api-interface
tags:
  - API
  - File API
  - Files
  - Interface
  - Reference
browser-compat: api.FileReader
---
{{APIRef("File API")}}

The **`FileReader`** object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read.

File objects may be obtained from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, or from a drag and drop operation's {{domxref("DataTransfer")}} object.

`FileReader` can only access the contents of files that the user has explicitly selected, either using an HTML `<input type="file">` element or by drag and drop. It cannot be used to read a file by pathname from the user's file system. To read files on the client's file system by pathname, use the [File System Access API](/en-US/docs/Web/API/File_System_Access_API). To read server-side files, use standard Ajax solutions, with CORS permission if reading cross-domain.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructor

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Returns a newly constructed `FileReader`.

See [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications) for details and examples.

## Properties

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMException")}} representing the error that occurred while reading the file.
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}

  - : A number indicating the state of the `FileReader`. This is one of the following:

    | Name      | Value | Description                                 |
    | --------- | ----- | ------------------------------------------- |
    | `EMPTY`   | `0`   | No data has been loaded yet.                |
    | `LOADING` | `1`   | Data is currently being loaded.             |
    | `DONE`    | `2`   | The entire read request has been completed. |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : The file's contents. This property is only valid after the read operation is complete, and the format of the data depends on which of the methods was used to initiate the read operation.

## Methods

- {{domxref("FileReader.abort()")}}
  - : Aborts the read operation. Upon return, the `readyState` will be `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Starts reading the contents of the specified {{domxref("Blob")}}, once finished, the `result` attribute contains an {{jsxref("ArrayBuffer")}} representing the file's data.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Starts reading the contents of the specified {{domxref("Blob")}}, once finished, the `result` attribute contains the raw binary data from the file as a string.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Starts reading the contents of the specified {{domxref("Blob")}}, once finished, the `result` attribute contains a `data:` URL representing the file's data.
- {{domxref("FileReader.readAsText()")}}
  - : Starts reading the contents of the specified {{domxref("Blob")}}, once finished, the `result` attribute contains the contents of the file as a text string. An optional encoding name can be specified.

## Events

Listen to these events using {{domxref("EventTarget/addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface. Remove the event listeners with {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}, once `FileReader` is no longer used, to avoid memory leaks.

- {{domxref("FileReader/abort_event", "abort")}}
  - : Fired when a read has been aborted, for example because the program called {{domxref("FileReader.abort()")}}.
- {{domxref("FileReader/error_event", "error")}}
  - : Fired when the read failed due to an error.
- {{domxref("FileReader/load_event", "load")}}
  - : Fired when a read has completed successfully.
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : Fired when a read has completed, successfully or not.
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : Fired when a read has started.
- {{domxref("FileReader/progress_event", "progress")}}
  - : Fired periodically as data is read.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
