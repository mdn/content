---
title: "DataTransferItem: getAsFileSystemHandle() method"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.DataTransferItem.getAsFileSystemHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

The **`getAsFileSystemHandle()`** method of the
{{domxref("DataTransferItem")}} interface returns a {{domxref('FileSystemFileHandle')}}
if the dragged item is a file, or a {{domxref('FileSystemDirectoryHandle')}} if the
dragged item is a directory.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}}.

If the item's {{domxref("DataTransferItem.kind", "kind")}} property is `"file"`, and this item is accessed in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} or {{domxref("HTMLElement/drop_event", "drop")}} event handlers, then the returned promise is fulfilled with a {{domxref('FileSystemFileHandle')}} if the dragged item is a file or a {{domxref('FileSystemDirectoryHandle')}} if the dragged item is a directory.

Otherwise, the promise fulfills with `null`.

### Exceptions

None.

## Examples

This example uses the `getAsFileSystemHandle()` method to return
{{domxref('FileSystemHandle', 'file handles', '', 'nocode')}} for dropped items.

```js
elem.addEventListener("dragover", (e) => {
  // Prevent navigation.
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // Prevent navigation.
  e.preventDefault();

  // Process all of the items.
  for (const item of e.dataTransfer.items) {
    // kind will be 'file' for file/directory entries.
    if (item.kind === "file") {
      const entry = await item.getAsFileSystemHandle();
      if (entry.kind === "file") {
        // run code for if entry is a file
      } else if (entry.kind === "directory") {
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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
