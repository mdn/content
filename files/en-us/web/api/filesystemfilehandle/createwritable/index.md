---
title: "FileSystemFileHandle: createWritable() method"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
page-type: web-api-instance-method
browser-compat: api.FileSystemFileHandle.createWritable
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`createWritable()`** method of the {{domxref("FileSystemFileHandle")}} interface creates a {{domxref('FileSystemWritableFileStream')}} that can be used to write to a file.
The method returns a {{jsxref('Promise')}} which resolves to this created stream.

Any changes made through the stream won't be reflected in the file represented by the file handle until the stream has been closed.
This is typically implemented by writing data to a temporary file, and only replacing the file represented by file handle with the temporary file when the writable file stream is closed.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `keepExistingData` {{optional_inline}}
      - : A {{jsxref('Boolean')}}. Default `false`.
        When set to `true` if the file exists, the existing file is first copied to the temporary file.
        Otherwise the temporary file starts out empty.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : A string specifying the locking mode for the writable file stream. The default value is `"siloed"`.
        Possible values are:
        - `"exclusive"`
          - : Only one `FileSystemWritableFileStream` writer can be opened. Attempting to open subsequent writers before the first writer is closed results in a `NoModificationAllowedError` exception being thrown.
        - `"siloed"`
          - : Multiple `FileSystemWritableFileStream` writers can be opened at the same time, each with its own swap file, for example when using the same app in multiple tabs. The last writer opened has its data written, as the data gets flushed when each writer is closed.

### Return value

A {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemWritableFileStream')}} object.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `'granted'` in `readwrite` mode.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if current entry is not found.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to acquire a lock on the file associated with the file handle. This could be because `mode` is set to `exclusive` and an attempt is made to open multiple writers simultaneously.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if implementation-defined malware scans and safe-browsing checks fails.

## Examples

### Basic usage

The following asynchronous function writes the given contents to the file handle, and thus to disk.

```js
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();

  // Write the contents of the file to the stream.
  await writable.write(contents);

  // Close the file and write the contents to disk.
  await writable.close();
}
```

### Expanded usage with options

Our [`createWritable()` mode test](https://createwritable-mode-test.glitch.me/) example provides a {{htmlelement("button")}} to select a file to write to, a text {{htmlelement("input")}} field into which you can enter some text to write to the file, and a second `<button>` to write the text to the file.

In the demo above, try selecting a text file on your file system (or entering a new file name), entering some text into the input field, and writing the text to the file. Open the file on your file system to check whether the write was successful.

Also, try opening the page in two browser tabs simultaneously. Select a file to write to in the first tab, and then immediately try selecting the same file to write to in the second tab. You should get an error message because we set `mode: "exclusive"` in the `createWritable()` call.

Below we'll explore the code.

#### HTML

The two {{htmlelement("button")}} elements and text {{htmlelement("input")}} field look like this:

```html
<ol>
  <li>
    Select a file to write to: <button class="select">Select file</button>
  </li>
  <li>
    <label for="file-text">Enter text to write to the file:</label>
    <input type="text" id="file-text" name="file-text" disabled />
  </li>
  <li>
    Write your text to the file:
    <button class="write" disabled>Write text</button>
  </li>
</ol>
```

The text input field and the write text button are set to be disabled initially via the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute — they shouldn't be used until the user has selected a file to write to.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

We start by grabbing references to the select file button, the write text button, and the text input field. We also declare a global variable `writableStream`, which will store a reference to the writeable stream for writing the text to the file, once created. We initially set it to `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

Next, we create an async function called `selectFile()`, which we'll invoke when the select button is pressed. This uses the {{domxref("Window.showSaveFilePicker()")}} method to show the user a file picker dialog and create a file handle to the file they choose. On that handle, we invoke the `createWritable()` method to create a stream to write the text to the selected file. If the call fails, we log an error to the console.

We pass `createWritable()` an options object containing the following options:

- `keepExistingData: true`: If the selected file already exists, and data contained within it is copied to the temporary file before writing commences.
- `mode: "exclusive"`: States that only one writer can be open on the file handle simultaneously. If a second user loads the example and tries to select a file, they will get an error.

Last of all, we enable the input field and the write text button, as they are needed for the next step, and disable the select file button (this is not currently needed).

```js
async function selectFile() {
  // Create a new handle
  const handle = await window.showSaveFilePicker();

  // Create a FileSystemWritableFileStream to write to
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(
        `You can't access that file right now; someone else is trying to modify it. Try again later.`,
      );
    } else {
      console.log(e.message);
    }
  }

  // Enable text field and write button, disable select button
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

Our next function, `writeFile()`, writes the text entered into the input field to the chosen file using {{domxref("FileSystemWritableFileStream.write()")}}, then empties the input field. We then close the writable stream using {{domxref("WritableStream.close()")}}, and reset the demo so it can be run again — the `disabled` states of the controls are toggled back to their original states, and the `writableStream` variable is set back to `null`.

```js
async function writeFile() {
  // Write text to our file and empty out the text field
  await writableStream.write(fileText.value);
  fileText.value = "";

  // Close the file and write the contents to disk.
  await writableStream.close();

  // Disable text field and write button, enable select button
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // Set writableStream back to null
  writableStream = null;
}
```

To get the demo running, we set event listeners on the buttons so that the relevant function is run when each one is clicked.

```js
selectBtn.addEventListener("click", selectFile);
writeBtn.addEventListener("click", writeFile);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
