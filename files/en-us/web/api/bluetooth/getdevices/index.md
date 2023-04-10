---
title: "Bluetooth: getDevices() method"
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Bluetooth.getDevices
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

The **`getDevices()`** method of
{{DOMxRef("Bluetooth")}} interface of [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) exposes the
Bluetooth devices this origin is allowed to access. This method does not display any
permission prompts.

> **Note:** This method returns a {{DOMxRef("BluetoothDevice")}} for each
> device the origin is currently allowed to access, even the ones that are out of range
> or powered off.

## Syntax

```js-nolint
getDevices()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("BluetoothDevice")}}s.

## Exceptions

This method doesn't throw any exceptions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
