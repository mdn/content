---
title: File API
slug: Web/API/File_API
page-type: web-api-overview
spec-urls: https://w3c.github.io/FileAPI/
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Concepts and Usage

The File API enables web applications to access files and their contents.

Web applications can access files when the user makes them available, either using a [file `<input>` element](/en-US/docs/Web/HTML/Element/input/file) or [via drag and drop](/en-US/docs/Web/API/DataTransfer/files).

Sets of files made available in this way are represented as {{domxref("FileList")}} objects, which enable a web application to retrieve individual {{domxref("File")}} objects. In turn {{domxref("File")}} objects provide access to metadata such as the file's name, size, type, and last modified date.

{{domxref("File")}} objects can be passed to {{domxref("FileReader")}} objects to access the contents of the file. The {{domxref("FileReader")}} interface is asynchronous, but a synchronous version, available only in [web workers](/en-US/docs/Web/API/Web_Workers_API), is provided by the {{domxref("FileReaderSync")}} interface.

## Relationship to other file-related APIs

There are two other major APIs that also deal with files: [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) and [File System API](/en-US/docs/Web/API/File_System_API).

The File API is the most basic one. It supports reading and processing file data explicitly provided by the user in the form of a form element input or drag-and-drop operation. It also enables binary data handling via blobs.

The File and Directory Entries API, like the File API, also deals with files provided by the user via form inputs or drag-and-drop operations. However, instead of a single file, the input element now allows the selection of a directory or multiple files. The API then provides a way to process the directory or files. It is mostly Chrome's own invention—you will find that its extensions to other interfaces are all prefixed with `webkit`. The [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API#history) has a more complete story about its implementation and standardization. It was originally intended to support a full virtual file system, but now only supports read operations on user-provided data.

The File System API provides a virtual file system for web applications, so that they can persistently store data in a virtual system which is private to the document's origin (known as an [Origin private file system (OPFS)](/en-US/docs/Web/API/File_System_API/Origin_private_file_system)). The File System Access API further extends the File System API to allow websites to read and write user files, subject to user consent. Unlike the File API and the File and Directory Entries API, the File System API is purely JavaScript and does not deal with form inputs.

## Interfaces

- {{domxref("Blob")}}
  - : Represents a "Binary Large Object", meaning a file-like object of immutable, raw data; a {{domxref("Blob")}} can be read as text or binary data, or converted into a {{domxref("ReadableStream")}} so its methods can be used for processing the data.
- {{domxref("File")}}
  - : Provides information about a file and allows JavaScript in a web page to access its content.
- {{domxref("FileList")}}
  - : Returned by the `files` property of the HTML {{HTMLElement("input")}} element; this lets you access the list of files selected with the `<input type="file">` element. It's also used for a list of files dropped into web content when using the drag and drop API; see the {{domxref("DataTransfer")}} object for details on this usage.
- {{domxref("FileReader")}}
  - : Enables web applications to asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read.
- {{domxref("FileReaderSync")}}
  - : Enables web applications to synchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read.

### Extensions to other interfaces

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : Creates a URL that can be used to fetch a {{domxref("File")}} or {{domxref("Blob")}} object.
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
  - : Releases an existing object URL which was previously created by calling {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}.

## Examples

### Reading a file

In this example, we provide a [file `<input>` element](/en-US/docs/Web/HTML/Element/input/file), and when the user selects a file, we read the contents of the first file selected as text, and display the result in a {{HTMLElement("div")}}.

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerText = await file.text();
  }
});
```

### Result

{{EmbedLiveSample("Reading a file", "", "300")}}

## Specifications

{{Specifications}}

## See also

- [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file): the file input element
- {{domxref("Blob.text()")}}
- The {{domxref("DataTransfer")}} interface
