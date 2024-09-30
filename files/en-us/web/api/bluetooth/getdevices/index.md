---
title: "Bluetooth: getDevices() method"
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Bluetooth.getDevices
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`getDevices()`** method of the {{DOMxRef("Bluetooth")}} interface returns an array containing the Bluetooth devices that this origin is allowed to access — including those that are out of range and powered off.

## Syntax

```js-nolint
getDevices()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("BluetoothDevice")}} objects.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if this operation is not permitted in this context due to [security concerns](/en-US/docs/Web/API/Web_Bluetooth_API#security_considerations), such as being called when access to the current document is blocked by the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) directive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
