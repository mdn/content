---
title: File.name
slug: Web/API/File/name
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.File.name
---
{{APIRef("File API")}}

Returns the name of the file represented by a {{domxref("File")}} object. For security
reasons, the path is excluded from this property.

## Syntax

```js
var name = file.name;
```

## Value

A string, containing the name of the file without path, such as "My Resume.rtf".

## Example

```html
<input type="file" multiple onchange="processSelectedFiles(this)">

<div id="output"></div>
```

```js
const output = document.querySelector("#output");
function processSelectedFiles(fileInput) {
  let files = fileInput.files;
  output.textContent = "List of Selected Files:";

  for (let i = 0; i < files.length; i++) {
    output.textContent += `\nFilename: ${files[i].name}`;
  }
}
```

```css hidden
#output{
  padding: 0.5em 0;
  white-space: pre;
}
```

#### Result

{{ EmbedLiveSample('Example', 300, 100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web
  applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
