---
title: Window.requestFileSystem()
slug: Web/API/Window/requestFileSystem
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - File
  - File and Directory Entries API
  - Method
  - Non-standard
  - Reference
  - Window
  - filesystem
  - requestFileSystem
browser-compat: api.Window.requestFileSystem
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}} {{non-standard_header()}}

The non-standard {{domxref("Window")}} method
**`requestFileSystem()`** method is a Google Chrome-specific
method which lets a web site or app gain access to a sandboxed file system for its own
use. The returned {{domxref("FileSystem")}} is then available for use with the other [file system APIs](/en-US/docs/Web/API/File_and_Directory_Entries_API).

> **Note:** This method is prefixed with `webkit` in all browsers that implement it.

## Syntax

```js
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameters

- `type`
  - : The type of storage to request. Specify `Window.TEMPORARY` if it's
    acceptable for the browser to delete the files at its own discretion, such as if
    storage space runs low, or `Window.PERSISTENT` if you need the files to
    remain in place unless the user or the web site or app explicitly permit it.
    Persistent storage requires that the user grant the site quota.
- `size`
  - : The amount of storage space you wish to have allocated for your app's use.
- `successCallback`
  - : A function which is invoked when the file system has been successfully obtained. The
    callback receives a single parameter: a {{domxref("FileSystem")}} object representing
    the file system the app has permission to use.
- `errorCallback` {{optional_inline}}
  - : An optional parameter specifying a function which is called if an error occurs while
    attempting to obtain the file system, or if the user denies permission to create or
    access the file system. The callback receives as input a single parameter: a
    `FileError` object describing the error.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

As this method was removed from the [File and Directory Entries API](https://wicg.github.io/entries-api/) proposal, it has no official W3C or WHATWG specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API support in Firefox](/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
