---
title: "FileSystemObserver: disconnect() method"
short-title: disconnect()
slug: Web/API/FileSystemObserver/disconnect
page-type: web-api-instance-method
browser-compat: api.FileSystemObserver.disconnect
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`disconnect()`** method of the
{{domxref("FileSystemObserver")}} interface stops the observer observing the file system.

## Syntax

```js-nolint
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref('undefined')}}).

## Examples

### Stop observing the file system

Assuming a `FileSystemObserver` instance is available, you can call the `disconnect()` method on it when you want to stop observing changes to the file system entry:

```js
observer.disconnect();
```

## Specifications

Not currently part of a specification. See [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) for the relevant specification PR.

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) on developer.chrome.com (2024)
