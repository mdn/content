---
title: File.type
slug: Web/API/File/type
tags:
  - API
  - File API
  - File Type
  - Files
  - Property
  - Reference
browser-compat: api.File.type
---
{{APIRef("File API")}}

Returns the media type ([MIME](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) of the file represented by a {{domxref("File")}} object.

## Syntax

```js
var name = file.type;
```

## Value

A string, containing the media type(MIME) indicating the type of the file, for example "image/png" for PNG images

## Example

```html
<input type="file" multiple onchange="showType(this)">
```

```js
function showType(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var name = files[i].name;
    var type = files[i].type;
    alert("Filename: " + name + " , Type: " + type);
  }
}
```

> **Note:** Based on the current implementation, browsers won't actually read the bytestream of a file to determine its media type.
> It is assumed based on the file extension; a PNG image file renamed to .txt would give "_text/plain_" and not "_image/png_". Moreover, `file.type` is generally reliable only for common file types like images, HTML documents, audio and video.
> Uncommon file extensions would return an empty string.
> Client configuration (for instance, the Windows Registry) may result in unexpected values even for common types. **Developers are advised not to rely on this property as a sole validation scheme.**

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
- Blog Post: [Be skeptical of client-reported MIME types](https://textslashplain.com/2018/07/26/be-skeptical-of-client-reported-mime-content-types/)
