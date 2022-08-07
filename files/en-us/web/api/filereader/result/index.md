---
title: FileReader.result
slug: Web/API/FileReader/result
page-type: web-api-instance-property
tags:
  - API
  - File API
  - FileReader
  - Files
  - Property
  - Reference
  - result
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

This example presents a function, `read()`, which reads a file from a [file input](/en-US/docs/Web/HTML/Element/input/file). It works by creating a
{{domxref("FileReader")}} object and creating a listener for
{{domxref("FileReader/load_event", "load")}} events such that when then file is read,
the `result` is obtained and passed to the callback function provided to
`read()`.

The content is handled as raw text data.

```js
const fileInput = document.querySelector('input[type="file"]');

function read(callback) {
  const file = fileInput.files.item(0);
  const reader = new FileReader();

  reader.onload = () => {
    callback(reader.result);
  }

  reader.readAsText(file);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
