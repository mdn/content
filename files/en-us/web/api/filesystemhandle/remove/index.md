---
title: "FileSystemHandle: remove() method"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.FileSystemHandle.remove
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

The **`remove()`** method of the {{domxref("FileSystemHandle")}} interface requests removal of the entry represented by the handle from the underlying file system.

The `remove()` method allows you to remove a file or directory directly from its handle. Without this method, you would have to obtain the handle of the parent directory, then call {{domxref("FileSystemDirectoryHandle.removeEntry()")}} on that to remove it.

You can also call `remove()` on the root directory of the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) to clear its contents, after which a new empty OPFS is created.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that specifies options for the removal. Possible properties are as follows:
    - `recursive` {{optional_inline}}
      - : A boolean value that defaults to `false`. When set to `true` and the entry is a directory, its contents will be removed recursively.

### Return value

A {{jsxref("Promise")}} that fulfills with a value of `undefined`.

### Exceptions

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Thrown if `recursive` is set to `false` and the entry to be removed is a directory with children.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser was not able to get an exclusive lock on the entry.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus')}} is not `granted`.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the entry is not found.

## Examples

Our [`FileSystemHandle.remove()` demo](https://filesystemhandle-remove.glitch.me/) (see the [source code](https://glitch.com/edit/#!/filesystemhandle-remove)) is a file creator app. You can enter text into the {{htmlelement("textarea")}} and press the "Save file" {{htmlelement("button")}}, and the app will open a file picker allowing you to save that text onto your local file system in a text file of your choice. You can also choose to delete files you create.

It doesn't allow you to view the content of created files, and it doesn't stay in sync with the underlying file system on page reloads/closes. This means that files created by the app will still exist on the file system if you don't choose to delete them before reloading or closing the tab.

The file picker, file handle, and the file itself if you are creating a new file, are created using {{domxref("window.showSaveFilePicker()")}}. The text is written to the file via {{domxref("FileSystemFileHandle.createWritable()")}}.

Once a file is created on the file system, an entry is created in the app (see `processNewFile()` in the source code):

- A reference to the file handle is stored in an array called `savedFileRefs` so it can be easily referenced later on.
- A list item is added underneath the "Saved files" heading in the UI, with the file name shown alongside a "Delete" button.

When the "Delete" button is pressed, the `deleteFile()` function is run, which looks like so:

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === e.target.id + ".txt") {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== e.target.id + ".txt",
      );
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
}
```

Walking through this:

1. For each file handle saved in the `savedFileRefs` array, we check its name to see if it matches the `id` attribute of the button that triggered the event.
2. When a match is found, we run `FileSystemHandle.remove()` on that handle to remove the file from the underlying file system.
3. We also remove the matched handle from the `savedFileRefs` array.
4. Finally, we remove the list item relating to that file in the UI.

## Specifications

This feature is not part of any specification, but may become standard in the future. See [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) for the detail.

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [FileSystemHandle.remove() demo](https://filesystemhandle-remove.glitch.me/)
