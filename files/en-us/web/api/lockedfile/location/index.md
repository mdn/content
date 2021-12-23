---
title: LockedFile.location
slug: Web/API/LockedFile/location
tags:
  - API
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{non-standard_header}}

## Summary

The `location` property is a zero-based index representing the position of
the read/write pointer within the file. Its value indicates at which bytes within the
file any write or read operation will start.

This value is changed automatically after every read and write operation. The special
value `null` means end-of-file.

This property can be changed at will.

## Syntax

```js
var location = instanceOfLockedFile.location
```

## Value

A number.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft Proposal. |

## See also

- {{domxref("LockedFile")}}
