---
title: "FileReader: readAsDataURL() method"
short-title: readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
page-type: web-api-instance-method
browser-compat: api.FileReader.readAsDataURL
---

{{APIRef("File API")}}

The `readAsDataURL` method is used to read the contents of the specified
{{domxref("Blob")}} or {{domxref("File")}}. When the read operation is finished, the
{{domxref("FileReader.readyState","readyState")}} becomes `DONE`, and the
{{domxref("FileReader/loadend_event", "loadend")}} is triggered. At that time, the
{{domxref("FileReader.result","result")}} attribute contains the data as a [data: URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) representing the
file's data as a base64 encoded string.

> **Note:** The blob's {{domxref("FileReader.result","result")}} cannot be
> directly decoded as Base64 without first removing the Data-URL declaration preceding
> the Base64-encoded data. To retrieve only the Base64 encoded string, first
> remove `data:*/*;base64,` from the result.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Reading a single file

#### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Image preview" />
```

#### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### Result

{{EmbedLiveSample("Reading a single file", "100%", 240)}}

### Reading multiple files

#### HTML

```html
<input id="browse" type="file" multiple />
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
```

#### Result

{{EmbedLiveSample("Reading multiple files", "100%", 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
