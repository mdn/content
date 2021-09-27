---
title: HTMLInputElement.webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
tags:
  - API
  - File System API
  - File and Directory Entries API
  - Files
  - HTML DOM
  - HTMLInputElement
  - Non-standard
  - Property
  - webkitEntries
browser-compat: api.HTMLInputElement.webkitEntries
---
{{APIRef("File System API")}}{{SeeCompatTable}}{{Non-standard_header}}

The read-only **`webkitEntries`**
property of the {{domxref("HTMLInputElement")}} interface contains an array of file
system entries (as objects based on {{domxref("FileSystemEntry")}}) representing files
and/or directories selected by the user using an {{HTMLElement("input")}} element of
type `file`, but only if that selection was made using drag-and-drop:
selecting a file in the dialog will leave the property empty.

The array can only contain directories if the
{{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} property is
`true`. This means the `<input>` element was configured to
let the user choose directories.

> **Note:** This property is called `webkitEntries` in the specification due to its
> origins as a Google Chrome-specific API. It's likely to be renamed someday.

## Syntax

```js
var entries = HTMLInputElement.webkitEntries;
```

### Value

An array of objects based on {{domxref("FileSystemEntry")}}, each representing one file
which is selected in the {{HTMLElement("input")}} element. More specifically, files are
represented by {{domxref("FileSystemFileEntry")}} objects, and, if they're allowed,
directories are represented by {{domxref("FileSystemDirectoryEntry")}} objects.

## Example

This example shows how to create a file selection `<input>` element
and process the selected files.

### HTML

```html
<input id="files" type="file" multiple>
```

### JavaScript

```js
document.getElementById("files").addEventListener("change", function(event) {
  event.target.webkitEntries.forEach(function(entry) {
    /* do stuff with the entry */
  });
});
```

Each time a {{event("change")}} event occurs, this code iterates over the selected
files, obtaining their {{domxref("FileSystemEntry")}}-based objects and acting on them.

## Specifications

{{Specifications}}

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("HTMLInputElement")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
