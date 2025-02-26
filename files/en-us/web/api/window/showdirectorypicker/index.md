---
title: "Window: showDirectoryPicker() method"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Window.showDirectoryPicker
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

The **`showDirectoryPicker()`** method of the
{{domxref("Window")}} interface displays a directory picker which allows the user to
select a directory.

## Syntax

```js-nolint
showDirectoryPicker()
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing options, which are as follows:

    - `id` {{optional_inline}}
      - : By specifying an ID, the browser can remember different directories for different
        IDs. If the same ID is used for another picker, the picker opens in the same
        directory.
    - `mode` {{optional_inline}}
      - : A string that defaults to `"read"` for read-only access or `"readwrite"` for read
        and write access to the directory.
    - `startIn` {{optional_inline}}
      - : A {{domxref("FileSystemHandle")}} or a well known directory (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"`, or `"videos"`) to open the dialog in.

### Return value

A {{jsxref("Promise")}} whose fulfillment handler receives a {{domxref('FileSystemDirectoryHandle')}} object.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the user dismisses the prompt without making a selection,
    or if the user agent deems the selected directory to be too sensitive or dangerous,
    or if the {{domxref('PermissionStatus.state')}} for the selected directory is not `"granted"` in the specified `mode`.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the call was blocked by the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) or it was not called via a user interaction such as a button press.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
