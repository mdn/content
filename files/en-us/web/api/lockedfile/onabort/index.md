---
title: LockedFile.onabort
slug: Web/API/LockedFile/onabort
tags:
  - API
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{ non-standard_header }}

## Summary

Specifies an event listener to receive {{event("abort")}} events. These events occur when the locked file has been aborted with the {{domxref("LockedFile.abort()")}} method.

## Syntax

```js
instanceOfLockedFile.onabort = funcRef;
```

Where `funcRef` is a function to be called when the {{event("abort")}} event occurs.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

## See also

- {{domxref("LockedFile")}}
