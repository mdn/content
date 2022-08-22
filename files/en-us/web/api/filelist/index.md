---
title: FileList
slug: Web/API/FileList
page-type: web-api-interface
tags:
  - API
  - File API
  - Files
browser-compat: api.FileList
---
{{APIRef("File API")}}

An object of this type is returned by the `files` property of the HTML {{HTMLElement("input")}} element; this lets you access the list of files selected with the `<input type="file">` element. It's also used for a list of files dropped into web content when using the drag and drop API; see the [`DataTransfer`](/en-US/docs/Web/API/DataTransfer) object for details on this usage.

All `<input>` element nodes have a `files` attribute of type `FileList` on them which allows access to the items in this list. For example, if the HTML includes the following file input:

```html
<input id="fileItem" type="file">
```

The following line of code fetches the first file in the node's file list as a [`File`](/en-US/docs/Web/API/File) object:

```js
const file = document.getElementById('fileItem').files[0];
```

## Properties

- {{DOMxRef("FileList/length", "length")}} {{ReadOnlyInline}}
  - : A read-only value indicating the number of files in the list.

## Methods

- {{DOMxRef("FileList/item", "item()")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("File")}} object representing the file at the specified index in the file list.

## Example

### Logging filenames

In this example, we log the names of all the files selected by the user.

#### HTML

```html
<input id="myfiles" multiple type="file">
<pre class="output">Selected files:</pre>
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
const output = document.querySelector('.output');
const fileInput = document.querySelector("#myfiles");

fileInput.addEventListener("change", () => {
  for (const file of fileInput.files) {
    output.innerText += `\n${file.name}`;
  }
});
```

#### Result

{{EmbedLiveSample("Logging filenames")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/en-US/docs/Web/API/File)
- [`FileReader`](/en-US/docs/Web/API/FileReader)
