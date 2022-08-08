---
title: Window.showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
page-type: web-api-instance-method
tags:
  - Directory
  - File
  - File System Access API
  - Method
  - Window
  - working with files
  - Experimental
browser-compat: api.Window.showDirectoryPicker
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}{{SeeCompatTable}}

The **`showDirectoryPicker()`** method of the
{{domxref("Window")}} interface displays a directory picker which allows the user to
select a directory.

## Syntax

```js
const FileSystemDirectoryHandle = window.showDirectoryPicker();
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing options, which are as follows:

    - `id`
      - : By specifying an ID, the browser can remember different directories for different
        IDs. If the same ID is used for another picker, the picker opens in the same
        directory.
    - `mode`
      - : A string that defaults to `"read"` for read-only access or `"readwrite"` for read
        and write access to the directory.
    - `startIn`
      - : A `FileSystemHandle` or a well known directory (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"`, or `"videos"`) to open the dialog in.

### Return value

A {{domxref('FileSystemDirectoryHandle')}}.

### Exceptions

- `AbortError`
  - : Thrown if the user dismisses the prompt without making a selection, or if the user
    agent deems the selected content to be too sensitive or dangerous

## Examples

This asynchronous function shows a directory picker and returns a
{{domxref('FileSystemDirectoryHandle')}} once selected.

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // run code for dirHandle
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
