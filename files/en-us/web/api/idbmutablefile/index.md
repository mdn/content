---
title: IDBMutableFile
slug: Web/API/IDBMutableFile
tags:
  - API
  - DOM
  - Files
  - Reference
---
{{APIRef("File System API")}}{{non-standard_header}}

## Summary

The `IDBMutableFile` interface provides access in read or write mode to a file, dealing with all the necessary locks.

> **Note:** This interface used to be called `FileHandle` , but it was changed to this ({{bug(1006485)}}.)

As `IDBMutableFile` objects are bound to a fake file system built on top of IndexedDB, such an object is created using the {{domxref("IDBDatabase.createMutableFile")}} method.

## Properties

- {{domxref("MutableFile.name")}} {{readonlyinline}}
  - : The name of the handled file.
- {{domxref("MutableFile.type")}} {{readonlyinline}}
  - : The MIME type of the handled file.

### Events Handler

- {{domxref("MutableFile.onabort")}}
  - : The {{event("abort")}} event is triggered each time the handled file is aborted.
- {{domxref("MutableFile.onerror")}}
  - : The {{event("error")}} event is triggered each time something goes wrong.

## Methods

- {{domxref("MutableFile.open()")}}
  - : Returns a {{domxref("LockedFile")}} object to read or write the associated file safely.
- {{domxref("MutableFile.getFile()")}}
  - : Returns a {{domxref("DOMRequest")}} object. In case of success, the request's result is a {{domxref("File")}} object representing a snapshot of the handled file.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## See also

- {{domxref("LockedFile")}}
- {{domxref("File")}}
