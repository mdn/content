---
title: "HTMLInputElement: webkitdirectory property"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.webkitdirectory
---

{{APIRef("File and Directory Entries API")}}

The **`webkitdirectory`** property of the {{domxref("HTMLInputElement")}} interface reflects the [`webkitdirectory`](/en-US/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) HTML attribute, which indicates that [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) elements can only select directories instead of files.

When a directory is selected, the directory and its entire hierarchy of contents are included in the set of selected items.
The selected file system entries can be obtained using the {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} property.

> [!NOTE]
> This property is called `webkitdirectory` in the specification due to its origins as a Google Chrome-specific API.

## Value

A Boolean; `true` if the {{HTMLElement("input")}} element should allow picking only directories or `false` if only files should be selectable.

## Description

Setting `webkitdirectory` to `true` causes the input element to offer directories for the user to select instead of files.
After the user chooses a directory, each {{domxref("File")}} object in the returned `files` has its {{domxref("File.webkitRelativePath")}} property set to a path relative to the selected ancestor directory.
For example, consider this file system:

```plain
PhotoAlbums
├── Birthdays
│   ├── Jamie's 1st birthday
│   │   ├── PIC1000.jpg
│   │   └── PIC1044.jpg
│   └── Don's 40th birthday
│       ├── PIC2343.jpg
│       └── PIC2356.jpg
└── Vacations
    └── Mars
        ├── PIC5556.jpg
        ├── PIC5684.jpg
        └── PIC5712.jpg
```

If the user chooses the `PhotoAlbums` directory, the list reported by files will contain {{domxref("File")}} objects for every file.
The entry for `PIC2343.jpg` will have a `webkitRelativePath` of `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`.
This makes it possible to determine the selected directory's hierarchy even though the {{domxref("FileList")}} is flat.

> [!NOTE]
> The behavior of `webkitRelativePath` is different in _Chromium < 72_.
> See [this bug](https://crbug.com/124187) for further details.

## Examples

In this example, a directory picker is presented which lets the user choose one or more directories.
When the {{domxref("HTMLElement/change_event", "change")}} event occurs, a list of all files contained within the selected directory hierarchies is created and displayed.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("file-picker").addEventListener(
  "change",
  (event) => {
    let output = document.getElementById("listing");
    for (const file of event.target.files) {
      let item = document.createElement("li");
      item.textContent = file.webkitRelativePath;
      output.appendChild(item);
    }
  },
  false,
);
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
