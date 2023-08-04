---
title: "Window: showSaveFilePicker() method"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Window.showSaveFilePicker
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`showSaveFilePicker()`** method of the
{{domxref("Window")}} interface shows a file picker that allows a user to save a file.
Either by selecting an existing file, or entering a name for a new file.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameters

- `options` {{Optional_Inline}}

  - : An object containing options, which are as follows:

    - `excludeAcceptAllOption`
      - : A boolean value that defaults to
        `false`. By default, the picker should include an option to not apply
        any file type filters (instigated with the type option below). Setting this option
        to `true` means that option is _not_ available.
    - `suggestedName`
      - : A {{jsxref('String')}}. The suggested file name.
    - `types`

      - : An {{jsxref('Array')}} of allowed file types to save. Each
        item is an object with the following options:

        - `description`
          - : An optional description of the category of files
            types allowed.
        - `accept`
          - : An {{jsxref('Object')}} with the keys set to the [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) and the values an {{jsxref('Array')}} of file extensions (see below
            for an example).

### Return value

A {{jsxref("Promise")}} whose fulfillment handler receives a {{domxref('FileSystemFileHandle')}} object.

### Exceptions

- `AbortError`
  - : Thrown if the user dismisses the file picker without selecting or inputting a file,
    or if the user agent deems any selected files too sensitive or dangerous.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

The following function shows a file picker, with text files highlighted for selection.

```js
async function getNewFileHandle() {
  const opts = {
    types: [
      {
        description: "Text file",
        accept: { "text/plain": [".txt"] },
      },
    ],
  };
  return await window.showSaveFilePicker(opts);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
