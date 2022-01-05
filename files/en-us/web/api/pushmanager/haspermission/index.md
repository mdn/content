---
title: PushManager.hasPermission()
slug: Web/API/PushManager/hasPermission
tags:
  - API
  - Deprecated
  - Method
  - PushManager
  - Reference
browser-compat: api.PushManager.hasPermission
---
{{deprecated_header}}{{ApiRef("Push API")}}

The **`PushManager.hasPermission()`** method of the {{domxref("PushManager")}} interface returns a {{jsxref("Promise")}} that resolves to the `PushPermissionStatus` of the requesting webapp, which will be one of `granted`, `denied`, or `default`.

> **Note:** This feature has been superseded by the {{domxref("PushManager.permissionState()")}} method.

## Syntax

```js
PushManager.hasPermission().then(function(pushPermissionStatus) { /* ... */ } );
```

## Example

```js
// TBD
```

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}
