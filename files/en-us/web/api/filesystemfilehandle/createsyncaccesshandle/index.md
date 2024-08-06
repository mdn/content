---
title: "FileSystemFileHandle: createSyncAccessHandle() method"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
page-type: web-api-instance-method
browser-compat: api.FileSystemFileHandle.createSyncAccessHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

The **`createSyncAccessHandle()`** method of the
{{domxref("FileSystemFileHandle")}} interface returns a {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object
that can be used to synchronously read from and write to a file. The synchronous nature of this method brings performance advantages,
but it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) for files within the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system).

Creating a {{domxref('FileSystemSyncAccessHandle')}} takes an exclusive lock on the file associated with the file handle. This prevents the creation of further {{domxref('FileSystemSyncAccessHandle')}}s or {{domxref('FileSystemWritableFileStream')}}s for the file until the existing access handle is closed.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : A string specifying the locking mode for the access handle. The default value is `"readwrite"`.
        Possible values are:
        - `"read-only"`
          - : Multiple `FileSystemSyncAccessHandle`s can be opened simultaneously on a file (for example when using the same app in multiple tabs), provided they are all opened in `"read-only"` mode. Once opened, read-like methods can be called on the handles — {{domxref("FileSystemSyncAccessHandle.read", "read()")}}, {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.close", "close()")}}.
        - `"readwrite"`
          - : Only one `FileSystemSyncAccessHandle` can be opened simultaneously. Attempting to open subsequent handles before the first handle is closed results in a `NoModificationAllowedError` exception being thrown. Once opened, any available method can be called on the handle.
        - `"readwrite-unsafe"`
          - : Multiple `FileSystemSyncAccessHandle`s can be opened simultaneously on a file, provided they are all opened in `"readwrite-unsafe"` mode. Once opened, any available method can be called on the handles.

### Return value

A {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `granted` in `readwrite` mode.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('FileSystemSyncAccessHandle')}} object does not represent a file in the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system).
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if current entry is not found.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to acquire a lock on the file associated with the file handle. This could be because `mode` is set to `readwrite` and an attempt is made to open multiple handles simultaneously.

## Examples

### Basic usage

The following asynchronous event handler function is contained inside a Web Worker. The snippet inside it creates a synchronous file access handle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // …

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
};
```

### Complete example with `mode` option

Our [createSyncAccessHandle() mode test](https://createsyncaccesshandle-mode-test.glitch.me/) example provides an {{htmlelement("input")}} field to enter text into, and two buttons — one to write entered text to the end of a file in the origin private file system, and one to empty the file when it becomes too full.

Try exploring the demo above, with the browser developer console open so you can see what is happening. If you try opening the demo in multiple browsers (get some friends to help!) you will find that multiple handles can be opened at once to write to the file at the same time. This is because `mode: "readwrite-unsafe"` is set on the `createSyncAccessHandle()` calls.

Below we'll explore the code.

#### HTML

The two {{htmlelement("button")}} elements and text {{htmlelement("input")}} field look like this:

```html
<ol>
  <li>
    <label for="filetext">Enter text to write to the file:</label>
    <input type="text" id="filetext" name="filetext" />
  </li>
  <li>
    Write your text to the file: <button class="write">Write text</button>
  </li>
  <li>
    Empty the file if it gets too full:
    <button class="empty">Empty file</button>
  </li>
</ol>
```

#### Main JavaScript

The main thread JavaScript inside the HTML file is shown below. We grab references to the write text button, empty file button, and text input field, then we create a new web worker using the {{domxref("Worker.Worker", "Worker()")}} constructor. We then define two functions and set them as event handlers on the buttons:

- `writeToOPFS()` is run when the write text button is clicked. This function posts the entered value of the text field to the worker using the {{domxref("Worker.postMessage()")}} method, then empties the text field, ready for the next addition.
- `emptyOPFS()` is run when the empty file button is clicked. This posts a very specific string to the worker that we will use to identify when the file is to be emptied rather then written to.

```js
const writeBtn = document.querySelector(".write");
const emptyBtn = document.querySelector(".empty");
const fileText = document.querySelector("#filetext");

const opfsWorker = new Worker("worker.js");

function writeToOPFS() {
  opfsWorker.postMessage(fileText.value);
  console.log("Text posted to worker");
  fileText.value = "";
}

function emptyOPFS() {
  opfsWorker.postMessage("!!empty!!");
}

writeBtn.addEventListener("click", writeToOPFS);
emptyBtn.addEventListener("click", emptyOPFS);
```

#### Worker JavaScript

The worker JavaScript is shown below.

First, we run a function called `initOPFS()` that gets a reference to the OPFS root using {{domxref("StorageManager.getDirectory()")}}, creates a file and returns its handle using {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}, and then returns an accessHandle using `createSyncAccessHandle()` with `mode: "readwrite-unsafe"` set to allow multiple handles to access the same file simultaneously.

```js
let accessHandle;

async function initOPFS() {
  const opfsRoot = await navigator.storage.getDirectory();
  const fileHandle = await opfsRoot.getFileHandle("file.txt", { create: true });
  accessHandle = await fileHandle.createSyncAccessHandle({
    mode: "readwrite-unsafe",
  });
}

initOPFS();
```

Inside the worker's [message event](/en-US/docs/Web/API/Worker/message_event) handler function, we first get the size of the file using {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}. We then check to see whether the data sent in the message is the specific string sent by the `emptyOPFS()` method — `"!!empty!!"`. If so, we empty the file using {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}} with a vlaue of `0`, and update the file size contained in the `size` variable.

If the message data is something else, we:

- Create a new {{domxref("TextEncoder")}} and {{domxref("TextDecoder")}} to handle encoding and decoding the text content later on.
- Encode the message data and write the result to the end of the file using {{domxref("FileSystemSyncAccessHandle.write", "write()")}}, then update the file size contained in the `size` variable.
- Create a {{domxref("DataView")}} to contain the file contents, and read the content into it using {{domxref("FileSystemSyncAccessHandle.read", "read()")}}.
- Decode the `DataView` contents and log it to the console.

```js
onmessage = function (e) {
  console.log("Worker: Message received from main script");

  // Initialize this variable for the size of the file
  let size;
  // Get the current size of the file
  size = accessHandle.getSize();

  if (e.data === "!!empty!!") {
    // Truncate the file to 0 bytes
    accessHandle.truncate(0);

    // Get the current size of the file
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // Encode content to write to the file
    const content = textEncoder.encode(e.data);
    // Write the content at the end of the file
    accessHandle.write(content, { at: size });

    // Get the current size of the file
    size = accessHandle.getSize();

    // Prepare a data view of the length of the file
    const dataView = new DataView(new ArrayBuffer(size));

    // Read the entire file into the data view
    accessHandle.read(dataView);

    // Log the current file contents to the console
    console.log("File contents:" + textDecoder.decode(dataView));

    // Flush the changes
    accessHandle.flush();
  }

  // Log the size of the file to the console
  console.log("Size: " + size);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
