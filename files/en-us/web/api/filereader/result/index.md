---
title: "FileReader: result property"
short-title: result
slug: Web/API/FileReader/result
page-type: web-api-instance-property
browser-compat: api.FileReader.result
---

{{APIRef("File API")}}

The {{domxref("FileReader")}} **`result`** property returns the
file's contents. This property is only valid after the read operation is complete, and
the format of the data depends on which of the methods was used to initiate the read
operation.

## Value

An appropriate string or {{jsxref("ArrayBuffer")}} based on which of the reading methods
was used to initiate the read operation. The value is `null` if the reading
is not yet complete or was unsuccessful.

The result types are described below.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("FileReader/readAsArrayBuffer", "readAsArrayBuffer()")}}
      </td>
      <td>
        The <code>result</code> is a JavaScript
        {{jsxref("Global_Objects/ArrayBuffer",
        "ArrayBuffer")}}
        containing binary data.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsBinaryString", "readAsBinaryString()")}}
      </td>
      <td>
        The <code>result</code> contains the raw binary data from the file in a
        string.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsDataURL", "readAsDataURL()")}}
      </td>
      <td>
        The <code>result</code> is a string with a <code>data:</code> URL
        representing the file's data.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsText", "readAsText()")}}
      </td>
      <td>The <code>result</code> is text in a string.</td>
    </tr>
  </tbody>
</table>

## Examples

This example presents a function `reader()` which reads a file from a [file input](/en-US/docs/Web/HTML/Element/input/file). It works by creating a {{domxref("FileReader")}} object and creating a listener for {{domxref("FileReader/load_event", "load")}} events, such that when then file is read, the `result` is obtained and passed to the callback function provided to `reader()`.

The content is handled as raw text data.

```js
// Given this HTMLInputElement of type="file":
// <input id="image" type="file" accept="image/*">

function reader(file, callback) {
  const fr = new FileReader();
  fr.onload = () => callback(null, fr.result);
  fr.onerror = (err) => callback(err);
  fr.readAsDataURL(file);
}

document.querySelector("#image").addEventListener("change", (evt) => {
  // No files, do nothing.
  if (!evt.target.files) {
    return;
  }
  reader(evt.target.files[0], (err, res) => {
    console.log(res); // Base64 `data:image/...` String result.
  });
});
```

Given the asynchronous nature of {{domxref("FileReader")}}, you could use a Promise-based approach. Here's an example for a [file input](/en-US/docs/Web/HTML/Element/input/file) with attribute `multiple` that returns a {{jsxref("Promise")}}.

```js
// Given this HTMLInputElement:
// <input id="images" type="file" accept="image/*" multiple>

const reader = (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr);
    fr.onerror = (err) => reject(err);
    fr.readAsDataURL(file);
  });

async function logImagesData(fileList) {
  let fileResults = [];
  const frPromises = fileList.map(reader);

  try {
    fileResults = await Promise.all(frPromises);
  } catch (err) {
    // In this specific case, Promise.all() might be preferred
    // over Promise.allSettled(), since it isn't trivial to modify
    // a FileList to a subset of files of what the user initially
    // selected. Therefore, let's just stash the entire operation.
    console.error(err);
    return;
  }

  fileResults.forEach((fr) => {
    console.log(fr.result); // Base64 `data:image/...` String result.
  });
}

// HTMLInputElement type="file" Event handler:
document.querySelector("#images").addEventListener("change", (evt) => {
  // If no files, do nothing.
  if (!evt.target.files) {
    return;
  }
  logImagesData([...evt.target.files]);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
