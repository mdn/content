---
title: LockedFile.onerror
slug: Web/API/LockedFile/onerror
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

Specifies an event listener to receive {{event("error")}} events. These events occur when something goes wrong.

## Syntax

```js
instanceOfLockedFile.onerror = funcRef;
```

Where `funcRef` is a function to be called when the {{event("error")}} event occurs.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

## See also

- {{domxref("LockedFile")}}
