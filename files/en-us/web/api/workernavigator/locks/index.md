---
title: WorkerNavigator.locks
slug: Web/API/WorkerNavigator/locks
tags:
  - API
  - Experimental
  - LockManager
  - Property
  - Reference
  - Web Locks API
browser-compat: api.WorkerNavigator.locks
---
{{SeeCompatTable}}{{APIRef("Web Locks")}}

The **`locks`** read-only property of
the {{domxref("WorkerNavigator")}} interface returns a {{domxref("LockManager")}}
object which provides methods for requesting a new {{domxref('Lock')}} object and
querying for an existing `Lock` object.

## Syntax

```js
var lockManager = navigator.locks
```

### Value

A {{domxref("LockManager")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
