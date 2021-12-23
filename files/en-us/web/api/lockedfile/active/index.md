---
title: LockedFile.active
slug: Web/API/LockedFile/active
tags:
  - API
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}} {{non-standard_header}}

The **`active`** property allows to know if the
{{domxref("LockedFile")}} object is still usable (`true`) or not
(`false`). If the object is inactive then it is impossible to perform any
read or write operation with it. Typically, a {{domxref("LockedFile")}} object becomes
inactive when the {{domxref("LockedFile.abort()")}} method is called or if an error
occurs.

## Syntax

```js
var state = instanceOfLockedFile.active
```

### Value

A boolean value.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft Proposal. |

## See also

- {{domxref("LockedFile")}}
