---
title: Window.showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
tags:
  - Directory
  - File
  - File System Access API
  - Method
  - Window
  - working with files
browser-compat: api.Window.showDirectoryPicker
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`showDirectoryPicker()`** method of the
{{domxref("Window")}} interface displays a directory picker which allows the user to
select a directory.

## Syntax

```js
var FileSystemDirectoryHandle = window.showDirectoryPicker();
```

### Parameters

None.

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

- [File System Access API](/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
