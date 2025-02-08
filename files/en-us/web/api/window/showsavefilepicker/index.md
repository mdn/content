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

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : A boolean value that defaults to
        `false`. By default, the picker should include an option to not apply
        any file type filters (instigated with the type option below). Setting this option
        to `true` means that option is _not_ available.
    - `id` {{Optional_Inline}}
      - : By specifying an ID, the browser can remember different directories for different
        IDs. If the same ID is used for another picker, the picker opens in the same
        directory.
    - `startIn` {{Optional_Inline}}
      - : A {{domxref("FileSystemHandle")}} or a well known directory (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"`, or `"videos"`) to open the dialog in.
    - `suggestedName` {{Optional_Inline}}
      - : A {{jsxref('String')}}. The suggested file name.
    - `types` {{Optional_Inline}}

      - : An {{jsxref('Array')}} of allowed file types to save. Each
        item is an object with the following options:

        - `description` {{Optional_Inline}}
          - : An optional description of the category of files
            types allowed. Default to be an empty string.
        - `accept`
          - : An {{jsxref('Object')}} with the keys set to the [MIME type](/en-US/docs/Web/HTTP/MIME_types/Common_types) and the values an {{jsxref('Array')}} of file extensions (see below
            for an example).

### Return value

A {{jsxref("Promise")}} whose fulfillment handler receives a {{domxref('FileSystemFileHandle')}} object.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the user dismisses the file picker without selecting or inputting a file,
    or if the user agent deems any selected files too sensitive or dangerous.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the call was blocked by the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) or it was not called via a user interaction such as a button press.
- {{jsxref("TypeError")}}
  - : Thrown if accept types can't be processed, which may happen if:
    - Any key string of the `accept` options of any item in `types` options can't parse a valid MIME type.
    - Any value string(s) of the `accept` options of any item in `types` options is invalid, for example, if it does not start with `.` and if end with `.`, or if it contains any invalid code points and its length is more than 16.
    - The `types` options is empty and the `excludeAcceptAllOption` options is `true`.

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
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
