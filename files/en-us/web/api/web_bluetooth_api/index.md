---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Bluetooth
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Interfaces

- {{DOMxRef("Bluetooth")}}
  - : Provides methods to query Bluetooth availability and request access to devices.
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : Provides properties of a particular `BluetoothRemoteGATTCharacteristic`.
- {{DOMxRef("BluetoothDevice")}}
  - : Represents a Bluetooth device inside a particular script execution environment.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : Represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral's service.
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : Represents a GATT Descriptor, which provides further information about a characteristic's value.
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : Represents a GATT Server on a remote device.
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : Represents a service provided by a GATT server, including a device, a list of referenced services, and a list of the characteristics of this service.

## Extensions to other interfaces

The Bluetooth API extends the following APIs, adding the listed features.

### Navigator

- {{domxref("Navigator.bluetooth")}}
  - : Returns a {{domxref("Bluetooth")}} object for the current document, providing access to Web Bluetooth API functionality.

## Security considerations

The Web Bluetooth API can only be used in a secure context.

Access to the API is controlled by the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) directive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}}.
The default allowlist for the `bluetooth` policy is `self`, which enables Bluetooth usage in same-origin nested frames but prevents access by third-party content by default.
Cross-origin access is enabled by specifying the allowed origins in both the `Permissions-Policy: bluetooth` HTTP header and the desired `<iframe>`.

In order to use the feature the user must first grant explicit permission (they will not be prompted for access if it is not allowed for other reasons, such as being blocked by a Permissions Policy).
The permission prompt is displayed when calling {{domxref("Bluetooth.requestDevice()")}} to request access to a new Bluetooth device for which permission is not granted (the owning global object must also have {{glossary("transient activation")}}).
You can use {{domxref("Bluetooth.getDevices()")}} to retrieve any devices that have previously been granted permission for the site.

The [Permissions API](/en-US/docs/Web/API/Permissions_API) {{domxref("Permissions/query","navigator.permissions.query()")}} method can be used with the `bluetooth` permission to test whether a site has permission to use Bluetooth devices.
The permission state will be `granted`, `denied` or `prompt` (requires user acknowledgement of a prompt):

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- The section below is specification correct, but not implemented at time of writing: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
You can also use `query()` to directly retrieve devices that have previously been granted permission for the site.
For example, the following code (modified from the example in the specification) returns the last Bluetooth device that was used, and for which the user granted permission:

```js
const btPermission = await navigator.permissions.query({
  name: "bluetooth",
  deviceId: sessionStorage.lastDevice,
});
if (result.devices.length == 1) {
  return result.devices[0];
} else {
  throw new DOMException("Lost permission", "NotFoundError");
}
```

Note that the options that can be passed to `query()` for the `bluetooth` permission are the same as the options that can be passed as arguments to {{DOMxRef("Bluetooth.requestDevice()")}}.
The returned {{jsxref("Promise")}} resolves to a `BluetoothPermissionResult`, an extended {{domxref("PermissionStatus")}} object that returns an array of permitted devices in its `devices` property.
-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
