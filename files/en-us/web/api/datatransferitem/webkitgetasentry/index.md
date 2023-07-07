---
title: "DataTransferItem: webkitGetAsEntry() method"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
page-type: web-api-instance-method
browser-compat: api.DataTransferItem.webkitGetAsEntry
---

{{APIRef("HTML Drag and Drop API")}}

If the item described by the {{domxref("DataTransferItem")}} is a file, `webkitGetAsEntry()` returns a {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}} representing it. If the item isn't a file, `null` is returned.

> **Note:** This function is implemented as `webkitGetAsEntry()` in non-WebKit browsers including Firefox at this time; it may be renamed to
> `getAsEntry()` in the future, so you should code defensively, looking for both.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameters

None.

### Return value

A {{domxref("FileSystemEntry")}}-based object describing the dropped item.
This will be either {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}.
The method aborts and returns `null` if the dropped item isn't a file, or if the {{domxref("DataTransferItem")}} object is not in read or read/write mode.

## Examples

In this example, a drop zone is created, which responds to the {{domxref("HTMLElement/drop_event", "drop")}} event
by scanning through the dropped files and directories, outputting a hierarchical
directory listing.

### HTML

The HTML establishes the drop zone itself, which is a {{HTMLElement("div")}} element with the ID `"dropzone"`, and an unordered list element with the ID `"listing"`.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

The styles used by the example are shown here.

```css
#dropzone {
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 4px dashed red;
  border-radius: 10px;
}

#boxtitle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font:
    bold 2em "Arial",
    sans-serif;
  width: 300px;
  height: 100px;
}

body {
  font:
    14px "Arial",
    sans-serif;
}
```

### JavaScript

First, let's look at the recursive `scanFiles()` function.
This function takes as input a {{domxref("FileSystemEntry")}} representing an entry in the file system to be scanned and processed (the `item` parameter), and an element into which to insert the list of contents (the `container` parameter).

> **Note:** To read all files in a directory, `readEntries` needs to be called repeatedly until it returns an empty array.
> In Chromium-based browsers, the following example will only return a max of 100 entries.

```js
let dropzone = document.getElementById("dropzone");
let listing = document.getElementById("listing");

function scanFiles(item, container) {
  let elem = document.createElement("li");
  elem.textContent = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    let directoryReader = item.createReader();
    let directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);
    directoryReader.readEntries((entries) => {
      entries.forEach((entry) => {
        scanFiles(entry, directoryContainer);
      });
    });
  }
}
```

`scanFiles()` begins by creating a new {{HTMLElement("li")}} element to represent the item being scanned, inserts the name of the item into it as its text content, and then appends it to the container.
The container is always a list element in this example, as you'll see shortly.

Once the current item is in the list, the item's {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} property is checked.
If the item is a directory, we need to recurse into that directory.
The first step is to create a {{domxref("FileSystemDirectoryReader")}} to handle fetching the directory's contents.
That's done by calling the item's {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}} method.
Then a new {{HTMLElement("ul")}} is created and appended to the parent list; this will contain the directory's contents in the next level down in the list's hierarchy.

After that, {{domxref("FileSystemDirectoryReader.readEntries", "directoryReader.readEntries()")}} is called to read in all the entries in the directory.
These are each, in turn, passed into a recursive call to `scanFiles()` to process them.
Any of them which are files are inserted into the list; any which are directories are inserted into the list and a new level of the list's hierarchy is added below, and so forth.

Then come the event handlers. First, we prevent the {{domxref("HTMLElement/dragover_event", "dragover")}} event from being handled by the default handler, so that our drop zone can receive the drop:

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

The event handler that kicks everything off, of course, is the handler for the {{domxref("HTMLElement/drop_event", "drop")}} event:

```js
dropzone.addEventListener(
  "drop",
  (event) => {
    let items = event.dataTransfer.items;

    event.preventDefault();
    listing.textContent = "";

    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();

      if (item) {
        scanFiles(item, listing);
      }
    }
  },
  false,
);
```

This fetches the list of {{domxref("DataTransferItem")}} objects representing the items dropped from `event.dataTransfer.items`.
Then we call {{domxref("Event.preventDefault()")}} to prevent the event from being handled further after we're done.

Now it's time to start building the list. First, the list is emptied by setting {{domxref("Node.textContent", "listing.textContent")}} to be empty.
That leaves us with an empty {{HTMLElement("ul")}} to begin inserting directory entries into.

Then we iterate over the items in the list of dropped items.
For each one, we call its {{domxref("DataTransferItem.webkitGetAsEntry", "webkitGetAsEntry()")}} method to obtain a {{domxref("FileSystemEntry")}} representing the file.
If that's successful, we call `scanFiles()` to process the item—either by adding it to the list if it's just a file or by adding it and walking down into it if it's a directory.

### Result

You can see how this works by trying it out below. Find some files and directories and drag them in, and take a look at the resulting output.

{{EmbedLiveSample('Examples', 600, 400)}}

## Specifications

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("DataTransferItem")}}
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, and {{domxref("FileSystemDirectoryEntry")}}
- Events: {{domxref("HTMLElement/dragover_event", "dragover")}} and {{domxref("HTMLElement/drop_event", "drop")}}
