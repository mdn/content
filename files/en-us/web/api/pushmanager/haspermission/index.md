---
title: "PushManager: hasPermission() method"
short-title: hasPermission()
slug: Web/API/PushManager/hasPermission
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.PushManager.hasPermission
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

The **`PushManager.hasPermission()`** method of the {{domxref("PushManager")}} interface returns a {{jsxref("Promise")}} that resolves to the `PushPermissionStatus` of the requesting webapp, which will be one of `granted`, `denied`, or `default`.

> [!NOTE]
> This feature has been superseded by the {{domxref("PushManager.permissionState()")}} method.

## Syntax

```js-nolint
hasPermission()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to the `PushPermissionStatus`.

## Examples

```js
// TBD
```

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}
