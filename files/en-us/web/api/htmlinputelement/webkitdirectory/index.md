---
title: HTMLInputElement.webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
tags:
  - API
  - File System API
  - File and Directory Entries API
  - Files
  - HTML DOM
  - HTMLInputElement
  - Non-standard
  - Property
  - Reference
  - Web
  - webkitdirectory
browser-compat: api.HTMLInputElement.webkitdirectory
---
{{APIRef("HTML DOM")}}{{non-standard_header}}

The
**`HTMLInputElement.webkitdirectory`** is a property that
reflects the {{htmlattrxref("webkitdirectory", "input")}} HTML attribute and indicates
that the {{HTMLElement("input")}} element should let the user select directories
instead of files. When a directory is selected, the directory and its entire hierarchy
of contents are included in the set of selected items. The selected file system
entries can be obtained using the {{domxref("HTMLInputElement.webkitEntries",
    "webkitEntries")}} property.

## Syntax

```js
 HTMLInputElement.webkitdirectory = boolValue
```

### Value

A Boolean; `true` if the {{HTMLElement("input")}} element should allow
picking only directories or `false` if only files should be selectable.

## Understanding the results

After the user makes a selection, each {{domxref("File")}} object in `files`
has its {{domxref("File.webkitRelativePath")}} property set to the relative path within
the selected directory at which the file is located. For example, consider this file
system:

- PhotoAlbums

  - Birthdays

    - Jamie's 1st birthday

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Don's 40th birthday

      - PIC2343.jpg
      - PIC2344.jpg
      - PIC2355.jpg
      - PIC2356.jpg

  - Vacations

    - Mars

      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

If the user chooses `PhotoAlbums`, then the list reported by files will
contain {{domxref("File")}} objects for every file listed above—but not the directories.
The entry for `PIC2343.jpg` will have a `webkitRelativePath` of
`PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`. This makes it
possible to know the hierarchy even though the {{domxref("FileList")}} is flat.

> **Note:** The behavior of `webkitRelativePath` is different
> in _Chromium < 72_. See [this bug](https://bugs.chromium.org/p/chromium/issues/detail?id=124187) for
> further details.

## Example

In this example, a directory picker is presented which lets the user choose one or more
directories. When the {{event("change")}} event occurs, a list of all files contained
within the selected directory hierarchies is generated and displayed.

### HTML content

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript content

```js
document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
```

### Result

{{ EmbedLiveSample('Example') }}

## Specifications

{{Specifications}}

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
