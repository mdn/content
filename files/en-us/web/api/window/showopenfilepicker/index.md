---
title: Window.showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
tags:
  - File
  - File System Access API
  - Method
  - Window
  - working with files
browser-compat: api.Window.showOpenFilePicker
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`showOpenFilePicker()`** method of the
{{domxref("Window")}} interface shows a file picker that allows a user to select a file
or multiple files and returns a handle for the file(s).

## Syntax

```js
var FileSystemHandles = Window.showOpenFilePicker();
```

### Parameters

- _options_ {{optional_inline}}

  - : An optional object containing options, which are as follows:

    - `multiple`: A {{jsxref('Boolean')}}. Default `false`. When
      set to `true` multiple files may be selected.
    - `excludeAcceptAllOption`:A {{jsxref('Boolean')}}. Default
      `false`. By default the picker should include an option to not apply
      any file type filters (instigated with the type option below). Setting this option
      to `true` means that option is _not_ available.
    - `types`: An {{jsxref('Array')}} of allowed file types to pick. Each
      item is an object with the following options:

      - `description`: An optional description of the category of files
        types allowed.
      - `accept`: An {{jsxref('Object')}} with the keys set to the [MIME
        type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) and the values an {{jsxref('Array')}} of file extensions (see below
        for an example).

### Return value

A {{jsxref('Array')}} of {{domxref('FileSystemFileHandle')}} objects.

### Exceptions

- `AbortError`
  - : An AbortError is thrown if a user dismisses the prompt without making a selection or
    if a file selected is deemed too sensitive or dangerous to be exposed to the website.

## Examples

Here we set the options object for passing into the method. We'll allow a selection of
image file types, with no option to allow for all files types, or multiple file
selection.

```js
const pickerOpts = {
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};
```

Next we can create an asynchronous function which show the file picker and return the
selected file.

```js
// create a reference for our file handle
let fileHandle;

async function getFile() {
  // open file picker, destructure the one element returned array
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // run code with our fileHandle
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
