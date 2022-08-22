---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
page-type: web-api-instance-method
tags:
  - API
  - Base 64
  - File API
  - FileReader
  - Files
  - Method
  - Reference
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

```js
readAsDataURL(blob)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### HTML

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Image preview">
```

### JavaScript

```js
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### Live Result

{{EmbedLiveSample("Examples", "100%", 240)}}

## Example reading multiple files

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector('#preview');
  const files = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild(image);
      }, false);

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}
```

> **Note:** The [`FileReader()`](/en-US/docs/Web/API/FileReader) constructor was
> not supported by Internet Explorer for versions before 10. For a full compatibility code
> you can see our [crossbrowser possible solution for image preview](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3699/2c8cb1e94f0ee05b22c1c30a3790c70d/crossbrowser_image_preview.html). See also [this more powerful example](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3698/391aef19653595a663cc601c42a67116/image_upload_preview.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}
