---
title: File API
slug: Web/API/File_API
page-type: web-api-overview
spec-urls: https://w3c.github.io/FileAPI/
---

{{DefaultAPISidebar("File API")}}

## Concepts and Usage

The File API enables web applications to access files and their contents.

Web applications can access files when the user makes them available, either using a [file `<input>` element](/en-US/docs/Web/HTML/Element/input/file) or [via drag and drop](/en-US/docs/Web/API/DataTransfer/files).

Sets of files made available in this way are represented as {{domxref("FileList")}} objects, which enable a web application to retrieve individual {{domxref("File")}} objects. In turn {{domxref("File")}} objects provide access to metadata such as the file's name, size, type, and last modified date.

{{domxref("File")}} objects can be passed to {{domxref("FileReader")}} objects to access the contents of the file. The {{domxref("FileReader")}} interface is asynchronous, but a synchronous version, available only in [web workers](/en-US/docs/Web/API/Web_Workers_API), is provided by the {{domxref("FileReaderSync")}} interface.

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

- {{domxref("URL.createObjectURL()")}}
  - : Creates a URL that can be used to fetch a {{domxref("File")}} or {{domxref("Blob")}} object.
- {{domxref("URL.revokeObjectURL()")}}
  - : Releases an existing object URL which was previously created by calling {{domxref("URL.createObjectURL()")}}.

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
- [`text() method`](/en-US/docs/Web/API/Blob/text): .text()
- The {{domxref("DataTransfer")}} interface
