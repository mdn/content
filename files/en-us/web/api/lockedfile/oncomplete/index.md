---
title: LockedFile.oncomplete
slug: Web/API/LockedFile/oncomplete
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

Specifies an event listener to receive {{event("complete")}} events. These events occur each time a read or write operation is successful.

## Syntax

```js
instanceOfLockedFile.oncomplete = funcRef;
```

Where `funcRef` is a function to be called when the {{event("complete")}} event occurs.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

## See also

- {{domxref("LockedFile")}}
