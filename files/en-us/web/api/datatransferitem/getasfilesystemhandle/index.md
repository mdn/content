---
title: DataTransferItem.getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
tags:
  - DataTransferItem
  - Directory
  - File
  - File System Access API
  - Method
browser-compat: api.DataTransferItem.getAsFileSystemHandle
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Drag and Drop API")}}

The **`getAsFileSystemHandle()`** method of the
{{domxref("DataTransferItem")}} interface returns a {{domxref('FileSystemFileHandle')}}
if the dragged item is a file, or a {{domxref('FileSystemDirectoryHandle')}} if the
dragged item is a directory.

## Syntax

```js
var handle = DataTransferItem.getAsFileSystemHandle();
```

### Parameters

None.

### Return value

A {{domxref('FileSystemFileHandle')}} or {{domxref('FileSystemDirectoryHandle')}}.

### Exceptions

None.

## Examples

This example uses the `getAsFileSystemHandle` method to return
{{domxref('FileSystemHandle','file handles')}} for dropped items.

```js
elem.addEventListener('dragover', (e) => {
  // Prevent navigation.
  e.preventDefault();
});
elem.addEventListener('drop', async (e) => {
  // Prevent navigation.
  e.preventDefault();

  // Process all of the items.
  for (const item of e.dataTransfer.items) {
    // kind will be 'file' for file/directory entries.
    if (item.kind === 'file') {
    const entry = await item.getAsFileSystemHandle();
      if (entry.kind === 'file') {
        // run code for if entry is a file
      } else if (entry.kind === 'directory') {
        // run code for is entry is a directory
      }
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
