---
title: FileRequest.onprogress
slug: Web/API/FileRequest/onprogress
tags:
  - API
  - DOM
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}} {{non-standard_header}}

## Summary

This property specifies a callback function to be run repeatedly while the operation represented by a {{ domxref("FileRequest") }} object is in progress.

## Syntax

```js
instanceOfFileRequest.onprogress = function;
```

Where `instanceOfFileRequest` is a {{ domxref("FileRequest") }} object and `function` is the JavaScript function to execute.

Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:

- `loaded`
  - : A number representing the current amount of bytes processed by the operation.
- `total`
  - : A number representing the total amount of bytes that will be processed by the operation.

## Example

```js
// Assuming 'request' which is a FileRequest object

request.onprogress = function (status) {
  var progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
```

## Specifications

Not part of any current specification.

## See also

- {{ domxref("DOMRequest") }}
- {{ domxref("LockedFile") }}
