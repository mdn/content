---
title: Window.showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
tags:
  - Directory
  - File
  - File System Access API
  - Method
  - Window
  - working with files
browser-compat: api.Window.showSaveFilePicker
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`showSaveFilePicker()`** method of the
{{domxref("Window")}} interface shows a file picker that allows a user to save a file.
Either by selecting an existing file, or entering a name for a new file.

## Syntax

```js
var FileSystemFileHandle = Window.showSaveFilePicker();
```

### Parameters

- _options_ {{optional_inline}}

  - : An optional object containing options, which are as follows:

    - `excludeAcceptAllOption`: A {{jsxref('Boolean')}}. Default
      `false`. By default the picker should include an option to not apply
      any file type filters (instigated with the type option below). Setting this option
      to `true` means that option is _not_ available.
    - `suggestedName`: A {{jsxref('String')}}. The suggested file name.
    - `types`: An {{jsxref('Array')}} of allowed file types to save. Each
      item is an object with the following options:

      - `description`: An optional description of the category of files
        types allowed.
      - `accept`: An {{jsxref('Object')}} with the keys set to the [MIME
        type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) and the values an {{jsxref('Array')}} of file extensions (see below
        for an example).

### Return value

A {{domxref('FileSystemFileHandle')}}.

### Exceptions

- `AbortError`
  - : Thrown if the user dismisses the file picker without selecting or inputting a file,
    or if the user agent deems any selected files too sensitive or dangerous.

## Examples

The following function shows a file picker, with text files highlighted for selection.

```js
function getNewFileHandle() {
  const opts = {
    types: [{
      description: 'Text file',
      accept: {'text/plain': ['.txt']},
    }],
  };
  return window.showSaveFilePicker(opts);
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
